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
                        <svg :class="{'rotate-180': activeIndex === index, 'rotate-0': activeIndex !== index}" class="transform transition-transform duration-300" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
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
            question: 'Can I use Flowbite in open-source projects?',
            answer:
                'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
        },
        {
            question: 'Is there a Figma file available?',
            answer: 'Yes, Flowbite includes a Figma file so you can prototype and design before development.',
        },
        {
            question: 'What are the differences between Flowbite and Tailwind UI?',
            answer:
                'Flowbite is open-source and free to use, whereas Tailwind UI offers premium components developed by the Tailwind CSS team.',
        },
        {
            question: 'What about browser support?',
            answer: 'Flowbite supports all modern browsers, including Chrome, Firefox, Safari, and Edge.',
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
