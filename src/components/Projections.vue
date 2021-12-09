<template>
  <div class="projections">
    <table>
      <thead>
        <th colspan="2">Projections</th>
      </thead>
      <tbody>
        <tr v-for="projection in ProjectionMetrics" :key="projection">
          <td class="label">{{ projection }}</td>
          <td>{{ calcProjections[projection] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Projections",
  data: function () {
    return {
      ProjectionMetrics: [
        "EPS in 10 years",
        "Market Price in 10 years",
        "Max Market Price",
        "Min Market Price",
        "Annual Growth Rate",
        "Max Growth Rate",
        "Min Growth Rate",
      ],
    };
  },
  computed: {
    avgEPSgrowth: function() {
      const EPSarray = this.$store.getters.EPS;
      const firstEPS = EPSarray[0];
      const lastEPS = EPSarray[9];
      return ((firstEPS/lastEPS)**0.1) - 1;
    },
    avgPE: function() {
      const PEarray = this.$store.getters.PEratio;
      return (PEarray.reduce((x,y) => x + Number(y), 0)/PEarray.length).toFixed(2);
    },
    calc10yearEPS: function() {
      const firstEPS = this.$store.getters.EPS[0];
      return (((1 + this.avgEPSgrowth)**10)*firstEPS).toFixed(2);
    },
    calc10yearMarketPrice: function() {
      return (this.calc10yearEPS * this.avgPE).toFixed(2);
    },
    calcMaxMarketPrice: function() {
      return (this.calc10yearEPS * Math.max(...this.$store.getters.EPS)).toFixed(2);
    },
    calcMinMarketPrice: function() {
      return (this.calc10yearEPS * Math.min(...this.$store.getters.EPS)).toFixed(2);
    },
    getCurrentMarketPrice: function() {
      return this.$store.getters.CurrentMarketPrice;
    },
    calcAnnualGrowthRate: function() {
      return (((this.calc10yearMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
    },
    calcMaxGrowthRate: function() {      
      return (((this.calcMaxMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
    },
    calcMinGrowthRate: function() {
      return (((this.calcMinMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
    },
    calcProjections: function() {
      return {
        "EPS in 10 years": this.calc10yearEPS ? this.calc10yearEPS : "",
        "Market Price in 10 years": this.calc10yearMarketPrice ? this.calc10yearMarketPrice : "",
        "Max Market Price": this.calcMaxMarketPrice ? this.calcMaxMarketPrice : "",
        "Min Market Price": this.calcMinMarketPrice ? this.calcMinMarketPrice : "",
        "Annual Growth Rate": this.calcAnnualGrowthRate ? this.calcAnnualGrowthRate : "",
        "Max Growth Rate": this.calcMaxGrowthRate ? this.calcMaxGrowthRate : "",
        "Min Growth Rate": this.calcMinGrowthRate ? this.calcMinGrowthRate : "",
      }
    }
  }
};
</script>

<style scoped>
.projections {
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
  width:200px;
}
</style>
