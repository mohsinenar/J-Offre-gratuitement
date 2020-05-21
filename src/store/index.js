import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './Auth.js'
import Listings from './Listings.js'

import {
  vuexfireMutations,
} from 'vuexfire'


Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Auth,
    Listings
  },
  state: {
    isLoading: false,
    isMessageActive: false,
    message: {
      text: "hello",
      type: "is-success"
    },
    type: "is-success",
    logedUser: {
      isNewUser: ""
    },
  },
  mutations: {
    ...vuexfireMutations,
    SHOW_LOADING(state) {
      state.isLoading = true;
    },
    HIDE_LOADING(state) {
      state.isLoading = false;
    },
    CLOSE_MESSAGE(state) {
      state.isMessageActive = false;
      state.message.text = ""
      state.message.type = ""
    },
    OPEN_MESSAGE(state, payload) {
      state.message.text = payload.text
      state.message.type = payload.type
      state.isMessageActive = true;
    },

  },
  actions: {
    closeMessage: (context) => {
      context.commit("CLOSE_MESSAGE");
    },
    openMessage: (context, payload) => {
      context.commit("OPEN_MESSAGE", payload);
    },
    showLoading: (context) => {
      context.commit("SHOW_LOADING");
    },
    hideLoading: (context) => {
      context.commit("HIDE_LOADING");
    },
  },

})