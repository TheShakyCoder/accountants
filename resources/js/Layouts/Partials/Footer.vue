<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

defineProps({
    navLinks: { type: Array, default: () => [] },
});

const page = usePage();
const site = computed(() => page.props.site || {});
const telHref = computed(() => 'tel:' + (site.value.telephone || '').replace(/\s+/g, ''));
const year = new Date().getFullYear();
</script>

<template>
    <footer class="bg-firm-ink text-firm-cream/70">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid md:grid-cols-12 gap-10 mb-12">

                <!-- Brand block -->
                <div class="md:col-span-5">
                    <a href="/" class="inline-flex items-center gap-4 mb-5 bg-white/95 rounded-xl px-4 py-3">
                        <img
                            src="/media/logo.gif"
                            alt="19/6 — Preston Accountants & Tax Advisers"
                            class="h-14 w-auto"
                        />
                    </a>
                    <p class="text-sm leading-relaxed max-w-sm">
                        Nineteen and Six Ltd — a Penwortham-based firm of accountants and tax advisers,
                        nurturing small businesses and individuals across Preston and South Ribble.
                    </p>

                    <div class="mt-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-firm-cream/45">
                        <span class="px-2.5 py-1 border border-firm-cream/15 rounded">ICAEW / ACCA*</span>
                        <span class="px-2.5 py-1 border border-firm-cream/15 rounded">HMRC Agent</span>
                        <span class="px-2.5 py-1 border border-firm-cream/15 rounded">ICO Registered</span>
                    </div>
                </div>

                <!-- Quick links -->
                <div class="md:col-span-3">
                    <p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-4">Site</p>
                    <ul class="space-y-2.5">
                        <li v-for="link in navLinks" :key="link.label">
                            <a :href="link.href" class="text-sm hover:text-firm-gold transition-colors">
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="md:col-span-4">
                    <p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-4">Get in touch</p>
                    <ul class="space-y-2.5 text-sm">
                        <li class="flex items-start gap-2">
                            <svg class="w-4 h-4 mt-0.5 text-firm-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>{{ site.address }}</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-4 h-4 mt-0.5 text-firm-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                            </svg>
                            <a :href="telHref" class="hover:text-firm-gold transition-colors">{{ site.telephone }}</a>
                        </li>
                        <li v-if="site.email" class="flex items-start gap-2">
                            <svg class="w-4 h-4 mt-0.5 text-firm-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <a :href="'mailto:' + site.email" class="hover:text-firm-gold transition-colors">{{ site.email }}</a>
                        </li>
                        <li class="flex items-start gap-2 text-firm-cream/55 text-xs pt-1">
                            <svg class="w-4 h-4 mt-0.5 text-firm-gold/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span class="leading-relaxed" v-html="site.opening_times"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="pt-8 border-t border-firm-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-firm-cream/45">
                <p>&copy; {{ year }} Nineteen and Six Ltd. Registered in England &amp; Wales.</p>
                <div class="flex gap-5">
                    <a href="#" class="hover:text-firm-cream transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-firm-cream transition-colors">Terms of Use</a>
                    <a href="#" class="hover:text-firm-cream transition-colors">Cookies</a>
                </div>
            </div>

            <p class="mt-6 text-[10px] text-firm-cream/30 leading-relaxed">
                *Replace with the firm's actual professional body memberships, registration numbers and
                registered office address before going live.
            </p>
        </div>
    </footer>
</template>
