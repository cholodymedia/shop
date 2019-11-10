<template>
  <div class="box">
    <div class="mini-box name">{{name}}</div>
    <div class="mini-box quantity">
      <div class="minus" @click="handleMinus"><font-awesome-icon icon="minus"/></div>
      <div class="number">{{localQuantity}}</div>
      <div class="plus" @click="handlePlus"><font-awesome-icon icon="plus"/></div>
    </div>
    <div class="price">{{price+"$"}}</div>
    <div class="delete" @click="deleteItem"><font-awesome-icon icon="trash"/></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import json from '@/products.json';

export default {
  name: 'SingleCartProduct',
  props: {
    id: Number,
    quantity: Number,
  },
  data() {
    return {
      products: json,
      localQuantity: this.quantity,
      timeout: null,
    };
  },
  methods: {
    handlePlus() {
      this.localQuantity += 1;
      this.changeValue();
    },
    handleMinus() {
      if (this.localQuantity > 1) { this.localQuantity -= 1; }
      this.changeValue();
    },
    ...mapActions(['changeQuantity', 'deleteFromCart']),
    changeValue() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.changeQuantity({
          id: this.id,
          quantity: this.localQuantity,
        });
      }, 1000);
    },
    deleteItem() {
      this.deleteFromCart({ id: this.id });
    },
  },
  computed: {
    name() {
      let out;
      this.products.forEach((product) => {
        if (product.id === this.id) {
          out = product.name;
        }
        return null;
      });
      return out;
    },
    price() {
      let out;
      this.products.forEach((product) => {
        if (product.id === this.id) {
          out = product.price;
        }
        return null;
      });
      return out * this.localQuantity;
    },
  },
  watch: {
    quantity() {
      this.localQuantity = this.quantity;
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
  .box {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 1.5rem;
    width: 22rem;
    height: 4rem;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:last-of-type {
      margin-bottom: 1.5rem;
    }
    .mini-box {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .name {
      font-size: 1.1rem;
    }
    .quantity {
      height: 2.8rem;
      background-color: #41B883;
      border-radius: 0.5rem;
      color: white;
      .minus {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
        &:hover {
          color: #35495E;
          cursor: pointer;
        }
      }
      .number {
        flex: 1.5;
        height: 100%;
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
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
        &:hover {
          color: #35495E;
          cursor: pointer;
        }
      }
    }
    .price {
      flex: 0.7;
      color: #41B883;
      font-size: 1.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .delete {
      flex: 0.4;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #35495E;
      font-size: 1.1rem;
      transition: 0.2s;
      &:hover {
        color: rgb(131, 7, 7);
        cursor: pointer;
      }
    }
  }
</style>
