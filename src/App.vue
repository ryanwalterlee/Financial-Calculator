<template>
  <div id="app">

      <Header class="header" message="Financial Calculator" />

      <!-- div container for inputs -->
      <div class="fundamentals">
        <Past10years/>
        <IncomeStatement/>
        <div class="balancecash">
          <BalanceSheet/>
          <CashFlowStatement/>
          <CurrentMarketPrice/>
        </div>
      </div>

      <!-- div container for results -->
      <div class="results">
        <Projections/>
        <FundamentalAnalysis/>
      </div>

  </div>
</template>

<script>
import store from './store/Index.js';
import Header from './components/Header.vue'
import Past10years from './components/Past10years.vue'
import IncomeStatement from './components/IncomeStatement.vue'
import BalanceSheet from './components/BalanceSheet.vue'
import CashFlowStatement from './components/CashFlowStatement.vue'
import CurrentMarketPrice from './components/CurrentMarketPrice.vue'
import Projections from './components/Projections.vue'
import FundamentalAnalysis from './components/FundamentalAnalysis'

export default {
  name: 'App',
  components: {
    Header,
    Past10years,
    IncomeStatement,
    BalanceSheet,
    CashFlowStatement,
    CurrentMarketPrice,
    Projections,
    FundamentalAnalysis
  },
  store,
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.fundamentals {
  display: flex;
  flex-direction: row; /* put statistics side by side */
  width: 100%;
  margin-top: 30px; /* add space from header */
  margin-bottom: 30px;
  justify-content: center; /* center in the webpage */

}

.balancecash {
  display: flex;
  flex-direction: column; /* stack balance on top of cash */
  }

.header {
  width: 100%; /* Enlarge header to full width */
}

.results {
  display: flex;
  flex-direction: row; /* put statistics side by side */
  width: 100%;
  margin-bottom: 30px;
  justify-content: center; /* center in the webpage */
}


</style>
