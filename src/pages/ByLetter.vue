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
    <load-spinner v-if="store.letterMeals.isLoading"></load-spinner>
    <meal-container
      v-else-if="store.hasLetterMeals"
      :meals="store.getLetterMeals"
    ></meal-container>
    <p v-else-if="!route.params.letter">Please choose a letter</p>
    <p v-else>There are no Recipe's for the selected letter 🙁</p>
  </section>
</template>
<script setup>
import { defineExpose, onMounted, watch } from "vue";
import useUserStore from "@/store";
import { useRoute } from "vue-router";
const store = useUserStore();
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
watch(route, () => {
  store.filterByLetter(route.params.letter);
});
onMounted(() => {
  if (route.params.letter) {
    store.filterByLetter(route.params.letter);
  }
});
defineExpose({ alphabets, store });
</script>
<style scoped>
section {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  text-align: center;
  margin-bottom: 2.5rem;
}
.alphabets {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
ul {
  list-style: none;
  margin-bottom: 1rem;
}
a:link,
a:visited {
  font-size: 2rem;
  color: rgb(226, 153, 17);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 50%;
}
.router-link-active {
  background-color: black;
}
p {
  font-size: 1.8rem;
  text-align: center;
  margin-top: 2rem;
}
@media (max-width: 32em) {
  .alphabets {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(8, 1fr);
  }
  p {
    line-height: 1.6;
    padding: 2rem;
  }
}
</style>
