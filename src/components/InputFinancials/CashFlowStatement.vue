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
  width: 90%;
  border: hidden;
  background-color: rgb(51, 51, 51);
  color: white;
  text-align: center; /* input cursor in the center */
}

table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}

th {
  color: rgb(201, 201, 201);
}

table {
  width: 300px;
  background-color: rgb(51, 51, 51);
  color: white;
  border-radius:10px;
}

.label {
  width:150px;
}

/* remove spinner */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input:focus{
  outline: none; /* remove border outline when input in focus */
}
</style>