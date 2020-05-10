<template>
  <div>
    <div class="box is-clearfix is-paddingless is-fullwidth">
      <!-- side menu button  -->
      <b-button
        v-show="isLoged && !isSub"
        icon-right="bars"
        type="is-text"
        @click="NavbareOpen=true"
        size="is-medium"
      ></b-button>
      <!-- go back button -->
       <b-button
        v-show="isSub"
        icon-right="arrow-left"
        type="is-text"
        @click="Goback()"
        size="is-medium"
      ></b-button>
      <!-- create account button -->
      <b-button
        v-show="!isLoged && !isSub"
        icon-left="user"
        type="is-text"
        class="is-pulled-right"
        style="margin:0 5px"
        @click="Goto('/CreateAccount')"
        size="is-small"
      >créer un compte</b-button>

      <!-- login button -->
      <b-button
        v-show="!isLoged && !isSub"
        icon-left="user"
        type="is-text"
        class="is-pulled-right"
        style="margin:0 5px"
        @click="Goto('/login')"
        size="is-small"
      >se connecter</b-button>
    </div>

    <b-sidebar type="is-light" fullheight overlay left :open.sync="NavbareOpen">
      <div style="padding:10px">
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item @click="Goto('/')" label="Page d'accueil"></b-menu-item>
            <b-menu-item @click="Goto('/AddListing')" label="Ajouter un Offre"></b-menu-item>
            <b-menu-item @click="Goto('/MyOffres')" label="Mes Offres"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item @click="logOut" label="Déconnexion"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      NavbareOpen: false,
      logedUser: this.$store.state.logedUser
    };
  },
  computed: {
    isLoged: function() {
      return this.$store.state.logedUser.isLoged;
    },
    isSub: function() {
      return this.$route.meta.isSub;
    }
  },
  name: "Navbare",
  components:{
  },
  methods: {
    Goback(){
      this.$router.go(-1)
    },
    logOut: function() {
      this.$store.dispatch("logOut");
      this.Goto("/");
    },
    Goto: function(path) {
      this.NavbareOpen = false;
      if (this.$route.path == path) {
        return;
      }
      this.NavbareOpen = false;
      this.$router.push(path);
    }
  }
};
</script>

<style>
</style>