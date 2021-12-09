<template>
  <div class="balanceSheet">
    <table>
      <thead>
        <th colspan="2">Balance Sheet</th>
      </thead>
      <tbody>
        <tr v-for="stat in Object.keys(stats)" :key="stat">
          <td class="label">{{ stat }}</td>
          <td>
            <input type="Number" @change="modifyBalanceSheet(stats[stat], $event.target.value)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BalanceSheet',
  data: function() { 
          return {stats: {'Long Term Debt': "LongTermDebt",
          'Total Liabilities': "TotalLiabilities",
          'Shareholders\'s Equity': "ShareholderEquity",
          'Treasury Stock': "TreasuryStock"}
          }      
  },
  methods: {
    modifyBalanceSheet: function(stat, n) {
      this.$store.commit("modifyBalanceSheet", {stat:stat, amount:n});
    }
  }
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