<script setup>
const services = [
    {
        icon: '👥',
        title: 'Community Groups',
        desc: 'Regular social groups for all ages — from toddler mornings to senior coffee clubs. Everyone is welcome.',
        color: 'bg-brand-50 border-brand-200',
        iconBg: 'bg-brand-100',
    },
    {
        icon: '🎨',
        title: 'Arts & Crafts',
        desc: 'Weekly art classes, pottery workshops, and creative sessions for children and adults alike.',
        color: 'bg-sky-50 border-sky-200',
        iconBg: 'bg-sky-100',
    },
    {
        icon: '⚽',
        title: 'Youth Activities',
        desc: 'After-school clubs, sports sessions, and holiday programmes to keep young people active and engaged.',
        color: 'bg-purple-50 border-purple-200',
        iconBg: 'bg-purple-100',
    },
    {
        icon: '🍽️',
        title: 'Community Café',
        desc: 'Enjoy a hot meal, fresh coffee, and friendly conversation in our welcoming on-site café.',
        color: 'bg-accent-50 border-orange-200',
        iconBg: 'bg-orange-100',
    },
    {
        icon: '🤝',
        title: 'Support Services',
        desc: 'Access advice, foodbank referrals, and wellbeing support from our team of trained volunteers.',
        color: 'bg-rose-50 border-rose-200',
        iconBg: 'bg-rose-100',
    },
    {
        icon: '🏛️',
        title: 'Venue Hire',
        desc: 'Affordable hall and room hire for parties, meetings, and community events throughout the year.',
        color: 'bg-amber-50 border-amber-200',
        iconBg: 'bg-amber-100',
    },
];
</script>

<template>
    <section id="services" class="py-20 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3 block">What We
                    Do</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-900">
                    Something for everyone
                </h2>
                <p class="text-warm-500 mt-4 max-w-xl mx-auto">
                    From early years to older adults, we run programmes and activities that bring people together.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="service in services" :key="service.title"
                    class="group p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 cursor-default"
                    :class="service.color">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                        :class="service.iconBg">
                        {{ service.icon }}
                    </div>
                    <h3 class="font-semibold text-warm-900 text-base mb-2">{{ service.title }}</h3>
                    <p class="text-sm text-warm-600 leading-relaxed">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>=