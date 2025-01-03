module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'oren-200': '#FFA567',
        'oren-500': '#F73308',
        gray10: '#fffffff3',
        gray50: '#EDEDED',
        gray100: '#F6F6F6',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
