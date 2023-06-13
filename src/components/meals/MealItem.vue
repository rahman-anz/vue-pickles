<template>
  <li>
    <div class="container">
      <router-link :to="{ name: 'details', params: { id: id } }" class="img-box"
        ><img :src="image" :alt="title"
      /></router-link>
      <div class="text-box">
        <router-link :to="{ name: 'details', params: { id: id } }">
          <h3 class="title">{{ title }}</h3></router-link
        >
        <div class="link-box">
          <btn-youtube v-if="youtube" :href="youtube"></btn-youtube>
          <btn-details v-else :id="id" />
          <btn-save v-if="isSaved" :mode="isSaved" @click="undoSave"
            >Unsave Item</btn-save
          >
          <btn-save v-else @click="sendToSave">Save Recipe</btn-save>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import useUserStore from "@/store";
import { defineProps, defineExpose, computed } from "vue";
import BtnDetails from "../ui/BtnDetails.vue";
import BtnSave from "../ui/BtnSave.vue";
import BtnYoutube from "../ui/BtnYoutube.vue";
const props = defineProps({
  title: String,
  image: String,
  youtube: String,
  id: String,
});
const store = useUserStore();
const sendToSave = () => {
  store.addCounter();
  store.saveMeal(props.title, props.image, props.youtube, props.id);
};
const undoSave = () => {
  store.removeSaved(props.id);
  if (store.savedCounter === 0) return;
  store.minusCounter();
};
const isSaved = computed(() => {
  if (store.savedMeals.find((meal) => meal.idMeal === props.id)) return true;
  else return false;
});
defineExpose({ sendToSave, undoSave });
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}

.img-box {
  overflow: hidden;
}
.text-box {
  padding: 1rem;
}
.title {
  margin-bottom: 1.4rem;
}
.link-box {
  display: flex;
  justify-content: space-between;
}
a {
  display: inline-block;
  text-decoration: none;
  color: #333;
}

li {
  list-style: none;
  transition: all 0.4s;
}

li:hover {
  scale: 1.02;
}

img {
  width: 100%;
  transition: all 0.4s;
}
li:hover img {
  scale: 1.1;
}
</style>
