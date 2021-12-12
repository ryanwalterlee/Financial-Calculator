<template>
  <div class="fundamentalAnalysis">
    <table>
      <thead>
        <th colspan="2">Fundamental Analysis</th>
      </thead>
      <tbody>
        <tr v-for="ratio in Ratios" :key="ratio">
          <td class="label">{{ ratio }}</td>
          <td>{{ calcFundamentalAnalysis[ratio] }}</td>
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
        return (this.GrossProfit / this.TotalRevenue).toFixed(2);
      } else {
        return "";
      }
    },
    calcPercentageSGA: function() {
      if (this.SGA && this.calcGrossProfitMargin) {
        return (this.SGA / this.calcGrossProfitMargin).toFixed(2);
      } else {
        return "";
      }
    },
    calcPercentageRD: function() {
      if (this.RD && this.calcGrossProfitMargin) {
        return (this.RD / this.calcGrossProfitMargin).toFixed(2);
      } else {
        return "";
      }
    },
    calcPercentageDepreciation: function() {
      if (this.Depreciation && this.calcGrossProfitMargin) {
        return (this.Depreciation / this.calcGrossProfitMargin).toFixed(2);
      } else {
        return "";
      }
    },
    calcInterestExpenseOfOperatingIncome: function() {
      if (this.InterestExpense && this.OperatingIncome) {
        return (this.InterestExpense / this.OperatingIncome).toFixed(2);
      } else {
        return "";
      }
    },
    calcProfitMargin: function() {
      if (this.NetEarnings && this.TotalRevenue) {
        return (this.NetEarnings / this.TotalRevenue).toFixed(2);
      } else {
        return "";
      }
    },
    calcLongTermDebtToNetEarnings: function() {
      if (this.LongTermDebt && this.NetEarnings) {
        return (this.LongTermDebt / this.NetEarnings).toFixed(2);
      } else {
        return "";
      }
    },
    calcAdjDebtToEquity: function() {
      if (this.TotalLiabilities && (this.ShareholderEquity || this.TreasuryStock)) {
        return (this.TotalLiabilities / (this.ShareholderEquity + this.TreasuryStock)).toFixed(2);
      } else {
        return "";
      }
    },
    calcReturnOnEquity: function() {
      if (this.NetEarnings && this.ShareholderEquity) {
        return (this.NetEarnings / this.ShareholderEquity).toFixed(2);
      } else {
        return "";
      }
    },
    calcPercentageCapitalExpenditure: function() {
      if (this.CapitalExpenditure && this.NetEarnings) {
        return (this.CapitalExpenditure / this.NetEarnings).toFixed(2);
      } else {
        return "";
      }
    },
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
    }
  }
};
</script>

<style scoped>
.fundamentalAnalysis {
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
  width: 400px;
  background-color: rgb(51, 51, 51);
  color: white;
  border-radius:10px;
}

.label {
  width:320px;
}
</style>