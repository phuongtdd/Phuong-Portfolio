import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on GitHub Pages (/Phuong-Portfolio/) and on a custom domain alike.
export default defineConfig({
  plugins: [react()],
  base: './',
})
