<template>
  <b-tabs v-model="activeTab" expanded class>
    <!-- add listing Tabe -->
    <b-tab-item  size="is-small">
      <template slot="header">
        <b-button v-show="isLoged" @click="Goto('AddListing')" size="is-small" type="is-text" icon-left="plus">
          Ajouter une Annonce
        </b-button>

            <b-button
       v-show="!isLoged"
        icon-left="user"
        type="is-text"
        class="is-pulled-right"
        style="margin:0 5px"
        @click="Goto('login')"
        size="is-small"
      >se connecter</b-button>

      </template>
    </b-tab-item>

  
    <!-- search tab -->
    <b-tab-item  size="is-small">
      <template slot="header">
        <Search />
      </template>
    </b-tab-item>
  </b-tabs>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  data: () => {
    return {
        activeTab:1
    };
  },
  components: {
    Search
  },
  computed:{
    isLoged: function() {
      return this.$store.state.Auth.logedUser.isLoged;
    },
  },
  name: "BottomNav",
  methods: {
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
.tab-content {
  display: none !important;
}

.b-tabs .tabs {
  margin-bottom: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: white;
  padding: 5px;
}
</style>