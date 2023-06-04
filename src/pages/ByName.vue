<template>
  <section>
    <input
      type="text"
      placeholder="Search for Recipe"
      v-model="searchterm"
      @keyup="searchMeal"
    />
    <meal-container :meals="store.getSearchedMeals"></meal-container>
  </section>
</template>
<script setup>
import useUserStore from "@/store";
import { ref } from "vue";
const searchterm = ref("");
const store = useUserStore();
const searchMeal = () => {
  store.searchByName(searchterm.value);
};
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin: 1.2rem 0;
  padding: 2rem;
  width: 60%;
}
</style>
