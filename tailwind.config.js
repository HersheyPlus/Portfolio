/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'green-xl': '0 0 1.5em rgba(0, 191, 166, 0.35)',
        'green-2xl': '0 0 2em rgba(0, 191, 166, 0.35)',
      }
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      sofia : ['Sofia Sans Semi Condensed', 'sans-serif']
    },
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
      "full-desktop": "1600px",
    },
    colors: {
      "green-1": "#00BFA6",
      "green-2": "#00A18C",
      "green-3": "#00816D",
      "dark-gray": "#A9A9A9",
      dark: "#1A1A1A",
      metal: "#E5E5E5",
      gray: "#D3D3D3",
      white: "#FFFFFF",
      blue:"#1E90FF",
      red:"#FF0000",
      yellow:"#FFFF00",
      pink:"#FF1493",
    },
    backgroundImage: {
      'about': "url('/img2.png')",
      'footer': "url('/bg-footer.png')",
      'body': "url('/bg-body.png')",
    }
  },
  plugins: [],
};
