<template>
  <div>
    <h1>Blog Article: {{ slug }}</h1>
    <p>Welcome to {{ handle }}'s blog article page.</p>
  </div>
</template>

<script setup>
defineProps(['handle', 'slug'])
</script>
