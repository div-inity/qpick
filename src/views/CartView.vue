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
          <button @click="toggleModal()">Перейти к оформлению</button>
        </div>
      </div>
    </article>
    <Modal/>
  </Content>
</template>
<script setup>
  import { useStore } from 'vuex';
  const store = useStore();
  import { computed } from 'vue';
  import Content from '@/components/Content.vue';
  import { extra } from '@/composables/extra';
  const {cart, itemCount, toggleModal} = extra();
  import CartItem from '@/components/CartItem.vue';
  import Modal from '@/components/Modal.vue';
  //console.log(cart.value);
  const products = computed(() => store.getters['products/getProducts']);
  const localCart = () => {
    var items = [];
    products.value.forEach(p => {
      /* console.log("products", products) */
      Object.values(cart.value).forEach(c => {
        /* console.log("cart", c) */
        if (p.id == c.id) {
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
    l.forEach(c => sum += c.price * itemCount(c.id));
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
      justify-content: space-between;
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
          width: 100%;
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
  @media screen and (max-width: 1200px) {
    .cart-item {
      width: 500px;
    }
  }
  @media screen and (max-width: 1015px) {
    .cart-wrapper .cart .total {
      width: 310px;
    }
  }
  @media screen and (max-width: 925px) {
    .cart-wrapper .cart .total {
      width: 250px;
    }
  }
  @media screen and (max-width: 840px) {
    .cart-wrapper .cart .cart-items .cart-item {
      flex-direction: column;
      width: 320px;
      position: relative;
      row-gap: 16px;
      .count {
        display: contents;
        img {
          align-self: center;
        }
        .set-count {
          order: 2;
        }
      }
      .item-info {
        display: contents;
        .name {
          text-align: center;
        }
        .price {
          order: 2;
          justify-content: flex-end;
        }
      }
      .actions {
        display: contents;
        .delete-item {
          position: absolute;
          top: 18px;
          right: 28px;
        }
        .total-price {
          align-self: end;
          order: 2;
        }
      }
    }
  }
  /* @media screen and (max-width: 675px) {
    .cart-item {
      width: 265px;
    }
  } */
  @media screen and (max-width: 675px) {
    .cart-wrapper .cart {
      flex-direction: column;
      row-gap: 20px;
      .cart-items {
        .cart-item {
          width: 100%;
          flex-direction: row;
          * {
            order: initial;
          }
          .count, .item-info, .actions {
            display: flex;
          }
          .item-info {
            .name {
              text-align: left;
            }
            .price {
              justify-content: initial;
            }
          }
          .actions {
            .delete-item {
              position: initial;
            }
            .total-price {
              align-self: auto;
              order: 2;
            }
          }
        }
        
      }
      .total {
        width: 349px;
        align-self: center;
        margin-top: 0;
      }
    }
  }
  @media screen and (max-width: 460px) {
    .cart-wrapper {
      .cart {
        .cart-items .cart-item {
          flex-direction: column;
          width: 100%;
          position: relative;
          row-gap: 16px;
          .count {
            display: contents;
            img {
              align-self: center;
            }
            .set-count {
              order: 2;
            }
          }
          .item-info {
            display: contents;
            .name {
              text-align: center;
            }
            .price {
              order: 2;
              justify-content: flex-end;
            }
          }
          .actions {
            display: contents;
            .delete-item {
              position: absolute;
              top: 18px;
              right: 28px;
            }
            .total-price {
              align-self: end;
              order: 2;
            }
          }
        }
        .total {
          width: 100%;
        }
      }
    }
  }
</style>