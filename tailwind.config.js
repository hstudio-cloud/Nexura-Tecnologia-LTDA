/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        nexura: {
          black: '#06060a',
          dark: '#0d0d14',
          card: '#12121c',
          border: '#1e1e2e',
          cyan: '#ff3b30',
          blue: '#9f1239',
          glow: '#ff3b3033',
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,59,48,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,59,48,0.03) 1px, transparent 1px)",
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,59,48,0.12) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,59,48,0.05) 0%, rgba(159,18,57,0.05) 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255,59,48,0.12)' },
          '100%': { boxShadow: '0 0 40px rgba(255,59,48,0.32)' },
        }
      }
    },
  },
  plugins: [],
}
