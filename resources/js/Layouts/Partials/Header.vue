<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';

defineProps({
    navLinks: Array,
    canLogin: Boolean,
    canRegister: Boolean,
    auth: Object,
});

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
        <nav class="sticky top-0 z-50 bg-coffee-espresso border-b-2 border-coffee-caramel/60">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-[72px] items-center justify-between">

                    <!-- Logo -->
                    <a href="/" class="flex items-center gap-1 shrink-0 font-display">
                        <span class="text-coffee-cream text-xl font-extrabold tracking-tight">Bon</span><span class="text-coffee-gold text-xl font-extrabold tracking-tight">bons</span>
                    </a>

                    <!-- Desktop nav -->
                    <div class="hidden lg:flex items-center gap-1">
                        <div v-for="(link, idx) in navLinks" :key="idx" class="relative group">
                            <Link
                                v-if="!link.children || link.children.length === 0"
                                :href="link.href"
                                class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-coffee-cream/80 hover:text-coffee-gold transition-colors rounded"
                            >{{ link.label }}</Link>

                            <button
                                v-else
                                type="button"
                                class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-coffee-cream/80 hover:text-coffee-gold transition-colors flex items-center gap-1 rounded"
                                @click="openDropdown = openDropdown === idx ? null : idx"
                            >
                                {{ link.label }}
                                <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                v-if="link.children && link.children.length > 0 && openDropdown === idx"
                                class="absolute left-0 top-full mt-1 w-48 bg-coffee-dark border border-coffee-caramel/30 shadow-xl rounded"
                            >
                                <Link
                                    v-for="(child, cidx) in link.children" :key="cidx"
                                    :href="child.href"
                                    class="block px-4 py-2.5 text-xs text-coffee-cream/75 hover:text-coffee-gold hover:bg-coffee-mid/40 transition-colors"
                                >{{ child.label }}</Link>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop CTA / auth -->
                    <div class="hidden lg:flex items-center gap-4">
                        <Link
                            v-if="canLogin && !$page.props.auth?.user"
                            :href="route('login')"
                            class="text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
                        >Login</Link>
                        <Link
                            v-if="canRegister && !$page.props.auth?.user"
                            :href="route('register')"
                            class="text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
                        >Register</Link>
                        <Link
                            v-if="canLogin && $page.props.auth?.user"
                            :href="route('dashboard')"
                            class="text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
                        >Dashboard</Link>
                        <a
                            href="#contact"
                            class="px-5 py-2 bg-coffee-caramel text-coffee-ivory text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-gold hover:text-coffee-espresso transition-all"
                        >Visit Us</a>
                    </div>

                    <!-- Mobile hamburger -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="lg:hidden p-2 text-coffee-cream hover:text-coffee-gold transition-colors"
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
            <div v-if="mobileMenuOpen" class="lg:hidden border-t border-coffee-caramel/30 bg-coffee-dark px-4 pb-5 pt-3 space-y-1">
                <template v-for="(link, idx) in navLinks" :key="idx">
                    <a
                        v-if="!link.children || link.children.length === 0"
                        :href="link.href"
                        @click="mobileMenuOpen = false"
                        class="block px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-coffee-cream/75 hover:text-coffee-gold transition-colors"
                    >{{ link.label }}</a>

                    <div v-else>
                        <button
                            @click="openDropdown = openDropdown === idx ? null : idx"
                            class="w-full text-left px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-coffee-cream/75 hover:text-coffee-gold transition-colors flex items-center justify-between"
                        >
                            {{ link.label }}
                            <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-if="openDropdown === idx" class="ml-4 mt-0.5 border-l border-coffee-caramel/30 pl-4 space-y-0.5">
                            <a
                                v-for="(child, cidx) in link.children" :key="cidx"
                                :href="child.href"
                                @click="mobileMenuOpen = false"
                                class="block py-2 text-xs text-coffee-cream/60 hover:text-coffee-gold transition-colors"
                            >{{ child.label }}</a>
                        </div>
                    </div>
                </template>

                <div class="pt-3 border-t border-coffee-caramel/30 flex flex-col gap-2">
                    <Link
                        v-if="canLogin && !$page.props.auth?.user"
                        :href="route('login')"
                        class="block text-center py-2 text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
                    >Login</Link>
                    <a
                        href="#contact"
                        @click="mobileMenuOpen = false"
                        class="block text-center py-2.5 bg-coffee-caramel text-coffee-ivory text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-gold hover:text-coffee-espresso transition-all"
                    >Visit Us</a>
                </div>
            </div>
        </nav>
    </header>
</template>
