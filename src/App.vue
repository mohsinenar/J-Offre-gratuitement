<template >
  <div id="app">
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    <NotificationCenter  />
    <Navbare />
    <div class="container" style="margin-bottom:70px">
      <router-view />
    </div>
    <!-- bottom navigation -->
    <div>
      <BottomNav v-show="!isSub"/>
    </div>
  </div>
</template>
<script>
import Navbare from "./components/Navbare.vue";
import BottomNav from "@/components/BottomNav.vue";
import NotificationCenter from "@/components/NotificationCenter.vue";

export default {
  data: function() {
    return {
    };
  },
  beforeCreate: function() {
    // inital the user
    this.$store.dispatch("init");
    this.$store.dispatch("bindListings");
  },
  components: {
    Navbare,
    BottomNav,
    NotificationCenter
  },
  computed: {
    message:function(){
      return this.$store.state.message
    },
    type:function(){
      return this.$store.state.type
    },
    isSub: function() {
      return this.$route.meta.isSub;
    },
    pageTitle: function() {
      return this.$route.meta.title;
    },
    isGuarded: function() {
      return this.$route.meta.isGuarded;
    },
    isLoading:function(){
      return this.$store.state.isLoading
    },
  },
  watch: {
    pageTitle: function() {
      document.title = this.pageTitle + " - free offre";
    }
  }
};
</script>
