import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //base: '/my-test-app/',
  base: process.env.NODE_ENV === 'production' 
    ? 'https://kajan.github.io/my-test-app/'
    : '/my-test-app/',
})
