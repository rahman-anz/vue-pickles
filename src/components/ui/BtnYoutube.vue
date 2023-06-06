<template>
  <a :href="href" target="_blank" class="youtube"> <slot>Youtube</slot></a>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({ href: String });
</script>

<style scoped>
.youtube {
  background-color: rgb(159, 17, 17);
  transition: all 0.4s;
  padding: 1rem 2rem;
  border-radius: 9px;
  color: white;
  border: 2px solid black;
}
.youtube:hover {
  border: 2px solid rgba(198, 0, 0, 0.773);
  background-color: white;
  color: #333;
}
</style>
