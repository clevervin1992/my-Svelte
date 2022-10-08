/*
 * @Author: xing
 * @Date: 2022-09-29 15:32:28
 * @LastEditTime: 2022-09-30 11:44:39
 * @LastEditors: xing
 * @Description: 
 * @FilePath: \vite-svelte\vite.config.js
 */
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server:{
    open:true,
    port:8000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
})
