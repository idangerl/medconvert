/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Si tienes archivos en la carpeta app
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 👈 ¡ESTA ES LA LÍNEA CLAVE! Asegura que cubra src completo
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}