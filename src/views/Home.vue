<template>
  <div>
    <div v-show="Search.category || Search.city || Search.keywords" class="box">
      <b-taglist>
        <b-tag
          v-show="Search.category"
          type="is-primary"
          closable
          @close="clear('category')"
        >{{Search.category}}</b-tag>

        <b-tag
          v-show="Search.city"
          type="is-primary"
          closable
          @close="clear('city')"
        >{{Search.city}}</b-tag>

        <b-tag
          v-show="Search.keywords"
          type="is-primary"
          closable
          @close="clear('keywords')"
        >{{Search.keywords}}</b-tag>
      </b-taglist>
    </div>
    <div v-for="Listing of Listings" v-bind:key="Listing.id">
      <smallListing v-bind:Listing="Listing" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import smallListing from "@/components/SmallListing.vue";
export default {
  name: "Home",
  components: {
    smallListing
  },
  computed: {

    Listings: function() {
      return this.$store.state.Listings.Listings;
    },
    Search: function() {
      return this.$store.state.Listings.Search;
    }
  },
  methods: {
    clear: function(val) {
      switch (val) {
        case "category":
          this.Search.category = "";
          break;
        case "city":
          this.Search.city = "";
          break;
        case "keywords":
          this.Search.keywords = "";
          break;
        default:
          break;
      }
      this.$store.dispatch("Listings/UpdateSearch", this.Search);
    }
  }
};
</script>
