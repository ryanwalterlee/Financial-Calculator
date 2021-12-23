<template>
  <div>
    <input class="ticker" 
      type="text" 
      spellcheck="false" 
      placeholder="Enter Ticker" 
      v-model="ticker" />
    <input class="submit" type="submit" @click="fetchHistoricPrice(ticker)" />
  </div>
</template>

<script>
export default {
  name: "EnterTicker",
  data: function () {
    return {
      ticker: "",
    };
  },
  methods: {
    fetchHistoricPrice: function (ticker) {
      this.$store.dispatch("FinancialDataAPI/fetchHistoricalDailyPrices", ticker.toUpperCase());
    },
  },
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
div {
  display: flex;
  flex-direction: column;
}

input {
  width: 250px;
  border: hidden;
  border-radius: 10px;
  height: 30px;
  margin: 5px;
  text-align: center; /* input cursor in the center */
  font-weight: bold;
  font-size: 110%;
}

/* remove spinner */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus {
  outline: none; /* remove border outline when input in focus */
}

.submit {
  color: black;
  background-color: rgb(0, 168, 90);
  font-family: "Roboto Condensed", sans-serif;
}

.submit:hover { /* submit button when hover */
  background: rgb(0, 131, 70);
  box-shadow: 5px5px5px#eee;
  text-shadow: none;
  transition: 0.5s ease-out;
}

.ticker {
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase; /* all inputs uppercase */
  margin-top: 60px;
}

.ticker::placeholder {
  font-weight: normal;
}
</style>
