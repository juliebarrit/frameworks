/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",         // HTML-fil i roden
      "./src/**/*.{js,ts,jsx,tsx}", // Alle filer i /src-mappen
      "./tailwind/**/*.css"   // Sørg for at CSS-mappen også scannes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  