<template>
  <section>
    <input
      type="text"
      placeholder="Search for Recipe"
      v-model="searchterm"
      @keyup="searchMeal"
    />
    <load-spinner v-if="store.searchedMeals.isLoading"></load-spinner>
    <meal-container
      v-else-if="store.hasSearchedMeals"
      :meals="store.getSearchedMeals"
    ></meal-container>
    <p v-else-if="!searchterm">
      Enter the name of the Recipe you wish to search for
    </p>
    <p v-else>There are no Recipes by that name</p>
  </section>
</template>
<script setup>
import useUserStore from "@/store";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const searchterm = ref("");
const store = useUserStore();
const searchMeal = () => {
  store.searchByName(searchterm.value);
};
const route = useRoute();
onMounted(() => {
  if (route.params.name) {
    searchterm.value = route.params.name;
    searchMeal();
  }
});
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;

  align-items: center;
}
input {
  margin: 2rem 0 2.3rem;
  padding: 2rem;
  width: 60%;
}
input:focus {
  outline: 1px solid orange;
  /* outline-offset: 2px; */
}
p {
  font-size: 1.6rem;
  margin-top: 2rem;
}
</style>
