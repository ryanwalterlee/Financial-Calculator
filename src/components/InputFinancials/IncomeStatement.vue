<template>
  <div class="incomeStatement">
    <table>
      <thead>
        <th colspan="2">Income Statement</th>
      </thead>
      <tbody>
        <tr v-for="stat in Object.keys(stats)" :key="stat">
          <td class="label">{{ stat }}</td>
          <td><input
            type="Number"
            @change="modifyIncomeStatement(stats[stat], $event.target.value)"
            :value="inputFromAPI[stat]"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";

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
          'Net Earnings': "NetEarnings",},

          // maintain data object from API, binded with v-model
          inputFromAPI: {'Total Revenue': "",
          'Gross Profit': "",
          'Selling, General and Admin': "",
          'Research & Development': "",
          'Depreciation': "",
          'Operating Income': "",
          'Interest Expense': "",
          'Sale of Asset': "",
          'Net Earnings': "",}
          }      
  },
  computed: {
    ...mapGetters("yahooFinance", [
      "getFinancials",
    ]),
  },
  methods: {
    modifyIncomeStatement: function (stat, n) {
      this.$store.commit("calculations/modifyIncomeStatement", {stat: stat, amount: n});
    },
  },
  watch: {

    // watch for changes in computed property 
    // updates data object accordingly
    getFinancials: function() {      
      for (let stat in this.inputFromAPI) {
        Vue.set(this.inputFromAPI, stat, this.getFinancials[this.stats[stat]]);

        // required because change in v-model does not trigger @change event
        this.modifyIncomeStatement(this.stats[stat], this.inputFromAPI[stat]);
      }
    },
  }
}

</script>

<style scoped>
.incomeStatement {
  margin-left: 10px;
  margin-right:10px;
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