import { defineNuxtRouteMiddleware, useState, useRequestHeaders } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) {
    const headers = useRequestHeaders(['host'])
    const host = headers.host || ''
    const [subdomain] = host.split('.')

    if (subdomain && !['www', 'localhost'].includes(subdomain)) {
      const subdomainState = useState('subdomain', () => subdomain)
      subdomainState.value = subdomain
    }
  }
})
