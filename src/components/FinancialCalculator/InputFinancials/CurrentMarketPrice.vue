<template>
  <div class="currentMarketPrice">
    <table>
      <thead>
        <th colspan="2">Current Market Price</th>
      </thead>
      <tbody>
        <tr v-for="stat in Object.keys(stats)" :key="stat">
          <td class="label">{{ stat }}</td>
          <td><input type="Number"
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
  name: "CurrentMarketPrice",
  data: function () {
    return {
      stats: {"Current Market Price": "CurrentMarketPrice"},
      inputFromAPI: {"Current Market Price": ""}
    };
  },
  computed: {
    ...mapGetters("FinancialDataAPI", [
      "getFinancials",
    ]),
  },
  watch: {
    getFinancials: function() {
      for (let stat in this.inputFromAPI) {
        Vue.set(this.inputFromAPI, stat, this.getFinancials[this.stats[stat]]);
      }
    }
  }
}
</script>

<style scoped>
.currentMarketPrice {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
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
