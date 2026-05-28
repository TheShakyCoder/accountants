import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans:    ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Fraunces', 'Georgia', ...defaultTheme.fontFamily.serif],
                serif:   ['Fraunces', 'Georgia', ...defaultTheme.fontFamily.serif],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.75rem',
            },
            boxShadow: {
                'firm-sm': '0 6px 18px -6px rgba(15, 23, 42, 0.18)',
                'firm':    '0 18px 44px -18px rgba(15, 23, 42, 0.25)',
                'firm-lg': '0 32px 70px -28px rgba(15, 23, 42, 0.35)',
            },
            colors: {
                // ── Acme firm palette ─────────────────────────────────────
                // Pulled from the logo: deep ink-navy disc, with cream + warm gold.
                firm: {
                    navy:    '#1B2654',  // primary — logo disc
                    ink:     '#0F1838',  // headings / deep surfaces
                    steel:   '#334155',  // body copy on light bg
                    slate:   '#64748B',  // secondary body / meta
                    line:    '#E2E5EC',  // hairlines / dividers
                    paper:   '#F7F8FB',  // page bg
                    cream:   '#FBF8F1',  // warm cream tint
                    gold:    '#C9A961',  // accent — warmth + trust
                    'gold-soft': '#E2C788',
                },
                // ── Legacy palettes kept for internal/admin pages ─────────
                brand: {
                    50:  '#fff0f6',
                    100: '#ffe0ed',
                    200: '#ffc2db',
                    300: '#ff8abb',
                    400: '#ff4d94',
                    500: '#ff1a75',
                    600: '#e60066',
                    700: '#c20055',
                    800: '#9e0046',
                    900: '#78003a',
                },
                accent: {
                    50:  '#fffbeb',
                    100: '#fff3c4',
                    200: '#ffe588',
                    300: '#ffd43b',
                    400: '#ffc107',
                    500: '#f5a623',
                    600: '#e09100',
                    700: '#b87300',
                },
                warm: {
                    50:  '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                },
            },
            keyframes: {
                'fade-up': {
                    '0%':   { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'sun-spin': {
                    '0%':   { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'fade-up':  'fade-up 0.6s ease-out both',
                'sun-spin': 'sun-spin 60s linear infinite',
            },
        },
    },

    plugins: [forms, typography],
};
