<template>
  <section>
    <h2>Saved Recipes</h2>
    <meal-container :meals="store.getSavedMeals"></meal-container>
  </section>
</template>
<script setup>
import { defineExpose } from "vue";
import useUserStore from "@/store";
const store = useUserStore();
defineExpose({ store });
</script>
<style scoped>
section {
  width: 120rem;
  margin: 3rem auto;
  padding: 0 0 3rem;
}
h2 {
  text-align: center;
  font-size: 3rem;
}
</style>
