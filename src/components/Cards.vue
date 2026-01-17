<template>
  <div class="cards-wrapper flex column">
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
  </div>
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
</style>