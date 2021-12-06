<template>
  <div class="EPSperyear">
    <label for="epseachyear">{{ year }}</label>
    <input id="epseachyear" type="number">
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    year: Number,
  }
}
</script>

