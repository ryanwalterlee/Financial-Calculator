<template>
  <div id="app">
    <Title msg="Financial Calculator"/>
    <EPS10years/>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import EPS10years from './components/EPS10years.vue'

export default {
  name: 'App',
  components: {
    Title,
    EPS10years
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
