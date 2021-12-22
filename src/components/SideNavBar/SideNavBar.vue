<template>
  <div class="container" :class="openHeight">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">

    <div class="button-container">
      <button class="toggle" @click="() => this.open = !this.open">
        <i :class="buttonDirection" style="color:white; font-size:200%" ></i>
      </button>
    </div>

    <div class="links" v-if="open">
      <router-link class="link" to="/" @click.native="clearAllState()">Home</router-link> <!-- @click does not trigger -->
      <router-link class="link" to="/predictions">Time Series Model</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavBar",
  data: function() {
    return {
      open: false,
    }
  },
  computed: {
    buttonDirection: function() {
      if (this.open) {return "fas fa-angle-left"}
      else {return "fas fa-angle-right"}
    },
    openHeight: function() {
      if (this.open) {return "open"}
      else {return ""}
    }
  },
  methods: {
    clearAllState: function() {
      this.$store.commit("calculations/clearAll");
    },
  }
};
</script>

<style scoped>
.container {
  background-color: black;
}

/* let nav bar height be full when nav bar is open, else not full height */
.open {
  height: 100%;
}

/* styling the arrow button */
.toggle {
  background-color: transparent;
  border: none;
}

/* positions arrow to the right when it is open */
.button-container {
  display: flex;
  justify-content: flex-end;
}

.links {
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
