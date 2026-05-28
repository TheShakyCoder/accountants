<script setup>
import { computed } from 'vue';

const props = defineProps({
    site: { type: Object, default: () => ({}) },
});

const telHref = computed(() => 'tel:' + (props.site.telephone || '').replace(/\s+/g, ''));
</script>

<template>
    <section id="contact" class="bg-white py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                <!-- Left: info -->
                <div class="lg:col-span-5">
                    <p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-3">Contact</p>
                    <h2 class="font-display text-firm-navy font-semibold leading-tight mb-5"
                        style="font-size: clamp(1.9rem, 3.5vw, 2.6rem);">
                        Let's have
                        <span class="italic text-firm-steel">a proper chat.</span>
                    </h2>
                    <div class="h-1 w-12 bg-firm-gold mb-7"></div>
                    <p class="text-firm-steel leading-relaxed mb-10">
                        First consultations are free and entirely no-obligation. Whether you're starting
                        out, switching from another accountant, or just have a question — call, email,
                        or use the form. We'll get back to you the same working day.
                    </p>

                    <div class="space-y-3">
                        <a :href="telHref" class="flex items-center gap-4 bg-firm-paper rounded-xl p-4 border border-firm-line hover:border-firm-navy/20 transition-colors group">
                            <div class="w-11 h-11 bg-firm-navy text-firm-gold rounded-lg flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-xs uppercase tracking-wider text-firm-slate mb-0.5">Call us</p>
                                <p class="font-semibold text-firm-navy group-hover:text-firm-gold transition-colors">{{ site.telephone }}</p>
                            </div>
                        </a>

                        <a v-if="site.email" :href="'mailto:' + site.email" class="flex items-center gap-4 bg-firm-paper rounded-xl p-4 border border-firm-line hover:border-firm-navy/20 transition-colors group">
                            <div class="w-11 h-11 bg-firm-navy text-firm-gold rounded-lg flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-xs uppercase tracking-wider text-firm-slate mb-0.5">Email</p>
                                <p class="font-semibold text-firm-navy group-hover:text-firm-gold transition-colors">{{ site.email }}</p>
                            </div>
                        </a>

                        <div class="flex items-start gap-4 bg-firm-paper rounded-xl p-4 border border-firm-line">
                            <div class="w-11 h-11 bg-firm-navy text-firm-gold rounded-lg flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-xs uppercase tracking-wider text-firm-slate mb-0.5">Office</p>
                                <p class="font-semibold text-firm-navy">{{ site.address || 'Penwortham, Preston, Lancashire' }}</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 bg-firm-paper rounded-xl p-4 border border-firm-line">
                            <div class="w-11 h-11 bg-firm-navy text-firm-gold rounded-lg flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-xs uppercase tracking-wider text-firm-slate mb-0.5">Opening hours</p>
                                <p class="text-sm text-firm-navy leading-relaxed" v-html="site.opening_times || 'Monday – Friday: 9:00am – 5:30pm'"></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: enquiry form -->
                <div class="lg:col-span-7">
                    <div class="bg-firm-paper border border-firm-line rounded-2xl p-8 sm:p-10 shadow-firm-sm">
                        <h3 class="font-display text-firm-navy font-semibold text-2xl mb-2">Request a callback</h3>
                        <p class="text-firm-slate text-sm mb-7">No obligation. We'll respond the same working day.</p>
                        <form class="space-y-4">
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-semibold uppercase tracking-wider text-firm-slate mb-1.5">First name</label>
                                    <input type="text" placeholder="Jane"
                                        class="w-full px-4 py-3 text-sm bg-white border border-firm-line rounded-md focus:outline-none focus:ring-2 focus:ring-firm-gold/40 focus:border-firm-gold transition text-firm-navy placeholder-firm-slate/50" />
                                </div>
                                <div>
                                    <label class="block text-xs font-semibold uppercase tracking-wider text-firm-slate mb-1.5">Last name</label>
                                    <input type="text" placeholder="Smith"
                                        class="w-full px-4 py-3 text-sm bg-white border border-firm-line rounded-md focus:outline-none focus:ring-2 focus:ring-firm-gold/40 focus:border-firm-gold transition text-firm-navy placeholder-firm-slate/50" />
                                </div>
                            </div>
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-semibold uppercase tracking-wider text-firm-slate mb-1.5">Email</label>
                                    <input type="email" placeholder="jane@example.com"
                                        class="w-full px-4 py-3 text-sm bg-white border border-firm-line rounded-md focus:outline-none focus:ring-2 focus:ring-firm-gold/40 focus:border-firm-gold transition text-firm-navy placeholder-firm-slate/50" />
                                </div>
                                <div>
                                    <label class="block text-xs font-semibold uppercase tracking-wider text-firm-slate mb-1.5">Telephone</label>
                                    <input type="tel" placeholder="01772 ..."
                                        class="w-full px-4 py-3 text-sm bg-white border border-firm-line rounded-md focus:outline-none focus:ring-2 focus:ring-firm-gold/40 focus:border-firm-gold transition text-firm-navy placeholder-firm-slate/50" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold uppercase tracking-wider text-firm-slate mb-1.5">I'd like to talk about</label>
                                <select class="w-full px-4 py-3 text-sm bg-white border border-firm-line rounded-md focus:outline-none focus:ring-2 focus:ring-firm-gold/40 focus:border-firm-gold transition text-firm-navy">
                                    <option>Switching accountants</option>
                                    <option>Self Assessment / personal tax</option>
                                    <option>Limited company accounts</option>
                                    <option>Starting a new business</option>
                                    <option>Payroll &amp; pensions</option>
                                    <option>HMRC investigation</option>
                                    <option>Something else</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold uppercase tracking-wider text-firm-slate mb-1.5">Brief message</label>
                                <textarea rows="4" placeholder="A sentence or two about your situation..."
                                    class="w-full px-4 py-3 text-sm bg-white border border-firm-line rounded-md focus:outline-none focus:ring-2 focus:ring-firm-gold/40 focus:border-firm-gold transition resize-none text-firm-navy placeholder-firm-slate/50"></textarea>
                            </div>
                            <div class="flex items-start gap-2.5 text-xs text-firm-slate">
                                <input type="checkbox" class="mt-0.5 rounded border-firm-line text-firm-navy focus:ring-firm-gold/40" />
                                <p>I'm happy for Acme to contact me about my enquiry. We won't pass your details on, and we won't add you to a marketing list.</p>
                            </div>
                            <button type="submit"
                                class="w-full py-3.5 rounded-md bg-firm-navy text-white text-sm font-semibold hover:bg-firm-ink transition-colors shadow-firm-sm">
                                Send enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
