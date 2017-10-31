<template>
  <div id="app" >
    <h1>购物车例子</h1>
    <hr>
    <h2>商品列表:</h2>
    <ProductList></ProductList>
    <hr>
    <Cart></Cart>
  </div>
</template>

<script>

    import ProductList from './components/ProductList.vue'
    import Cart from './components/Cart.vue'

    export default {
        name : 'app',
        components : {
            ProductList,
            Cart
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
