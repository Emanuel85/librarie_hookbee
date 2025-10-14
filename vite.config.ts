import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), dts({rollupTypes: true})],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'HookBee',
      fileName: 'hookbee-ui',
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      },
    },
  },
})
