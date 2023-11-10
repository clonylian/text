import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/moon-server': {
        target: 'http://43.134.115.222:8080/moon-server/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/moon-server/, ''),
      },
    },
  },
})
