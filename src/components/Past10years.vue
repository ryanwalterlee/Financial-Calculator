<template>
  <div class="Past10years">
    <table>
      <thead>
        <th colspan="3">Past 10 years</th>
      </thead>
      <tbody>
        <tr>
          <td>Year</td><td>EPS</td><td>P/E Ratio</td>
        </tr>
        <tr v-for="year in years" :key="year">
          <td>{{ year }}</td>
          <td><input type="Number"/></td>
          <td><input type="Number"/></td>
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
</style>