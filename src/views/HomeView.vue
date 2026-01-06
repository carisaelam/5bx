<template>
  <main>
    <h2>{{ app.appName }}</h2>

    <p>Visits (persisted): {{ app.visits }}</p>
    <p>Doubles: {{ doubled_visits }}</p>

    <div class="row">
      <button type="button" @click="increment">Increment</button>
      <button type="button" @click="reset">Reset</button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/app';

export default defineComponent({
  name: 'HomeView',

  data() {
    return {
      app: useAppStore(),
    };
  },

  computed: {
    doubled_visits(): number {
      return this.app.visits * 2;
    },
  },

  methods: {
    increment() {
      this.app.increment();
    },
    reset() {
      this.app.reset();
    },
  },
});
</script>

<style scoped>
.row {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}
button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}
button:hover {
  opacity: 0.9;
}
</style>
