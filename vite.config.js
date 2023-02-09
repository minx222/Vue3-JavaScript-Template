import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 组件导入
    Components({
      dirs: ['src/components'],
      dts: '',
      resolvers: [AntDesignVueResolver()]
    }),
    // 模块注入
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: '',
      dirs: ['./src/api/**', './src/stores/modules/**']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
