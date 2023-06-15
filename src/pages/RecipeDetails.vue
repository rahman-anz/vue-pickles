<template>
  <section>
    <load-spinner class="spinner" v-if="isLoading"></load-spinner>
    <div v-else>
      <h2 class="title">{{ recipe.strMeal }}</h2>
      <div class="img-box">
        <img :src="recipe.strMealThumb" alt="recipe.strMeal" />
      </div>
      <div class="text-box">
        <p><strong>Category : </strong>{{ recipe.strCategory }}</p>
        <p><strong>Area : </strong>{{ recipe.strArea }}</p>
        <p><strong>Tags : </strong> {{ recipe.strTags || "None" }}</p>
      </div>
      <p class="instructions">{{ recipe.strInstructions }}</p>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const recipe = ref("");
const isLoading = ref(false);
onMounted(async () => {
  isLoading.value = true;
  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
  );
  const data = await res.json();
  [recipe.value] = data.meals;
  isLoading.value = false;
});
</script>
<style scoped>
section {
  width: 100rem;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
}
img {
  width: 100%;
  border: 10px solid rgba(0, 0, 0, 0.716);
}
.img-box {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}
strong {
  color: rgb(233, 151, 0);
}
.text-box {
  display: flex;
  font-size: 2rem;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.instructions {
  line-height: 1.5;
  font-size: 1.8rem;
}
.spinner {
  padding-top: 6rem;
}
</style>
