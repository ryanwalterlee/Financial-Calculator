import Vue from "vue";
import axios from 'axios';
var yahooFinance = require('yahoo-finance');

export default {
  namespaced: true, // prevent methods going to global namespace
  state: {
    EPS: new Array(10).fill(0),
    PEratio: new Array(10).fill(0),
    IncomeStatement: {
      TotalRevenue: "",
      GrossProfit: "",
      SGA: "",
      RD: "",
      Depreciation: "",
      OperatingIncome: "",
      InterestExpense: "",
      NetEarnings: "",
    },
    BalanceSheet: {
      LongTermDebt: "",
      TotalLiabilities: "",
      ShareholderEquity: "",
      TreasuryStock: "",
    },
    CashFlowStatement: {
      CapitalExpenditure: "",
    },
    historicalDailyPrices: {},
  },

  mutations: {
    modifyEPS(state, payload) {
      state.EPS.splice(payload.position, 1, payload.amount);
    },
    modifyPEratio(state, payload) {
      state.PEratio.splice(payload.position, 1, payload.amount);
    },
    modifyIncomeStatement(state, payload) {
      Vue.set(state.IncomeStatement, payload.stat, payload.amount);
    },

    modifyBalanceSheet(state, payload) {
      Vue.set(state.BalanceSheet, payload.stat, payload.amount);
    },

    modifyCashFlowStatement(state, payload) {
      Vue.set(state.CashFlowStatement, payload.stat, payload.amount);
    },
    modifyHistoricalPrices(state, object) {
      state.historicalDailyPrices = object;
    }
  },

  getters: {
    getHistoricData: state => {
      return {
        "EPS": state.EPS,
        "PEratio": state.PEratio,
      }
    },
    getFinancials: state => {
      return {
        "TotalRevenue": state.IncomeStatement.TotalRevenue,
        "GrossProfit": state.IncomeStatement.GrossProfit,
        "SGA": state.IncomeStatement.SGA,
        "RD": state.IncomeStatement.RD,
        "Depreciation": state.IncomeStatement.Depreciation,
        "OperatingIncome": state.IncomeStatement.OperatingIncome,
        "InterestExpense": state.IncomeStatement.InterestExpense,
        "NetEarnings": state.IncomeStatement.NetEarnings,
        "LongTermDebt": state.BalanceSheet.LongTermDebt,
        "TotalLiabilities": state.BalanceSheet.TotalLiabilities,
        "ShareholderEquity": state.BalanceSheet.ShareholderEquity,
        "TreasuryStock": state.BalanceSheet.TreasuryStock,
        "CapitalExpenditure": state.CashFlowStatement.CapitalExpenditure,
      }
    },
    getHistoricalDailyPrices: state => {
      return state.historicalDailyPrices;
    }
  },

  actions: {
    async fetchFinancials({ commit }, ticker) {
      const json = await axios.get(`https://api.polygon.io/vX/reference/financials?ticker=${ticker}&timeframe=annual&apiKey=CrqPc8_kJXGuQASIWk3n7ctrvm0EPtrl`);
      const data = await json.data;
      const financials = await data.results[0].financials;
      const incomeStatement = await financials.income_statement;
      const balanceSheet = await financials.balance_sheet;
      // const cashFlowStatement = await financials.cash_flow_statement;

      commit("modifyIncomeStatement", {stat: "TotalRevenue", amount: incomeStatement.revenues.value});
      commit("modifyIncomeStatement", {stat: "GrossProfit", amount: incomeStatement.gross_profit.value});
      commit("modifyIncomeStatement", {stat: "OperatingIncome", amount: incomeStatement.operating_income_loss.value});
      commit("modifyIncomeStatement", {stat: "InterestExpense", amount: incomeStatement.interest_expense_operating.value});
      commit("modifyIncomeStatement", {stat: "NetEarnings", amount: incomeStatement.net_income_loss.value});
      commit("modifyBalanceSheet", {stat: "LongTermDebt", amount: balanceSheet.noncurrent_liabilities.value});
      commit("modifyBalanceSheet", {stat: "TotalLiabilities", amount: balanceSheet.liabilities.value});
      commit("modifyBalanceSheet", {stat: "ShareholderEquity", amount: balanceSheet.equity.value});     
    },

    async fetchTenYearEPS({ commit }, ticker) {
      const json = await axios.get(`https://financial-webscraping-api.herokuapp.com/eps?ticker=${ticker}`);
      const EPSarray = json.data.eps;
      for (let i = 0; i < 10; i++) {
        commit("modifyEPS", {position: i, amount: EPSarray[i]});
      }
    },

    async fetchTenYearPE({ commit }, ticker) {
      const json = await axios.get(`https://financial-webscraping-api.herokuapp.com/pe?ticker=${ticker}`);
      const PEarray = json.data.pe;
      for (let i = 0; i < 10; i++) {
        commit("modifyPEratio", {position: i, amount: PEarray[i]})
      }
    },

    async fetchHistoricPrices({ commit }, ticker) {
      console.log("fetching");
      var today = new Date();
      var dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var date1YearAgo = (today.getFullYear()-1)+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const historicalDailyPrices = yahooFinance.historical({
        symbol: ticker,
        from: date1YearAgo,
        to: dateToday,
        period: 'd',
      })
      let historicalDailyPricesCleaned = {}
      for (let dailyRecords in historicalDailyPrices) {
        historicalDailyPricesCleaned[dailyRecords.date] = historicalDailyPrices.close
      }
      console.log(historicalDailyPricesCleaned);
      commit('modifyHistoricalPrices', historicalDailyPricesCleaned);
    }
  }
}