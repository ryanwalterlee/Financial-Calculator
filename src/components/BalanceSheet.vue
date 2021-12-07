<template>
    <FinancialStatement name="BalanceSheet" :listOfStats="stats" />
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