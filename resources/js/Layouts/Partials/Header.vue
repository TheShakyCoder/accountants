<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

const props = defineProps({
    navLinks: { type: Array, default: () => [] },
    canLogin: Boolean,
    canRegister: Boolean,
    auth: Object,
});

const page = usePage();
const site = computed(() => page.props.site || {});
const telephone = computed(() => site.value.telephone || '');
const telHref = computed(() => 'tel:' + (telephone.value || '').replace(/\s+/g, ''));

const mobileMenuOpen = ref(false);
const openDropdown   = ref(null);

function closeDropdowns() { openDropdown.value = null; }

function handleClickOutside(e) {
    if (!e.target.closest('nav')) closeDropdowns();
}

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
    <header>
        <!-- Slim utility strip — phone + "free consultation" cue -->
        <div class="hidden md:block bg-firm-ink text-firm-cream/80">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-9 text-xs">
                    <p class="flex items-center gap-2 tracking-wide">
                        <svg class="w-3.5 h-3.5 text-firm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Free initial consultations · Plain-English advice
                    </p>
                    <a :href="telHref" class="flex items-center gap-2 font-semibold hover:text-firm-gold transition-colors">
                        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        {{ telephone }}
                    </a>
                </div>
            </div>
        </div>

        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-firm-line">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-[84px] items-center justify-between gap-6">

                    <!-- Logo -->
                    <a href="/" class="flex items-center gap-3 shrink-0 group">
                        <img
                            src="/media/logo.gif"
                            alt="19/6 — Preston Accountants & Tax Advisers"
                            class="h-14 w-auto"
                        />
                    </a>

                    <!-- Desktop nav -->
                    <div class="hidden lg:flex items-center gap-1">
                        <div v-for="(link, idx) in navLinks" :key="idx" class="relative group">
                            <Link
                                v-if="!link.children || link.children.length === 0"
                                :href="link.href"
                                class="px-3.5 py-2 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors"
                            >{{ link.label }}</Link>

                            <button
                                v-else
                                type="button"
                                class="px-3.5 py-2 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors flex items-center gap-1"
                                @click="openDropdown = openDropdown === idx ? null : idx"
                            >
                                {{ link.label }}
                                <svg class="w-3.5 h-3.5 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                v-if="link.children && link.children.length > 0 && openDropdown === idx"
                                class="absolute left-0 top-full mt-1.5 w-56 bg-white rounded-lg shadow-firm border border-firm-line p-1.5"
                            >
                                <Link
                                    v-for="(child, cidx) in link.children" :key="cidx"
                                    :href="child.href"
                                    class="block px-3 py-2.5 text-sm text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors"
                                >{{ child.label }}</Link>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop CTA / auth -->
                    <div class="hidden lg:flex items-center gap-4">
                        <Link
                            v-if="canLogin && !$page.props.auth?.user"
                            :href="route('login')"
                            class="text-sm font-semibold text-firm-slate hover:text-firm-navy transition-colors"
                        >Client login</Link>
                        <Link
                            v-if="canLogin && $page.props.auth?.user"
                            :href="route('dashboard')"
                            class="text-sm font-semibold text-firm-slate hover:text-firm-navy transition-colors"
                        >Dashboard</Link>
                        <a
                            href="#contact"
                            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-firm-navy text-white text-sm font-semibold hover:bg-firm-ink transition-colors shadow-firm-sm"
                        >
                            Book a free consultation
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <!-- Mobile hamburger -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="lg:hidden p-2 text-firm-navy hover:text-firm-gold transition-colors"
                        :aria-expanded="mobileMenuOpen"
                        aria-label="Toggle menu"
                    >
                        <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="mobileMenuOpen" class="lg:hidden border-t border-firm-line bg-white px-4 pb-5 pt-3 space-y-1">
                <template v-for="(link, idx) in navLinks" :key="idx">
                    <a
                        v-if="!link.children || link.children.length === 0"
                        :href="link.href"
                        @click="mobileMenuOpen = false"
                        class="block px-3 py-2.5 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors"
                    >{{ link.label }}</a>

                    <div v-else>
                        <button
                            @click="openDropdown = openDropdown === idx ? null : idx"
                            class="w-full text-left px-3 py-2.5 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors flex items-center justify-between"
                        >
                            {{ link.label }}
                            <svg class="w-3.5 h-3.5 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-if="openDropdown === idx" class="ml-3 mt-0.5 border-l-2 border-firm-line pl-4 space-y-0.5">
                            <a
                                v-for="(child, cidx) in link.children" :key="cidx"
                                :href="child.href"
                                @click="mobileMenuOpen = false"
                                class="block py-2 text-sm text-firm-slate hover:text-firm-navy transition-colors"
                            >{{ child.label }}</a>
                        </div>
                    </div>
                </template>

                <div class="pt-3 border-t border-firm-line flex flex-col gap-2">
                    <a :href="telHref" class="block text-center py-2 text-sm font-semibold text-firm-slate hover:text-firm-navy transition-colors">
                        {{ telephone }}
                    </a>
                    <a
                        href="#contact"
                        @click="mobileMenuOpen = false"
                        class="block text-center py-3 rounded-md bg-firm-navy text-white text-sm font-semibold hover:bg-firm-ink transition-colors"
                    >Book a free consultation</a>
                </div>
            </div>
        </nav>
    </header>
</template>
