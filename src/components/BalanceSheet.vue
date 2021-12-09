<template>
  <div class="balanceSheet">
    <table>
      <thead>
        <th colspan="2">Balance Sheet</th>
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
  name: 'BalanceSheet',
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
  margin-bottom:10px;
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