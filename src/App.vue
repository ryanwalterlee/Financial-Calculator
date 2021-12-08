<template>
  <div id="app">

      <Header class="header" message="Financial Calculator" />
      <div class="fundamentals">
        <Past10years/>
        <IncomeStatement/>
        <div class="balancecash">
          <BalanceSheet/>
          <CashFlowStatement/>
        </div>
      </div>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Past10years from './components/Past10years.vue'
import IncomeStatement from './components/IncomeStatement.vue'
import BalanceSheet from './components/BalanceSheet.vue'
import CashFlowStatement from './components/CashFlowStatement.vue'

export default {
  name: 'App',
  components: {
    Header,
    Past10years,
    IncomeStatement,
    BalanceSheet,
    CashFlowStatement,
  }
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


</style>
