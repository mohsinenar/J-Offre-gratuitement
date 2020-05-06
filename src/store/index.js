import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import { db } from '../db'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import router from '../router'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isLoading: false,
    isMessageActive: false,
    MyListings: [],
    message: {
      text: "hello",
      type: "is-success"
    },
    type: "is-success",
    Listings: [],
    logedUser: { isNewUser: "" },
    Search: {
      keywords: "",
      city: "",
      category: "",
    }
  },
  mutations: {
    ...vuexfireMutations,
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
    Logout(state) {
      console.log(firebase.auth().currentUser)
      console.log(firebase.auth().User)
      firebase.auth().signOut().then(function () {

      }).catch(function (error) {

      });
      state.logedUser.isNewUser = ""
      state.logedUser.email = ""
      state.logedUser.uid = ""
      state.logedUser.phoneNumber = ""
      state.logedUser.photoURL = ""
      state.logedUser.refreshToken = ""
      state.logedUser.isLoged = false
      localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
    },
    createAccount(state, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .catch((error) => {
          state.isMessageActive = true
          state.message.text = error.code;
          state.message.type = "is-warning";
        })
        .then(data => {
          state.logedUser.isNewUser = data.additionalUserInfo.isNewUser
          state.logedUser.displayName = data.user.displayName
          state.logedUser.email = data.user.email
          state.logedUser.uid = data.user.uid
          state.logedUser.phoneNumber = data.user.phoneNumber
          state.logedUser.photoURL = data.user.photoURL
          state.logedUser.refreshToken = data.user.refreshToken
          state.logedUser.isLoged = true
          localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
          router.push("/");
        })
    },
    logIn(state, payload) {
      state.isLoading = true;
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .catch((error) => {
          state.isMessageActive = true
          state.message.text = error.code;
          state.message.type = "is-warning";
        })
        .then(data => {
          state.logedUser.isNewUser = data.additionalUserInfo.isNewUser
          state.logedUser.displayName = data.user.displayName
          state.logedUser.email = data.user.email
          state.logedUser.uid = data.user.uid
          state.logedUser.phoneNumber = data.user.phoneNumber
          state.logedUser.photoURL = data.user.photoURL
          state.logedUser.refreshToken = data.user.refreshToken
          state.logedUser.isLoged = true
          localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
          router.push("/");
        })
        .finally(() => {
          state.isLoading = false;
        })
    },
    init(state) {
      var Local = JSON.parse(localStorage.getItem("logedUser"))
      if (Local == null) {
        localStorage.setItem('logedUser', JSON.stringify({ "isLoged": false }));
      }
      state.logedUser = JSON.parse(localStorage.getItem("logedUser"))
    }
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
    init: function (context) {
      context.commit("init")
    },
    loadMyListings: firestoreAction((context) => {
      let Query = db.collection('Listings')
      Query = Query.where("ownerId", '==', context.state.logedUser.uid)
      Query = Query.limit(50);
      return context.bindFirestoreRef('MyListings', Query)
    }),
    bindListings: firestoreAction((context) => {

      let Query = db.collection('Listings').where("IsActive","==",true)
      if (context.state.Search.keywords != "") {
        Query = Query.where("Keywords", 'array-contains', context.state.Search.keywords)
        console.log("search by keyword", context.state.Search.keywords)
      }

      if (context.state.Search.city != "") {
        Query = Query.where("city", '==', context.state.Search.city)
        console.log("search by city", context.state.Search.city)

      }

      if (context.state.Search.category != "") {
        Query = Query.where("category", '==', context.state.Search.category)
        console.log("search by category", context.state.Search.category)

      }
      Query = Query.limit(50);
      return context.bindFirestoreRef('Listings', Query)
    }),
    Delete: (context, payload) => {
      context.commit("showLoading")
      db.collection('Listings').doc(payload.id)
        .delete()
        .then(() => {
          context.commit("openMessage",{text:"done!",type:"is-info"})
          router.go(-1)
        })
        .catch((error) => {
          context.commit("openMessage",{text:error.code,type:"is-warning"})
        })
        .finally(() => {
          context.commit("hideLoading")
        })
    },
    login(context, payload) {
      context.commit("logIn", payload)
    },
    logOut(context) {
      context.commit("Logout")
    },
    createAccount(context, payload) {
      console.log(payload)
      context.commit('createAccount', payload)
    }
  },

})
