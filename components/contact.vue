<template>
    <div id="contact" class="w-full py-8 px-4 sm:px-8 lg:px-[10%] mt-20">
        <div class="flex flex-col lg:flex-row items-stretch justify-between gap-16 py-8 text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background">
            <div class="flex-1 flex flex-col justify-between">
                <div>
                    <h1 class="text-2xl md:text-4xl font-bold">Contactez-nous !</h1>
                    <p class="text-sm text-light-text dark:text-dark-text mt-3">
                        Avez-vous un projet en tête ou besoin d'aide pour développer votre marque ? Contactez-nous et parlez-nous de votre projet pour obtenir un devis gratuit.
                    </p>

                    <div class="mt-8">
                        <ul class="mt-3">
                            <li class="flex items-center">
                                <a href="mailto:contact@altumweb.com" class="text-sm ml-3">
                                    <small class="block">Mail</small>
                                    <strong>contact@altumweb.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-8">
                        <ul class="mt-3">
                            <li class="flex items-center">
                                <a href="tel:+33782917075" class="text-sm ml-3">
                                    <small class="block">Téléphone</small>
                                    <strong>+33 7 82 91 70 75</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-8">
                        <ul class="mt-3">
                            <li class="flex items-center">
                                <p class="text-sm ml-3">
                                    <small class="block">Adresse</small>
                                    <strong>53 avenue Anatole France</strong>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="https://calendly.com/votre-lien" target="_blank" class="block text-center w-full sm:w-auto bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background hover:scale-105 ease duration-100 font-semibold rounded-md text-sm px-6 py-3">
                        Prendre rendez-vous gratuitement
                    </a>

                    <a href="mailto:contact@altumweb.com" class="block w-full sm:w-auto bg-light-secondary text-light-text dark:bg-dark-secondary dark:text-dark-text hover:scale-105 ease duration-100 font-semibold rounded-md text-sm px-6 py-3 text-center">
                        Obtenir un devis gratuit
                    </a>
                </div>
            </div>

            <form action="https://fabform.io/f/xxxxx" method="post" class="flex-1 flex flex-col justify-between space-y-4">
                <input type="text" name="name" placeholder="Nom complet" class="w-full rounded-md py-3 px-4 border border-gray-300 dark:border-gray-700 text-sm bg-light-background dark:bg-dark-background focus:ring-light-primary focus:border-light-primary" />
                <input type="email" name="email" placeholder="Email" class="w-full rounded-md py-3 px-4 border border-gray-300 dark:border-gray-700 text-sm bg-light-background dark:bg-dark-background focus:ring-light-primary focus:border-light-primary" />
                <textarea name="message" placeholder="Message" rows="6" class="w-full rounded-md px-4 py-3 border border-gray-300 dark:border-gray-700 text-sm bg-light-background dark:bg-dark-background focus:ring-light-primary focus:border-light-primary"></textarea>
                <button type="submit" class="bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background hover:scale-[101%] ease duration-100 font-semibold rounded-md text-sm px-6 py-3 w-full">
                    Envoyer
                </button>
            </form>
        </div>
    </div>
</template>
