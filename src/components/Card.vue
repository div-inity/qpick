<template>
  <section class="card flex column">
    <img :src="props.img" :alt="'Изображение товара ' + props.name">
    <div class="item-info flex row">
      <div class="item-name">{{ props.name }}</div>
      <div class="prices">
        <div class="price">{{ props.price }} ₽</div>
        <div class="old-price" v-if="props.old_price">{{ props.old_price }} ₽</div>
      </div>
    </div>
    <div class="item-actions flex row">
      <div class="rating flex row">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6661 17.5747L4.45543 21.9259L6.41572 13.8052L0 8.37524L8.42139 7.70862L11.6661 0L14.9107 7.70862L23.3333 8.37524L16.9164 13.8052L18.8767 21.9259L11.6661 17.5747Z"/>
        </svg>

        {{ props.rating }}
      </div>
      <button>Купить</button>
    </div>
  </section>
</template>
<script setup>
  const props = defineProps({
    name: String,
    price: Number,
    old_price: Number,
    rating: Number,
    img: String,
  });
</script>
<style lang="scss">
  .card {
    padding: 32.65px 22px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    width: 350px;
    align-items: center;
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
      .rating {
        font-size: 17px;
        color: var(--muted-color);
        column-gap: 10px;
        svg path {
          fill: var(--accent-color2);
        }
      }
    }
  }
</style>