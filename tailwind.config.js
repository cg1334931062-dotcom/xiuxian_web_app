/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        // 仙侠风青绿色调
        'immortal': {
          50: '#f0f9f5',
          100: '#dcf2e9',
          200: '#b9e5d3',
          300: '#89d1b6',
          400: '#52b695',
          500: '#2e9d7a',  // 主色调
          600: '#1f7d62',
          700: '#1a6450',
          800: '#175041',
          900: '#144236',
          950: '#0a261e',
        },
        // 辅助色调
        'gold': {
          500: '#d4af37', // 金色点缀
        },
        'silver': {
          500: '#c0c0c0', // 银色点缀
        }
      },
      fontFamily: {
        'sans': ['"Noto Serif SC"', 'serif'], // 中文衬线字体
        'heading': ['"ZCOOL QingKe HuangYou"', 'cursive'], // 标题艺术字体
      },
      backgroundImage: {
        'immortal-pattern': "url('/images/immortal-bg.png')",
        'cloud-pattern': "url('/images/cloud-bg.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        }
      }
    },
  },
  plugins: [],
}