import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F2EA',
          dim: '#EDE9DD',
        },
        ink: {
          DEFAULT: '#1B1D19',
          soft: '#4A4A42',
          faint: '#8A8678',
        },
        gold: {
          DEFAULT: '#A67C3D',
          bright: '#C79A52',
        },
        forest: {
          DEFAULT: '#2F4A3D',
          bright: '#3F6350',
        },
        camel: {
          DEFAULT: '#B08B5C',
          bright: '#CBA877',
        },
        caramel: {
          DEFAULT: '#A66A3D',
          bright: '#C68955',
        },
        cognac: {
          DEFAULT: '#8C4F35',
          bright: '#B06E4F',
        },
        coffee: {
          DEFAULT: '#5C4030',
          bright: '#7A5A45',
        },
        chocolate: {
          DEFAULT: '#3E2A1E',
          bright: '#5C4231',
        },
        rule: '#D8D2C2',
        dark: {
          bg: '#141E19',
          paper: '#1B2621',
          ink: '#EDE8DC',
          soft: '#B9B3A2',
          rule: '#2C382F',
        },
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '42rem',
        content: '82.8rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      }),
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
