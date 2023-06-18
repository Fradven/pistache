/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(15rem,1fr));'
      },
      backgroundColor: {
        'australien': '#D49817;',
        'purplish': '#6647ED;',
        'gambol': '#FBEC9F;',
        'telemagenta': '#F8BFFE;',
        'grey-bg': '#C7C4BF;',
        'grey-dk': '#BDBBB7'
      }
    },
  },
  plugins: [],
}
