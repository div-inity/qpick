<template>
  <div class="cart-item flex row">
    <div class="count flex column">
      <img :src="props.product.img" :alt="'Изображение товара ' + props.product.name">
      <SetCount :id="props.product.id" />
    </div>
    <div class="item-info flex column">
      <div class="name">{{ props.product.name }}</div>
      <div class="price flex row">
        {{ props.product.price.toLocaleString() }} ₽
        <div class="old-price" v-if="props.product.old_price">
          {{ props.product.old_price.toLocaleString() }} ₽
        </div>
      </div>
    </div>
    <div class="actions flex column">
      <button class="delete-item" @click="removeItem(props.product.id)">
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9458 3.4H19.9278V5.1H17.935V16.15C17.935 16.3754 17.83 16.5916 17.6432 16.751C17.4563 16.9104 17.2029 17 16.9386 17H2.98917C2.72491 17 2.47147 16.9104 2.28461 16.751C2.09775 16.5916 1.99278 16.3754 1.99278 16.15V5.1H0V3.4H4.98194V0.85C4.98194 0.624566 5.08692 0.408365 5.27378 0.248959C5.46064 0.0895533 5.71407 0 5.97833 0H13.9494C14.2137 0 14.4671 0.0895533 14.654 0.248959C14.8409 0.408365 14.9458 0.624566 14.9458 0.85V3.4ZM15.9422 5.1H3.98556V15.3H15.9422V5.1ZM11.3728 10.2L13.1344 11.7028L11.7255 12.9047L9.96389 11.4019L8.20227 12.9047L6.79338 11.7028L8.555 10.2L6.79338 8.6972L8.20227 7.4953L9.96389 8.9981L11.7255 7.4953L13.1344 8.6972L11.3728 10.2ZM6.97472 1.7V3.4H12.9531V1.7H6.97472Z" fill="#DF6464" />
        </svg>
      </button>
      <div class="total-price">{{ (props.product.price * itemCount(props.product.id)).toLocaleString() }} ₽</div>
    </div>
  </div>
</template>
<script setup>
  import { extra } from '@/composables/extra';
  const { removeItem, itemCount } = extra();
  import SetCount from './SetCount.vue';
  const props = defineProps({
    product: Object,
  })
</script>
<style lang="scss">
  .cart-item {
    padding: 15px 28px 15px 15px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 32px;
    width: 633px;
    min-height: 219px;
    .count {
      row-gap: 19px;
      img {
        width: 146px;
        height: 136px;
      }
      
    }
    .item-info {
      flex-grow: 1;
      justify-content: center;
      row-gap: 12px;
      margin-left: 26px;
      .name {
        font-family: var(--font-500);
        font-size: 17px;
        color: var(--main-color);
      }
      .price {
        font-family: var(--font-600);
        font-size: 15px;
        color: #aaa;
        column-gap: 10px;
        .old-price {
          text-decoration: line-through;
          color: var(--accent-color1);
          font-size: 13px;
          font-family: var(--font-600);
        }
      }
    }
    .actions {
      align-items: flex-end;
      justify-content: space-between;
      .total-price {
        font-family: var(--font-600);
        font-size: 15px;
        color: var(--main-color);
        margin-bottom: 8px;
      }
    }
  }
</style>