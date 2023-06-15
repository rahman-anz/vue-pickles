<template>
  <div class="lds-dual-ring"></div>
</template>
<style scoped>
.lds-dual-ring {
  display: inline-block;
  margin-top: 8rem;
  width: 10rem;
  height: 10rem;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 9px solid orange;
  border-color: orange transparent orange transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
