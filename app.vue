<template>
  <div>
    <header>
      <h1>Welcome to My Nuxt App</h1>
    </header>

    <main>
      <!-- NuxtPage is essential to render the routed page content -->
      <NuxtPage />
    </main>

    <footer>
      <p>&copy; 2024 My Nuxt App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No additional configuration is needed here
</script>

<style scoped>
header, footer {
  text-align: center;
  padding: 1em;
}
</style>
