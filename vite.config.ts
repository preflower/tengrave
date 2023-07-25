import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        'react',
        'react-i18next',
        'react-router-dom'
      ],
      dts: true,
      eslintrc: {
        enabled: true // Default `false`
      }
    }),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
