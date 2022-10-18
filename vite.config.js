const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const svg = require('vite-svg-loader');

const { viteStaticCopy } = require('vite-plugin-static-copy');

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'SimpleModal',
      fileName: (format) => `vue3-simple-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(), 
    svg(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'src/storage'),
          dest: path.resolve(__dirname, 'dist')
        }
      ]
    })
  ],
});