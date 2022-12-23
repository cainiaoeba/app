import axios from "axios";

const http = axios.create({
  baseURL: 'http://backend-api-01.newbee.ltd/api/v1',
  timeout:5000
})
// 请求拦截器
http.interceptors.request.use((config) => {
  config.headers.token=localStorage.getItem('xftoken')
  return config
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截器
http.interceptors.response.use((response) => {
  return response.data
}, (err) => {
  return Promise.reject(err)
})

export default http