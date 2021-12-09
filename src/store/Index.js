import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    EPS: new Array(10).fill(0),
    PEratio: new Array(10).fill(0),
    TotalRevenue: 0,
    GrossProfit: 0,
    SGA: 0,
    RD: 0,
    Depreciation: 0,
    OperatingIncome: 0,
    InterestExpense: 0,
    SaleOfAsset: 0,
    NetEarnings: 0,
    LongTermDebt: 0,
    TotalLiabilities: 0,
    ShareholderEquity: 0,
    TreasuryStock: 0,
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
    modifyTotalRevenue(state, n) {state.TotalRevenue = n},
    modifyGrossProfit(state, n) {state.GrossProfit = n},
    modifySGA(state, n) {state.SGA = n},
    modifyRD(state, n) {state.RD = n},
    modifyDepreciation(state, n) {state.Depreciation = n},
    modifyOperatingIncome(state, n) {state.OperatingIncome = n},
    modifyInterestExpense(state, n) {state.InterestExpense = n},
    modifySaleOfAsset(state, n) {state.SaleOfAsset = n},
    modifyNetEarnings(state, n) {state.NetEarnings = n},
    modifyLongTermDebt(state, n) {state.LongTermDebt = n},
    modifyTotalLiabilities(state, n) {state.TotalLiabilities = n},
    modifyShareholderEquity(state, n) {state.ShareholderEquity = n},
    modifyTreasuryStock(state, n) {state.TreasuryStock = n},
    modifyCapitalExpenditure(state, n) {state.CapitalExpenditure = n},
    modifyCurrentMarketPrice(state, n) {state.CurrentMarketPrice = n},
  },

  getters: {
    EPS: state => state.EPS,
    PEratio: state => state.PEratio,
    TotalRevenue: state => state.TotalRevenue,
    GrossProfit: state => state.GrossProfit,
    SGA: state => state.SGA,
    RD: state => state.RD,
    Depreciation: state => state.Depreciation,
    OperatingIncome: state => state.OperatingIncome,
    InterestExpense: state => state.InterestExpense,
    SaleOfAsset: state => state.SaleOfAsset,
    NetEarnings: state => state.NetEarnings,
    LongTermDebt: state => state.LongTermDebt,
    TotalLiabilities: state => state.TotalLiabilities,
    ShareholderEquity: state => state.ShareholderEquity,
    TreasuryStock: state => state.TreasuryStock,
    CapitalExpenditure: state => state.CapitalExpenditure,
    CurrentMarketPrice: state => state.CurrentMarketPrice,
  }
})