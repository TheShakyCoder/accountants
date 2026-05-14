<script setup>
import { usePage } from '@inertiajs/vue3';
import HeartDivider from '@/Components/HeartDivider.vue';

const page = usePage();
const facebookUrl  = page.props.site.social?.facebook  || 'https://www.facebook.com/Penwortham2017';
const instagramUrl = page.props.site.social?.instagram || 'https://www.instagram.com/bonbonscoffeebar/';
</script>

<template>
    <section id="social" class="bg-paper py-20">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

            <p class="font-hand text-coffee-caramel text-3xl mb-1">stay connected</p>
            <h2 class="font-display text-coffee-espresso font-extrabold mb-4"
                style="font-size: clamp(1.8rem, 3vw, 2.6rem);">
                Follow the Bonbons life.
            </h2>
            <HeartDivider align="center" class="mb-6" />
            <p class="text-coffee-mid max-w-lg mx-auto mb-10 leading-relaxed">
                Behind-the-scenes, seasonal specials and regular giveaways — all on our socials.
            </p>

            <div class="flex flex-wrap justify-center gap-4 mb-6">
                <!-- Facebook -->
                <a
                    :href="facebookUrl"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1877F2] text-white text-sm font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-warm-sm"
                    aria-label="Follow Bonbons on Facebook"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                    Facebook
                </a>

                <!-- Instagram -->
                <a
                    :href="instagramUrl"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-warm-sm"
                    style="background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
                    aria-label="Follow Bonbons on Instagram"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    Instagram
                </a>
            </div>

            <p class="font-hand text-coffee-caramel text-2xl">
                follow us for giveaways, updates &amp; daily specials
            </p>
        </div>
    </section>
</template>
