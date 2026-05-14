<script setup>
/**
 * Soft heart-flanked divider — the homely replacement for hard rule lines.
 * Pulls the brand's heart motif (logo + garden sign) through every section.
 */
defineProps({
    align: { type: String, default: 'left' },   // 'left' | 'center'
    tone:  { type: String, default: 'caramel' }, // 'caramel' | 'gold' | 'cream'
});

const lineTone = {
    caramel: 'bg-coffee-caramel/35',
    gold:    'bg-coffee-gold/45',
    cream:   'bg-coffee-cream/35',
};
const heartTone = {
    caramel: 'text-coffee-caramel',
    gold:    'text-coffee-gold',
    cream:   'text-coffee-cream',
};
</script>

<template>
    <div
        class="flex items-center gap-3"
        :class="align === 'center' ? 'justify-center' : 'justify-start'"
        aria-hidden="true"
    >
        <span class="h-px w-10 rounded-full" :class="lineTone[tone]"></span>
        <svg class="h-4 w-4 shrink-0" :class="heartTone[tone]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span class="h-px rounded-full" :class="[lineTone[tone], align === 'center' ? 'w-10' : 'w-20']"></span>
    </div>
</template>
