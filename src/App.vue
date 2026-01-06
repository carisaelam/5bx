<template>
  <main class="wrap">
    <h1>My Vue App</h1>
    <p>Deployed with Netlify ✅</p>
    <p class="muted">Updated: {{ today }}</p>
  </main>
</template>

<script setup lang="ts">
const today = new Date().toLocaleDateString();
</script>

<style scoped>
.wrap {
  max-width: 720px;
  margin: 64px auto;
  padding: 0 16px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
}
.muted {
  opacity: 0.7;
}
</style>
