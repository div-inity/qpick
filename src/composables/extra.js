import { ref, onMounted, computed } from 'vue'

const cart = ref([]);

export function extra() {

  function itemInCart (id) {
    var b = false;
    cart.value.forEach(c => {
      if (c.id == id) b = true;
    })
    return b;
  }

  function saveCart () {
    sessionStorage.setItem('cart', JSON.stringify(cart.value));
    //console.log(cart.value)
    //console.log(sessionStorage.getItem('cart'))
  }

  function addItem (id) {
    if (!itemInCart(id)) cart.value = [...cart.value, {id: id, count: 1}];
    console.log(cart.value)
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
    //console.log(cart.value)
  }

  function cartIncrement(id){
    var item = cart.value.find(c => c.id == id);
    item.count++;
    saveCart();
  }

  function cartDecrement(id){
    var item = cart.value.find(c => c.id == id);
    if (item.count > 1) item.count--;
    else removeItem(id);
    saveCart();
  }

  function itemCount (id) {
    const c = cart.value.find(c => c.id == id);
    return c?.count;
  }

  function removeItem(id) {
    const index = cart.value.findIndex(c => c.id === id);
    if (index !== -1) cart.value.splice(index, 1);
  }

  return {
    cart,
    addItem,
    loadCart,
    itemInCart,
    cartIncrement,
    cartDecrement,
    itemCount,
    removeItem,
  }
}