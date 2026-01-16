<template>
  <div class="badge">
    {{ props?.content }}
  </div>
</template>

<script setup>
  const props = defineProps({
    content: {
      require: true,
    }
  })
</script>
<style lang="scss">
  .badge {
    font-family: var(--font-500);
    font-size: 14px;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: var(--price-color);
    position: absolute;
    min-width: 17.5px;
    height: 17.5px;
    top: 12px;
    right: 9px;
  }
</style>