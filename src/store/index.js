import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import router from '../router'
import Auth from './Auth.js'
import Listings from './Listings.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    Auth,Listings 
  },
  state: {
    isLoading: false,
    isMessageActive: false,
    MyListings: [],
    message: {
      text: "hello",
      type: "is-success"
    },
    type: "is-success",
    logedUser: { isNewUser: "" },
    Search: {
      keywords: "",
      city: "",
      category: "",
    }
  },
  mutations: {
    UpdateSearch(state, payload) {
      state.Search = payload
    },
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    closeMessage(state) {
      state.isMessageActive = false;
      state.message.text = ""
      state.message.type = ""
    },
    openMessage(state, payload) {
      state.message.text = payload.text
      state.message.type = payload.type
      state.isMessageActive = true;
    },
  
  },
  actions: {
    closeMessage: (context) => {
      context.commit("closeMessage");
    },
    openMessage: (context, payload) => {
      context.commit("openMessage", payload);
    },
    showLoading: (context) => {
      context.commit("showLoading");
    },
    hideLoading: (context) => {
      context.commit("hideLoading");
    },
    UpdateSearch: (context, payload) => {
      context.commit("UpdateSearch", payload)
      context.dispatch("bindListings");

    },

  },

})
