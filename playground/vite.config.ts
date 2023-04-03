import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Unplugin from '../src/vite'
import { client } from './src/oss'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@cdn',
        replacement: fileURLToPath(new URL('./cdn', import.meta.url)),
      },
    ],
  },
  plugins: [
    Vue(),
    Inspect(),
    Unplugin({
      client,
      base: 'your oss server base url',
    }),
  ],
})
