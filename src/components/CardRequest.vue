<template>
  <div class="card-requests-container">
    <Card v-for="pedido in pedidos" :key="pedido.id" class="mb-8">
      <CardHeader>
        <CardTitle>Pedido Barbearia</CardTitle>
        <CardDescription>Corte degradê, cabelo.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li><h2>{{ pedido.nome }}</h2></li>
          <li><span>Telefone: {{ pedido.telefone }}</span></li>
          <li>
            Descrição: {{ pedido.descricao }}
          </li>
        </ul>
      </CardContent>

      <CardFooter>
        <div class="flex">
          <ThumbsUp class="mr-4" />
          <ThumbsDown />
        </div>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-vue-next";

interface Pedido {
  id: number;
  nome: string;
  telefone: string;
  descricao: string;
}

const pedidos = ref<Pedido[]>([]);

onMounted(() => {
  axios.get<Pedido[]>('http://localhost:3000/pedidos')
    .then(response => {
      pedidos.value = response.data;
    })
    .catch(error => {
      console.error('Erro ao recuperar pedidos:', error);
    });
});
</script>

<style scoped>


</style>
