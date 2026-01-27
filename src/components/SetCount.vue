<template>
  <div class="set-count flex row">
    <button @click="cartDecrement(props.id)">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" fill="#FFCE7F" />
        <path d="M8 14H22V16H8V14Z" fill="white" />
      </svg>
    </button>
    {{ itemCount(props.id)}}
    <button @click="cartIncrement(props.id)">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" fill="#FFCE7F" />
        <path d="M14 14V8H16V14H22V16H16V22H14V16H8V14H14Z" fill="white" />
      </svg>
    </button>
  </div>
</template>
<script setup>
  import { extra } from '@/composables/extra';
  const {cartIncrement, cartDecrement, itemCount} = extra();

  const props = defineProps({
    id: Number,
  });
</script>
<style lang="scss">
  .set-count{
    justify-content: space-around;
    font-family: var(--font-600);
    font-size: 17px;
    color: var(--link-color);
    align-items: center;
    
    button {
      &:hover {
        svg circle {
          fill: var(--accent-color1);
        }
      }
    }
  }
</style>