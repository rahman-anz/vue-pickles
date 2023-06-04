<template>
  <section>
    <h2>{{ route.params.area }} Recipies</h2>
    <meal-container></meal-container>
  </section>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<style scoped>
section {
  width: 100rem;
  margin: 0 auto;
  padding: 3rem 0;
}
h2 {
  font-size: 3rem;
  text-align: center;
}
</style>
