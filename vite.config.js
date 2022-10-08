/*
 * @Author: xing
 * @Date: 2022-09-29 15:32:28
 * @LastEditTime: 2022-10-08 13:59:00
 * @LastEditors: xing
 * @Description: 
 * @FilePath: \my-Svelte\vite.config.js
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
    proxy:{}
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
})
