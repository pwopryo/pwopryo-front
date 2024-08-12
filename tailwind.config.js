/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1rem'], // 12px
      sm: ['0.875rem', '1.25rem'], // 14px
      base: ['1rem', '1.5rem'], // 16px
      lg: ['1.125rem', '1.75rem'], // 18px
      xl: ['1.25rem', '1.75rem'], // 20px
      '2xl': ['1.5rem', '2rem'], // 24px
      '3xl': ['1.875rem', '2.25rem'], // 30px
      '4xl': ['2.25rem', '2.5rem'], // 36px
      '5xl': ['3rem', '1'], // 48px
      '6xl': ['3.75rem', '1'], // 60px
      '7xl': ['4.5rem', '1'], // 72px
      '8xl': ['6rem', '1'], // 96px
      '9xl': ['8rem', '1'], // 128px
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        customGray: {
          100: '#E7E9F2',
          200: '#CED1D4',
          300: '#AAADB7',
          400: '#7F8192',
          500: '#333333',
        },
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#22279C',
        },
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}