import Vue from "vue";

export default {
  namespaced: true, // prevent methods going to global namespace
  state: {
    EPS: new Array(10).fill(0),
    PEratio: new Array(10).fill(0),
    IncomeStatement: {
      TotalRevenue: 0,
      GrossProfit: 0,
      SGA: 0,
      RD: 0,
      Depreciation: 0,
      OperatingIncome: 0,
      InterestExpense: 0,
      SaleOfAsset: 0,
      NetEarnings: 0,
    },
    BalanceSheet: {
      LongTermDebt: 0,
      TotalLiabilities: 0,
      ShareholderEquity: 0,
      TreasuryStock: 0,
    },
    CashFlowStatement: {
      CapitalExpenditure: 0,
    },
    CurrentMarketPrice: 0
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

    modifyCapitalExpenditure(state, payload) {
      Vue.set(state.CashFlowStatement, payload.stat, payload.amount);
    },
    modifyCurrentMarketPrice(state, n) { state.CurrentMarketPrice = n },
  },

  getters: {
    EPS: state => state.EPS,
    PEratio: state => state.PEratio,
    TotalRevenue: state => state.IncomeStatement.TotalRevenue,
    GrossProfit: state => state.IncomeStatement.GrossProfit,
    SGA: state => state.IncomeStatement.SGA,
    RD: state => state.IncomeStatement.RD,
    Depreciation: state => state.IncomeStatement.Depreciation,
    OperatingIncome: state => state.IncomeStatement.OperatingIncome,
    InterestExpense: state => state.IncomeStatement.InterestExpense,
    SaleOfAsset: state => state.IncomeStatement.SaleOfAsset,
    NetEarnings: state => state.IncomeStatement.NetEarnings,
    LongTermDebt: state => state.BalanceSheet.LongTermDebt,
    TotalLiabilities: state => state.BalanceSheet.TotalLiabilities,
    ShareholderEquity: state => state.BalanceSheet.ShareholderEquity,
    TreasuryStock: state => state.BalanceSheet.TreasuryStock,
    CapitalExpenditure: state => state.CashFlowStatement.CapitalExpenditure,
    CurrentMarketPrice: state => state.CurrentMarketPrice,
  }
}