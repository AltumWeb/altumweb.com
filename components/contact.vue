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
                                    <strong>53 avenue Anatole France, 10000 Troyes</strong>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-8">
                        <ul class="mt-3">
                            <li class="flex items-center">
                                <p class="text-sm ml-3">
                                    <small class="block">Réseaux sociaux</small>
                                    <strong class="space-x-5">
                                        <a href="https://linkedin.com/company/altumweb" target="_blank"><i class="fab fa-linkedin text-3xl"></i></a>
                                        <a href="https://github.com/AltumWeb" target="_blank"><i class="fab fa-github text-3xl"></i></a>
                                        <a href="https://twitter.com/MathieuLePuil" target="_blank"><i class="fab fa-x-twitter text-3xl"></i></a>
                                    </strong>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="https://calendly.com/services-altumweb/entretien-gratuit-de-30-minutes" target="_blank" class="block text-center w-full sm:w-auto bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background hover:scale-105 ease duration-100 font-semibold rounded-md text-sm px-6 py-3">
                        Prendre rendez-vous gratuitement
                    </a>
                    <a href="mailto:contact@altumweb.com" class="block w-full sm:w-auto bg-light-secondary text-light-text dark:bg-dark-secondary dark:text-dark-text hover:scale-105 ease duration-100 font-semibold rounded-md text-sm px-6 py-3 text-center">
                        Obtenir un devis gratuit
                    </a>
                </div>
            </div>

            <form @submit.prevent="sendEmail" class="flex-1 flex flex-col justify-between space-y-4">
                <input
                    type="text"
                    name="name"
                    v-model="form.name"
                    placeholder="Nom complet"
                    class="w-full rounded-md py-3 px-4 border border-gray-300 dark:border-gray-700 text-sm bg-light-background dark:bg-dark-background focus:ring-light-primary focus:border-light-primary"
                />
                <input
                    type="email"
                    name="email"
                    v-model="form.email"
                    placeholder="Email"
                    class="w-full rounded-md py-3 px-4 border border-gray-300 dark:border-gray-700 text-sm bg-light-background dark:bg-dark-background focus:ring-light-primary focus:border-light-primary"
                />
                <textarea
                    name="message"
                    v-model="form.message"
                    placeholder="Message"
                    rows="6"
                    class="w-full rounded-md px-4 py-3 border border-gray-300 dark:border-gray-700 text-sm bg-light-background dark:bg-dark-background focus:ring-light-primary focus:border-light-primary"
                ></textarea>
                <button
                    type="submit"
                    class="bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background hover:scale-[101%] ease duration-100 font-semibold rounded-md text-sm px-6 py-3 w-full flex items-center justify-center"
                    :disabled="isLoading"
                >
                    <span v-if="isLoading">Envoi...</span>
                    <span v-else>Envoyer</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
            },
            isLoading: false,
        };
    },
    methods: {
        sendEmail() {
            const serviceID = 'service_u7fojaf';
            const templateID = 'template_3fsmp0m';
            const userID = '0WudSzsNcrhnh8UwS';

            this.isLoading = true; // Début du chargement

            emailjs
                .send(serviceID, templateID, this.form, userID)
                .then(
                    (response) => {
                        console.log('Email envoyé avec succès', response.status, response.text);
                        alert('Votre message a été envoyé avec succès!');
                        this.clearForm(); // Vider le formulaire après l'envoi
                    },
                    (error) => {
                        console.error('Erreur lors de l\'envoi de l\'email', error);
                        alert('Une erreur est survenue, veuillez réessayer.');
                    }
                )
                .finally(() => {
                    this.isLoading = false; // Fin du chargement
                });
        },
        clearForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        },
    },
};
</script>
