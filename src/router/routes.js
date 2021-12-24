export default [
  {
    path: "/",
    name: "home",
    component: () => import("../components/FinancialCalculator/FinancialCalculator.vue"),
  },
  {
    path: "/prices",
    name: "prices",
    component: () => import("../components/StockPriceChart/StockPriceChart.vue")
  }
]