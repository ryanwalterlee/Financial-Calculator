<template>
  <div id="financial-calculator">

      <enter-ticker/>

      <!-- div container for inputs -->
      <div class="fundamentals">
        <past-ten-years/>
        <income-statement/>
        <div class="balancecash">
          <balance-sheet/>
          <cash-flow-statement/>
          <current-market-price/>
        </div>
      </div>

      <!-- div container for results -->
      <div class="results">
        <projections/>
        <fundamental-analysis/>
      </div>

  </div>
</template>

<script>
import PastTenYears from './InputFinancials/PastTenYears.vue'
import IncomeStatement from './InputFinancials/IncomeStatement.vue'
import BalanceSheet from './InputFinancials/BalanceSheet.vue'
import CashFlowStatement from './InputFinancials/CashFlowStatement.vue'
import CurrentMarketPrice from './InputFinancials/CurrentMarketPrice.vue'
import Projections from './Results/Projections.vue'
import FundamentalAnalysis from './Results/FundamentalAnalysis.vue'
import EnterTicker from './EnterTickerFinancials/EnterTickerFinancials.vue'

export default {
  name: 'FinancialCalculator',
  components: {
    EnterTicker,
    PastTenYears,
    IncomeStatement,
    BalanceSheet,
    CashFlowStatement,
    CurrentMarketPrice,
    Projections,
    FundamentalAnalysis,
  },
}
</script>

<style scoped>
#financial-calculator {
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* increase height of app */
}

@media only screen and (max-width: 1100px) {
  #financial-calculator {
    height: 100%;
  }
}

@media only screen and (max-height: 734px) {
  #financial-calculator {
    height: 100%;
  }
}

.fundamentals {
  display: flex;
  flex-direction: row; /* put statistics side by side */
  width: 100%;
  margin-top: 30px; /* add space from header */
  margin-bottom: 30px;
  justify-content: center; /* center in the webpage */
  font-family: 'Roboto Condensed', sans-serif;
}

.balancecash {
  display: flex;
  flex-direction: column; /* stack balance on top of cash */
  }

.results {
  display: flex;
  flex-direction: row; /* put statistics side by side */
  width: 100%;
  margin-bottom: 30px;
  justify-content: center; /* center in the webpage */
  font-family: 'Roboto Condensed', sans-serif;
}

/* mobile responsivity */
.fundamentals, .results {
  flex-wrap: wrap;
  gap: 20px;
}



</style>