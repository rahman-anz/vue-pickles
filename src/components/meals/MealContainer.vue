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
  width: 120rem;
  margin: 2rem auto;
  column-gap: 3rem;
  row-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
}
</style>
