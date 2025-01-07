module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        yellow: '#FFD700',
        blue: '#00BFFF',
        pink: '#FF69B4',
      },
    },
  },
  plugins: [],
};