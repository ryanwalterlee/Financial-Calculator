<template>
  <div class="div-container">
    <enter-ticker />
    <div class="chart-container">
      <chart class="chart" 
        :chartData="getHistoricalDailyPrices"
        :options="{responsive: true, maintainAspectRatio: false}"/>
    </div>
  </div>
</template>

<script>
import EnterTicker from './EnterTickerTime/EnterTickerTime.vue';
import Chart from './Chart/Chart.vue';
import { mapGetters } from 'vuex';

export default {
  name: "StockPriceChart",
  components: {
    EnterTicker,
    Chart
  },

  computed: {
    ...mapGetters({
      getHistoricalDailyPrices: 'FinancialDataAPI/getHistoricalDailyPrices'
    }),
  }
}
</script>

<style scoped>
.div-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 80%;

}

.chart-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 50px;

}

@media only screen and (max-width: 450px) {
  .chart-container {
    width: 90vw;
  }
}

@media only screen and (max-height: 665px) {
  .div-container {
    height: 100%;
  }
}

.chart {
  background-color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  padding: 10px
}
</style>
