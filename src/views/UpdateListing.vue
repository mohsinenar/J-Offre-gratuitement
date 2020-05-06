<template>
  <div>
    <section>
      <b-steps
        v-model="currentStep"
        position="left"
        label-position="Bottom"
        size="is-small"
        animated
        :rounded="false"
        :vertical="true"
        v-bind:hasNavigation="false"
      >
        <!-- title  -->
        <b-step-item icon="info">
          <hr />
          <b-message
            v-show="infoErrors.title.hasErrors"
            size="is-small"
            type="is-warning"
          >{{infoErrors.title.message}}</b-message>
          <b-message size="is-small" type="is-info">Lorem ipsum dolor, sit</b-message>

          <b-field label="J'offre Gratuitement:" label-position="outside">
            <b-input size="is-medium" v-model="NewListing.title"></b-input>
          </b-field>
        </b-step-item>

        <!-- category -->
        <b-step-item icon="info">
          <b-message
            v-show="infoErrors.category.hasErrors"
            size="is-small"
            type="is-warning"
          >{{infoErrors.category.message}}</b-message>
          <b-message
            size="is-small"
            type="is-info"
          >Merci de choisir la categorie correspond de votre offre:</b-message>
          <b-field label="categorie:">
            <b-select
              placeholder="maroc"
              icon="globe"
              v-model="NewListing.category"
              expanded
              icon-pack="fas"
            >
              <option
                v-for="(category,i) in categories"
                v-bind:key="i"
                :value="category"
              >{{category}}</option>
            </b-select>
          </b-field>
        </b-step-item>

        <!-- description  de l'offre  -->
        <b-step-item icon="info">
          <b-message
            v-show="infoErrors.Description.hasErrors"
            size="is-small"
            type="is-warning"
          >{{infoErrors.Description.message}}</b-message>
          <b-message size="is-small" type="is-info">describe your offre in some words</b-message>
          <b-field label-position="outside" label="Description de l'offre">
            <b-input
              size="is-small"
              maxlength="200"
              type="textarea"
              v-model="NewListing.Description"
            ></b-input>
          </b-field>
        </b-step-item>
        <!-- city  -->
        <b-step-item icon="info">
          <b-message
            v-show="infoErrors.city.hasErrors"
            size="is-small"
            type="is-warning"
          >{{infoErrors.city.message}}</b-message>
          <b-message size="is-small" type="is-info">ville:</b-message>
          <b-field label="ville:">
            <b-select
              placeholder="maroc"
              v-model="NewListing.city"
              icon="globe"
              expanded
              icon-pack="fas"
            >
              <option v-for="(Citie,i) in Cities" v-bind:key="i" :value="Citie">{{Citie}}</option>
            </b-select>
          </b-field>
        </b-step-item>

        <!-- end -->
        <b-step-item icon="images">
          <section>
            <b-message size="is-small" type="is-info">ajouter des images pour votre offre</b-message>
          </section>
          <div class="section">
            <div class="columns is-clearfixed">
              <div class="is-pulled-left  imageuploader" v-for="(image,i) of images" :key="i">
                <imageuploader
                  @UploadCompleted="UploadCompleted"
                  @CancelImage="CancelImage"
                  v-bind:ImageIndex="i"
                  v-bind:image="image"
                />
              </div>
              <div v-show="!MaxImagesRechedLimit" class="imageuploader is-pulled-left">
                <b-field
                  label-position="outside"
                  style="border: 1px dashed red;text-align: center;width: 100%;height: 100%;line-height: 7;"
                >
                  <b-upload accept="image/gif, image/jpeg, image/png" v-model="images" multiple>
                    <b-icon icon="upload" size="is-medium"></b-icon>
                  </b-upload>
                </b-field>
              </div>
            </div>
          </div>
        </b-step-item>

        <!-- conditions  -->
        <b-step-item icon="info">
     
          <b-message size="is-small" type="is-info">conditions</b-message>
          <b-field label-position="outside" label="conditions">
            <b-input size="is-small" type="textarea" v-model="NewListing.conditions"></b-input>
          </b-field>
        </b-step-item>

         <!-- phone number  -->
        <b-step-item icon="info">
          <b-message
            v-show="infoErrors.phone.hasErrors"
            size="is-small"
            type="is-warning"
          >{{infoErrors.phone.message}}</b-message>
          <b-message size="is-small" type="is-info">votre numero de telephone</b-message>
          <b-field label-position="outside" label="votre numero de telephone">
            <b-input size="is-medium" type="text" v-model="NewListing.PhoneNumber"></b-input>
          </b-field>
        </b-step-item>
        <b-step-item>
        </b-step-item>
        <template style slot="navigation" slot-scope="{previous, next}">
          <div style="padding:10px;bottom:5px;width:100%;">
            <div class="columns is-mobile">
              <div class="column is-6 is-paddingless">
                <b-button
                  expanded
                  outlined
                  type="is-primary"
                  icon-pack="fas"
                  icon-left="backward"
                  v-show="!previous.disabled"
                  @click.prevent="previous.action"
                >Previous</b-button>
              </div>
              <div class="column is-paddingless is-6">
                <b-button
                  expanded
                  outlined
                  type="is-primary"
                  icon-pack="fas"
                  icon-right="forward"
                  v-show="!next.disabled"
                  @click.prevent="Next(next)"
                >Suivant</b-button>
                <!-- @click.prevent="next.action" -->
              </div>
            </div>
          </div>
        </template>
      </b-steps>
    </section>
  </div>
</template>

<script>
import { db, storage } from "../db";
import imageuploader from "./ImageUploader.vue";
import { required, maxLength, minLength } from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      imagesErrors: false,
      infoErrors: {
        title: { hasErrors: false, message: "" },
        category: { hasErrors: false, message: "" },
        Description: { hasErrors: false, message: "" },
        city: { hasErrors: false, message: "" },
        phone: { hasErrors: false, message: "" }
      },
      categories: [
        "informatique et multimedia",
        "Vêtements",
        "Sports et Loisirs",
        "Animaux",
        "Cours et Formations",
        "Services",
        "Offres de stages",
        "Autres"
      ],
      Cities: [
        "Tout le Maroc",
        "Casablanca",
        "Agadir",
        "Al Hoceima",
        "Béni Mellal",
        "El Jadida",
        "Errachidia",
        "Fès",
        "Kénitra",
        "Khénifra",
        "Khouribga",
        "Larache",
        "Marrakech",
        "Meknès",
        "Nador",
        "Ouarzazate",
        "Oujda",
        "Rabat",
        "Safi",
        "Settat",
        "Salé",
        "Tanger",
        "Taza",
        "Tétouan",
        "-- AUTRES VILLES --"
      ],
      NewListing: {
        title: "",
        category: "",
        city: "",
        conditions: "",
        PhoneNumber: "",
        Description: "",
        images: [],
        ownerId:null,
        CreatedAt:new Date().valueOf(),
        Keywords:[]
      },
      MaxImagesRechedLimit: false,
      images: [],
      currentStep: 0,
    };
  },
  methods: {
    Next: function(next) {
      switch (this.currentStep) {
        case 0:
          this.validate(next, this.NewListing.title, this.infoErrors.title);
          break;
        case 1:
          this.validate(
            next,
            this.NewListing.category,
            this.infoErrors.category
          );
          break;
        case 2:
          this.validate(
            next,
            this.NewListing.Description,
            this.infoErrors.Description
          );
          break;
        case 3:
          this.validate(next, this.NewListing.city, this.infoErrors.city);
          break;
        case 6:
          if( this.validate(next, this.NewListing.PhoneNumber, this.infoErrors.phone)){
            this.addlisting()
          }
          break;
        default:
          next.action();
          break;
      }
    },
    validate(next, field, validationObj) {
      console.log(validationObj);
      if (field == "") {
        validationObj.message = "(required)";
        validationObj.hasErrors = true;
        return false;
      } else {
        next.action();
        validationObj.message = "";
        validationObj.hasErrors = false;
        return true;
      }
    },
    UploadCompleted: function(payload) {
      this.NewListing.images[payload.ImageIndex] = payload.fullPath;
    },
    CancelImage: function(index) {
      this.images.splice(index, 1);
      this.NewListing.images.splice(index, 1);
    },
    ShowSuccess: function(NewListingDocId) {
      this.$router.push({
        name: "viewListing",
        params: { ListingID: NewListingDocId }
      });
    },
    ShowError: function(error) {
      console.log(error)
      this.AddErrors = error.code
    },
    addlisting: function() {
      this.$store.dispatch("showLoading");
      var NewListingDoc = db.collection("Listings").doc();
      this.NewListing.ownerId = this.$store.state.logedUser.uid
      this.NewListing.CreatedAt = new Date().valueOf();
      function GenerateKeywors(listing){
          var Keywords =  listing.Description +" "+ listing.title +" "+ listing.category +" "+ listing.city ;
           Keywords =  Keywords.toLowerCase();
           Keywords =  Keywords.split(' ');
           return Keywords
      };
      this.NewListing.Keywords = GenerateKeywors(this.NewListing)
      console.log(this.NewListing.Keywords);

      NewListingDoc.set(this.NewListing)
        .then((data) => {
          console.log(data)
          this.$store.dispatch("openMessage",{text:"bien ajouter",type:"is-success"})
          this.ShowSuccess(NewListingDoc.id);
        })
        .catch((error) => {
          this.$store.dispatch("openMessage",{text:error.code,type:"is-danger"})
        })
        .finally(()=>{
          this.$store.dispatch("hideLoading");
        });
    }
  },
  computed: {
    NSelectedImages: function() {
      return this.images.length;
    }
  },
  mounted: function() {},
  watch: {
    NSelectedImages: function(val) {
      if (val >= 4) {
        this.MaxImagesRechedLimit = true;
      } else {
        this.MaxImagesRechedLimit = false;
      }
    }
  },
  name: "UpdateListing",
  components: {
    imageuploader
  }
};
</script>
<style>
.imageuploader {
  width: 125px;
  height: 125px;
  border: 0.5px dashed yellow;
  margin: 5px;
}
</style>