import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueSetupExtend(),vueJsx()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'ElElementEdit',
      fileName: (format) => `el-element-edit.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
