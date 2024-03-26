<script setup lang="ts">
import { ref } from "vue";
import ServiceView from "./views/ServiceView.vue";
import Button from "./components/ui/button/Button.vue";
import EditView from "./views/EditView.vue";
import RegisterServiceView from "./views/RegisterServiceView.vue";

const isVisible = ref(true);
</script>

<template>
  <div>
    <Button @click="isVisible = !isVisible">Alternar Visibilidade Serviços</Button>
    <ServiceView v-if="isVisible" />
  </div>
</template>

<style scoped></style>
