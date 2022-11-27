import { defineStore } from "pinia";

interface counterOptionsState {
    count: number,
    lastChange?: string | Date;
}

export const useCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({ count: 0, lastChange: undefined } as counterOptionsState),
    getters: {
      squareCount: (state) => state.count * state.count,
    },
    actions: {
      incrementBy(value : number) {
        this.count = this.count + value;
        this.lastChange = new Date().toUTCString();
      },
      increment() {
        this.incrementBy(1);
      },
    },
  })