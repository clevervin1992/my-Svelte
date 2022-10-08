/*
 * @Author: xing
 * @Date: 2022-10-08 14:00:12
 * @LastEditTime: 2022-10-08 14:22:40
 * @LastEditors: xing
 * @Description: 
 * @FilePath: \my-Svelte\src\stores\user.js
 */
import { writable } from 'svelte/store';

export const count = writable(0);

export const changeCount = function(){
  count.update(n=>n+1)
}