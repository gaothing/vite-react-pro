import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  // 开启 attributify
  attributify: true,
  shortcuts: {
    'flex-center': 'flex justify-center items-center'
  }
})
