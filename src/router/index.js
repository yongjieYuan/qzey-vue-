import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '@/views/Intro'
import Science from '@/views/Science'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'Intro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "about" */ '../views/Intro.vue')
  },
  {
    path: '/science',
    name: 'Intro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "about" */ '../views/Science.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router