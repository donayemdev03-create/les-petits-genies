import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` produit un site classique dans /dist.
// `SINGLE=1 npm run build` produit un unique fichier HTML autonome (aperçu partageable).
export default defineConfig({
  plugins: [react(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
  base: './',
})
