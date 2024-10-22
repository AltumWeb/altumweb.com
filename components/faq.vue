<template>
    <div class="w-full py-8 px-8 md:px-[10%] mt-10">
        <h2 class="text-2xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-16">
            Questions fréquemment posées
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
            <div>
                <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-300 py-4">
                    <div class="flex justify-between items-center cursor-pointer" @click="toggle(index)">
                        <h3 class="text-lg font-medium text-light-text dark:text-dark-text">{{ faq.question }}</h3>
                        <svg :class="{'rotate-180': activeIndex === index, 'rotate-0': activeIndex !== index}" class="transform transition-transform duration-300 stroke-light-text dark:stroke-dark-text" viewBox="0 0 24 24" stroke-width="2" width="24" height="24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div v-if="activeIndex === index" class="overflow-hidden transition-all duration-500 ease-in-out mt-2 text-gray-600" :style="{ maxHeight: activeIndex === index ? $refs.answer?.scrollHeight + 'px' : '0px', opacity: activeIndex === index ? 1 : 0 }">
                        <p class="text-light-text dark:text-dark-text">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>

            <div class="hidden md:flex justify-center md:justify-end">
                <img src="/assets/faq-dark.png" alt="F.A.Q" class="rounded-lg max-w-[50%] h-auto hidden dark:block" />
                <img src="/assets/faq-light.png" alt="F.A.Q" class="rounded-lg max-w-[50%] h-auto block dark:hidden" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const activeIndex = ref(null);
    const faqs = ref([
        {
            question: 'Combien de temps prend la création d\'un site Web ?',
            answer:
                'La durée de création d\'un site Web dépend de la complexité du projet. Un site Web simple peut être créé en quelques jours, tandis qu\'un site Web plus complexe peut prendre plusieurs semaines.',
        },
        {
            question: 'Quels sont vos tarifs ?',
            answer: 'Nos tarifs varient en fonction de la taille et de la complexité du projet. Contactez-nous pour obtenir un devis personnalisé gratuit.',
        },
        {
            question: 'Proposez-vous la mise en ligne de notre site Web ?',
            answer:
                'Oui, nous proposons un service de mise en ligne de site Web. Vous pouvez le préciser dans votre projet afin de l\'ajouter au devis.',
        },
    ]);

    function toggle(index) {
        activeIndex.value = activeIndex.value === index ? null : index;
    }
</script>

<style scoped>
    .rotate-180 {
        transform: rotate(180deg);
    }

    .transition-all {
        transition-property: max-height, opacity;
    }
</style>
