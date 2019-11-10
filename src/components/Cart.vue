<template>
  <div class="wrapper" v-if="cartView">
    <div class="title">
      <p>In cart</p>
      <div class="close" @click="changeCartView"><font-awesome-icon icon="times"/></div>
    </div>
    <div class="products">
      <SingleCartProduct
        v-for="product in cart"
        :key="product.id"
        :id="product.id"
        :quantity="product.quantity"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SingleCartProduct from '@/components/SingleCartProduct.vue';

export default {
  name: 'Cart',
  components: {
    SingleCartProduct,
  },
  methods: {
    ...mapActions(['changeCartView']),
  },
  computed: {
    ...mapState(['cart', 'cartView']),
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    width: 25rem;
    min-height: 30rem;
    margin-top: 4rem;
    background-color: rgb(64, 87, 112);
    right: 0;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-top-left-radius: 2rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .title {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      color: white;
      background-color: #35495E;
      font-size: 1.5rem;
      p {
        padding-left: 2rem;
      }
      .close {
        margin-left: auto;
        padding-right: 1rem;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          color: #41B883;
        }
      }
    }
    .products {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
