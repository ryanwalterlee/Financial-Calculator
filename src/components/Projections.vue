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
import { mapGetters } from "vuex";

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
    ...mapGetters([
      "EPS",
      "PEratio",
    ]),
    avgEPSgrowth: function() {
      const EPSarray = this.EPS;
      const firstEPS = EPSarray[0];
      const lastEPS = EPSarray[9];
      return ((firstEPS/lastEPS)**0.1) - 1;
    },
    avgPE: function() {
      const PEarray = this.PEratio;
      return (PEarray.reduce((x,y) => x + Number(y), 0)/PEarray.length).toFixed(2);
    },
    calc10yearEPS: function() {
      const firstEPS = this.EPS[0];
      if (firstEPS && this.avgEPSgrowth) {
        return (((1 + this.avgEPSgrowth)**10)*firstEPS).toFixed(2);
      } else {
        return "";
      }
      
    },
    calc10yearMarketPrice: function() {
      if (this.calc10yearEPS && this.avgPE) {
        return (this.calc10yearEPS * this.avgPE).toFixed(2);
      } else {
        return "";
      }
    },
    calcMaxMarketPrice: function() {
      if (this.calc10yearEPS && !this.EPS.includes(0)) {
        return (this.calc10yearEPS * Math.max(...this.EPS)).toFixed(2);
      } else {
        return "";
      }
    },
    calcMinMarketPrice: function() {
      if (this.calc10yearEPS && !this.EPS.includes(0)) {
        return (this.calc10yearEPS * Math.min(...this.EPS)).toFixed(2);
      } else {
        return "";
      }
    },
    getCurrentMarketPrice: function() {
      return this.CurrentMarketPrice;     
    },
    calcAnnualGrowthRate: function() {
      if (this.calc10yearMarketPrice && this.getCurrentMarketPrice) {
        return (((this.calc10yearMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
      } else {
        return "";
      }
    },
    calcMaxGrowthRate: function() {
      if (this.calcMaxMarketPrice && this.getCurrentMarketPrice) {
        return (((this.calcMaxMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
      } else {
        return "";
      }
    },
    calcMinGrowthRate: function() {
      if (this.calcMinMarketPrice && this.getCurrentMarketPrice) {
        return (((this.calcMinMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
      } else {
        return "";
      }
    },
    calcProjections: function() {
      return {
        "EPS in 10 years": this.calc10yearEPS,
        "Market Price in 10 years": this.calc10yearMarketPrice,
        "Max Market Price": this.calcMaxMarketPrice,
        "Min Market Price": this.calcMinMarketPrice,
        "Annual Growth Rate": this.calcAnnualGrowthRate,
        "Max Growth Rate": this.calcMaxGrowthRate,
        "Min Growth Rate": this.calcMinGrowthRate,
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
