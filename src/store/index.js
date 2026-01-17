import { createStore } from 'vuex'
import cart from './modules/cart.js'
import likes from './modules/likes.js'
import products from './modules/products.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    likes,
    products,
  }
})
