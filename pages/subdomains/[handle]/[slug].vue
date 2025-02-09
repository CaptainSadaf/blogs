<template>
  <div>
    <h1>Blog Article: {{ slug }}</h1>
    <p>Welcome to {{ handle }}'s blog!</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const handle = route.params.handle
const slug = route.params.slug
</script>
