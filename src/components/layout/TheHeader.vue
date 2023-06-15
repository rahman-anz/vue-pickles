<template>
  <header>
    <h2 class="logo">Pickles</h2>
    <div class="links">
      <router-link :to="{ name: 'by-name' }">Search Recipe</router-link>
      <router-link :to="{ name: 'by-letter' }">Filter by Letter</router-link>
      <router-link :to="{ name: 'areas' }">Filter by Area</router-link>
      <button @click="goToSaved" class="saved">
        <UserCircleIcon class="user-icon" />
        <div v-if="store.savedCounter" class="saved-counter">
          {{ store.savedCounter }}
        </div>
      </button>
    </div>
  </header>
</template>
<script setup>
import useUserStore from "@/store";
import { UserCircleIcon } from "@heroicons/vue/24/outline";
import { defineExpose } from "vue";
import { useRouter } from "vue-router";
const store = useUserStore();
const router = useRouter();
const goToSaved = () => {
  store.setZeroCounter();
  router.replace("/saved");
};
defineExpose({ store });
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
header {
  /* width: 100vw; */
  position: sticky;
  top: 0;
  background-color: rgb(0, 0, 0);
  padding: 1.4rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}
.logo {
  font-family: "Dancing Script", cursive;
  color: orange;
  justify-self: 50%;
  margin-left: 1rem;
  font-size: 5.2rem;
  text-align: center;
}
a,
button {
  text-decoration: none;
  color: orange;
  font-size: 1.8rem;
  border: none;
  padding: 2rem 2rem;
  background-color: black;
  border: 1px solid transparent;
}

a:hover {
  background-color: rgba(254, 254, 254, 0.15);
}
button:hover {
  background-color: rgba(254, 254, 254, 0.3);
  border-radius: 9px;
}
.router-link-active {
  background-color: rgba(254, 254, 254, 0.15);

  border: 1px solid orange;
}
.user-icon {
  height: 3rem;
  color: orange;
}
.links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.saved {
  position: relative;
  /* padding: 1rem 2rem; */
  padding: 1.36rem 2rem;
}
.saved-counter {
  position: absolute;
  padding: 0.3rem 0.6rem;
  background-color: orange;
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  top: 0rem;
  right: 0;
}
</style>
