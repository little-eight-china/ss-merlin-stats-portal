import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$axios = axios

// 超时时间
axios.defaults.timeout = 10000
// 默认地址
axios.defaults.baseURL = '/api'

// 路由请求拦截
axios.interceptors.request.use(req => {
  return req
}, error => {
  alert('请求异常, 异常信息为: ' + JSON.stringify(error.response.data))
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(req => {
  return req
}, error => {
  alert('服务响应异常, 异常信息为: ' + JSON.stringify(error.response.data))
  return Promise.reject(error)
})

export default axios
