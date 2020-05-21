<template>
  <div>
      <h1 class="title has-text-centered">Mes annonce</h1>
    <div v-for="Listing of MyListings" v-bind:key="Listing.id">
      <smallListing  v-bind:Listing="Listing" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import smallListing from "@/components/SmallListing.vue";
import { db } from "../db";
export default {
  name: "MyOffres",
  data:()=>{
      return {
      }
  },
  computed:{
      MyListings:function(){
        return this.$store.state.Listings.MyListings
      }
  },
  components: {
    smallListing
  },
  methods: {
    loadListings() {
        this.$store.dispatch("Listings/loadMyListings")
    }
  },
  mounted() {
    this.loadListings();
  }
};
</script>
