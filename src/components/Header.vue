<template>
  <div class="header-container">
    <header class="header"><strong>{{ message }}</strong></header>
  </div>
</template>

<script>
export default {
  name: "FinancialCalculator",
  props: {
    message: String,
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 168, 90);
  width: 100%;
  font-size: 150%;
  font-family: 'Roboto Condensed', sans-serif;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
