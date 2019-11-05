<template>
  <div class="navi">
    <div class="logo-box">
      <img :src="logo" alt="logo">
    </div>
    <div class="counter-box">
      <div class="counter"></div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
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
    }
  }
}
</style>
