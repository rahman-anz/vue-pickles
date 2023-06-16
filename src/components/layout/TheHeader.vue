<template>
  <header :class="{ open: navOpen }">
    <h2 class="logo">Pickles</h2>
    <div class="container">
      <nav>
        <router-link @click="closeNav" :to="{ name: 'by-name' }"
          >Search Recipe</router-link
        >
        <router-link @click="closeNav" :to="{ name: 'by-letter' }"
          >Filter by Letter</router-link
        >
        <router-link @click="closeNav" :to="{ name: 'areas' }"
          >Filter by Areas</router-link
        >
      </nav>
      <div class="nav-2">
        <button @click="goToSaved" class="saved">
          <UserCircleIcon class="user-icon" />
          <div v-if="store.savedCounter" class="saved-counter">
            {{ store.savedCounter }}
          </div>
        </button>
        <button class="btn-mobile-nav">
          <Bars3Icon @click="expandNav" class="mobile-icon menu" />
          <XMarkIcon @click="closeNav" class="mobile-icon close" />
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import useUserStore from "@/store";
import { UserCircleIcon } from "@heroicons/vue/24/outline";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { defineExpose, ref } from "vue";
import { useRouter } from "vue-router";
const store = useUserStore();
const router = useRouter();
const goToSaved = () => {
  store.setZeroCounter();
  router.replace("/saved");
};
const navOpen = ref(false);
const expandNav = () => {
  navOpen.value = true;
};
const closeNav = () => {
  navOpen.value = false;
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
.container {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
nav {
  display: flex;
  padding: 1px 0;
  align-items: center;
  gap: 1.6rem;
}
.nav-2 {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.saved {
  position: relative;
  cursor: pointer;
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
.btn-mobile-nav {
  border: none;
  display: none;
  cursor: pointer;
}
.mobile-icon {
  color: orange;
  width: 3rem;
}
.close {
  display: none;
}

@media (max-width: 32em) {
  header {
    padding: 0.2rem;
    height: 9rem;
    position: relative;
  }
  .logo {
    font-size: 4.2rem;
  }
  .saved {
    padding: 0.6rem;
  }
  nav {
    flex-direction: column;
    gap: 0;
    background-color: black;
    position: absolute;
    right: 0;
    top: -14rem;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;
  }
  .open nav {
    transform: translateY(23rem);
    visibility: unset;
    opacity: 1;
    pointer-events: initial;
  }
  .open .menu {
    display: none;
  }
  .open .close {
    display: initial;
  }
  .nav-2 {
    position: absolute;
    z-index: 2;
    right: 1rem;
  }
  .btn-mobile-nav {
    display: block;
    padding: 0.6rem;
  }
  .saved-counter {
    top: -0.5rem;
    right: -0.9rem;
  }
  .router-link-active {
    border: none;
  }
}
</style>
