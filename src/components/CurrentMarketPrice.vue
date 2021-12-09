<template>
  <div class="currentMarketPrice">
    <table>
      <thead>
        <th colspan="2">Current Market Price</th>
      </thead>
      <tbody>
        <tr v-for="stat in stats" :key="stat">
          <td class="label">{{ stat }}</td>
          <td><input type="Number" @change="modifyCurrentMarketPrice($event.target.value)"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CurrentMarketPrice",
  data: function () {
    return {
      stats: ["Current Market Price"],
    };
  },
  methods: {
    modifyCurrentMarketPrice: function(n) {
      this.$store.commit("modifyCurrentMarketPrice", n);
    }
  }
};
</script>

<style scoped>
.currentMarketPrice {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
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
