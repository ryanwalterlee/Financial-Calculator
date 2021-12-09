<template>
  <div class="incomeStatement">
    <table>
      <thead>
        <th colspan="2">Income Statement</th>
      </thead>
      <tbody>
        <tr v-for="stat in Object.keys(stats)" :key="stat">
          <td class="label">{{ stat }}</td>
          <td><input type="Number" @change="modifyIncomeStatement(stats[stat], $event.target.value)" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IncomeStatement',
  data: function() { 
          return {stats: {'Total Revenue': "TotalRevenue",
          'Gross Profit': "GrossProfit",
          'Selling, General and Admin': "SGA",
          'Research & Development': "RD",
          'Depreciation': "Depreciation",
          'Operating Income': "OperatingIncome",
          'Interest Expense': "InterestExpense",
          'Sale of Asset': "SaleOfAsset",
          'Net Earnings': "NetEarnings",}
          }      
  },
  methods: {
    modifyIncomeStatement: function (stat, n) {
      this.$store.commit("modifyIncomeStatement", {stat: stat, amount: n});
    }
  }
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