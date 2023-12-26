<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
    <h3>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 200;
  font-size: 2.0rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 800px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
