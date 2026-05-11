<script setup>
defineProps({
    site: { type: Object },
});
</script>

<template>
    <section id="home" class="relative overflow-hidden min-h-screen flex items-center bg-coffee-espresso">

        <!-- Warm radial glow -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coffee-mid/25 blur-3xl"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-coffee-caramel/8"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-coffee-caramel/10"></div>
        </div>

        <div class="relative w-full mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-28 text-center">

            <!-- Eyebrow -->
            <span class="inline-block mb-8 text-coffee-gold text-xs font-bold uppercase tracking-[0.25em]">
                <span class="opacity-60">—</span>&nbsp; Est. Penwortham &nbsp;<span class="opacity-60">—</span>
            </span>

            <!-- Headline -->
            <h1 class="font-display text-coffee-cream font-extrabold italic leading-[1.05] mb-8"
                style="font-size: clamp(3rem, 9vw, 7rem);">
                Where friends<br/>
                meet &amp; hearts<br/>
                <em class="not-italic text-coffee-gold">warm.</em>
            </h1>

            <!-- Sub -->
            <p class="font-display italic text-coffee-cream/65 max-w-xl mx-auto mb-12 leading-relaxed"
               style="font-size: clamp(1rem, 2vw, 1.25rem);">
                An atmospheric coffee bar and village tea rooms<br/>
                in the heart of Penwortham, Preston.
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap justify-center gap-4 mb-20">
                <a href="#menu"
                   class="px-8 py-4 bg-coffee-caramel text-coffee-ivory text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-gold hover:text-coffee-espresso transition-all hover:-translate-y-0.5 shadow-lg shadow-coffee-espresso/50">
                    Explore the Menu
                </a>
                <a href="#contact"
                   class="px-8 py-4 border border-coffee-caramel/40 text-coffee-cream text-xs font-bold uppercase tracking-widest rounded hover:border-coffee-gold hover:bg-coffee-caramel/10 transition-all">
                    Find Us
                </a>
            </div>

            <!-- Stats row -->
            <div class="inline-flex items-center gap-8 flex-wrap justify-center">
                <div class="text-center">
                    <p class="font-display text-2xl font-extrabold text-coffee-gold">Quality</p>
                    <p class="text-xs text-coffee-cream/45 uppercase tracking-widest mt-0.5">Coffee &amp; Tea</p>
                </div>
                <div class="w-px h-10 bg-coffee-caramel/30"></div>
                <div class="text-center">
                    <p class="font-display text-2xl font-extrabold text-coffee-gold">Homemade</p>
                    <p class="text-xs text-coffee-cream/45 uppercase tracking-widest mt-0.5">Cakes Daily</p>
                </div>
                <div class="w-px h-10 bg-coffee-caramel/30"></div>
                <div class="text-center">
                    <p class="font-display text-2xl font-extrabold text-coffee-gold">Afternoon</p>
                    <p class="text-xs text-coffee-cream/45 uppercase tracking-widest mt-0.5">Tea &amp; Prosecco</p>
                </div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
            <span class="text-[10px] uppercase tracking-[0.2em] text-coffee-caramel/50">Scroll</span>
            <div class="w-px h-12 bg-gradient-to-b from-coffee-caramel/50 to-transparent animate-scroll-down"></div>
        </div>
    </section>
</template>
