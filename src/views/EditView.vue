<template>
  <div class="edit-container">
    <h1>Editar</h1>
    <EditSelect />
    <Textarea placeholder="Type your message here." />
    <Button>Editar</Button>
  </div>
</template>

<script setup lang="ts">
import EditSelect from "@/components/EditSelect.vue";
import Button from "@/components/ui/button/Button.vue";
import Textarea from "@/components/ui/textarea/Textarea.vue";
</script>

<style scoped>
.edit-container{
  @apply flex flex-col w-[320px] h-3/6 border-neutral-600 border-2 rounded-md p-8 justify-between;
}

.edit-container h1 {
  @apply text-3xl font-semibold;
}
</style>
