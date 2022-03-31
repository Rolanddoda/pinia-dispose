<script setup>
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <main>
    Counter is: {{ counterStore.counter }}
    <button @click="counterStore.counter++">Increase</button>
    <button @click="counterStore.$dispose()">Dispose store</button>
  </main>
</template>
