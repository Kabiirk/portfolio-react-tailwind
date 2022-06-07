module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'calibre-re': ['calibre-re', 'sans-serif'],
        'calibre-sb': ['calibre-sb', 'sans-serif'],
        'sf-mono-re': ['sf-mono-re', 'mono'],
        'sf-mono-sb': ['sf-mono-sb', 'mono'],
      },

      colors:{
        "background":"var(--background)",
        "card":"var(--card)", 
        "highlight":"var(--highlight)",
        "heading":"var(--heading)",
        "subheading":"var(--subheading)",
      }
    },
  },
  plugins: [],
}
/*
Font list for the website
Only keep those .OTF files which the website uses
& not the whole font family
Calibre
Regular
Semibold


SF-mono
Rwgular
Semibold
*/