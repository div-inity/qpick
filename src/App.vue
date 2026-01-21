<template>
  <Header/>
  <router-view/>
  <Footer/>
  
</template>
<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue'; 
  import { extra } from '@/composables/extra';
  import { onMounted } from 'vue'
  const {loadCart} = extra();

  onMounted(() => {
    loadCart();
  })
</script>
<style lang="scss">
 #app {
  background-color: #eaeaea;
 }
</style>
