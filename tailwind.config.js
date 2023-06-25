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
        'fluid': 'repeat(auto-fit, minmax(26rem,1fr));'
      },
      backgroundColor: {
        'australien-1': '#FFFEF2;',
        'australien-2': '#FEF5BC;',
        'australien-3': '#FAE284;',
        'australien-4': '#EDC34C;',
        'australien-5': '#D49817;',
        'australien-6': '#A86C08;',
        'australien-7': '#7D4802;',
        'australien-8': '#522A00;',
        'australien-9': '#261100;',

        'purplish-1': '#F8F2FF;',
        'purplish-2': '#DCC9FF;',
        'purplish-3': '#BA9EFD;',
        'purplish-4': '#9372F7;',
        'purplish-5': '#6647ED;',
        'purplish-6': '#3623BB;',
        'purplish-7': '#19118A;',
        'purplish-8': '#0A0958;',
        'purplish-9': '#040626;',

        'neutral-1': '#FCFCFA;',
        'neutral-2': '#EFEEEB;',
        'neutral-3': '#E2E0DC;',
        'neutral-4': '#D4D2CD;',
        'neutral-5': '#C7C4BF;',
        'neutral-6': '#9F9B96;',
        'neutral-7': '#77736E;',
        'neutral-8': '#4E4B48;',
        'neutral-9': '#262422;',

        'gambol-1': '#FFFEF2;',
        'gambol-2': '#FFF9CA;',
        'gambol-3': '#FBEC9F;',
        'gambol-4': '#F2D674;',
        'gambol-5': '#E0B548;',
        'gambol-6': '#B28224;',
        'gambol-7': '#835613;',
        'gambol-8': '#55330A;',
        'gambol-9': '#261505;',

        'telemagenta-1': '#FEF2FF;',
        'telemagenta-2': '#F8BFFE;',
        'telemagenta-3': '#E88AFB;',
        'telemagenta-4': '#CE54F1;',
        'telemagenta-5': '#A821DE;',
        'telemagenta-6': '#780BB0;',
        'telemagenta-7': '#4F0282;',
        'telemagenta-8': '#2E0054;',
        'telemagenta-9': '#120026;',

        'greyer-100': '#FCFCFA;',
        'greyer-200': '#EDECE9;',
        'greyer-300': '#DDDCD8;',
        'greyer-400': '#CDCBC8;',
        'greyer-500': '#BDBBB7;',
        'greyer-600': '#979490;',
        'greyer-700': '#716E6A;',
        'greyer-800': '#4C4946;',
        'greyer-900': '#262422;'
      },

      backgroundImage: {
        'hero-pattern': "url('/images/banner/pistache-banner.png')"
      },

      backgroundOpacity: {
        'low' : '0.2',
        'mid': '00.5'
      }
    },
  },
  plugins: [],
}
    
    