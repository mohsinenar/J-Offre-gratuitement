<template>
  <section @click="viewListing(Listing)" class="section is-paddingless" style="margin:10px auto">
    <div class="is-paddingless box media" style="padding:10px !important ">
      <div class="media-left">
        <span class="image is-96x96">
          <img  style="height: 100% !important"  :src="Listing.images[0]" />
        </span>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="is-size-7">
            <strong>{{Listing.title}}</strong>
          </p>
          <hr />
          <b-tag>{{Listing.CreatedAt | moment("from", "now")}} @ {{Listing.city}}</b-tag>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { storage } from "../db";
export default {
  data: function() {
    return {
      images: []
    };
  },
  methods: {
    viewListing: function(Listing) {
      this.$router.push({
        name: "viewListing",
        params: { ListingID: this.Listing.id }
      });
    },
    LoadImages() {
      if (this.Listing.images.length == 0) {
        this.Listing.images.push("./no-pictures.svg");
        return;
      }
    }
  },
  props: {
    Listing: Object
  },
  mounted: function() {
    this.LoadImages();
  }
};
</script>

<style>
</style>