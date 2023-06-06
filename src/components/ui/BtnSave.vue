<template>
  <button><slot></slot></button>
</template>
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
  background-color: white;
  color: #333;
  border: 2px solid rgb(200, 133, 8);
}
</style>
