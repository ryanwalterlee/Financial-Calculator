export default [
  {
    path: "/",
    name: "home",
    component: () => import("../components/FinancialCalculator/FinancialCalculator.vue"),
  },
  {
    path: "/predictions",
    name: "predictions",
    component: () => import("../components/TimeSeriesModel/TimeSeries.vue")
  }
]