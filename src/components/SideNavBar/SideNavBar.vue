<template>
  <div class="side-nav-bar">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/predictions">Time Series Model</router-link>
  </div>
</template>

<script>
export default {
  name: "SideNavBar",
};
</script>

<style scoped>

.side-nav-bar {
  height: 100%; /* 100% Full-height */
  background-color: black;
  display:flex;
  flex-direction: column;
  width: 300px;
}

.link {
  color: white;
  font-size: 120%;
  font-family: 'Roboto Condensed';
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.link:visited { 
  text-decoration: none;
}

.link:hover {
  background-color: rgb(51, 51, 51);
}
</style>
