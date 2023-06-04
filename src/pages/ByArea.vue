<template>
  <section>
    <h2>{{ route.params.area }} Recipies</h2>
    <meal-container :meals="store.getAreaMeals"></meal-container>
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
  padding: 2rem;
}
h2 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
}
</style>
