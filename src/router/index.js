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
    meta: {
      title: 'Избранное'
    },
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  },
  {
    path: '/liked',
    name: 'liked',
    meta: {
      title: 'Корзина'
    },
    component: () => import(/* webpackChunkName: "liked" */ '../views/LikedView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      title: 'Контакты' 
    },
    component: HomeView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
