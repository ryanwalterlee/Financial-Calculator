<template>
    <div>
        <header class="header">{{ message }}</header>
    </div>
</template>

<script>
export default {
    name: "FinancialCalculator",
    props: {
        message: String,
    }
}
</script>

<style scoped>
.header {
    background-color: black;
    color: white;
    width: 100%;
    font-size: 150%;
}
</style>
