import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        'vue-router'
      ],
      dts: true,
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    // 支持在 setup 内写 defineOptions
    // refer: https://github.com/sxzz/unplugin-vue-macros/tree/main/packages/define-options
    DefineOptions(),
    UnoCSS(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/i18n/locales/**')],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
