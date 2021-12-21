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
            <input 
              type="Number"
              @change="modifyBalanceSheet(stat, $event.target.value)"
              :value="inputFromAPI[stat]"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: 'BalanceSheet',
  data: function() { 
          return {stats: {'Long Term Debt': "LongTermDebt",
          'Total Liabilities': "TotalLiabilities",
          'Shareholders\'s Equity': "ShareholderEquity",
          'Treasury Stock': "TreasuryStock"},

          inputFromAPI: {'Long Term Debt': "",
          'Total Liabilities': "",
          'Shareholders\'s Equity': "",
          'Treasury Stock': "",
          },
        }      
  },
  computed: {
    ...mapGetters("yahooFinance", [
      "getFinancials",
    ]),
  },
  methods: {
    modifyBalanceSheet: function(stat, n) {
      this.$store.commit("calculations/modifyBalanceSheet", {stat:stat, amount:n});
    }
  },
  watch: {
    getFinancials: function() {      
      for (let stat in this.inputFromAPI) {
        Vue.set(this.inputFromAPI, stat, this.getFinancials[this.stats[stat]]);
        this.modifyBalanceSheet(this.stats[stat], this.inputFromAPI[stat]);
      }
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