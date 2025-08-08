
import { defineConfig } from 'tailwindcss';
export default defineConfig({
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        redVintage: '#9C1D1D',
        orangeBurnt: '#D97B26',
      },
    },
  },
  plugins: [],
});
