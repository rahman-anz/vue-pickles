<template>
  <section>
    <h2>Saved Recipes</h2>
    <meal-container
      v-if="store.hasSavedMeals"
      :meals="store.getSavedMeals"
    ></meal-container>
    <p v-else>There are no saved Recipes at the moment. Try saving now 🙂</p>
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
  padding: 3rem 0 3rem;
}
h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
}
p {
  font-size: 1.8rem;
  text-align: center;
  padding-top: 3rem;
}
</style>
