<template>
  <div class="box">
    <div class="left">
      <img :src="img" alt="Product">
    </div>
    <div class="right">
      <span class="name">{{name}}</span>
      <span class="company">{{company}}</span>
      <span class="price"><span class="light">Cena:</span> {{price}} zł</span>
      <div class="button-box">
        <div class="quantity">
          <div class="minus" @click="handleMinus"><font-awesome-icon icon="minus"/></div>
          <div class="number">
            <input type="number" v-model.number="quantity">
          </div>
          <div class="plus" @click="handlePlus"><font-awesome-icon icon="plus"/></div>
        </div>
        <div class="add">Do koszyka</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProduct',
  props: {
    product_id: Number,
    name: String,
    company: String,
    price: Number,
    img: String,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    handleMinus() {
      if (this.quantity > 0) {
        this.quantity -= 1;
      }
    },
    handlePlus() {
      this.quantity += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .light {
    font-weight: 100;
    color: black;
    font-size: 1.1rem;
  }
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
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
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
        font-size: 1.2rem;
        margin-top: 10px;
        color: #41B883;
      }
      .button-box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 240px;
        height: 100%;
        .quantity {
          width: 120px;
          height: 45px;
          background-color: #41B883;
          border-radius: 8px;
          display: flex;
          color: white;
          .minus {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.4s;
            &:hover {
              color: #35495E;
              cursor: pointer;
            }
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .number {
            flex: 1.5;
            display: flex;
            justify-content: center;
            align-items: center;
            input {
              background: none;
              padding: 0;
              margin: 0;
              outline: none;
              border: none;
              width: 100%;
              height: 100%;
              text-align: center;
              font-size: 1.1rem;
              color: white;
            }
          }
          .plus {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.4s;
            &:hover {
              cursor: pointer;
              color: #35495E;
            }
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        }
        .add {
          width: 120px;
          height: 45px;
          background-color: #35495E;
          border-radius: 8px;
          margin-left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 400;
          padding-top: -3px;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            background-color: rgb(49, 66, 85);
            color: #41B883;
          }
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
            user-select: none;
        }
      }
    }
    &:last-of-type {
      margin-bottom: 50px;
    }
  }
</style>
