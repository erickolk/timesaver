<template>
  <div class="requests-container">
    <h2>Pedidos</h2>
    <CardRequest/>
    <CardRequest/>
    <CardRequest/>
  </div>
</template>

<script setup lang="ts">
import CardRequest from './CardRequest.vue';
</script>

<style scoped>

.requests-container {
  @apply w-4/5 mt-4 border-neutral-600 border-2 p-8 rounded-md;
}

.requests-container h2 {
  @apply text-3xl font-bold;
}
</style>
