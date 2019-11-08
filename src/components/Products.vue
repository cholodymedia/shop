<template>
  <div class="wrapper">
    <SingleProduct
    v-for="product in products"
    :key="product.id"
    :product_id="product.id"
    :name="product.name"
    :company="product.company"
    :price="product.price"
    :img="product.img"
    />
  </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct.vue';
import json from '@/products.json';

export default {
  name: 'Products',
  components: {
    SingleProduct,
  },
  data() {
    return {
      products: json,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
