<template>
  <div class="box">
    <div class="left">
      <img src="https://picsum.photos/id/6/200/200" alt="Product">
    </div>
    <div class="right">
      <span class="name">XPS 15</span>
      <span class="company">Firma: DELL</span>
      <span class="price">Cena: 7000 zł</span>
      <div class="button-box">
        Dodaj
        <div class="add"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProduct',
};
</script>

<style lang="scss" scoped>
  .box {
    width: 80%;
    height: 200px;
    background: white;
    margin-top: 50px;
    border-radius: 15px;
    display: flex;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(53, 73, 94, 0.253);
    -moz-box-shadow: 0px 5px 10px 0px rgba(53, 73, 94, 0.253);
    box-shadow: 0px 5px 10px 0px rgba(53, 73, 94, 0.253);
    .left {
      width: 40%;
      height: 200px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        height: 200px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .right {
      width: 60%;
      height: 200px;
      display: flex;
      flex-direction: column;
      .name {
        font-size: 1.5rem;
        padding-top: 30px;
      }
      .company {
        font-size: 1.1rem;
        padding-top: 10px;
        font-weight: 200;
      }
      .price {
        font-size: 1.15rem;
        margin-top: 20px;
      }
      .button-box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 180px;
        height: 100%;
        .add {
          width: 100px;
          height: 50px;
          background-color: #41B883;
          border-radius: 8px;
          margin-left: 20px;
        }
      }
    }
  }
</style>
