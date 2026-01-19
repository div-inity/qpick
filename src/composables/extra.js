import { ref, onMounted, computed } from 'vue'

const cart = ref([]);

export function extra() {

  function itemInCart (id) {
    return cart.value.includes(id);
  }

  function saveCart () {
    sessionStorage.setItem('cart', JSON.stringify(cart.value));
    console.log(cart.value)
    console.log(sessionStorage.getItem('cart'))
  }

  function addItem (id) {
    if (!itemInCart(id)) cart.value = [...cart.value, id];
    saveCart();
  }

  function loadCart () {
    const saved = sessionStorage.getItem('cart') ?? [];
    if (saved) {
      try {
        cart.value = JSON.parse(saved);
      } catch (e) {
        console.warn('Ошибка при загрузке корзины:', e);
        cart.value = [];
      }
    } else {
      cart.value = [];
    }
  }

  return {
    cart,
    addItem,
    loadCart,
  }
}