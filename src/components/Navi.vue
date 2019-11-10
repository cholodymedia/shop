<template>
  <div class="navi">
    <div class="logo-box">
      <img :src="logo" alt="logo">
    </div>
    <div class="counter-box">
      <div class="counter" @click="cartView">
        <font-awesome-icon icon="shopping-cart" class="icon"></font-awesome-icon>
        <span :class="numberColor">{{totalQuantity}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import image from '@/assets/logo.png';

export default {
  name: 'Navi',
  data() {
    return {
      logo: image,
    };
  },
  methods: {
    ...mapActions(['changeCartView']),
    cartView() {
      this.changeCartView();
    },
  },
  computed: {
    ...mapGetters(['totalQuantity']),
    numberColor() {
      return (this.totalQuantity === 0) ? 'grey' : 'green';
    },
  },
};
</script>

<style lang="scss" scoped>
.green {
  color: #41B883;
  font-size: 1.1rem;
}
.grey {
  color: #35495E;
  font-size: 1.1rem;
}
.navi {
  width: 100%;
  height: 4rem;
  background-color: white;
  display: flex;
  .logo-box {
    width: 10vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 3rem;
    }
  }
  .counter-box {
    width: 12vw;
    height: 100%;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .counter {
      width: 100px;
      height: 50px;
      border-radius: 10px;
      background-color: whitesmoke;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      cursor: pointer;
      .icon {
        color: #35495E;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
