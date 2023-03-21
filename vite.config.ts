import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import windi from 'vite-plugin-windicss'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), windi(), viteEslint(), viteStylelint({ exclude: /windicss|node_modules/ })]
})
