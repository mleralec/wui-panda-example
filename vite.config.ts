import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        xstyled: resolve(__dirname, 'xstyled.html'),
        panda: resolve(__dirname, 'panda.html'),
      },
    },
  },
})
