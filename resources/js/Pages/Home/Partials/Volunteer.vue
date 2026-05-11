<script setup>
// Afternoon tea feature section
</script>

<template>
    <section id="afternoon-tea" class="bg-coffee-dark grid lg:grid-cols-2 min-h-[480px]">

        <!-- Content -->
        <div class="px-8 py-16 lg:px-16 flex flex-col justify-center">
            <p class="text-coffee-gold text-xs font-bold uppercase tracking-[0.22em] mb-5">The Full Experience</p>
            <h2 class="font-display text-coffee-cream font-extrabold leading-tight mb-5"
                style="font-size: clamp(1.9rem, 3.5vw, 2.8rem);">
                Afternoon Tea,<br/>done properly.
            </h2>
            <div class="w-14 h-0.5 bg-coffee-gold mb-7"></div>
            <p class="text-coffee-cream/65 leading-relaxed mb-4">
                Bonbons' afternoon tea is an occasion in itself. Think delicate finger sandwiches, warm scones with clotted cream and jam, and a tower of homemade cakes — all served on beautiful tiered stands.
            </p>
            <p class="text-coffee-cream/65 leading-relaxed mb-8">
                Choose to elevate it further with a glass of
                <strong class="text-coffee-gold">chilled prosecco</strong>
                and make an afternoon of it. Perfect for birthdays, hen parties, celebrations — or just because.
            </p>
            <a href="tel:01772497772"
               class="self-start px-6 py-3 bg-coffee-caramel text-coffee-ivory text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-gold hover:text-coffee-espresso transition-all">
                Book by Phone
            </a>
        </div>

        <!-- Decorative panel -->
        <div class="relative flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-0"
             style="background: linear-gradient(135deg, #6B3421 0%, #A0622A 100%);">
            <!-- crosshatch texture -->
            <div class="absolute inset-0 opacity-[0.06]"
                 style="background-image: repeating-linear-gradient(45deg, #FDF6EE 0, #FDF6EE 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>
            <div class="relative text-center px-10">
                <span class="block font-display font-extrabold text-coffee-cream/10 leading-none select-none"
                      style="font-size: 9rem;">AT</span>
                <h3 class="font-display italic text-coffee-cream text-2xl -mt-6">Afternoon Tea</h3>
                <p class="text-coffee-cream/55 text-sm mt-4 leading-loose">
                    Finger sandwiches · Warm scones<br/>
                    Homemade cakes · Specialty teas<br/>
                    <em class="text-coffee-cream/80 not-italic font-semibold">+ Prosecco if you please</em>
                </p>
            </div>
        </div>
    </section>
</template>
