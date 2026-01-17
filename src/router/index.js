import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Домашняя'
    },
    component: HomeView
  },
  {
    path: '/liked',
    name: 'liked',
    meta: {
      title: 'Избранное'
    },
    component: () => import(/* webpackChunkName: "liked" */ '../views/LikedView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: 'Корзина'
    },
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
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
