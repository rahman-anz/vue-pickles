<template>
  <section>
    <h2>All Areas</h2>
    <div class="container">
      <ul v-for="area in store.getAllAreas" :key="area">
        <router-link :to="{ name: 'by-area', params: { area: area.strArea } }">
          <li>
            <p>{{ area.strArea }}</p>
          </li>
        </router-link>
      </ul>
    </div>
  </section>
</template>
<script setup>
import useUserStore from "@/store";
import { onMounted } from "vue";
const store = useUserStore();
onMounted(() => {
  store.searchAllAreas();
});
</script>
<style scoped>
section {
  width: 100rem;
  margin: 0 auto;
  padding: 3rem 0;
}
h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 3rem;
}
ul {
  list-style: none;
}
li {
  padding: 2.5rem;
  background-color: rgb(255, 195, 82);
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
