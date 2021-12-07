<template>
    <FinancialStatement name="Cash Flow Statement" :listOfStats="stats" />
</template>

<script>
import FinancialStatement from './FinancialStatement.vue'

export default {
  name: 'CashFlowStatement',
  components: {
      FinancialStatement
  },
  data: function() { 
          return {stats: ['Capital Expenditure']}     
  },
}

</script>