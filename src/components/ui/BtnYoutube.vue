<template>
  <a :href="href" target="_blank" class="youtube"> <slot>Youtube</slot></a>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  href: String,
  orange: { type: Boolean, required: false },
});
const mainColor = computed(() => {
  if (props.orange) {
    return "#fb5a20";
  } else return "#9f1111";
});
</script>

<style scoped>
.youtube {
  background-color: v-bind(mainColor);
  transition: all 0.4s;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 9px;
  color: white;
  border: 2px solid black;
}
.youtube:hover {
  border: 2px solid currentColor;
  background-color: white;
  color: #333;
}
</style>
