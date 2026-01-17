<template>
  <Content>
    <!-- <router-view/> -->
     <article class="headphones">
      <Cards>
        <template v-slot:title>Наушники</template>
        <template v-slot:items>
          <Card 
            v-for="h in headphones" 
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
            :name="w.name" 
            :img="w.img"
            :price="w.price"
            :old_price="w.old_price"
            :rating="w.rating"/>
        </template>
      </Cards>
     </article>
  </Content>
</template>

<script setup>
  import { ref, computed } from 'vue';
import { useStore } from 'vuex'
  const store = useStore();
  import Content from '@/components/Content.vue';
  import Cards from '@/components/Cards.vue';
  import Card from '@/components/Card.vue';
  import Footer from '@/components/Footer.vue';
  const headphones = computed(() => store.getters['products/getHeadphones']);
  const wireless = computed(() => store.getters['products/getWireless']);
</script>
<style lang="scss">
</style>