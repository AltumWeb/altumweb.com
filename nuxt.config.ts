// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  head: {
    title: 'AltumWeb | Agence Web à Troyes',
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/Logo%20clair%20avec%20fond.png' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: "AltumWeb est une agence de développement Web basée à Troyes." },
      { property: 'og:image', content: 'https://altumweb.com/assets/Logo%20clair%20sans%20fond.png' },
      { name: 'keywords', content: 'altumweb, altum, agence, web, troyes, site, refonte, seo' },
      { property: 'og:title', content: 'AltumWeb | Agence Web à Troyes' },
      { property: 'og:description', content: "AltumWeb est une agence de développement Web basée à Troyes." },
      { name: 'author', content: 'AltumWeb' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/f89af89e77.js', crossorigin: 'anonymous' }
    ]
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      serviceId: process.env.NUXT_PUBLIC_SERVICE_ID,
      templateId: process.env.NUXT_PUBLIC_TEMPLATE_ID,
      userId: process.env.NUXT_PUBLIC_USER_ID
    }
  }
})