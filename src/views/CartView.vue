<template>
  <Content>
    <article class="cart-wrapper flex column">
      <h2>Корзина</h2>
      <div class="cart flex row">
        <div class="cart-items flex column">
          <CartItem v-for="c in localCart" :product="c" />
        </div>
        <div class="total">
          <div class="total-content flex row">
            ИТОГО
            <div class="total-price">₽ {{ totalPrice() }}</div>
          </div>
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
  //console.log(cart.value);
  const localCart = computed(() => store.getters['products/getProducts']);
  import CartItem from '@/components/CartItem.vue';

  function totalPrice (){
    var sum = 0;
    localCart.value.forEach(c => sum += c.price);
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
      .total {
        padding: 15px;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
        background: #fff;
        border-radius: 30px;
        width: 349px;
        height: fit-content;
        margin-top: 7px;
        border-radius: 32px;
        min-height: 114px;
        padding: 21px;
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
      }
    }
  }
</style>