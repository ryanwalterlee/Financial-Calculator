<template>
  <div class="projections">
    <table>
      <thead>
        <th colspan="2">Projections</th>
      </thead>
      <tbody>
        <tr v-for="projection in ProjectionMetrics" :key="projection">
          <td class="label" :class="calcProjections[projection][1]">{{ projection }}</td>
          <td :class="calcProjections[projection][1]">{{ calcProjections[projection][0] }}</td>
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
    ...mapGetters("calculations", [
      "EPS",
      "PEratio",
      "CurrentMarketPrice"
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
        const result = (((1 + this.avgEPSgrowth)**10)*firstEPS).toFixed(2);
        
        return [result, ""];
      } else {
        return ["",""];
      }
      
    },
    calc10yearMarketPrice: function() {
      if (this.calc10yearEPS[0] && this.avgPE) {
        const result = (this.calc10yearEPS[0] * this.avgPE).toFixed(2);
        return result;
      } else {
        return "";
      }
    },
    calcMaxMarketPrice: function() {
      if (this.calc10yearEPS[0] && !this.EPS.includes(0)) {
        const result = (this.calc10yearEPS[0] * Math.max(...this.PEratio)).toFixed(2);
        return result;
      } else {
        return "";
      }
    },
    calcMinMarketPrice: function() {
      if (this.calc10yearEPS[0] && !this.EPS.includes(0)) {
        const result = (this.calc10yearEPS[0] * Math.min(...this.PEratio)).toFixed(2);
        return result;
      } else {
        return "";
      }
    },
    getCurrentMarketPrice: function() {
      return this.CurrentMarketPrice;     
    },
    calcAnnualGrowthRate: function() {
      console.log(this.getCurrentMarketPrice)
      if (this.calc10yearMarketPrice && this.getCurrentMarketPrice) {
        const result = (((this.calc10yearMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
        let color = "yellow";
        if (result > 0.05) {color = "green"}
        else if (result < 0.02) {color = "red"}
        return [result, color]
      } else {
        return ["",""];
      }
    },
    calcMaxGrowthRate: function() {
      if (this.calcMaxMarketPrice && this.getCurrentMarketPrice) {
        const result = (((this.calcMaxMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
        let color = "yellow";
        if (result > 0.08) {color = "green"}
        else if (result < 0.05) {color = "red"}
        return [result, color]
      } else {
        return ["",""];
      }
    },
    calcMinGrowthRate: function() {
      if (this.calcMinMarketPrice && this.getCurrentMarketPrice) {
        const result = (((this.calcMinMarketPrice/this.getCurrentMarketPrice)**0.1)-1).toFixed(2);
        let color = "yellow";
        if (result > 0.02) {color = "green"}
        else if (result < 0) {color = "red"}
        return [result, color]
      } else {
        return ["",""];
      }
    },
    calcProjections: function() {
      return {
        "EPS in 10 years": this.calc10yearEPS,
        "Market Price in 10 years": [this.calc10yearMarketPrice, this.calcAnnualGrowthRate[1]],
        "Max Market Price": [this.calcMaxMarketPrice, this.calcMaxGrowthRate[1]],
        "Min Market Price": [this.calcMinMarketPrice, this.calcMinGrowthRate[1]],
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
  width:200px;
}

/* next 3 styles for styling results depending on how good results are */
.green {
  color: rgb(0, 168, 90);
}

.red {
  color: red;
}

.yellow {
  color: rgb(255, 230, 0);
}
</style>
