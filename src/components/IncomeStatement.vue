<template>
  <div class="incomeStatement">
    <table>
      <thead>
        <th colspan="2">Income Statement</th>
      </thead>
      <tbody>
        <tr v-for="stat in stats" :key="stat">
          <td class="label">{{ stat }}</td>
          <td><input type="Number"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IncomeStatement',
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

<style scoped>
.incomeStatement {
  margin-left: 10px;
  margin-right:10px;
}

input {
  width: 50%;
  border: hidden;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

table {
  width: 300px;
}

.label {
  width:150px;
}
</style>