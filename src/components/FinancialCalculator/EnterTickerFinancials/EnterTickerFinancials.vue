<template>
  <div>
    <input
      class="ticker"
      type="text"
      spellcheck="false"
      placeholder="Enter Ticker"
      v-model="ticker"
    />
    <button
      class="submit"
      type="submit"
      :disabled="isDisabled"
      @click="fetchFinancials(ticker)"
    >
      <!-- show this when idle -->
      <div v-if="!isDisabled">Search</div>

      <!-- show this when loading -->
      <span v-if="isDisabled" class="loader"></span> 
    </button>
  </div>
</template>

<script>
export default {
  name: "EnterTicker",
  data: function () {
    return {
      ticker: "",
      isDisabled: false,
    };
  },

  methods: {
    fetchFinancials: async function (ticker) {
      this.isDisabled = true;

      this.$store.commit("calculations/clearAll");
      this.$store.commit("FinancialDataAPI/clearAll");
      await this.$store.dispatch(
        "FinancialDataAPI/fetchFinancials",
        ticker.toUpperCase()
      );

      // only disables button again when the webscrapping is complete
      this.isDisabled = false;
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

input,
button {
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit:hover {
  /* submit button when hover */
  background: rgb(0, 131, 70);
  box-shadow: 5px5px5px#eee;
  text-shadow: none;
  transition: 0.1s ease-in;
  cursor: pointer;
}

.submit:disabled {
  background: rgb(0, 131, 70);
}

.ticker {
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase; /* all inputs uppercase */
  margin-top: 60px;
}

.ticker::placeholder {
  font-weight: normal; /* unbold placeholder */
}

/* from internet (for loader) */
.loader {
  width: 20px;
  height: 20px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
