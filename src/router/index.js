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
  },{
    path: '/info/:id', name: 'info', component: () => import('../views/Info'),
    meta: {
      isShow:false
    }
  },{
    path: '/addressList', name: 'addressList', component: () => import('../views/Address/addressList.vue'),
    meta: {
      isShow:false
    }
  },{
    path: '/addressEdit', name: 'addressEdit', component: () => import('../views/Address/addressEdit.vue'),
    meta: {
      isShow:false
    }
  },{             
    path: '/create-order', name: 'create-order', component: () => import('../views/CreateOrder'),
    meta: { 
      isShow:false
    }
  },{             
    path: '/order', name: 'order', component: () => import('../views/Order'),
    meta: { 
      isShow:false
    }
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  next()
})

export default router