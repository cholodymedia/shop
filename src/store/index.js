import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    cartView: false,
  },
  getters: {
    totalQuantity: (state) => {
      let total = 0;
      state.cart.forEach((product) => {
        total += product.quantity;
      });
      return total;
    },
  },
  mutations: {
    ADD_NEW: (state, object) => {
      state.cart.push(object);
    },
    ADD_TO_EXISTING: (state, payload) => {
      state.cart[payload.index].quantity += payload.quantity;
    },
    CHANGE_CART_VIEW: (state) => {
      state.cartView = !state.cartView;
    },
    CHANGE_QUANTITY: (state, payload) => {
      state.cart[payload.index].quantity = payload.quantity;
    },
    DELETE_FROM_CART: (state, payload) => {
      state.cart.splice(payload.index, 1);
    },
  },
  actions: {
    checkAndAdd: ({ commit, state }, object) => {
      let exits = false;
      state.cart.forEach((product, index) => {
        if (product.id === object.id) {
          commit('ADD_TO_EXISTING', { index, quantity: object.quantity });
          exits = true;
        }
      });
      if (!exits) {
        commit('ADD_NEW', object);
      }
    },
    changeQuantity: ({ commit, state }, payload) => {
      state.cart.forEach((product, index) => {
        if (product.id === payload.id) {
          commit('CHANGE_QUANTITY', { index, quantity: payload.quantity });
        }
      });
    },
    deleteFromCart: ({ commit, state }, payload) => {
      state.cart.forEach((product, index) => {
        if (product.id === payload.id) {
          commit('DELETE_FROM_CART', { index });
        }
      });
    },
    changeCartView: ({ commit }) => {
      commit('CHANGE_CART_VIEW');
    },
  },
  modules: {
  },
});
