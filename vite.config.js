import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Need to specific file routes for production
  base: process.env.NODE_ENV === 'production' ? '/react-gh-pages-sample/' : '/',
  plugins: [react()],
})
