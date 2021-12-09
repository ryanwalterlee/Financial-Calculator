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
    calcGrossProfitMargin: function() {
      if (this.$store.getters.GrossProfit && this.$store.getters.TotalRevenue) {
        return this.$store.getters.GrossProfit / this.$store.getters.TotalRevenue;
      } else {
        return "";
      }
    },
    calcPercentageSGA: function() {
      if (this.$store.getters.SGA && this.calcGrossProfitMargin) {
        return this.$store.getters.SGA / this.calcGrossProfitMargin;
      } else {
        return "";
      }
    },
    calcPercentageRD: function() {
      if (this.$store.getters.RD && this.calcGrossProfitMargin) {
        return this.$store.getters.RD / this.calcGrossProfitMargin;
      } else {
        return "";
      }
    },
    calcPercentageDepreciation: function() {
      if (this.$store.getters.Depreciation && this.calcGrossProfitMargin) {
        return this.$store.getters.Depreciation / this.calcGrossProfitMargin;
      } else {
        return "";
      }
    },
    calcInterestExpenseOfOperatingIncome: function() {
      if (this.$store.getters.InterestExpense && this.$store.getters.$OperatingIncome) {
        return this.$store.getters.InterestExpense / this.$store.getters.$OperatingIncome;
      } else {
        return "";
      }
    },
    calcProfitMargin: function() {
      if (this.$store.getters.NetEarnings && this.$store.getters.TotalRevenue) {
        return this.$store.getters.NetEarnings / this.$store.getters.TotalRevenue;
      } else {
        return "";
      }
    },
    calcLongTermDebtToNetEarnings: function() {
      if (this.$store.getters.LongTermDebt && this.$store.getters.NetEarnings) {
        return this.$store.getters.LongTermDebt / this.$store.getters.NetEarnings;
      } else {
        return "";
      }
    },
    calcAdjDebtToEquity: function() {
      const shareholderEquity = this.$store.getters.ShareholderEquity;
      const treasuryStock = this.$store.getters.TreasuryStock;
      const totalLiabilities = this.$store.getters.TotalLiabilities;
      if (totalLiabilities && (shareholderEquity || treasuryStock)) {
        return totalLiabilities / (shareholderEquity + treasuryStock);
      } else {
        return "";
      }
    },
    calcReturnOnEquity: function() {
      if (this.$store.getters.NetEarnings && this.$store.getters.ShareholderEquity) {
        return this.$store.getters.NetEarnings / this.$store.getters.ShareholderEquity;
      } else {
        return "";
      }
    },
    calcPercentageCapitalExpenditure: function() {
      if (this.$store.getters.CapitalExpenditure && this.$store.getters.NetEarnings) {
        return this.$store.getters.CapitalExpenditure / this.$store.getters.NetEarnings;
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

input {
  width: 50%;
  border: hidden;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

table {
  width: 400px;
}

.label {
  width:320px;
}
</style>