<template>
  <div>
    <h1 v-if="subdomain">Welcome to the {{ subdomain }} subdomain!</h1>
    <p v-else>Welcome to the main site!</p>
  </div>
</template>

<script setup>
const subdomain = useState('subdomain')
</script>
