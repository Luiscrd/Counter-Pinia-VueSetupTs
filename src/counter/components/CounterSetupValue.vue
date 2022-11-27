<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/store/counter-setup';

const counterOptions = useCounterSetupStore();

const { lastChange } = storeToRefs(counterOptions);

</script>

<template>
    <div>
        <hr>
        <h5>Ultímo cambio: {{ lastChange }}</h5>
        <hr>
        <a href="https://pinia.vuejs.org/core-concepts/#setup-stores" target="_blank">Pagina Oficial de Pinia</a>
        <hr>
    </div>
</template>

<style scoped>

</style>
