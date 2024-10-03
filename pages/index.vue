<script setup>
import { useHead } from '@vueuse/head'

useHead({
    title: 'AltumWeb',
    link: [
        { rel: 'icon', type: 'image/png', href: '/assets/Logo%20clair%20avec%20fond.png' }
    ],
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    script: [
        { src: 'https://kit.fontawesome.com/f89af89e77.js', crossorigin: 'anonymous' }
    ]
})
</script>

<template>
    <Header />

    <Services />
</template>
