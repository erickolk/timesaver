<template>
 <Calendar v-model="date" class="rounded-md border"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'

const date = ref(new Date())
</script>

<style scoped>
</style>
