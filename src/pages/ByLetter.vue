<template>
  <section>
    <h2>Filter By Letter</h2>
    <div class="alphabets">
      <ul v-for="alphabet in alphabets" :key="alphabet">
        <li>
          <router-link
            :to="{ name: 'by-letter', params: { letter: alphabet } }"
            >{{ alphabet }}</router-link
          >
        </li>
      </ul>
    </div>
    <meal-container :meals="store.getLetterMeals"></meal-container>
  </section>
</template>
<script setup>
import { defineExpose, watch } from "vue";
import useUserStore from "@/store";
import { useRoute } from "vue-router";
const store = useUserStore();
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
watch(route, () => {
  store.filterByLetter(route.params.letter);
});
defineExpose({ alphabets, store });
</script>
<style scoped>
section {
  width: 120rem;
  margin: 3rem auto;
  padding: 0 0 3rem;
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
.alphabets {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
ul {
  list-style: none;
}
a:link,
a:visited {
  font-size: 2rem;
  color: rgb(226, 153, 17);
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 50%;
}
.router-link-active {
  background-color: black;
}
</style>
