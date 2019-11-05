<template>
  <div class="navi">
    <div class="logo-box">
      <img :src="logo" alt="logo">
    </div>
    <div class="counter-box">
      <div class="counter">
        <font-awesome-icon icon="shopping-cart" class="icon"></font-awesome-icon>
        <span :class="numberColor">{{list.length}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import image from '@/assets/logo.png';

export default {
  name: 'Navi',
  data() {
    return {
      logo: image,
      list: [],
    };
  },
  computed: {
    numberColor() {
      return (this.list.length === 0) ? 'grey' : 'green';
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
  height: 10vh;
  background-color: white;
  display: flex;
  .logo-box {
    width: 10vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40%;
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
      .icon {
        color: #35495E;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
