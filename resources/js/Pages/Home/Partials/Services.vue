<script setup>
const services = [
    {
        title: 'Accountancy',
        lede: 'Year-end accounts, bookkeeping and management reporting that tell you where the business actually stands.',
        items: [
            'Statutory accounts (Ltd & LLP)',
            'Sole trader & partnership accounts',
            'Monthly / quarterly management figures',
            'Bookkeeping (Xero · QuickBooks · FreeAgent)',
        ],
        icon: 'M3 4h18M3 9h18M3 14h18M3 19h12',
    },
    {
        title: 'Taxation',
        lede: 'Personal and business tax handled properly — returns filed on time, reliefs claimed, surprises avoided.',
        items: [
            'Self Assessment tax returns',
            'Corporation tax & tax planning',
            'VAT (Making Tax Digital ready)',
            'Capital gains, CIS & R&D claims',
        ],
        icon: 'M12 6v12m-6-6h12',
    },
    {
        title: 'Business Start-up',
        lede: 'From kitchen-table idea to trading business. We help you start it the right way, the first time.',
        items: [
            'Sole trader vs Ltd company advice',
            'Companies House registration',
            'HMRC, VAT & PAYE registrations',
            'Business plans & cashflow forecasts',
        ],
        icon: 'M3 21v-4l11-11 4 4-11 11H3zm14-14l-3-3',
    },
    {
        title: 'Added Value',
        lede: 'The bits a high-street firm tends to forget — payroll, advice, and being on the end of the phone.',
        items: [
            'Payroll, pensions & auto-enrolment',
            'HMRC investigations & disputes',
            'Inheritance & estate planning',
            'Ongoing advisory — fixed annual fee',
        ],
        icon: 'M5 13l4 4L19 7',
    },
];
</script>

<template>
    <section id="services" class="bg-white py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <!-- Section header -->
            <div class="max-w-3xl mb-14">
                <p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-3">What we do</p>
                <h2 class="font-display text-firm-navy font-semibold leading-tight"
                    style="font-size: clamp(2rem, 4vw, 2.85rem);">
                    Four core services. <span class="italic text-firm-steel">One personal practice.</span>
                </h2>
                <div class="h-1 w-12 bg-firm-gold mt-5"></div>
                <p class="text-firm-steel leading-relaxed mt-6">
                    We've kept the offering deliberately tight. Everything below is delivered in-house
                    by the same team you'll meet on day one — no hand-offs, no outsourcing, no surprises.
                </p>
            </div>

            <!-- Service grid -->
            <div class="grid md:grid-cols-2 gap-6">
                <article
                    v-for="(s, idx) in services" :key="s.title"
                    class="group relative bg-firm-paper border border-firm-line rounded-2xl p-8 sm:p-10 hover:bg-white hover:border-firm-navy/15 hover:shadow-firm transition-all duration-300"
                >
                    <div class="flex items-start gap-5 mb-5">
                        <span class="grid place-items-center h-12 w-12 rounded-lg bg-firm-navy text-firm-gold shrink-0 group-hover:bg-firm-ink transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path :d="s.icon" />
                            </svg>
                        </span>
                        <div class="flex-1">
                            <p class="text-xs font-semibold tracking-[0.18em] uppercase text-firm-gold/80 mb-1">0{{ idx + 1 }}</p>
                            <h3 class="font-display text-firm-navy text-2xl font-semibold leading-tight">{{ s.title }}</h3>
                        </div>
                    </div>

                    <p class="text-firm-steel leading-relaxed mb-6">{{ s.lede }}</p>

                    <ul class="space-y-2.5 mb-7">
                        <li v-for="item in s.items" :key="item" class="flex items-start gap-2.5 text-sm text-firm-steel">
                            <svg class="w-3.5 h-3.5 mt-1 text-firm-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{{ item }}</span>
                        </li>
                    </ul>

                    <a href="#contact" class="inline-flex items-center gap-2 text-sm font-semibold text-firm-navy group-hover:text-firm-gold transition-colors">
                        Discuss {{ s.title.toLowerCase() }}
                        <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </article>
            </div>
        </div>
    </section>
</template>
