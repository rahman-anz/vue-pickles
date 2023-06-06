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
          <a v-if="youtube" :href="youtube" target="_blank" class="youtube"
            >Youtube</a
          >
          <btn class="save" @click="sendToSave">Save Recipe</btn>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import useUserStore from "@/store";
import { defineProps, defineExpose } from "vue";
const props = defineProps({
  title: String,
  image: String,
  youtube: String,
  id: String,
});
const store = useUserStore();
const sendToSave = () => {
  store.saveMeal(props.title, props.image, props.youtube, props.id);
};
defineExpose({ sendToSave });
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
.link-box a,
.link-box btn {
  color: white;
  padding: 1rem 2rem;
  border-radius: 9px;
}
.youtube {
  background-color: rgb(159, 17, 17);
  transition: all 0.4s;

  border: 2px solid black;
}
.youtube:hover {
  border: 2px solid rgba(198, 0, 0, 0.773);
  background-color: white;
  color: #333;
}
.save {
  display: inline-block;
  background-color: orange;
  border: 2px solid transparent;
  transition: all 0.4s;
  cursor: pointer;
}
.save:hover {
  background-color: white;
  color: #333;
  border: 2px solid rgb(200, 133, 8);
}
li:hover {
  /* transform: translateY(-0.4rem);
   */
  scale: 1.03;
}
li:hover img {
  scale: 1.1;
}
li {
  list-style: none;
  transition: all 0.4s;
}
img {
  width: 100%;
  transition: all 0.4s;
}
</style>
