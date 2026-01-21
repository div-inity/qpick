<template>
  <Content>
    <article class="cart-wrapper flex column">
      <h2>Корзина</h2>
      <div class="cart flex row">
        <div class="cart-items flex column" v-if="localCart().length">
          <CartItem v-for="c in localCart()" :product="c" />
        </div>
        <div class="empty-cart flex column" v-else>
          <p>
            В корзине нет товаров. 
            Вы можете вернуться на <span><router-link to="/" style="font-family: var(--font-500); color: var(--link-color)">Главную</router-link></span> страницу и выбрать товары.
          </p>
        </div>
        <div class="total" v-if="localCart().length">
          <div class="total-content flex row">
            ИТОГО
            <div class="total-price">₽ {{ totalPrice() }}</div>
          </div>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </article>
  </Content>
</template>
<script setup>
  import { useStore } from 'vuex';
  const store = useStore();
  import { computed } from 'vue';
  import Content from '@/components/Content.vue';
  import { extra } from '@/composables/extra';
  const {cart} = extra();
  import CartItem from '@/components/CartItem.vue';
  console.log(cart.value);
  const products = computed(() => store.getters['products/getProducts']);
  const localCart = () => {
    var items = [];
    products.value.forEach(p => {
      /* console.log("products", products) */
      Object.values(cart.value).forEach(c => {
        /* console.log("cart", c) */
        if (p.id == c) {
          items.push(p)
          /* console.log("Найден", p) */
        }
      })
    })
    return items
  }
  function totalPrice (){
    var sum = 0;
    const l = localCart();
    l.forEach(c => sum += c.price);
    sum = sum.toLocaleString();
    return sum;
  }
</script>
<style lang="scss">
  .cart-wrapper {
    h2 {
      font-family: var(--font-600);
      font-size: 20px;
      color: var(--main-color);
      margin-top: 31px;
    }
    .cart {
      margin-top: 13px;
      column-gap: 127px;
      .cart-items {
        row-gap: 20px;
      }
      .empty-cart {
        width: 100%;
      }
      .total {
        padding: 15px;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
        background: #fff;
        border-radius: 30px;
        width: 349px;
        height: fit-content;
        margin-top: 7px;
        border-radius: 32px;
        min-height: 120px;
        padding: 21px;
        position: relative;
        .total-content {
          font-family: var(--font-600);
          font-size: 15px;
          color: var(--link-color);
          justify-content: space-between;
          .total-price {
            font-family: inherit;
            font-size: inherit;
            color: inherit;
          }
        }
        button {
          font-family: var(--font-600);
          font-size: 17px;
          text-align: center;
          color: #fff;
          width: inherit;
          height: 65px;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 10;
          background: var(--bright-black-color);
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          &:hover {
            color: var(--accent-color1);
          }
        }
      }
    }
  }
</style>