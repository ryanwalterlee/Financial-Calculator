import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
    CapitalExpenditure: 0,
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
      console.log(state.IncomeStatement);
      Vue.set(state.IncomeStatement, payload.stat, payload.amount); 
    },
    // modifyTotalRevenue(state, n) {Vue.set(state.IncomeStatement, "TotalRevenue", n)},
    // modifyGrossProfit(state, n) {Vue.set(state.IncomeStatement, "GrossProfit",n)},
    // modifySGA(state, n) {Vue.set(state.IncomeStatement, "SGA", n)},
    // modifyRD(state, n) {Vue.set(state.IncomeStatement, "RD", n)},
    // modifyDepreciation(state, n) {Vue.set(state.IncomeStatement, "Depreciation", n)},
    // modifyOperatingIncome(state, n) {Vue.set(state.IncomeStatement, "OperatingIncome", n)},
    // modifyInterestExpense(state, n) {Vue.set(state.IncomeStatement, "InterestExpense", n)},
    // modifySaleOfAsset(state, n) {Vue.set(state.IncomeStatement, "SaleOfAsset", n)},
    // modifyNetEarnings(state, n) {Vue.set(state.IncomeStatement, "NetEarnings", n)},
    modifyBalanceSheet(state, payload) {
      Vue.set(state.BalanceSheet, payload.stat, payload.amount);
    },
    // modifyLongTermDebt(state, n) {Vue.set(state.BalanceSheet, "LongTermDebt",n)},
    // modifyTotalLiabilities(state, n) {Vue.set(state.BalanceSheet, "TotalLiabilities", n)},
    // modifyShareholderEquity(state, n) {Vue.set(state.BalanceSheet, "ShareholderEquity", n)},
    // modifyTreasuryStock(state, n) {Vue.set(state.BalanceSheet, "TreasuryStock", n)},
    modifyCapitalExpenditure(state, n) {state.CapitalExpenditure, n},
    modifyCurrentMarketPrice(state, n) {state.CurrentMarketPrice, n},
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
    CapitalExpenditure: state => state.CapitalExpenditure,
    CurrentMarketPrice: state => state.CurrentMarketPrice,
  }
})