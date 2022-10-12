/*
 * @Author: xing
 * @Date: 2022-10-12 14:26:30
 * @LastEditTime: 2022-10-12 15:21:03
 * @LastEditors: xing
 * @Description: 
 * @FilePath: \my-Svelte\src\utils\mock.js
 */
import Mock from "mockjs";

Mock.mock('/api/user','get',{
  code:1,
  message:'ok',
  data: {
    name:'admin',
    'list|1-20':[
      {
        'date|+1':Mock.Random.date('yyyy-MM-dd')
      }
    ]
  }
})