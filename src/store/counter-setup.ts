import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterSetupStore = defineStore('counterSetup', () => {

    const count = ref<number>(0);

    const lastChange = ref<string>();

    const squareCount = computed(() => count.value * count.value);

    const incrementBy = (value: number) => {

        count.value = count.value + value;

        lastChange.value = new Date().toUTCString();

    }

    const increment = () => incrementBy(1);

    return {
        count,
        lastChange,
        squareCount,
        increment,
        incrementBy
    }

})