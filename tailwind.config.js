module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '27': '6.75rem',
        '92': '23rem',
        '112': '28rem',
        '172': '34rem',
      },
      maxHeight: {
        '240': '60rem'
      },
      fontSize: {
        'text-3xl': '1.75rem',
        'text-4xl': '2rem',
        'text-5xl': '3.5rem',
        'text-6xl': '4rem',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'josephin': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'powder-blue': "var(--powder-blue)",
        'powder-blue-dark': "var(--powder-blue-dark)",
        'cutty-sark': "var(--cutty-sark)",
        'dove-gray': "var(--dove-gray)",
        'alabaster': "var(--alabaster)",
        'silver': "var(--silver)",
        'alto': "var(--alto)",
        'white-70': "var(--white-70)",
      },
      letterSpacing: {
        wide: '4.2px',
        wider: '6.7px',
        widest: '9.6px'
      },
      opacity: {
        '3': '0.3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// 14px = 0.875rem = text-sm
// 20px = 1.25rem = text-xl
// 24px = 1.5rem = text-2xl
// 28px = 1.75rem = text-3xl
// 32px = 2rem = text-4xl
// 56px = 3.5rem = text-5xl
// 64px = 4rem = text-6xl