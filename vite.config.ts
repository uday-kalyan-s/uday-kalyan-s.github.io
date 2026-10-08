import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config — https://vitejs.dev/config/
// For GitHub Pages project sites (username.github.io/repo), set base to
// '/<repo>/' via the VITE_BASE env or edit below. Defaults to '/' which is
// correct for user/org sites (username.github.io) and custom domains.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
