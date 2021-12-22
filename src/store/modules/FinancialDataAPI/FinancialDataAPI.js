import Vue from "vue";
import axios from 'axios';

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
    CurrentMarketPrice: "",
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

    modifyCurrentMarketPrice(state, price) {
      state.CurrentMarketPrice = price;
    },

    modifyHistoricalPrices(state, object) {
      state.historicalDailyPrices = object;
    },

    clearAll(state) {
      state.EPS = new Array(10).fill("");
      state.PEratio = new Array(10).fill("");
      for (let stat in state.IncomeStatement) {
        state.IncomeStatement[stat] = "";
      }
      for (let stat in state.BalanceSheet) {
        state.BalanceSheet[stat] = "";
      }
      for (let stat in state.CashFlowStatement) {
        state.CashFlowStatement[stat] = "";
      }
      state.CurrentMarketPrice = "";
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
        "CurrentMarketPrice": state.CurrentMarketPrice,
      }
    },
    getHistoricalDailyPrices: state => {
      return state.historicalDailyPrices;
    }
  },

  actions: {
    async fetchFinancials({dispatch}, ticker) {
      dispatch("fetchIncomeStatement", ticker);
      dispatch("fetchBalanceSheet", ticker);
      dispatch("fetchCashFlowStatement", ticker);
      dispatch("fetchTenYearEPS", ticker);
      dispatch("fetchTenYearPE", ticker);
      dispatch("fetchCurrentMarketPrice", ticker);
    },

    async fetchIncomeStatement({ commit }, ticker) {
      const json = await axios.get(`https://financialmodelingprep.com/api/v3/income-statement/${ticker}?limit=120&apikey=2c7e3314ec7ada4cb9e9a34c7795506b`);
      const data = json.data[0];
      commit("modifyIncomeStatement", {stat: "TotalRevenue", amount: data.revenue});
      commit("modifyIncomeStatement", {stat: "GrossProfit", amount: data.grossProfit});
      commit("modifyIncomeStatement", {stat: "SGA", amount: data.sellingAndMarketingExpenses});
      commit("modifyIncomeStatement", {stat: "RD", amount: data.researchAndDevelopmentExpenses});
      commit("modifyIncomeStatement", {stat: "Depreciation", amount: data.depreciationAndAmortization});
      commit("modifyIncomeStatement", {stat: "OperatingIncome", amount: data.operatingIncome});
      commit("modifyIncomeStatement", {stat: "InterestExpense", amount: data.interestExpense});
      commit("modifyIncomeStatement", {stat: "NetEarnings", amount: data.netIncome});
    },

    async fetchBalanceSheet({commit}, ticker) {
      const json = await axios.get(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${ticker}?limit=120&apikey=2c7e3314ec7ada4cb9e9a34c7795506b`);
      const data = json.data[0];
      commit("modifyBalanceSheet", {stat: "LongTermDebt", amount: data.longTermDebt});
      commit("modifyBalanceSheet", {stat: "TotalLiabilities", amount: data.totalLiabilities});
      commit("modifyBalanceSheet", {stat: "ShareholderEquity", amount: data.totalStockholdersEquity});
    },

    async fetchCashFlowStatement({commit}, ticker) {
      const json = await axios.get(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${ticker}?limit=120&apikey=2c7e3314ec7ada4cb9e9a34c7795506b`)
      const data = json.data[0];
      console.log(json);
      commit("modifyCashFlowStatement", {stat: "CapitalExpenditure", amount: data.capitalExpenditure});
    },

    async fetchCurrentMarketPrice({commit}, ticker) {
      const json = await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${ticker}?apikey=2c7e3314ec7ada4cb9e9a34c7795506b`)
      const data = json.data[0];
      commit("modifyCurrentMarketPrice", data.price);
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
  }
}