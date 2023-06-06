<template>
  <header>
    <h2 class="logo">Pickles</h2>
    <div class="links">
      <router-link to="/by-name">Search Recipe</router-link>
      <router-link :to="{ name: 'by-letter' }">Filter by Letter</router-link>
      <router-link :to="{ name: 'areas' }">Filter by Area</router-link>
      <router-link :to="{ name: 'saved' }"
        ><UserCircleIcon class="user-icon"
      /></router-link>
    </div>
  </header>
</template>
<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/outline";
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
header {
  /* width: 100vw; */
  background-color: rgb(0, 0, 0);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-family: "Dancing Script", cursive;
  color: orange;
  justify-self: 50%;
  margin-left: 1rem;
  font-size: 5.2rem;
  text-align: center;
}
a {
  text-decoration: none;
  color: orange;
  font-size: 1.8rem;
  padding: 2rem 2rem;
}
.router-link-active,
a:hover {
  background-color: rgba(254, 254, 254, 0.277);
}
.user-icon {
  height: 3rem;
  color: orange;
}
.links {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
