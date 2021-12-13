import Vue from "vue";
import axios from 'axios';

export default {
  namespaced: true, // prevent methods going to global namespace
  state: {
    // EPS: new Array(10).fill(0),
    // PEratio: new Array(10).fill(0),
    IncomeStatement: {
      TotalRevenue: "",
      GrossProfit: "",
      SGA: "",
      RD: "",
      Depreciation: "",
      OperatingIncome: "",
      InterestExpense: "",
      SaleOfAsset: "",
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
  },

  mutations: {
    // modifyEPS(state, payload) {
    //   state.EPS.splice(payload.position, 1, payload.amount);
    // },
    // modifyPEratio(state, payload) {
    //   state.PEratio.splice(payload.position, 1, payload.amount);
    // },
    modifyIncomeStatement(state, payload) {
      Vue.set(state.IncomeStatement, payload.stat, payload.amount);
    },

    modifyBalanceSheet(state, payload) {
      Vue.set(state.BalanceSheet, payload.stat, payload.amount);
    },

    modifyCashFlowStatement(state, payload) {
      Vue.set(state.CashFlowStatement, payload.stat, payload.amount);
    },
  },

  getters: {
    getFinancials: state => {
      return {
        "TotalRevenue": state.IncomeStatement.TotalRevenue,
        "GrossProfit": state.IncomeStatement.GrossProfit,
        "SGA": state.IncomeStatement.SGA,
        "RD": state.IncomeStatement.RD,
        "Depreciation": state.IncomeStatement.Depreciation,
        "OperatingIncome": state.IncomeStatement.OperatingIncome,
        "InterestExpense": state.IncomeStatement.InterestExpense,
        "SaleOfAsset": state.IncomeStatement.SaleOfAsset,
        "NetEarnings": state.IncomeStatement.NetEarnings,
        "LongTermDebt": state.BalanceSheet.LongTermDebt,
        "TotalLiabilities": state.BalanceSheet.TotalLiabilities,
        "ShareholderEquity": state.BalanceSheet.ShareholderEquity,
        "TreasuryStock": state.BalanceSheet.TreasuryStock,
        "CapitalExpenditure": state.CashFlowStatement.CapitalExpenditure,
      }
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

      
    }
  }
}