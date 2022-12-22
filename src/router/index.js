import VueRouter from 'vue-router'

const routes = [
  {path:'',redirect:'/home'},
  {path:'/login',name:'login',component:()=>import('../views/Login')},
]

const router = new VueRouter({
  routes
})

export default router