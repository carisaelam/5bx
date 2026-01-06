<script setup lang="ts"></script>

<template>
  <main class="wrap">
    <header class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </header>

    <RouterView />
  </main>
</template>

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
.nav {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}
</style>
