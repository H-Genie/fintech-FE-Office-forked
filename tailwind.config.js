/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#18A0FB',
        hover: '#1E2087E6',
        light: {
          DEFAULT: '#212121',
          40: '#21212166',
          border: '#2121211A',
        },
        secondary: colors.slate[950],
        destructive: colors.red[600],
        muted: {
          foreground: colors.gray[400],
          background: '#F3F4F6',
        },
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #89CFF0, #007BFF)',
      },
      fontFamily: {
        sans: ['Pretendard', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
