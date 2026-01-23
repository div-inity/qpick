<template>
  <section class="cards-wrapper flex column">
    <h2>
      <slot name="title">
        Название блока карточек
      </slot>
    </h2>
    <div class="cards flex row">
      <slot name="items">
        Здесь ничего нет
      </slot>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
  .cards-wrapper{
    row-gap: 21px;
    h2 {
      font-family: var(--font-600);
      font-size: 20px;
      color: var(--muted-color);
      margin-top: 28px;
    }
    .cards {
      gap: 30px;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1200px) {
    .cards-wrapper .cards {
      justify-content: center;
    }
  }
  @media screen and (max-width: 840px) {
    .cards-wrapper h2 {
      text-align: center;
    }
  }
</style>