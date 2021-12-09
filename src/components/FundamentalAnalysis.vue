<template>
  <div class="fundamentalAnalysis">
    <table>
      <thead>
        <th colspan="2">Fundamental Analysis</th>
      </thead>
      <tbody>
        <tr v-for="ratio in Ratios" :key="ratio">
          <td class="label">{{ ratio }}</td>
          <td></td>
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