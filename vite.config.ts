import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'


const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    })
  ],
  build: {
    emptyOutDir: true,  // default: true
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'popup.html'),
        background: path.resolve(__dirname, 'background.ts'),
        contentScript: path.resolve(__dirname, 'contentScript.ts'),
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
