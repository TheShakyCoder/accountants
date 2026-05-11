<script setup>
const highlights = [
    { icon: '☕', label: 'Quality Coffee' },
    { icon: '🍵', label: 'Specialty Teas' },
    { icon: '🎂', label: 'Homemade Cakes' },
    { icon: '🥂', label: 'Afternoon Tea' },
    { icon: '🏅', label: 'Regular Giveaways' },
];
</script>

<template>
    <!-- Highlights strip -->
    <div class="bg-coffee-caramel py-4">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                <div
                    v-for="h in highlights" :key="h.label"
                    class="flex items-center gap-2.5 text-coffee-ivory"
                >
                    <span class="text-lg leading-none" aria-hidden="true">{{ h.icon }}</span>
                    <span class="text-xs font-bold uppercase tracking-widest">{{ h.label }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
