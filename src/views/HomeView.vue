<template>
  <main>
    <h2>{{ app.appName }}</h2>
    <p>Visits this session: {{ app.visits }}</p>
    <button @click="app.reset()">Reset Count</button>
  </main>
</template>

<script setup lang="ts">
import { useAppStore } from '../stores/app';

const app = useAppStore();
app.increment();
</script>
