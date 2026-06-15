import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#050508',
        dark: '#0D0D14',
        card: '#111118',
        border: '#1E1E2A',
        white: '#F0F0F5',
        muted: '#6B6B80',
        'neon-blue': '#00C2FF',
        'neon-green': '#00FF88',
        red: '#FF3B3B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
