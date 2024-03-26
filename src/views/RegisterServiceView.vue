<template>
  <div class="register-container">
    <h1>Cadastre seu serviço</h1>
    <form @submit.prevent="handleSubmit">
      <Input v-model="servico" placeholder="Serviço" />
      <Textarea
        v-model="descricao"
        placeholder="Insira a descrição do serviço."
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Textarea from "@/components/ui/textarea/Textarea.vue";
import Input from "@/components/ui/input/Input.vue";
import { ref } from "vue";
import { createService } from "@/services/service.http";

const servico = ref("");
const descricao = ref("");

const handleSubmit = async () => {
  const respose = await createService({
    descricao: descricao.value,
    servico: servico.value,
  });

  servico.value = "";
  descricao.value = "";
};
</script>

<style scoped>
.register-container {
  @apply flex flex-col w-[320px] h-3/5 border-neutral-600 border-2 rounded-md p-8;
}

.register-container h1 {
  @apply text-3xl font-semibold mb-8 text-center;
}

.register-container form {
  @apply flex flex-col;
}

.register-container form input {
  @apply mb-4;
}

.register-container form textarea {
  @apply mb-8;
}
</style>
