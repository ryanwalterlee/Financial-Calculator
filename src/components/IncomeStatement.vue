<template>
    <FinancialStatement name="Income Statement" :listOfStats="stats" />
</template>

<script>
import FinancialStatement from './FinancialStatement.vue'

export default {
  name: 'IncomeStatement',
  components: {
      FinancialStatement
  },
  data: function() { 
          return {stats: ['Total Revenue',
        'Gross Profit',
        'Selling, General and Admin',
        'Research & Development',
        'Depreciation',
        'Operating Income',
        'Interest Expense',
        'Sale of Asset',
        'Net Earnings']}      
  },
}

</script>