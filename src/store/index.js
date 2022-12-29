import Vue from 'vue'
import Vuex from 'vuex'
import { getShopCart } from '../api/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    shopCart:[],//购物车数据
  },
  getters: {
    //购物车总商品数量
    cartCount(state) { 
      return state.shopCart.length
    }
  },
  mutations: {
    // 赋值购物车数据
    changeCartList(state, res) {
      console.log(res)
      state.shopCart = res.map(item => {
        item.done = true
        return item
      })
    }
  },
  actions: {
    //获取购物车数据
    shopCartAsync({commit}) {
      getShopCart().then(res => {
        console.log('获取购物车数据',res)
        commit('changeCartList',res.data)
      })
    }
  }
})

export default store
