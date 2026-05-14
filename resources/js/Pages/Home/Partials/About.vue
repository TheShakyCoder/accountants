<script setup>
const credentials = [
    'Free, no-obligation initial consultation',
    'Local Penwortham office, easy parking',
    'Limited company, sole trader and personal tax specialists',
    'Cloud bookkeeping (Xero, QuickBooks, FreeAgent)',
    'Fully digital — but we still meet in person',
];
</script>

<template>
    <section id="about" class="bg-firm-paper py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

                <!-- Heading column -->
                <div class="lg:col-span-5">
                    <p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-4">About 19/6</p>
                    <h2 class="font-display text-firm-navy font-semibold leading-tight mb-6"
                        style="font-size: clamp(2rem, 3.5vw, 2.75rem);">
                        Your accountant, in the village —
                        <span class="italic text-firm-steel">not in a tower.</span>
                    </h2>
                    <div class="h-1 w-12 bg-firm-gold mb-7"></div>
                    <p class="text-firm-steel leading-relaxed mb-5">
                        Nineteen and Six is a small, independent practice based in
                        <strong class="text-firm-navy">Penwortham, Preston</strong>. We work with
                        sole traders, limited companies, landlords and individuals from across Preston
                        and South Ribble who want a closer working relationship than a high-street
                        firm can offer.
                    </p>
                    <p class="text-firm-steel leading-relaxed mb-8">
                        Our aim is simple — to give you the best possible value for your accountancy
                        fees, and to make sure that when you have a question about tax, you've got
                        someone you can actually talk to.
                    </p>

                    <a href="#contact"
                       class="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-firm-navy text-white text-sm font-semibold hover:bg-firm-ink transition-colors shadow-firm-sm">
                        Arrange a free chat
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <!-- Credentials column -->
                <div class="lg:col-span-7">
                    <div class="bg-white rounded-2xl shadow-firm-sm border border-firm-line p-8 sm:p-10">
                        <p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-5">What you get</p>
                        <ul class="space-y-4">
                            <li v-for="c in credentials" :key="c" class="flex items-start gap-3.5">
                                <span class="mt-0.5 grid place-items-center h-7 w-7 rounded-full bg-firm-navy/5 text-firm-navy shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span class="text-firm-steel leading-snug pt-0.5">{{ c }}</span>
                            </li>
                        </ul>

                        <div class="mt-8 pt-7 border-t border-firm-line grid grid-cols-3 gap-6 text-center">
                            <div>
                                <p class="font-display text-3xl font-semibold text-firm-navy">15+</p>
                                <p class="text-xs uppercase tracking-wider text-firm-slate mt-1">Years advising</p>
                            </div>
                            <div>
                                <p class="font-display text-3xl font-semibold text-firm-navy">200+</p>
                                <p class="text-xs uppercase tracking-wider text-firm-slate mt-1">Local clients</p>
                            </div>
                            <div>
                                <p class="font-display text-3xl font-semibold text-firm-navy">£0</p>
                                <p class="text-xs uppercase tracking-wider text-firm-slate mt-1">First consultation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
