<template>
  <Header/>
  <Content><router-view/></Content>
  <Footer/>
  
</template>
<script setup>
  import Header from './components/Header.vue';
  import Content from './components/Content.vue';
  import Footer from './components/Footer.vue'; 
</script>
<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
 #app {
  background-color: #eaeaea;
 }
</style>
