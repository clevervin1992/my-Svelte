/*
 * @Author: xing
 * @Date: 2022-09-29 15:41:17
 * @LastEditTime: 2022-09-30 14:17:08
 * @LastEditors: xing
 * @Description: 
 * @FilePath: \vite-svelte\src\router\index.js
 */

import Home from '@/views/home/index.svelte';
import Test from '@/views/test/index.svelte';
import TestParams from '@/views/test-params/index.svelte';

export default {
  '/':Home,
  '/test':Test,
  '/testParams/:id':TestParams
}