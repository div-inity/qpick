import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  },
  {
    path: '/liked',
    name: 'liked',
    component: () => import(/* webpackChunkName: "liked" */ '../views/LikedView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
