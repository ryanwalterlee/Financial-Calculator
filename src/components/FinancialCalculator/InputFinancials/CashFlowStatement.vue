<template>
  <div class="cashFlowStatement">
    <table>
      <thead>
        <th colspan="2">Cash Flow Statement</th>
      </thead>
      <tbody>
        <tr v-for="stat in Object.keys(stats)" :key="stat">
          <td class="label">{{ stat }}</td>
          <td><input 
            type="Number" 
            @change="modifyCashFlowStatement(stat, $event.target.value)"
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
  name: 'CashFlowStatement',
  data: function() { 
          return {
            stats: {'Capital Expenditure': "CapitalExpenditure"},

            inputFromAPI: {'Capital Expenditure': "",
          },
        }     
  },
  computed: {
    ...mapGetters("yahooFinance", [
      "getFinancials",
    ]),
  },
  methods: {
    modifyCashFlowStatement(stat, n) {
      this.$store.commit("calculations/modifyCashFlowStatement", {stat:stat, amount:n});
    }
  },
  watch: {
    getFinancials: function() {      
      for (let stat in this.inputFromAPI) {
        Vue.set(this.inputFromAPI, stat, this.getFinancials[this.stats[stat]]);
        this.modifyCashFlowStatement(this.stats[stat], this.inputFromAPI[stat]);
      }
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