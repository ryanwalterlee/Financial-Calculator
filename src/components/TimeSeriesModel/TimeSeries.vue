<template>
  <div class="div-container">
    <enter-ticker/>
    <p> IN PROGRESS </p>
  </div>
</template>

<script>
import EnterTicker from './EnterTickerTime/EnterTickerTime.vue';

export default {
  name: "TimeSeriesModel",
  components: {
    EnterTicker,
  }
}
</script>

<style scoped>
p {
  font-size: 600%;
  color: red;
  background-color: white;
}

.div-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
