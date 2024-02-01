import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const isAnalyze = process.argv.includes('analyze')

  return {
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
      isAnalyze
        ? visualizer({
          filename: path.resolve(__dirname, 'node_modules/rollup-plugin-visualizer/stats.html'),
          open: true
        })
        : undefined
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
