<template>
  <div class="cashFlowStatement">
    <table>
      <thead>
        <th colspan="2">Cash Flow Statement</th>
      </thead>
      <tbody>
        <tr v-for="stat in Object.keys(stats)" :key="stat">
          <td class="label">{{ stat }}</td>
          <td><input type="Number" @change="modifyCapitalExpenditure(stats[stat], $event.target.value)"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CashFlowStatement',
  data: function() { 
          return {
            stats: {'Capital Expenditure': "CapitalExpenditure"}
          }     
  },
  methods: {
    modifyCapitalExpenditure(stat, n) {
      this.$store.commit("modifyCapitalExpenditure", {stat:stat, amount:n});
    }
  }
}

</script>

<style scoped>
.cashFlowStatement {
  margin-left: 10px;
  margin-right: 10px;
  margin-top :10px;
  margin-bottom: 10px;
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