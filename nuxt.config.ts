export default defineNuxtConfig({
  ssr: true,

  hooks: {
    'pages:extend'(pages) {
      pages.push({
        path: '/subdomains/:handle',
        file: '~/pages/subdomains/[handle]/index.vue',
      })
      pages.push({
        path: '/subdomains/:handle/blog/:slug',
        file: '~/pages/subdomains/[handle]/blog/[slug].vue',
      })
    },
  },

  nitro: {
    prerender: {
      routes: [
        '/',                     // Main home page
        '/subdomains/sadaf',     // Example subdomain home page
        '/subdomains/sadaf/blog/article1', // Example blog page
      ],
      crawlLinks: true, // Enables crawling of links on pre-rendered pages
    },
  },

  compatibilityDate: '2024-11-15',
})