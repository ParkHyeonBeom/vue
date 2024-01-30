<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CartPage></CartPage>
  
</template>

<script>
import CartPage from './page/CartPage.vue'

export default {
  name: 'App',
  components: {
    CartPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
