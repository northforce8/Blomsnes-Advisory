import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#f8f6f1',
        warm: '#e8e4db',
        accent: { DEFAULT: '#8b6914', light: '#c4a44a', dark: '#6b5010' },
        muted: '#6b6560',
        border: '#d4cfc6',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        content: '1320px',
        prose: '720px',
      },
    },
  },
  plugins: [],
};

export default config;
