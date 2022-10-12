/*
 * @Author: xing
 * @Date: 2022-10-12 14:23:22
 * @LastEditTime: 2022-10-12 14:24:39
 * @LastEditors: xing
 * @Description: 
 * @FilePath: \my-Svelte\src\utils\request.js
 */
import axios from "axios";

const axiosAPI = axios.create({
  // baseURL: "https://xxxx.typicode.com", // it's not recommended to have this info here.
  withCredentials: true,
  timeout: 10000
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, request) => {
  const headers = {
    authorization: ""
  };
  //using the axios instance to perform the request that received from each http method
  return axiosAPI({
    method,
    url,
    data: request,
    headers
  }).then(res => {
    return Promise.resolve(res.data);
  }).catch(err => {
    return Promise.reject(err);
  });
};

// function to execute the http get request
const get = (url, request) => apiRequest("get", url, request);

// function to execute the http delete request
const deleteRequest = (url, request) => apiRequest("delete", url, request);

// function to execute the http post request
const post = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url, request) => apiRequest("patch", url, request);

// expose your method to other services or actions
export { get, deleteRequest, post, put, patch };
