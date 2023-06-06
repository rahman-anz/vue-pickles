<template>
  <button :class="[{ flat: mode }]"><slot></slot></button>
</template>
<script setup>
import defineProps from "vue";
defineProps({ mode: Boolean });
</script>
<style scoped>
button {
  padding: 1rem 2rem;
  border-radius: 9px;
  color: white;
  background-color: orange;
  font-size: 1.5rem;
  border: 2px solid transparent;
  transition: all 0.4s;
  cursor: pointer;
}
button:hover {
  color: #333;
  background-color: white;
  border: 2px solid orange;
}
.flat {
  background-color: white;
  color: #333;
  border: 2px solid cornflowerblue;
}
.flat:hover {
}
</style>
