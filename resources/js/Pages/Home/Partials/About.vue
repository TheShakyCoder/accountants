<script setup>
// No extra imports needed
</script>

<template>
    <section id="about" class="grid lg:grid-cols-2 min-h-[560px]">

        <!-- Visual panel -->
        <div class="relative bg-coffee-dark flex items-center justify-center min-h-[340px] lg:min-h-0 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-coffee-espresso via-coffee-dark to-coffee-mid"></div>
            <!-- Decorative rings -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-coffee-caramel/10"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-coffee-caramel/15"></div>
            <!-- Cup SVG -->
            <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" fill="none" class="relative z-10 w-52 h-52 opacity-80">
                <ellipse cx="130" cy="197" rx="68" ry="13" fill="rgba(196,149,106,0.18)" stroke="rgba(196,149,106,0.45)" stroke-width="1.5"/>
                <path d="M86 118 Q83 186 130 194 Q177 186 174 118 Z" fill="rgba(107,52,33,0.55)" stroke="rgba(196,149,106,0.55)" stroke-width="1.5"/>
                <ellipse cx="130" cy="118" rx="44" ry="8.5" fill="rgba(196,149,106,0.12)" stroke="rgba(196,149,106,0.5)" stroke-width="1.5"/>
                <ellipse cx="130" cy="120" rx="37" ry="7" fill="rgba(28,10,0,0.85)"/>
                <path d="M118 120 Q124 114 130 120 Q136 126 142 120" stroke="rgba(245,230,211,0.45)" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="130" cy="120" r="2.5" fill="rgba(245,230,211,0.28)"/>
                <path d="M174 133 Q197 133 197 159 Q197 184 174 179" stroke="rgba(196,149,106,0.55)" stroke-width="2" fill="none" stroke-linecap="round"/>
                <path d="M113 107 Q109 94 113 81" stroke="rgba(245,230,211,0.25)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <path d="M130 104 Q126 89 130 74" stroke="rgba(245,230,211,0.25)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <path d="M147 107 Q151 94 147 81" stroke="rgba(245,230,211,0.25)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            </svg>
        </div>

        <!-- Text panel -->
        <div class="bg-coffee-cream px-8 py-16 lg:px-16 flex flex-col justify-center">
            <p class="text-coffee-caramel text-xs font-bold uppercase tracking-[0.22em] mb-5">Our Story</p>
            <h2 class="font-display text-coffee-espresso font-extrabold leading-tight mb-6"
                style="font-size: clamp(1.9rem, 3.5vw, 2.8rem);">
                A warm welcome,<br/>every single visit.
            </h2>
            <div class="w-14 h-0.5 bg-coffee-gold mb-7"></div>
            <p class="text-coffee-mid leading-relaxed mb-4">
                Tucked into the heart of <strong class="text-coffee-espresso">Penwortham village</strong>, Bonbons is more than just a coffee bar — it's a place where conversations linger, friendships deepen, and every cup is made with intention.
            </p>
            <p class="text-coffee-mid leading-relaxed mb-4">
                We serve <strong class="text-coffee-espresso">quality coffee and specialty teas</strong> alongside homemade cakes, hearty breakfasts and light lunches — all in an atmosphere that feels equal parts stylish and unhurried.
            </p>
            <p class="text-coffee-mid leading-relaxed mb-8">
                Whether you're catching up with friends, holding a business meeting, or simply treating yourself — Bonbons is your corner of calm in Preston.
            </p>
            <a href="#contact"
               class="self-start px-6 py-3 bg-coffee-espresso text-coffee-cream text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-mid transition-all">
                Come and see us
            </a>
        </div>
    </section>
</template>
