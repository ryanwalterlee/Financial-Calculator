<template>
  <div class="fundamentalAnalysis">
    <table>
      <thead>
        <th colspan="2">Fundamental Analysis</th>
      </thead>
      <tbody>
        <tr v-for="ratio in Ratios" :key="ratio">
          <td class="label" :class="calcFundamentalAnalysis[ratio][1]">{{ ratio }}</td>
          <td class="result"
            :class="calcFundamentalAnalysis[ratio][1]">
            {{ calcFundamentalAnalysis[ratio][0] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Projections",
  data: function () {
    return {
      Ratios: [
        "Gross Profit Margin",
        "% SGA out of Gross Profit",
        "% R&D out of Gross Profit",
        "% Depreciation out of Gross Profit",
        "Interest Expense out of Operating Income",
        "Profit Margin",
        "% Long Term Debt out of Net Earnings",
        "Adjusted Debt to Shareholder Equity Ratio",
        "Return on Equity",
        "% of Capital Expenditure in Net Earnings"
      ],
    };
  },
  computed: {
    ...mapGetters("calculations", [
      "TotalRevenue",
      "GrossProfit",
      "SGA",
      "RD",
      "Depreciation",
      "OperatingIncome",
      "InterestExpense",
      "SaleOfAsset",
      "NetEarnings",
      "LongTermDebt",
      "TotalLiabilities",
      "ShareholderEquity",
      "TreasuryStock",
      "CapitalExpenditure",
    ]),
    calcGrossProfitMargin: function() {
      if (this.GrossProfit && this.TotalRevenue) {
        const result = (this.GrossProfit / this.TotalRevenue).toFixed(2);
        let color;
        if (result >= 0.4) {color = "green"} 
        else if (result < 0.3) {color = "red"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcPercentageSGA: function() {
      if (this.SGA && this.GrossProfit) {
        const result = (this.SGA / this.GrossProfit).toFixed(2);
        let color;
        if (result >= 0.6) {color = "red"} 
        else if (result < 0.3) {color = "green"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcPercentageRD: function() {
      if (this.RD && this.GrossProfit) {
        const result = (this.RD / this.GrossProfit).toFixed(2);
        let color;
        if (result >= 0.5) {color = "red"} 
        else if (result < 0.3) {color = "green"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcPercentageDepreciation: function() {
      if (this.Depreciation && this.GrossProfit) {
        const result = (this.Depreciation / this.GrossProfit).toFixed(2);
        let color;
        if (result >= 0.2) {color = "red"} 
        else if (result < 0.1) {color = "green"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcInterestExpenseOfOperatingIncome: function() {
      if (this.InterestExpense && this.OperatingIncome) {
        const result = (this.InterestExpense / this.OperatingIncome).toFixed(2);
        let color;
        if (result >= 0.3) {color = "red"} 
        else if (result < 0.1) {color = "green"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcProfitMargin: function() {
      if (this.NetEarnings && this.TotalRevenue) {
        const result = (this.NetEarnings / this.TotalRevenue).toFixed(2);
        let color;
        if (result >= 0.2) {color = "green"} 
        else if (result < 0.1) {color = "red"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcLongTermDebtToNetEarnings: function() {
      if (this.LongTermDebt && this.NetEarnings) {
        const result = (this.LongTermDebt / this.NetEarnings).toFixed(2);
        let color;
        if (result >= 8) {color = "red"}
        else if (result < 4) {color = "green"}
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcAdjDebtToEquity: function() {
      if (this.TotalLiabilities && (this.ShareholderEquity || this.TreasuryStock)) {
        const result = (this.TotalLiabilities / (this.ShareholderEquity + this.TreasuryStock)).toFixed(2);
        let color;
        if (result >= 1.5) {color = "red"}
        else if (result < 0.8) {color = "green"}
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcReturnOnEquity: function() {
      if (this.NetEarnings && this.ShareholderEquity) {
        const result = (this.NetEarnings / this.ShareholderEquity).toFixed(2);
        let color;
        if (result >= 0.2) {color = "green"} 
        else if (result < 0.1) {color = "red"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    calcPercentageCapitalExpenditure: function() {
      if (this.CapitalExpenditure && this.NetEarnings) {
        const result = (this.CapitalExpenditure / this.NetEarnings).toFixed(2);
        let color;
        if (result >= 0.5) {color = "red"} 
        else if (result < 0.3) {color = "green"} 
        else {color = "yellow"}
        return [result, color];
      } else {
        return ["", ""];
      }
    },
    // returns an object with all the mappings of label: results based on inputs
    // each property contains a 2 element array [result, color]
    // result: actual calculation
    // color: color of the table data based on the calculated result 
    // in increasing order of financial strength: (red, yellow, green)
    calcFundamentalAnalysis: function() {
      return {
        "Gross Profit Margin": this.calcGrossProfitMargin, 
        "% SGA out of Gross Profit": this.calcPercentageSGA,
        "% R&D out of Gross Profit": this.calcPercentageRD,
        "% Depreciation out of Gross Profit": this.calcPercentageDepreciation,
        "Interest Expense out of Operating Income": this.calcInterestExpenseOfOperatingIncome,
        "Profit Margin": this.calcProfitMargin,
        "% Long Term Debt out of Net Earnings": this.calcLongTermDebtToNetEarnings,
        "Adjusted Debt to Shareholder Equity Ratio": this.calcAdjDebtToEquity,
        "Return on Equity": this.calcReturnOnEquity,
        "% of Capital Expenditure in Net Earnings": this.calcPercentageCapitalExpenditure,
      }
    },
  }
};
</script>

<style scoped>
.fundamentalAnalysis {
  margin-left: 10px;
  margin-right:10px;
  margin-bottom: 30px;
}

table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}

th {
  color: rgb(201, 201, 201);
}

table {
  /* width: 400px; */
  background-color: rgb(51, 51, 51);
  color: white;
  border-radius:10px;
}

/* .label {
  width:320px;
} */

.result {
  min-width: 50px;
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