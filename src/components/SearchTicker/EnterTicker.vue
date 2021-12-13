<template>
  <div>
    <h3>Enter Ticker: </h3>
    <input type="text" v-model="ticker"/>
    <input type="submit" @click="fetchFinancials(ticker)"/>
  </div>
</template>

<script>
export default {
    name: "EnterTicker",
    data: function() { 
      return {
        ticker: "",
      }
    },
    methods: {
      fetchFinancials : function(ticker) {
        this.$store.dispatch("yahooFinance/fetchFinancials", ticker.toUpperCase());
      }
    }
}
</script>

<style scoped>
input {
  width: 90%;
  border: hidden;
}

/* remove spinner */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input:focus{
  outline: none; /* remove border outline when input in focus */
}

h3 {
  color: white;
  margin-bottom: 10px;
  margin-top: 30px;
}
</style>
