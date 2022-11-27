<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';

const counterOptions = useCounterOptionsStore();

const { lastChange } = storeToRefs(counterOptions);

</script>

<template>
    <div>
        <h5>Ultímo cambio: {{ lastChange }}</h5>
    </div>
</template>

<style scoped>

</style>
