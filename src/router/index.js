import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    title:"home",
    meta:{
      title:"Home",
      isGuarded:false,
      isSub:false,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:"log in",
      isSub:true,
      isGuarded:false,

    }
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: () => import('../views/CreateAccount.vue'),
    meta:{
      title:"Create Account",
      isSub:true,
      isGuarded:false,
    }
  },
  {
    path: '/AddListing',
    name: 'AddListing',
    component: () => import('../views/AddListing.vue'),
    meta:{
      title:"add listing",
      isGuarded:true,
      isSub:true,
      redirectTologin:true
    }
  },
  {
    path: '/viewListing/:ListingID',
    name: 'viewListing',
    component: () => import('../views/viewListing.vue'),
    meta:{
      title:"view listing",
      isSub:true,
      isGuarded:false,

    }
  },
  {
    path: '/MyOffres/',
    name: 'MyOffres',
    component: () => import('../views/MyOffres.vue'),
    meta:{
      title:"Mes Offres",
      isSub:true,
      isGuarded:false,

    }
  },
]

const router = new VueRouter({
  // mode: 'dash',
  base: process.env.BASE_URL,
  routes
})



export default router
