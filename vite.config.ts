import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'
import path from "path"

import AddLogo from './src/plugins/vite-plugin-add-logo'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AddLogo(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@components": path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, './src/pages'),
    }
  },
})
