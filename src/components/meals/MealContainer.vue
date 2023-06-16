<template>
  <div class="container">
    <ul v-for="meal in meals" :key="meal.idMeal">
      <meal-item
        :id="meal.idMeal"
        :title="meal.strMeal"
        :image="meal.strMealThumb"
        :youtube="meal.strYoutube"
      ></meal-item>
    </ul>
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";
import { defineProps } from "vue";
defineProps({ meals: Object });
</script>
<style scoped>
.container {
  display: grid;
  max-width: 125rem;
  margin: 3rem auto;
  column-gap: 4rem;
  row-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 32em) {
  .container {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin: 3rem 4rem;
  }
}
</style>
