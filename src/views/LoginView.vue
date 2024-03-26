<template>
    <div class="container-login">
        <div class="logo">
            <h1>Time Saver</h1>
        </div>

        <div>
            <h1>Crie sua conta</h1>
            <Input placeholder="Insira seu email..."/>
            <Input placeholder="Insira uma senha forte"/>
            <Input placeholder="Confirme a senha"/>
            <Button>Criar Conta</Button>
        </div>

        <div>
            <span>Já tem uma conta? <strong>Logar</strong></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
</script>