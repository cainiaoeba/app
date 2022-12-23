import http from './http.js'
import md5 from 'js-md5'

//注册接口
export function register(loginName,password) {
  return http.post('/user/register', {
    loginName,
    password
  })
}
//登录接口
export function login(loginName,passwordMd5) {
  return http.post('/user/login', {
    loginName,
    passwordMd5:md5(passwordMd5)
  })
}
//主页数据
export function infos() {
  return http.get('/index-infos')
}