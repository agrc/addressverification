import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './node_modules/utah-design-system/src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    colors: {
      primary: {
        light: '#eef4fa',
        DEFAULT: '#126dc4',
        dark: '#1c2e40',
      },
      secondary: {
        light: '#edf5f8',
        DEFAULT: '#0e80a7',
        dark: '#205162',
      },
      accent: {
        light: '#fff9ec',
        DEFAULT: '#ffb100',
        dark: '#745a1e',
      },
    },
    extend: {},
    fontFamily: {
      utds: ['utah design system'],
    },
  },
  plugins: [],
} satisfies Config;
