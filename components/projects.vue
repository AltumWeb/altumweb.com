<template>
    <div id="projets" class="min-h-screen py-16 bg-light-background dark:bg-dark-background">
        <div class="w-full px-4 md:px-[10%] flex mt-10">
            <h2 class="text-2xl md:text-4xl font-bold text-light-text dark:text-dark-text">
                Nos derniers projets
            </h2>
        </div>

        <div class="w-full px-4 md:px-[10%] flex flex-col mt-10 space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-5 rounded-md border-2 border-light-primary hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">
                <div class="md:col-span-2">
                    <img src="/assets/codeclipper.webp" alt="CodeClipper" class="w-full h-full object-cover md:rounded-l-[3px] bg-light-primary dark:bg-dark-primary">
                </div>
                <div class="md:col-span-3 flex flex-col justify-center text-light-text dark:text-dark-text">
                    <div class="flex justify-between px-5 py-3 w-full">
                        <h3 class="text-xl font-medium">CodeClipper</h3>
                        <ul class="flex items-center justify-center space-x-1">
                            <li><i class="fa-brands fa-symfony"></i></li>
                            <li><img src="/assets/tailwind.webp" alt="TailwindCSS Logo" class="w-5"></li>
                        </ul>
                    </div>
                    <div class="px-5 py-3 w-full">
                        <p>CodeClipper est un SaaS qui permet de créer, stocker et partager des extraits de code dans différentes langues de programmation. Il propose des fonctionnalités pour organiser et retrouver facilement ses snippets, avec des options de partage public ou privé. Il offre un plan gratuit pour un nombre limité d'extraits, et un plan premium avec un accès illimité.</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-5 rounded-md border-2 border-light-primary hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">
                <div class="md:col-span-3 flex flex-col justify-center order-last md:order-none text-light-text dark:text-dark-text">
                    <div class="flex justify-between px-5 py-3 w-full">
                        <h3 class="text-xl font-medium">ExerDevAI</h3>
                        <ul class="flex items-center justify-center space-x-1">
                            <li><i class="fa-brands fa-symfony"></i></li>
                            <li><img src="/assets/tailwind.webp" alt="TailwindCSS Logo" class="w-5"></li>
                            <li><img src="/assets/openai.svg" alt="OpenAI Logo" class="w-4"></li>
                        </ul>
                    </div>
                    <div class="px-5 py-3 w-full">
                        <p>ExerDevAI est un outil qui génère des exercices de développement personnalisés en fonction de critères définis par l'utilisateur (durée, difficulté, langage de programmation, niveau, etc.). Il utilise l'API d'OpenAI et propose des exercices en plusieurs langages comme PHP, JavaScript, Python et Java.</p>
                    </div>
                </div>
                <div class="md:col-span-2 order-first md:order-none">
                    <img src="/assets/exerdevai.webp" alt="ExerDevAI" class="w-full h-full object-cover md:rounded-r-[3px]">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-5 rounded-md border-2 border-light-primary hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">
                <div class="md:col-span-2">
                    <img src="/assets/SymStartSaaS.webp" alt="SymStartSaaS" class="w-full h-full object-cover md:rounded-l-[3px]">
                </div>
                <div class="md:col-span-3 flex flex-col justify-center text-light-text dark:text-dark-text">
                    <div class="flex justify-between px-5 py-3 w-full">
                        <h3 class="text-xl font-medium">SymStartSaaS</h3>
                        <ul class="flex items-center justify-center space-x-1">
                            <li><i class="fa-brands fa-symfony"></i></li>
                            <li><img src="/assets/nuxtjs.webp" alt="Nuxt Logo" class="w-5"></li>
                            <li><img src="/assets/tailwind.webp" alt="TailwindCSS Logo" class="w-5"></li>
                        </ul>
                    </div>
                    <div class="px-5 py-3 w-full">
                        <p>SymStartSaaS est un projet de base Symfony conçu pour les applications SaaS. Il inclut des éléments comme TailwindCSS, la gestion des utilisateurs, la création de comptes via GitHub, Google ou Discord, ainsi que des paiements intégrés avec Stripe.</p>
                    </div>
                </div>
            </div>

<!--            <div class="grid grid-cols-1 md:grid-cols-5 rounded-md border-2 border-light-primary hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">-->
<!--                <div class="md:col-span-3 flex flex-col justify-center order-last md:order-none text-light-text dark:text-dark-text">-->
<!--                    <div class="flex justify-between px-5 py-3 w-full">-->
<!--                        <h3 class="text-xl font-medium">CodeClipper</h3>-->
<!--                        <ul class="flex items-center justify-center space-x-1">-->
<!--                            <li><i class="fa-brands fa-symfony"></i></li>-->
<!--                            <li><i class="fa-brands fa-symfony"></i></li>-->
<!--                            <li><i class="fa-brands fa-symfony"></i></li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                    <div class="px-5 py-3 w-full">-->
<!--                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur commodi culpa dolores ea eius est fuga fugiat id iure minima non pariatur reiciendis rem rerum sed ullam, ut?</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="md:col-span-2 order-first md:order-none">-->
<!--                    <img src="/assets/codeclipper.webp" alt="CodeClipper" class="w-full h-full object-cover md:rounded-r-[3px]">-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>
<script setup lang="ts">
</script>