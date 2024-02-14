import { Scale } from '@mui/icons-material';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  important: '#root',
  theme: {
    clipPath: {
      myPolygonLg:
        'polygon(70% 70px, 80% 0, 100% 0, 100% 100%, 0 100%, 0 70px)',
      myPolygon: 'polygon(65% 30px, 75% 0, 100% 0, 100% 100%, 0 100%, 0 30px)',
    },
    screens: {
      tablet: '429px',

      tabletLg: '640px',
      // => @media (min-width: 576px) { ... }

      desktop: '900px',
      // => @media (min-width: 769px) { ... }
      desktopSm: '1250px',
    },
    colors: {
      transparent: 'transparent',
      'bg-dark-color': '#222222',
      'bg-light-color': '#303030',
      'bg-dark-color-2': '#181818',
      'bg-light-color-4': 'rgb(239 239 239)',
      'bg-login': '#111111',
      'bg-light-color-2': 'rgba(255, 255, 255, 0.05)',
      'bg-light-color-3': 'rgba(255, 255, 255, 0.2)',

      'main-color-2': '#E72F23',
      'second-color': '#FFF38C',
      'text-light-color': ' #FFFFFF',
      'text-gray-color': 'rgba(255, 255, 255, 0.5)',
      'text-darkGray-color': '#57534e',
      'text-lightGray-color': '#777777',
      'text-dark-color': '#222222',
      'bg-orange': ' #FF7C1D',
      'main-color-1': '#FD190A',
      'line-color': 'rgba(255, 255, 255, 0.8)',
      'text-gray-color-2': '#D9D9D9',
      'yellow-star': '#FAFF00',
      'dark-star': '#130F26',
    },
    fontFamily: {
      peyda: ['peyda', 'sans-serif'],
      peydaMedium: ['peydaMedium', 'sans-serif'],
      peydaBold: ['peydaBold', 'sans-serif'],
      peydaBlack: ['peydaBlack', 'sans-serif'],
    },
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'scale(0.5) translateX(30%)' },
          '100%': { transform: 'scale(1) translateX(0)' },

          // '0%': { transform: '' },

          // '100%': { transform: '' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-very-slow': 'spin 5s linear infinite',
        slide: 'slide 0.25s linear',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
