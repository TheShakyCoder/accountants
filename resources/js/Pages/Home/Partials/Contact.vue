<script setup>
defineProps({
    site: Object,
});
</script>

<template>
    <section id="contact" class="bg-coffee-ivory py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="grid lg:grid-cols-2 gap-16 items-start">

                <!-- Left: info -->
                <div>
                    <p class="text-coffee-caramel text-xs font-bold uppercase tracking-[0.22em] mb-5">Find Us</p>
                    <h2 class="font-display text-coffee-espresso font-extrabold leading-tight mb-4"
                        style="font-size: clamp(1.9rem, 3.5vw, 2.8rem);">
                        Come and say hello.
                    </h2>
                    <div class="w-14 h-0.5 bg-coffee-gold mb-7"></div>
                    <p class="text-coffee-mid leading-relaxed mb-10">
                        We'd love to see you. Walk-ins are always welcome — for afternoon teas and larger parties, it's worth giving us a ring to reserve your table.
                    </p>

                    <div class="space-y-4">
                        <!-- Address -->
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-coffee-espresso rounded flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-coffee-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-coffee-caramel text-[10px] font-bold uppercase tracking-widest mb-1">Address</p>
                                <a
                                    href="https://maps.google.com/?q=44+Liverpool+Rd,+Penwortham,+Preston+PR1+0DQ"
                                    target="_blank" rel="noopener"
                                    class="text-coffee-espresso font-semibold hover:text-coffee-caramel transition-colors text-sm"
                                    v-html="site.address || '44 Liverpool Rd, Penwortham, Preston PR1 0DQ'"
                                ></a>
                            </div>
                        </div>

                        <!-- Phone -->
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-coffee-espresso rounded flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-coffee-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-coffee-caramel text-[10px] font-bold uppercase tracking-widest mb-1">Phone</p>
                                <a :href="'tel:' + site.telephone" class="text-coffee-espresso font-semibold hover:text-coffee-caramel transition-colors text-sm">
                                    {{ site.telephone }}
                                </a>
                            </div>
                        </div>

                        <!-- Email -->
                        <div v-if="site.email" class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-coffee-espresso rounded flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-coffee-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-coffee-caramel text-[10px] font-bold uppercase tracking-widest mb-1">Email</p>
                                <a :href="'mailto:' + site.email" class="text-coffee-espresso font-semibold hover:text-coffee-caramel transition-colors text-sm">
                                    {{ site.email }}
                                </a>
                            </div>
                        </div>

                        <!-- Opening hours -->
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-coffee-espresso rounded flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-coffee-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-coffee-caramel text-[10px] font-bold uppercase tracking-widest mb-1">Opening Hours</p>
                                <p class="text-coffee-espresso text-sm leading-relaxed"
                                   v-if="site.opening_times"
                                   v-html="site.opening_times">
                                </p>
                                <p v-else class="text-coffee-espresso text-sm leading-relaxed">
                                    Mon – Sat: 9:00 am – 4:30 pm<br/>
                                    Sunday: 10:00 am – 3:00 pm
                                </p>
                            </div>
                        </div>

                        <!-- Social links -->
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-coffee-espresso rounded flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-coffee-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-coffee-caramel text-[10px] font-bold uppercase tracking-widest mb-2">Follow Us</p>
                                <div class="flex gap-4">
                                    <a :href="site.social?.facebook" target="_blank" rel="noopener"
                                       class="text-sm font-bold text-[#1877F2] hover:underline">Facebook</a>
                                    <a :href="site.social?.instagram" target="_blank" rel="noopener"
                                       class="text-sm font-bold text-coffee-caramel hover:text-coffee-mid transition-colors">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: enquiry form -->
                <div class="bg-coffee-cream border border-coffee-caramel/25 rounded p-8 shadow-sm">
                    <h3 class="font-display text-coffee-espresso font-bold text-xl mb-6">Send an Enquiry</h3>
                    <form class="space-y-4">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-coffee-caramel mb-1.5">First name</label>
                                <input type="text" placeholder="Jane"
                                    class="w-full px-4 py-2.5 text-sm bg-white border border-coffee-caramel/30 rounded focus:outline-none focus:ring-2 focus:ring-coffee-caramel/50 focus:border-coffee-caramel transition text-coffee-espresso placeholder-coffee-mid/40" />
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-coffee-caramel mb-1.5">Last name</label>
                                <input type="text" placeholder="Smith"
                                    class="w-full px-4 py-2.5 text-sm bg-white border border-coffee-caramel/30 rounded focus:outline-none focus:ring-2 focus:ring-coffee-caramel/50 focus:border-coffee-caramel transition text-coffee-espresso placeholder-coffee-mid/40" />
                            </div>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-widest text-coffee-caramel mb-1.5">Email</label>
                            <input type="email" placeholder="jane@example.com"
                                class="w-full px-4 py-2.5 text-sm bg-white border border-coffee-caramel/30 rounded focus:outline-none focus:ring-2 focus:ring-coffee-caramel/50 focus:border-coffee-caramel transition text-coffee-espresso placeholder-coffee-mid/40" />
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-widest text-coffee-caramel mb-1.5">What's it about?</label>
                            <select class="w-full px-4 py-2.5 text-sm bg-white border border-coffee-caramel/30 rounded focus:outline-none focus:ring-2 focus:ring-coffee-caramel/50 focus:border-coffee-caramel transition text-coffee-espresso">
                                <option>General enquiry</option>
                                <option>Afternoon tea booking</option>
                                <option>Private event</option>
                                <option>Catering enquiry</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-widest text-coffee-caramel mb-1.5">Message</label>
                            <textarea rows="4" placeholder="Tell us what you're looking for..."
                                class="w-full px-4 py-2.5 text-sm bg-white border border-coffee-caramel/30 rounded focus:outline-none focus:ring-2 focus:ring-coffee-caramel/50 focus:border-coffee-caramel transition resize-none text-coffee-espresso placeholder-coffee-mid/40"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full py-3.5 bg-coffee-espresso text-coffee-cream text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-mid transition-all shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
