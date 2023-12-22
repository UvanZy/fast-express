import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueImages from 'vite-plugin-vue-images';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueImages({
      // Опциональные настройки плагина
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
/*module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fast-express/'
    : '/'
}*/
