<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import Hero from '@/Pages/Home/Partials/Hero.vue';
import Stats from '@/Pages/Home/Partials/Stats.vue';
import About from '@/Pages/Home/Partials/About.vue';
import Services from '@/Pages/Home/Partials/Services.vue';
import WhyUs from '@/Pages/Home/Partials/WhyUs.vue';
import News from '@/Pages/Home/Partials/News.vue';
import Contact from '@/Pages/Home/Partials/Contact.vue';
import Header from '@/Layouts/Partials/Header.vue';
import Footer from '@/Layouts/Partials/Footer.vue';

const page = usePage();

defineProps({
    canLogin: { type: Boolean },
    canRegister: { type: Boolean },
});

const site = page.props.site;
const navLinks = site?.nav_links ?? [];
</script>

<template>

    <Head :title="site.fullname" />

    <div class="font-sans antialiased text-firm-steel bg-white">

        <Header :navLinks="navLinks" :canLogin="canLogin" :canRegister="canRegister" />

        <Hero :site="site" />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <News />
        <Contact :site="site" />

        <Footer :navLinks="navLinks" />
    </div>
</template>
