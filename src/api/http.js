import router from "@/router";
import axios from "axios";
import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);

const http = axios.create({
  baseURL: 'http://backend-api-01.newbee.ltd/api/v1',
  timeout:5000
})
// 请求拦截器
http.interceptors.request.use((config) => {
  config.headers.token=localStorage.getItem('xftoken')
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截器
http.interceptors.response.use((response) => {
  if (response.data.resultCode != 200) {
    const data = response.data
    if (response.data.resultCode == 416) {
      // 416代表未登录,没有token  需要认证
      if (router.currentRoute.path !== '/login') {
        router.push('/login?needback=1')
      }
      Notify({
        type: 'danger',
        message: data.message || "系统繁忙"
      });
      return Promise.reject(data)
    }
  }
  return response.data
}, (err) => {
  Notify({
    type: 'danger',
    message: "系统繁忙"
  });
  return Promise.reject(err)
})

export default http