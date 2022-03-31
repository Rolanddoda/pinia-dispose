import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);

  return {
    counter,
  };
});
