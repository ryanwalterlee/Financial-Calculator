<template>
  <div class="container">
    <input class="ticker" 
      type="text" 
      spellcheck="false" 
      placeholder="Enter Ticker" 
      v-model="ticker" />
    <div class="duration">
      <input class="submit" type="submit" value="1 month" @click="fetchHistoricPrice(ticker, '1 month')" />
      <input class="submit" type="submit" value="3 month" @click="fetchHistoricPrice(ticker, '3 month')" />
      <input class="submit" type="submit" value="6 month" @click="fetchHistoricPrice(ticker, '6 month')" />
      <input class="submit" type="submit" value="1 year" @click="fetchHistoricPrice(ticker, '1 year')" />
      <input class="submit" type="submit" value="5 year" @click="fetchHistoricPrice(ticker, '5 year')" />
      <input class="submit" type="submit" value="All Time" @click="fetchHistoricPrice(ticker, 'all time')" />
    </div>
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
    fetchHistoricPrice: function (ticker, time) {
      this.$store.dispatch("FinancialDataAPI/fetchHistoricalDailyPrices", {ticker: ticker, time: time});
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
  width: 70px;
  color: black;
  background-color: rgb(0, 168, 90);
  font-family: "Roboto Condensed", sans-serif;
}

.submit:hover { /* submit button when hover */
  background: rgb(0, 131, 70);
  box-shadow: 5px5px5px#eee;
  text-shadow: none;
  transition: 0.5s ease-out;
  transition: 0.1s ease-in;
  cursor: pointer;
}

.ticker {
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase; /* all inputs uppercase */
  margin-top: 60px;
}

.ticker::placeholder {
  font-weight: normal;
}

.duration {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}



@media only screen and (max-width: 450px) {
  .container {
    width: 100%;
  }
}
</style>
