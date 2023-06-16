<template>
  <router-link class="details" :to="{ name: 'details', params: { id: id } }">
    <slot>View Item</slot></router-link
  >
</template>

<script setup>
import { defineProps } from "vue";
defineProps({ id: String });
</script>

<style scoped>
.details {
  display: inline-block;
  background-color: rgb(251, 90, 32);
  transition: all 0.4s;
  padding: 1rem 2rem;
  border-radius: 9px;
  color: white;
  text-decoration: none;
  border: 2px solid transparent;
}
.details:hover {
  border: 2px solid rgb(184, 70, 28);
  background-color: white;
  color: #333;
}
@media (max-width: 32em) {
  .details {
    font-size: 1.5rem;
  }
}
</style>
