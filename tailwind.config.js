/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // MEB Noir Editorial — Base canvas
        surface: '#070708',
        background: '#070708',
        'surface-container-lowest': '#040405',
        'surface-container-low': '#0b0b0d',
        'surface-container': '#111114',
        'surface-container-high': '#18181b',
        'surface-container-highest': '#222227',
        // Accent ignition (gold)
        primary: '#ffc665',
        'primary-container': '#e5a93c',
        'primary-fixed': '#ffdead',
        'primary-fixed-dim': '#fabc4d',
        'on-primary': '#281900',
        'on-primary-container': '#5e4000',
        // Foreground
        'on-surface': '#f5f3f0',
        'on-surface-variant': '#9d9890',
        outline: '#4a463d',
        'outline-variant': '#23211d',
        secondary: '#c6c6c7',
        'secondary-container': '#262628',
        'on-secondary': '#2f3131',
        'on-secondary-container': '#b4b5b5',
        // Structural lines
        line: '#27272A',
        'line-soft': '#1F1F23',
        // Muted / dim
        muted: '#8E8E93',
        dim: '#52525B',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Geist', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        // Typography scale from design system
        'display-hero': ['52px', { lineHeight: '54px', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-hero-mobile': ['40px', { lineHeight: '42px', letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-xl': ['32px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['24px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-sm': ['18px', { lineHeight: '22px', letterSpacing: '0em', fontWeight: '600' }],
        'body-editorial': ['16px', { lineHeight: '26px', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-default': ['14px', { lineHeight: '22px', letterSpacing: '0em', fontWeight: '400' }],
        'body-compact': ['12px', { lineHeight: '18px', letterSpacing: '0em', fontWeight: '400' }],
        'meta-technical': ['11px', { lineHeight: '14px', letterSpacing: '0.06em', fontWeight: '400' }],
        'label-caps': ['10px', { lineHeight: '12px', letterSpacing: '0.14em', fontWeight: '600' }],
      },
      spacing: {
        gutter: '1rem',
        'gutter-sm': '0.75rem',
        margin: '1.25rem',
        'margin-sm': '1rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
      boxShadow: {
        'ember': '0 0 16px rgba(229, 169, 60, 0.25)',
        'ember-lg': '0 0 25px rgba(255, 198, 101, 0.25)',
        'card': '0 24px 60px rgba(0, 0, 0, 0.9)',
        'card-soft': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'equalizer': {
          '0%, 100%': { height: '30%' },
          '50%': { height: '100%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'equalizer': 'equalizer 1s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}