/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita o modo escuro por classe
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Mapeamento das variáveis CSS para cores do Tailwind
      colors: {
        'bg': 'var(--color-bg)',
        'fg': 'var(--color-fg)',
        'fg-strong': 'var(--color-fg-strong)',
        'surface': 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        'surface-3': 'var(--color-surface-3)',
        'border': 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        'accent': 'var(--color-accent)',
        'focus': 'var(--color-focus)',
        'star': 'var(--color-star)',
        'skeleton': 'var(--color-skeleton)',
        'skeleton-highlight': 'var(--color-skeleton-highlight)',
      },
      // Mapeamento das sombras
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
      },
      // Customização dos breakpoints para replicar o CSS original
      screens: {
        'sm': '481px',
        'md': '769px',
        'lg': '1025px',
      },
    },
  },
  plugins: [],
}