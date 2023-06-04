<template>
  <section>
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
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const recipe = ref("");
onMounted(async () => {
  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
  );
  const data = await res.json();
  [recipe.value] = data.meals;
  console.log(recipe.value);
});
</script>
<style scoped>
section {
  width: 100rem;
  margin: 0 auto;
  padding: 3rem 0;
}
.title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
}
img {
  width: 75%;
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
</style>
