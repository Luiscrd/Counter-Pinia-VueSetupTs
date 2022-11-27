<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';

const counterOptions = useCounterOptionsStore();

const { count, squareCount } = storeToRefs(counterOptions);

const value = ref<number>(2);

const { increment, incrementBy } = counterOptions;


</script>

<template>
    <div class="text-center">
        <h1>Counter Options Pinia</h1>
        <hr>
        <h2 class="mb-2">Contador: {{ count }}</h2>
        <h2 class="mb-4">Contador ² : {{ squareCount }}</h2>
        <div class="input-group mb-3">
            <button class="btn btn-outline-warning" type="button" @click="increment()">Incrementar + 1</button>
            <input type="number" class="form-control" placeholder="Introduce cantidad" v-model="value">
            <button class="btn btn-outline-warning" type="button" @click="incrementBy(value)">Incrementar + {{ value
            }}</button>
        </div>
        <button type="button" class="btn btn-outline-warning btn-reset" @click="counterOptions.$reset()">Reset</button>
        <hr>
        <CounterOptionsValue />
        <hr>
    </div>
</template>

<style scoped>
input {
    background-color: #d9d9d9;
}

.btn-reset {
    width: 100%;
}
</style>