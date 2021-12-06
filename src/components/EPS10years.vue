<template>
  <div class="EPS10years">
    <EPSperyear v-for="year in listOfEPS" :key="year" :year='year'/>
  </div>
</template>

<script>
import EPSperyear from "./EPSperyear.vue"

export default {
  name: 'EPS10years',
  components: {
      EPSperyear
  },
  computed: {
      listOfEPS: function() {
          let array = [];
          for (let i = 2021; i > 2011; i--) {
              array.push(i);
          }
          return array;
      }
  }
}
</script>