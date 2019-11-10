<template>
  <div id="app">
    <Navi/>
    <Products/>
    <Cart/>
  </div>
</template>

<script>
import Navi from '@/components/Navi.vue';
import Cart from '@/components/Cart.vue';
import Products from '@/components/Products.vue';

export default {
  name: 'app',
  components: {
    Navi,
    Cart,
    Products,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
body {
  margin: 0;
  padding: 0;
  font-family: Roboto;
  overflow-x: hidden;
}
#app {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
}
::-webkit-scrollbar {
  width: 14px;
}
::-webkit-scrollbar-thumb {
  background: #41B883;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #41B883;
}
</style>
