<template>
  <div>
    <h1>Welcome to {{ handle }}'s homepage!</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['handle'])
</script>
