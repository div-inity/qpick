<template>
  <div 
    class="overlay flex column" 
    :class="{'active': modal}" 
    v-if="modal" 
    @click="toggleModal()">
      <div class="modal flex column" @click.stop>
        <button class="close" @click="toggleModal()" aria-label="Закрыть модальное окно">
          <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.2131 45.5202C41.855 46.0017 42.649 46.2354 43.4494 46.1785C44.2497 46.1216 45.0027 45.778 45.5701 45.2106C46.1375 44.6432 46.4812 43.8902 46.538 43.0899C46.5949 42.2895 46.3612 41.4955 45.8798 40.8536L28.2798 23.1869L45.9464 5.52024C46.4883 4.87875 46.7681 4.05637 46.7299 3.2175C46.6917 2.37864 46.3382 1.58511 45.7402 0.995559C45.1423 0.406004 44.3438 0.063865 43.5045 0.0375424C42.6652 0.0112198 41.8468 0.302653 41.2131 0.853579L23.5464 18.4536L5.87976 0.786913C5.23826 0.245031 4.41588 -0.0347666 3.57702 0.00345804C2.73815 0.0416826 1.94463 0.395112 1.35507 0.993089C0.765517 1.59107 0.423378 2.38953 0.397055 3.22885C0.370733 4.06817 0.662166 4.8865 1.21309 5.52024L18.8131 23.1869L1.14643 40.8536C0.799782 41.1549 0.519156 41.5247 0.322157 41.9396C0.125158 42.3545 0.016036 42.8057 0.00163817 43.2648C-0.0127597 43.7238 0.0678775 44.181 0.23849 44.6074C0.409102 45.0339 0.666006 45.4204 0.993086 45.7429C1.32017 46.0654 1.71036 46.3168 2.13919 46.4813C2.56802 46.6459 3.02623 46.72 3.48507 46.6991C3.94391 46.6782 4.39347 46.5627 4.80556 46.3598C5.21765 46.157 5.58336 45.8711 5.87976 45.5202L23.5464 27.9202L41.2131 45.5869V45.5202Z" fill="#ABABAB"/>
          </svg>
        </button>
        <div class="modal-head flex row">
          <p class="title">
            <slot name="title">
              Название модального окна
            </slot>
          </p>
        </div>
        
        <div class="modal-content flex column">
          <slot name="content">
            Содержимое модального окна
          </slot>
        </div>
        
        <div class="modal-actions flex row">
          <slot name="actions">
            
          </slot>
        </div>
        
      </div>
  </div>
  
</template>
<script setup>
  import { extra } from '@/composables/extra';
  const {modal, toggleModal} = extra();
  const props = defineProps({

  })
</script>
<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: none;
  transition: 1s opacity;
  z-index: 11;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &.active {
    opacity: 1;
    display: flex;
  }
  .modal {
    width: 500px;
    min-height: 200px;
    height: fit-content;
    background-color: #fff;
    padding: 33px;
    border-radius: 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    cursor: default;
    position: relative;
    
    .close {
      height: 20px;
      width: 20px;
      position: absolute;
      right: 19px;
      top: 13px;
      &:hover svg path {
        fill: var(--bright-black-color);
      }
      svg {
        height: inherit;
        width: inherit;
      }
    }
    .modal-head {
      .title {
        font-family: var(--font-500);
        font-size: 18px;
        margin-block: 10px;
      }
    }
    .modal-content {
      flex-grow: 1;
    }
    .modal-actions {
      column-gap: 20px;
    }
  }
}
</style>