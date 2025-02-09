<template>
  <div>
    <h1>Welcome to {{ handle }}'s homepage!</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const handle = route.params.handle
</script>
