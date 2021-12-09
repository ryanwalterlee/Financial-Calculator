<template>
  <div class="Past10years">
    <table>
      <thead>
        <th colspan="3">Past 10 years</th>
      </thead>
      <tbody>
        <tr>
          <td>Year</td><td class="stats">EPS</td><td class="stats">P/E Ratio</td>
        </tr>
        <tr v-for="year in years" :key="year">
          <td class="label">{{ year }} year ago</td>
          <td class="stats"><input type="Number" @change="modifyEPS(year-1, $event.target.value)"/></td>
          <td class="stats"><input type="Number" @change="modifyPEratio(year-1, $event.target.value)"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Past10years',
  computed: {
      years: function() {
          let array = [];
          for (let i = 1; i <= 10; i++) {
              array.push(i);
          }
          return array;
      },
      
  },
  methods: {
    modifyEPS(position, amount) {
      this.$store.commit('modifyEPS', 
        {position:position, amount:amount})
    },
    modifyPEratio(position, amount) {
      this.$store.commit('modifyPEratio', 
        {position:position, amount:amount})
    },
  }
}
</script>

<style scoped>
input {
  width: 90%;
  border: hidden;
}

input:focus {
  outline: none;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

.Past10years {
  margin-left: 10px;
  margin-right:10px;
}

.stats {
  width: 100px;
}

table {
  width: 300px;
}

.label {
  width:100px;
}

</style>