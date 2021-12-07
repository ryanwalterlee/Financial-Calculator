<template>
  <div id="app">
    <h1>Financial Calculator</h1>
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
import Past10years from './components/Past10years.vue'
import IncomeStatement from './components/IncomeStatement.vue'
import BalanceSheet from './components/BalanceSheet.vue'
import CashFlowStatement from './components/CashFlowStatement.vue'

export default {
  name: 'App',
  components: {
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
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.fundamentals {
  display: flex;
  flex-direction: row;
}

.balancecash {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  }

td {
  white-space:nowrap;
}

</style>
