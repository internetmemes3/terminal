/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'rounded-full',
    'grid-cols-1',
    'md:grid-cols-2',
    'terminal-dot-red',
    'terminal-dot-yellow',
    'terminal-dot-green',
    'terminal-window',
    'terminal-grid',
    'terminal-window-container'
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': 'var(--terminal-green)',
        'terminal-dark-green': 'var(--terminal-dark-green)',
      },
      fontFamily: {
        'mono': ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
} 