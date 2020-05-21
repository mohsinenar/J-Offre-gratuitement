<template>
  <div class="container">
    <div class="card">
      <div style="overflow: hidden;"  class="card-image">
        <section>
          <b-carousel :arrow="false">
          <b-carousel-item v-for="(image, i) in Listing.images" :key="i">
            <span class="">
              <img height="100%" width="100%"  :src="image" />
            </span>
          </b-carousel-item>
        </b-carousel>
        </section>
      </div>
      <div class="card-content">
        <section class="content">
          <h2 class="title is-5">{{Listing.title}}</h2>
          <p>{{Listing.Description}}</p>
        </section>
        <section class="content">
          <p class="title is-6">conditions:</p>
          <p>{{Listing.conditions}}</p>
        </section>
        <hr />
        <section class="content">
          <b-taglist class="is-size-7">
            <b-tag class="is-size-7" type="is-info">{{Listing.city}}</b-tag>
            <b-tag class="is-size-7" type="is-info">{{Listing.category}}</b-tag>
            <b-tag class="is-size-7" type="is-info">{{Listing.CreatedAt | moment("from", "now")}}</b-tag>
          </b-taglist>
        </section>
      </div>

      <div v-show="!logedIsOwner" class="card-footer">
        <b-button
          @click="Call(Listing.PhoneNumber)"
          icon-left="phone-alt"
          type="is-success is-fullwidth"
        >consulter</b-button>
      </div>

      <div v-show="logedIsOwner">
        <!-- <b-field grouped> -->
          <b-field>
            <b-button

              size="is-small"
              @click="Delete"
              icon-left="trash"
              type="is-danger is-fullwidth"
            >supprimer</b-button>
          </b-field>
          <!-- <b-field>
            <b-button

              size="is-small"
              @click="Update()"
              icon-left="trash"
              type="is-warning is-fullwidth"
            >Update</b-button>
          </b-field> -->
          <!-- <b-field>
            <b-button
              expanded
              size="is-small"
              @click="Update()"
              icon-left="check"
              type="is-success is-fullwidth"
            >desactiver</b-button>
          </b-field> -->
        <!-- </b-field> -->
      </div>
    </div>
  </div>
</template>

<script>
import { db, storage } from "../db";
export default {
  data: function() {
    return {
      Listing: {},
      images: []
    };
  },
  methods: {
    Delete() {
      this.$store.dispatch("Listings/Delete", { id: this.ListingID });
    },
    LoadListing() {
      db.collection("Listings")
        .doc(this.$route.params.ListingID)
        .get()
        .then(snapshot => {
          this.Listing = snapshot.data();
          if (this.Listing.images.length == 0) {
            this.Listing.images.push("./static/No-image.png");
            return;
          }
        });
    },
    Call(PhoneNumber) {
      console.log(PhoneNumber);
    }
  },
  computed: {
    logedIsOwner: function() {
      console.log(
        `owner:${this.Listing.ownerId} logedUser ${this.$store.state.Auth.logedUser.uid}`
      );
      return this.Listing.ownerId == this.$store.state.Auth.logedUser.uid;
    },
    ListingID: function() {
      return this.$route.params.ListingID;
    }
  },
  mounted: function() {
    this.LoadListing();
  }
};
</script>

<style>
</style>
