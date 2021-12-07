<template>
  <div class="FinancialStatement">
    <table>
      <thead>
        <th colspan="2">{{ name }}</th>
      </thead>
      <tbody>
        <tr v-for="stat in listOfStats" :key="stat">
          <td>{{ stat }}</td>
          <td><input type="Number"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'FinancialStatement',
  props: ["name", "listOfStats"]
}

</script>

<style>
</style>