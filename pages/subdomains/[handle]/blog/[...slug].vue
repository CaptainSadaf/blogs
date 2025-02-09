<template>
  <div>
    <h1>Blog Article: {{ slug }} on Subdomain: {{ handle }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from '#imports'

const route = useRoute()
const handle = route.params.handle  // subdomain
const slug = route.params.slug      // blog article slug
</script>
