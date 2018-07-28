<template>
  <div id="app">
    <hr>
    <h1>Shopping cart example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>

</template>

<script>
  import ProductList from './ProductList.vue'
  import ShoppingCart from './ShoppingCart.vue'

  export default {
    name: "App",
    components: {ProductList, ShoppingCart}
  }
</script>

<style scoped>

</style>
