<script setup>
import {useHead} from '@vueuse/head'

useHead({
    title: 'AltumWeb - Mentions Légales',
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

<div class="min-h-screen">
    <div class="h-full flex flex-col items-center justify-center mt-16 mx-[10%]">
        <h2 class="text-3xl sm:!text-6xl text-light-text dark:text-dark-text font-bold">
            Mentions légales
        </h2>
    </div>

    <div class="w-[70%] mx-[15%]">
        <p class="mt-16 text-light-text dark:text-dark-text">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site altumweb.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.

        </p>

        <h3 class="text-light-text dark:text-dark-text text-xl font-bold mt-16">Éditeur :</h3>
        <p class="text-light-text dark:text-dark-text mt-5 font-lg">
            Nom : AltumWeb <br />Adresse : 53 avenue Anatole France, 10000 Troyes<br />Statut : Entreprise Individuelle (EI)<br /> Numéro d'inscription au RCS : 977990977
        </p>

        <h3 class="text-light-text dark:text-dark-text text-xl font-bold mt-16">Contact :</h3>
        <p class="text-light-text dark:text-dark-text mt-5 font-lg">
            Adresse e-mail : contact@altumweb.fr<br />Numéro de téléphone : 07.82.91.70.75
        </p>

        <h3 class="text-light-text dark:text-dark-text text-xl font-bold mt-16">Hébergeur :</h3>
        <p class="text-light-text dark:text-dark-text mt-5 font-lg mb-[5%]">
            Nom ou raison sociale de l'hébergeur : PulseHeberg<br />Adresse : 9 Boulevard de Strasbourg, 83000 Toulon
        </p>
    </div>
</div>
</template>