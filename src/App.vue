<template>
  <div id="app">

    <Header class="header" message="Financial Calculator" />
    <div class="main-page">
      <div class="side-nav-bar-container">
        <side-nav-bar />
      </div>
      <div class="router-view-container">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import SideNavBar from './components/SideNavBar/SideNavBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    SideNavBar,
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('./assets/MainBackgroundImage.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%; /* increase height of app */
}

.header {
  width: 100%; /* Enlarge header to full width */
}

.main-page {
  display: flex;
  width: 100%;
  height: 100vh;
}

.router-view-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

</style>
