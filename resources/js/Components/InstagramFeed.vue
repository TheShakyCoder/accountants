<script setup>
import { usePage } from '@inertiajs/vue3';

const page = usePage();
const facebookUrl  = page.props.site.social?.facebook  || 'https://www.facebook.com/Penwortham2017';
const instagramUrl = page.props.site.social?.instagram || 'https://www.instagram.com/bonbonscoffeebar/';
</script>

<template>
    <section id="social" class="bg-coffee-cream py-20">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

            <p class="text-coffee-caramel text-xs font-bold uppercase tracking-[0.22em] mb-5">Stay Connected</p>
            <h2 class="font-display text-coffee-espresso font-extrabold mb-4"
                style="font-size: clamp(1.8rem, 3vw, 2.6rem);">
                Follow the Bonbons life.
            </h2>
            <p class="font-display italic text-coffee-mid text-lg mb-10">
                Behind-the-scenes, seasonal specials and regular giveaways — all on our socials.
            </p>

            <div class="flex flex-wrap justify-center gap-4 mb-6">
                <!-- Facebook -->
                <a
                    :href="facebookUrl"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md"
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
                    class="inline-flex items-center gap-3 px-8 py-4 text-white text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md"
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

            <p class="text-coffee-caramel/70 text-xs uppercase tracking-widest">
                Follow us for giveaways, updates and daily specials
            </p>
        </div>
    </section>
</template>
