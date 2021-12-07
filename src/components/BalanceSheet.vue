<template>
    <FinancialStatement class="balanceSheet" name="BalanceSheet" :listOfStats="stats" />
</template>

<script>
import FinancialStatement from './FinancialStatement.vue'

export default {
  name: 'BalanceSheet',
  components: {
      FinancialStatement
  },
  data: function() { 
          return {stats: ['Long Term Debt',
          'Total Liabilities',
          'Shareholders\'s Equity',
          'Treasury Stock']}      
  },
}

</script>

<style scoped>
.balanceSheet {
  margin-left: 10px;
  margin-right:10px;
  margin-bottom: 40px;
}
</style>