import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        skullnbones: resolve(__dirname, 'skullnbones/index.html'),
        utilityai: resolve(__dirname, 'utilityai/index.html'),
        weapon: resolve(__dirname, 'weapon/index.html'),

      },
    },
  }
})