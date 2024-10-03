<template>
    <div class="min-h-screen flex flex-col justify-center items-center space-y-16 bg-light-background dark:bg-dark-background">
        <div class="w-full px-[10%] flex">
            <h2 class="text-2xl md:text-4xl font-bold text-light-text dark:text-dark-text">
                Des solutions web adaptées à vos besoins
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-[10%] z-10">
            <div class="border-2 border-light-primary dark:border-dark-primary p-6 rounded-md flex flex-col items-start hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">
                <div class="bg-light-primary dark:bg-dark-primary w-12 h-12 mb-4 rounded-full flex items-center justify-center">
                    <i class="fas fa-globe text-xl text-light-secondary dark:text-dark-secondary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">Site Vitrine</h3>
                <p class="text-light-text dark:text-dark-text">
                    Créez une landing page efficace avec WordPress ou développez une interface personnalisée en NuxtJS et TailwindCSS. Nos solutions de sites vitrines sont conçues pour offrir une présence en ligne rapide et optimisée pour vos visiteurs.
                </p>
            </div>

            <div class="border-2 border-light-primary dark:border-dark-primary p-6 rounded-md flex flex-col items-start hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">
                <div class="bg-light-primary dark:bg-dark-primary w-12 h-12 mb-4 rounded-full flex items-center justify-center">
                    <i class="fas fa-code text-xl text-light-secondary dark:text-dark-secondary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">Application Web</h3>
                <p class="text-light-text dark:text-dark-text">
                    Développez des applications web puissantes avec Symfony, NuxtJS et TailwindCSS. Nos experts créent des solutions robustes et scalables pour répondre aux besoins spécifiques de votre entreprise, qu'il s'agisse d'applications complexes ou de simples outils web.
                </p>
            </div>

            <div class="border-2 border-light-primary dark:border-dark-primary p-6 rounded-md flex flex-col items-start hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">
                <div class="bg-light-primary dark:bg-dark-primary w-12 h-12 mb-4 rounded-full flex items-center justify-center">
                    <i class="fas fa-chart-line text-xl text-light-secondary dark:text-dark-secondary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">Analyse et optimisation SEO</h3>
                <p class="text-light-text dark:text-dark-text">
                    Profitez d'un audit SEO gratuit pour comprendre les performances de votre site et découvrir des opportunités d'amélioration. Nous vous aidons à optimiser votre contenu, vos balises et vos performances pour améliorer votre classement sur les moteurs de recherche.
                </p>
            </div>

            <div class="border-2 border-light-primary dark:border-dark-primary p-6 rounded-md flex flex-col items-start hover:scale-[101%] hover:bg-gray-50 dark:hover:bg-gray-950 duration-100 ease-in">
                <div class="bg-light-primary dark:bg-dark-primary w-12 h-12 mb-4 rounded-full flex items-center justify-center">
                    <i class="fas fa-shield-alt text-xl text-light-secondary dark:text-dark-secondary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">Maintenance et sécurité</h3>
                <p class="text-light-text dark:text-dark-text">
                    Gardez votre site à jour et sécurisé avec nos services de maintenance. Nous nous assurons que votre site reste fonctionnel, protégé contre les vulnérabilités et bénéficie des dernières mises à jour logicielles, pour une tranquillité d'esprit maximale.
                </p>
            </div>
        </div>

        <a href="#" class="mt-8 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-text text-base sm:text-lg p-3 sm:p-4 rounded-md hover:scale-105 ease-in duration-100 cursor-pointer z-50">
            Obtenez un devis gratuit
        </a>
    </div>
</template>