<template>
  <section>
    <h2>{{ route.params.area }} Recipies</h2>
    <load-spinner v-if="store.areaMeals.isLoading"></load-spinner>
    <meal-container v-else :meals="store.getAreaMeals"></meal-container>
  </section>
</template>
<script setup>
import useUserStore from "@/store";
import { useRoute } from "vue-router";
import { defineExpose, onMounted } from "vue";
const store = useUserStore();
const route = useRoute();
onMounted(() => store.filterByArea(route.params.area));
defineExpose({ store });
</script>
<style scoped>
section {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}
</style>
