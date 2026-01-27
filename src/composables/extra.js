import { ref} from 'vue'

const cart = ref([]);
const modal = ref(false);

export function extra() {

  function toggleModal() {
    modal.value = !modal.value;
  }

  function itemInCart (id) {
    var b = false;
    cart.value.forEach(c => {
      if (c.id == id) b = true;
    })
    return b;
  }

  function saveCart () {
    sessionStorage.setItem('cart', JSON.stringify(cart.value));
  }

  function addItem (id) {
    if (!itemInCart(id)) cart.value = [...cart.value, {id: id, count: 1}];
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
    modal,
    toggleModal,
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