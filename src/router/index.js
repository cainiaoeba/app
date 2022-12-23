import VueRouter from 'vue-router'

const routes = [
  {
    path: '', redirect: '/home'
  },
  {
    path: '/home', name: 'home', component: () => import('../views/Home'),
    meta: {
      isShow:true
    }
  },
  {
    path: '/cart', name: 'cart', component: () => import('../views/Cart'),
    meta: {
      isShow:true
    }
  },
  {
    path: '/cate', name: 'cate', component: () => import('../views/Cate'),
    meta: {
      isShow:true
    }
  },
  {
    path: '/user', name: 'user', component: () => import('../views/User'),
    meta: {
      isShow:true
    }
  },
  {
    path: '/login', name: 'login', component: () => import('../views/Login'),
    meta: {
      isShow:false
    }
  },
]

const router = new VueRouter({
  routes
})

export default router