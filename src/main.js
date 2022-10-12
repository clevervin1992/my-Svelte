/*
 * @Author: xing
 * @Date: 2022-09-30 16:50:32
 * @LastEditTime: 2022-10-12 14:58:16
 * @LastEditors: xing
 * @Description: 
 * @FilePath: \my-Svelte\src\main.js
 */
import './app.css'
import App from './App.svelte'
import './utils/mock.js'

const app = new App({
  target: document.getElementById('app')
})

export default app
