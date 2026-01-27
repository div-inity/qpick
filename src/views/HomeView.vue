<template>
  <Content>
    <!-- <router-view/> -->
     <article class="headphones">
      <Cards>
        <template v-slot:title>Наушники</template>
        <template v-slot:items>
          <Card 
            v-for="h in headphones" 
            @open-modal="handleOpenModal"
            :key="h.id"
            :id="h.id"
            :name="h.name" 
            :img="h.img"
            :price="h.price"
            :old_price="h.old_price"
            :rating="h.rating"/>
        </template>
      </Cards>
     </article>
     <article class="wireless">
      <Cards>
        <template v-slot:title>Беспроводные наушники</template>
        <template v-slot:items>
          <Card 
            v-for="w in wireless" 
            :id="w.id"
            :name="w.name" 
            :img="w.img"
            :price="w.price"
            :old_price="w.old_price"
            :rating="w.rating"/>
        </template>
      </Cards>
     </article>
     <Modal v-if="modal == true && selectedProduct" @close="toggleModal()">
      <template v-slot:title>
        <div class="head flex row">
          <div class="name flex column">
            <span>Артикул:</span>
            <p>{{ selectedProduct.name }}</p>
          </div>
          <Rating :rating="selectedProduct.rating"/>
        </div>
      </template>
      <template v-slot:content>
        <span>Описание товара:</span>
        <p>{{ selectedProduct.description }}</p>
      </template>
      <template v-slot:actions>
        <button @click="addItem(selectedProduct.id)" v-if="!itemInCart(selectedProduct.id)">Купить</button>
        <SetCount v-if="itemInCart(selectedProduct.id)" :id="selectedProduct.id"/>
      </template>
    </Modal>
  </Content>
</template>

<script setup>
  import Rating from '@/components/Rating.vue';
  import SetCount from '@/components/SetCount.vue';
  import Modal from '@/components/Modal.vue';
  import { extra } from '@/composables/extra';
  const {toggleModal, modal, addItem, itemInCart} = extra();
  import { computed } from 'vue';
  import { useStore } from 'vuex'
  const store = useStore();
  import Content from '@/components/Content.vue';
  import Cards from '@/components/Cards.vue';
  import Card from '@/components/Card.vue';
  const headphones = computed(() => store.getters['products/getHeadphones']);
  const wireless = computed(() => store.getters['products/getWireless']);
  const products = computed(() => store.getters['products/getProducts']);

  const selectedProduct = computed(() => {
    return products.value.find(p => p.id == selectedID);
  })

  var selectedID = null;

  function handleOpenModal (id) {
    toggleModal();
    selectedID = id;
  }

  
</script>
<style lang="scss">
  .modal {
    .modal-head {
      .title {
        width: 100%;

        .head {
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
    .modal-head, .modal-content {
      span {
        color: var(--muted-color);
        font-size: 14px;
      }
    }
    .modal-actions {
      margin-top: 20px;
      flex-wrap: wrap;
      .set-count {
        width: 100px;
      }
    }
  }
</style>