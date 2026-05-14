<script setup>
import HeartDivider from '@/Components/HeartDivider.vue';

const events = [
    {
        date: 'SEASONAL',
        title: 'Halloween Trick or Treat',
        time: 'October Half Term',
        location: 'In-Store',
        tag: 'Seasonal',
    },
    {
        date: 'SEASONAL',
        title: "Santa's Grotto Experience",
        time: 'December',
        location: 'In-Store',
        tag: 'Christmas',
    },
    {
        date: 'YEAR ROUND',
        title: 'Character Visits',
        time: 'Check our socials',
        location: 'In-Store',
        tag: 'For the Kids',
    },
    {
        date: 'AVAILABLE NOW',
        title: "Pick 'n' Mix Trailer Hire",
        time: 'Weddings & Events',
        location: 'Your Venue',
        tag: 'Hire',
    },
];
</script>

<template>
    <section id="events" class="py-24 bg-paper">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <!-- Section header -->
            <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
                <div>
                    <p class="font-hand text-coffee-caramel text-3xl mb-1">events &amp; hire</p>
                    <h2 class="font-display text-coffee-espresso font-extrabold leading-tight"
                        style="font-size: clamp(1.9rem, 3.5vw, 2.8rem);">
                        What's <em class="not-italic text-coffee-caramel">on</em>.
                    </h2>
                    <HeartDivider class="mt-5" />
                </div>
                <a href="#contact"
                    class="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-coffee-caramel/12 text-sm font-bold text-coffee-caramel hover:bg-coffee-caramel hover:text-coffee-ivory transition-colors">
                    Get in touch to book
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <!-- Cards — soft, rounded, with room to breathe -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <article
                    v-for="event in events" :key="event.title"
                    class="group bg-coffee-ivory rounded-3xl p-7 flex flex-col shadow-warm-sm hover:shadow-warm hover:-translate-y-1 transition-all duration-300"
                >
                    <span class="self-start text-xs font-bold tracking-wide text-coffee-caramel bg-coffee-caramel/10 rounded-full px-3 py-1 mb-4">
                        {{ event.date }}
                    </span>
                    <h3 class="font-display text-coffee-espresso font-bold text-lg leading-snug mb-4">
                        {{ event.title }}
                    </h3>
                    <HeartDivider class="mb-4" />
                    <div class="flex items-center gap-2 text-sm text-coffee-mid mb-1.5">
                        <svg class="w-4 h-4 text-coffee-caramel shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ event.time }}
                    </div>
                    <div class="flex items-center gap-2 text-sm text-coffee-mid mb-6">
                        <svg class="w-4 h-4 text-coffee-caramel shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {{ event.location }}
                    </div>
                    <span class="mt-auto self-start text-xs font-bold text-coffee-caramel bg-coffee-caramel/10 rounded-full px-4 py-1.5 group-hover:bg-coffee-caramel group-hover:text-coffee-ivory transition-colors">
                        {{ event.tag }}
                    </span>
                </article>
            </div>
        </div>
    </section>
</template>
