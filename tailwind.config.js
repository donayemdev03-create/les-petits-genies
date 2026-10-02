/** ✏️ Palette et typographie de la maquette — à adapter à la charte de l'école. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50: '#EEF4FF', 100: '#DCE7FF', 200: '#BCD0FF', 300: '#8FB0FA', 400: '#5F89F0', 500: '#3D69E3', 600: '#2C52C9', 700: '#2442A3', 800: '#213A82', 900: '#1E3368', 950: '#13204A' }, // Bleu principal
        sun: { 50: '#FFF8E1', 100: '#FFEFB8', 200: '#FFE48A', 300: '#FFD95C', 400: '#FFC93C', 500: '#F5B416', 600: '#D99A00' },   // Jaune soleil (boutons clés)
        coral: { 50: '#FFF1EE', 100: '#FFDCD5', 300: '#FFAE9E', 400: '#FF8A73', 500: '#F4694F', 600: '#DB4F36', 700: '#B83D27' }, // Corail (touches de couleur)
        leaf: { 50: '#EAF8EF', 100: '#CDEFD9', 300: '#86D6A6', 500: '#2FAE66', 600: '#23914F', 700: '#1C7340' },  // Vert (validation, nature)
        ink: { 400: '#7A859C', 500: '#5C6782', 600: '#454F68', 700: '#2F3850', 900: '#141B2E' },
        cloud: '#F5F8FF',
      },
      fontFamily: {
        display: ['Fredoka', 'ui-rounded', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(19,32,74,.05), 0 10px 26px -14px rgba(19,32,74,.18)',
        lift: '0 2px 4px rgba(19,32,74,.06), 0 22px 44px -18px rgba(19,32,74,.28)',
        sun: '0 10px 22px -10px rgba(217,154,0,.65)',
      },
      borderRadius: { xl2: '1.25rem', blob: '2rem' },
      keyframes: {
        fadeUp: { '0%': { opacity: '.001', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        pulseRing: { '0%': { transform: 'scale(.9)', opacity: '.7' }, '100%': { transform: 'scale(1.6)', opacity: '0' } },
      },
      animation: {
        fadeUp: 'fadeUp .5s cubic-bezier(.2,.7,.2,1) both',
        float: 'float 5s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
