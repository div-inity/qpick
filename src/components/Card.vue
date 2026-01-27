<template>
  <section class="card flex column">
    <button class="open-info" @click="openModal" aria-label="Открыть подробную информацию о товаре">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5 51.5H22.5V45.5H46.5V51.5ZM58.5 39.5H22.5V33.5H58.5V39.5ZM58.5 27.5H22.5V21.5H58.5V27.5ZM63.8333 9.5H17.1667C13.4667 9.5 10.5 12.4667 10.5 16.1667V62.8333C10.5 66.5152 13.4848 69.5 17.1667 69.5H63.8333C67.5152 69.5 70.5 66.5152 70.5 62.8333V16.1667C70.5 12.4667 67.5 9.5 63.8333 9.5Z" fill="#eaeaea"/>
      </svg>
    </button>
    <img :src="props.img" :alt="'Изображение товара ' + props.name">
    <div class="item-info flex row">
      <div class="item-name">{{ props.name }}</div>
      <div class="prices">
        <div class="price">{{ props.price }} ₽</div>
        <div class="old-price" v-if="props.old_price">{{ props.old_price }} ₽</div>
      </div>
    </div>
    <div class="item-actions flex row">
      <Rating :rating="props.rating"/>
      <SetCount v-if="itemInCart(props.id)" :id="props.id"/>
      <button @click="addItem(props.id)" v-else>Купить</button>
    </div>
  </section>
  
</template>
<script setup>
  import SetCount from './SetCount.vue';
  import { extra } from '@/composables/extra';

  const {addItem, itemInCart} = extra();

  const props = defineProps({
    id: Number,
    name: String,
    price: Number,
    old_price: Number,
    rating: Number,
    img: String,
  });
  import Rating from './Rating.vue';

  const emit = defineEmits(['open-modal']);

  function openModal() {
    emit('open-modal', props.id);
  }
</script>
<style lang="scss">
  .card {
    padding: 32.65px 22px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    width: 350px;
    align-items: center;
    position: relative;

    .open-info {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 22px;
      top: 22px; 

      &:hover {
        svg path {
          fill: var(--accent-color1);
        }
      }

      svg {
        width: inherit;
        height: inherit;
      }
    }

    * {
      font-family: var(--font-600);
    }

    img {
      height: 219.61px;
      width: 237.07px;
    }

    .item-info {
      width: 100%;
      justify-content: space-between;
      margin-top: 55px;

      .item-name {
        font-size: 17px;
        color: var(--main-color);
      }

      .prices {
        .price {
          font-size: 17px;
          color: var(--accent-color1);
        }

        .old-price{
          font-size: 13px;
          text-decoration: line-through;
          color: var(--accent-color2);
          position: absolute;
        }
      }
    }

    .item-actions {
      width: 100%;
      justify-content: space-between;
      margin-top: 25px;
      
      .set-count {
        min-width: 100px;
        width: fit-content;
      }
    }
  }
</style>