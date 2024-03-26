<template>
  <section class="flex flex-col items-center">
    <div class="service-container">
      <nav class="flex justify-between">
        <h2>Serviços</h2>
        <div class="router-list">
          <RouterLink to="/register">Adicionar</RouterLink>
          <RouterLink to="/edit">Editar</RouterLink>
          <RouterLink to="/schedule">Agenda</RouterLink>
          <RouterLink to="/requests">Agendamentos</RouterLink>
          <Button>Compartilhar</Button>
        </div>
      </nav>
      <div class="router-container">
        <!-- <CalendarApp /> -->
        <RouterView />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import CalendarApp from "../components/CalendarApp.vue";
import Requests from "@/components/Requests.vue";
</script>

<style scoped>
section {
  @apply w-screen flex justify-center mt-16;
}

section nav h2 {
  @apply text-4xl font-bold;
}

nav ul li {
  @apply pr-4;
}

section nav {
  @apply mb-8;
}

.router-container {
  @apply flex justify-center;
}

.service-container {
  @apply border-neutral-600 rounded-md border-2 w-4/5 p-8;
}

.router-list {
  @apply flex w-1/2 justify-between;
}
</style>
