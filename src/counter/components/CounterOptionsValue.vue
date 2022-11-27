<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';

const counterOptions = useCounterOptionsStore();

const { lastChange } = storeToRefs(counterOptions);

</script>

<template>
    <div>
        <hr>
        <h5>Ultímo cambio: {{ lastChange }}</h5>
        <hr>
        <a href="https://pinia.vuejs.org/core-concepts/#option-stores" target="_blank">Pagina Oficial de Pinia</a>
        <hr>
    </div>
</template>

<style scoped>

</style>
