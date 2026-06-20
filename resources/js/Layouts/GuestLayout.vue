<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
});
</script>

<template>
    <div class="min-h-screen flex font-sans antialiased">

        <!-- ── Left brand panel ── -->
        <div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-firm-hero text-firm-cream relative overflow-hidden">

            <!-- Sunburst ornaments echoing the logo's serrated edge -->
            <div
                aria-hidden="true"
                class="pointer-events-none absolute -right-40 -top-40 w-[520px] h-[520px] text-firm-gold/15 firm-sunburst animate-sun-spin"
            ></div>
            <div
                aria-hidden="true"
                class="pointer-events-none absolute -left-32 -bottom-32 w-[420px] h-[420px] text-firm-navy/40 firm-sunburst animate-sun-spin"
            ></div>

            <!-- Back to site -->
            <div class="relative px-10 pt-10">
                <Link href="/" class="inline-flex items-center gap-2 text-firm-cream/60 hover:text-firm-gold text-sm font-medium transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Back to website
                </Link>
            </div>

            <!-- Centre content -->
            <div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">
                <Link href="/" class="inline-flex items-center gap-4 mb-10" aria-label="Acme — Preston Accountants & Tax Advisers">
                    <span class="font-display text-4xl font-semibold tracking-tight text-firm-cream">Acme</span>
                </Link>

                <span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-5">
                    <span class="h-px w-8 bg-firm-gold/60"></span>
                    Client Portal
                </span>

                <h1 class="font-display text-3xl xl:text-4xl font-medium leading-tight tracking-tight text-firm-cream mb-4">
                    Your accounts,
                    <span class="block italic text-firm-gold-soft">always to hand.</span>
                </h1>
                <p class="text-firm-cream/75 text-base leading-relaxed mb-10 max-w-sm">
                    Share documents, review draft accounts, and keep in touch with your accountant —
                    all from one secure place.
                </p>

                <!-- Feature bullets -->
                <ul class="space-y-4">
                    <li v-for="item in [
                        'Securely send and receive documents',
                        'Review draft accounts and tax returns',
                        'Track HMRC deadlines and submissions',
                        'Message your accountant directly',
                    ]" :key="item" class="flex items-start gap-3 text-firm-cream/80 text-sm">
                        <span class="mt-0.5 w-5 h-5 rounded-full border border-firm-gold/60 flex items-center justify-center text-firm-gold shrink-0">
                            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                        </span>
                        {{ item }}
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <div class="relative px-10 pb-10 flex items-center justify-between text-xs text-firm-cream/45">
                <p>&copy; {{ new Date().getFullYear() }} Acme Ltd</p>
                <p class="uppercase tracking-[0.22em]">Preston · South Ribble</p>
            </div>
        </div>

        <!-- ── Right form panel ── -->
        <div class="flex-1 flex flex-col bg-firm-paper">

            <!-- Mobile header -->
            <div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4 border-b border-firm-line bg-white/80 backdrop-blur">
                <Link href="/" class="flex items-center gap-3" aria-label="Acme — Preston Accountants & Tax Advisers">
                    <span class="font-display text-2xl font-semibold tracking-tight text-firm-navy">Acme</span>
                </Link>
                <Link href="/" class="text-xs text-firm-slate hover:text-firm-navy transition-colors font-medium">
                    Back to site
                </Link>
            </div>

            <!-- Form area -->
            <div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10">
                <div class="w-full max-w-md">

                    <!-- Heading slot (title/subtitle set per page) -->
                    <div v-if="title || subtitle" class="mb-8">
                        <h2 class="font-display text-3xl font-medium tracking-tight text-firm-ink">{{ title }}</h2>
                        <p v-if="subtitle" class="text-firm-slate text-sm mt-2">{{ subtitle }}</p>
                    </div>

                    <slot />
                </div>
            </div>
        </div>

    </div>
</template>
