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
//根据id获取商品数据
export function goodsDetail(id) { 
  return http.get('/goods/detail/'+id)
}
//商品加入购物车
export function shopCart(options) { 
  return http.post('/shop-cart', options)
}
// 购物车数据
export function getShopCart() { 
  return http.get('/shop-cart')
}
//添加减少购物车商品数量
export function changeGoodsCount(options) { 
  return http.put('/shop-cart/',options)
}
//购物车删除商品
export function delGoods(id) { 
  return http.delete('/shop-cart/'+id)
}
//地址管理
export function getAddress() { 
  return http.get('/address')
}
//新增地址
export function addAddress(options) { 
  return http.post('/address',options)
}
//根据地址id获取某个地址详情
export function getAddressId(id) { 
  return http.get('/address/'+id)
}
// 生成订单根据id获取商品信息
export function getSettle(id) { 
  return http.get('/shop-cart/settle?cartItemIds='+id)
}
//地址id商品id生成订单
export function saveOrder(options) { 
  return http.post('/saveOrder',options)
}
// 支付接口
export function paySuccess(orderNo,payType) { 
  return http.get('/paySuccess', {
    params: {
      orderNo,
      payType
    }
  })
}
//获取订单列表
export function getOrderList(pageNumber,status) { 
  return http.get('/order', {
    params: {
      pageNumber,
      status
    }
  })
}