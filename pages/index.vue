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
    ]
})
</script>

<template>
    <main class="px-4 md:px-10 lg:px-[10%] flex flex-col lg:flex-row items-center justify-around lg:justify-center" style="height: calc(100vh - 96px)">
        <div class="w-full flex flex-col items-start justify-center space-y-6 md:space-y-8 lg:space-y-10">
            <h1 class="font-semibold text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-light-text dark:text-dark-text">
                Améliorez votre présence en ligne avec un site web moderne et performant
            </h1>
            <h2 class="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl text-light-text dark:text-dark-text">
                Nous concevons des solutions web personnalisées, adaptées à vos besoins, avec un suivi clientèle de qualité.
            </h2>
            <div class="flex space-x-3 sm:space-x-5">
                <a href="#" class="bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-text text-base sm:text-lg p-3 sm:p-4 rounded-md hover:scale-105 ease-in duration-100 cursor-pointer">
                    Obtenir un devis
                </a>
                <a href="#" class="bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text text-base sm:text-lg p-3 sm:p-4 rounded-md hover:scale-105 ease-in duration-100 cursor-pointer">
                    Découvrir nos services
                </a>
            </div>
        </div>
        <div class="w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <img class="w-full lg:w-10/12 xl:w-4/5 2xl:w-2/3 mb-10 lg:mb-0" src="/assets/mosaique.png" alt="Mosaic">
        </div>
    </main>
</template>
