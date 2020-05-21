<template>

  <div>
    <section>
      <h1 class="title has-text-centered">
        Placer une annonce
      </h1>
      <b-steps :rounded="false" animated="" position="left" size="is-small" v-bind:hasnavigation="false" v-model="currentStep">
        <!-- title  -->
        <b-step-item icon="info">
          <hr/>
          <b-message size="is-small" type="is-warning" v-show="infoErrors.title.hasErrors">
            {{infoErrors.title.message}}
          </b-message>
          <b-field label="Titre de votre annonce:*" label-position="outside">
            <b-input size="is-medium" v-model="NewListing.title">
            </b-input>
          </b-field>
        </b-step-item>
        <!-- category -->
        <b-step-item icon="info">
          <b-message size="is-small" type="is-warning" v-show="infoErrors.category.hasErrors">
            {{infoErrors.category.message}}
          </b-message>
          <b-message size="is-small" type="is-info">
            Merci de choisir la categorie correspond de votre annonce:
          </b-message>
          <b-field label="categorie:*">
            <b-select expanded="" icon="globe" icon-pack="fas" placeholder="maroc" v-model="NewListing.category">
              <option :value="category" v-bind:key="i" v-for="(category,i) in categories">
                {{category}}
              </option>
            </b-select>
          </b-field>
        </b-step-item>
        <!-- description  de l'offre  -->
        <b-step-item icon="info">
          <b-message size="is-small" type="is-warning" v-show="infoErrors.Description.hasErrors">
            {{infoErrors.Description.message}}
          </b-message>
          <b-message size="is-small" type="is-info">
            veuillez décrire votre annonce en quelques mots
          </b-message>
          <b-field label="Description de l'offre*" label-position="outside">
            <b-input maxlength="200" size="is-small" type="textarea" v-model="NewListing.Description">
            </b-input>
          </b-field>
        </b-step-item>
        <!-- city  -->
        <b-step-item icon="info">
          <b-message size="is-small" type="is-warning" v-show="infoErrors.city.hasErrors">
            {{infoErrors.city.message}}
          </b-message>
          <b-field label="ville:">
            <b-select expanded="" icon="globe" icon-pack="fas" placeholder="maroc" v-model="NewListing.city">
              <option :value="Citie.ville" v-bind:key="i" v-for="(Citie,i) in Ceties">
                {{Citie.ville}}
              </option>
            </b-select>
          </b-field>
        </b-step-item>
        <!-- end -->
        <b-step-item icon="images">
          <section>
            <b-message size="is-small" type="is-info">
              Ajouter des images a votre annonce (optionale)
            </b-message>
          </section>
          <div class="section">
            <div class="columns is-clearfixed">
              {{NewListing.images}}
              <div :key="i" class="is-pulled-left imageuploader" v-for="(image,i) of images">
                <imageuploader @cancelImage="cancelImage" @uploadCompleted="uploadCompleted" v-bind:image="image" v-bind:ImageIndex="i"/>
              </div>
              <div class="imageuploader is-pulled-left" v-show="!MaxImagesRechedLimit">
                <b-field label-position="outside" style="border: 1px dashed red;text-align: center;width: 100%;height: 100%;line-height: 7;">
                  <b-upload accept="image/gif, image/jpeg, image/png" multiple="" v-model="images">
                    <b-icon icon="upload" size="is-medium">
                    </b-icon>
                  </b-upload>
                </b-field>
              </div>
            </div>
          </div>
        </b-step-item>
        <!-- conditions  -->
        <b-step-item icon="info">
          <b-message size="is-small" type="is-info">
            s'il y a une / des conditions pour bénéficier de cette offre, veuillez les indiquer ici
          </b-message>
          <b-field label="conditions" label-position="outside">
            <b-input size="is-small" type="textarea" v-model="NewListing.conditions">
            </b-input>
          </b-field>
        </b-step-item>
        <!-- phone number  -->
        <b-step-item icon="info">
          <b-message size="is-small" type="is-warning" v-show="infoErrors.phone.hasErrors">
            {{infoErrors.phone.message}}
          </b-message>
          <b-field label="votre numero de telephone" label-position="outside">
            <b-input :min="10" size="is-medium" type="number" v-model="NewListing.PhoneNumber">
            </b-input>
          </b-field>
        </b-step-item>
        <b-step-item>
        </b-step-item>
        <template slot="navigation" slot-scope="{previous, next}" style="">
                      <div style="padding:10px;bottom:5px;width:100%;">
                          <div class="columns is-mobile">
                              <div class="column is-6 is-paddingless">
                                  <b-button @click.prevent="previous.action" expanded="" icon-left="backward" icon-pack="fas" outlined="" type="is-primary" v-show="!previous.disabled">
                                      Previous
                                  </b-button>
                              </div>
                              <div class="column is-paddingless is-6">
                                  <b-button @click.prevent="Next(next)" expanded="" icon-pack="fas" icon-right="forward" outlined="" type="is-primary" v-show="!next.disabled">
                                      Suivant
                                  </b-button>
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

  import { db, storage } from '../db'
  import imageuploader from '../components/ImageUploader.vue'
  import ceties from '../ceties.js'
  export default {
    data: function() {
      return {
        imagesErrors: false,
        infoErrors: {
          title: { hasErrors: false, message: '' },
          category: { hasErrors: false, message: '' },
          Description: { hasErrors: false, message: '' },
          city: { hasErrors: false, message: '' },
          phone: { hasErrors: false, message: '' }
        },
        categories: [
          'informatique et multimedia',
          'Vêtements',
          'Sports et Loisirs',
          'Animaux',
          'Cours et Formations',
          'Services',
          'Offres de stages',
          'Autres'
        ],
        Ceties: ceties,
        NewListing: {
          title: '',
          category: '',
          city: '',
          conditions: '',
          PhoneNumber: '',
          Description: '',
          images:[],
          ownerId: null,
          CreatedAt: new Date().valueOf(),
          Keywords: [],
          IsActive: true
        },
        MaxImagesRechedLimit: false,
        images: [],
        currentStep: 0
      }
    },
    methods: {
      Next: function(next) {
        switch (this.currentStep) {
          case 0:
            this.validate(next, this.NewListing.title, this.infoErrors.title)
            break
          case 1:
            this.validate(next, this.NewListing.category, this.infoErrors.category)
            break
          case 2:
            this.validate(next, this.NewListing.Description, this.infoErrors.Description)
            break
          case 3:
            this.validate(next, this.NewListing.city, this.infoErrors.city)
            break
          case 6:
            if (this.validate(next, this.NewListing.PhoneNumber, this.infoErrors.phone)) {
              this.addlisting()
            }
            break
          default:
            next.action()
            break
        }
      },
      validate(next, field, validationObj) {
        if (field == '') {
          validationObj.message = 'ce champ est obligatoire'
          validationObj.hasErrors = true
          return false
        } else {
          next.action()
          validationObj.message = ''
          validationObj.hasErrors = false
          return true
        }
      },
      uploadCompleted: function(payload) {
        console.log(payload);
        this.NewListing.images[payload.ImageIndex] = payload.fullPath
        console.log(this.NewListing.images[payload.ImageIndex])
      },
      cancelImage: function(index) {
        this.images.splice(index, 1)
        this.NewListing.images.splice(index, 1)
      },
      ShowSuccess: function(NewListingDocId) {
        this.$router.push({
          name: 'viewListing',
          params: { ListingID: NewListingDocId }
        })
      },
      ShowError: function(error) {
        this.AddErrors = error.code
      },
      addlisting: function() {
        this.$store.dispatch('showLoading')
        var NewListingDoc = db.collection('Listings').doc()
        this.NewListing.ownerId = this.$store.state.Auth.logedUser.uid
        this.NewListing.CreatedAt = new Date().valueOf()
        function GenerateKeywors(listing) {
          var Keywords = listing.Description + ' ' + listing.title + ' ' + listing.category + ' ' + listing.city
          Keywords = Keywords.toLowerCase()
          Keywords = Keywords.split(' ')
          return Keywords
        }
        this.NewListing.Keywords = GenerateKeywors(this.NewListing)
        NewListingDoc.set(this.NewListing)
          .then(data => {
            this.$store.dispatch('openMessage', { text: 'votre annonce a bien été ajoutée, merci', type: 'is-success' })
            this.ShowSuccess(NewListingDoc.id)
          })
          .catch(error => {
            this.$store.dispatch('openMessage', { text: error.code, type: 'is-danger' })
          })
          .finally(() => {
            this.$store.dispatch('hideLoading')
          })
      }
    },
    computed: {
      NSelectedImages: function() {
        return this.images.length
      }
    },
    mounted: function() {},
    watch: {
      NSelectedImages: function(val) {
        if (val >= 4) {
          this.MaxImagesRechedLimit = true
        } else {
          this.MaxImagesRechedLimit = false
        }
      }
    },
    name: 'AddListing',
    components: {
      imageuploader
    }
  }

</script>
<style>

  .imageuploader {
    width: 100px;
    height: 100px;
    border: 0.5px dashed yellow;
    margin: 5px;
  }

</style>
