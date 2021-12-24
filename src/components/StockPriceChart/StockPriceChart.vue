<template>
  <div class="div-container">
    <enter-ticker />
    <chart class="chart" 
      :chartData="getHistoricalDailyPrices"/>
  </div>
</template>

<script>
import EnterTicker from './EnterTickerTime/EnterTickerTime.vue';
import Chart from './Chart/Chart.vue';
import { mapGetters } from 'vuex';

export default {
  name: "TimeSeriesModel",
  components: {
    EnterTicker,
    Chart
  },
  computed: {
    ...mapGetters({
      getHistoricalDailyPrices: 'FinancialDataAPI/getHistoricalDailyPrices'
    })
  }
}
</script>

<style scoped>
.div-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
}

/* @media only screen and (max-width: 1000px) {
  .div-container {
    height: 100%;
  }
} */

.chart {
  background-color: white;
  margin: 50px;
  border-radius: 20px;
  padding: 30px
}
</style>
