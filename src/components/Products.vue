<template>
  <div class="wrapper">
    <SingleProduct/>
  </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct.vue';

export default {
  name: 'Products',
  components: {
    SingleProduct,
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
