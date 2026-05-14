<script setup>
const pillars = [
    {
        title: 'Plain English',
        body: 'Tax explained in a way that actually makes sense. No jargon, no surprises.',
    },
    {
        title: 'Personal service',
        body: 'You speak to the person doing your accounts — not a call-centre or a chatbot.',
    },
    {
        title: 'Fixed fees',
        body: 'Agreed up front before any work begins. You only pay for what you asked for.',
    },
    {
        title: 'Flexible hours',
        body: 'Day, evening or Saturday appointments — fitted around your business.',
    },
];
</script>

<template>
    <section class="bg-white border-y border-firm-line">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-firm-line">
                <div v-for="p in pillars" :key="p.title" class="px-2 sm:px-6 py-6 sm:py-2 first:pl-0 last:pr-0">
                    <p class="font-display text-firm-navy text-xl font-semibold mb-2">{{ p.title }}</p>
                    <p class="text-sm text-firm-slate leading-relaxed">{{ p.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
