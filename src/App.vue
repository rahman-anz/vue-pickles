<template>
  <div class="main-box">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>
<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
html {
  font-size: 62.5%;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Inter", sans-serif;
  color: #333;
  font-size: 1.6rem;
}
.main-box {
  min-height: 100vh;
  background-color: #ddd;
}
</style>
