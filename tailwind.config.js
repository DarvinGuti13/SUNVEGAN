/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#627D52", // Verde Oliva
        secondary: "#E6D5B8", // Beige Arenoso
        accent: "#B58D6B", // Marrón Claro
        dark: "#3F5E3F", // Verde Bosque
        light: "#F7F5EB", // Blanco Crema
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};

