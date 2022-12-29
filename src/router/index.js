import VueRouter from 'vue-router'
import { Toast } from 'vant';

const routes = [
  {
    path: '', redirect: '/home'
  },
  {
    path: '/home', name: 'home', component: () => import('../views/Home'),
    meta: {
      isShow: true,
      verify:false
    }
  },
  {
    path: '/cart', name: 'cart', component: () => import('../views/Cart'),
    meta: {
      isShow: true,
      verify: true
    }
  },
  {
    path: '/cate', name: 'cate', component: () => import('../views/Cate'),
    meta: {
      isShow: true,
      verify: false
    }
  },
  {
    path: '/user', name: 'user', component: () => import('../views/User'),
    meta: {
      isShow: true,
      verify: true
    }
  },
  {
    path: '/login', name: 'login', component: () => import('../views/Login'),
    meta: {
      isShow:false
    }
  },{
    path: '/info/:id', name: 'info', component: () => import('../views/Info'),
    meta: {
      isShow: false,
      verify: false
    }
  },{
    path: '/addressList', name: 'addressList', component: () => import('../views/Address/addressList.vue'),
    meta: {
      isShow: false,
      verify: true
    }
  },{
    path: '/addressEdit', name: 'addressEdit', component: () => import('../views/Address/addressEdit.vue'),
    meta: {
      isShow: false,
      verify: true
    }
  },{             
    path: '/create-order', name: 'create-order', component: () => import('../views/CreateOrder'),
    meta: { 
      isShow: false,
      verify: true
    }
  },{             
    path: '/order', name: 'order', component: () => import('../views/Order'),
    meta: { 
      isShow: true,
      verify: true
    }
  },{             
    path: '/id', name: 'id', component: () => import('../views/ID'),
    meta: { 
      isShow: false,
      verify: true
    }
  },{             
    path: '/about', name: 'about', component: () => import('../views/About'),
    meta: { 
      isShow: false,
      verify: true
    }
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const nextRoute = ['cart', 'id', 'order', 'create-order', 'addressEdit', 'user']
  if(nextRoute.indexOf(to.name) >= 0) {  //判断要进入的页面路由是否需要登录才能进入,如果是就判断登录状态
    if (localStorage.getItem('xftoken')) {//如果登录了就next可以进入
       next()
      } else {//如果没登陆，当用户点击需要登录进入的页面跳转到登录页，并给出提示请先登录
        if (to.path === '/') { 
          next()
        } else {
          Toast('请先登录');
          next('/login')
        }
      }
  }else{
    next()
  }
})

export default router