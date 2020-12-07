import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/faq',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import(/* webpackChunkName: "account" */ '../views/Accounts.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import(/* webpackChunkName: "games" */ '../views/Games.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(async(to, from, next)=>{

// })

router.beforeEach(async(to, from, next)=>{
  const requiresAuth = to.matched.some(view => view.meta.requiresAuth);
  requiresAuth && !(await store.dispatch('userMod/setUserState')) ?
   next({name: 'Home'}) :
   next();
})

export default router