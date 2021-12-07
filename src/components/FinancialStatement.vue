<template>
  <div class="financialStatement">
    <table>
      <thead>
        <th colspan="2">{{ name }}</th>
      </thead>
      <tbody>
        <tr v-for="stat in listOfStats" :key="stat">
          <td class="label">{{ stat }}</td>
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

<style scoped>
input {
  width: 50%;
  border: hidden;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

table {
  width: 300px;
}

.label {
  width:150px;
}

</style>