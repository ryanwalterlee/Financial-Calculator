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
          <td>{{ year }}</td>
          <td class="stats"><input type="Number"/></td>
          <td class="stats"><input type="Number"/></td>
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
          for (let i = 2020; i > 2010; i--) {
              array.push(i);
          }
          return array;
      }
  },
}
</script>

<style>
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

</style>