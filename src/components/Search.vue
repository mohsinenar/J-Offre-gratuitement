<template>
  <div>
    <template>
      <b-button icon-left="search" @click="isActive=true" size="is-small" type="is-text">
        <span>search</span>
      </b-button>
    </template>
    <b-modal full-screen :active.sync="isActive" :width="640" scroll="keep">
      <section>
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Rechercher</p>
          </header>
          <section class="modal-card-body">
            <b-field label="mot de recherche">
              <b-input type="text" v-model="keyword" placeholder="mot de recherche"></b-input>
            </b-field>
            <b-field label="category:">
              <b-select
                placeholder="maroc"
                icon="globe"
                v-model="category"
                expanded
                icon-pack="fas"
              >
                <option value="" selected>tous les categories</option>
                <option
                  v-for="(category,i) in categories"
                  v-bind:key="i"
                  :value="category"
                >{{category}}</option>
              </b-select>
            </b-field>
            <b-field label="ville:">
              <b-select :placeholder="City" icon="globe" v-model="City" expanded icon-pack="fas">
                <option value="" selected>Tous le maroc</option>
                <option v-for="(City,i) in Cities" v-bind:key="i" :value="City">{{City}}</option>
              </b-select>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-fullwidth" type="button" @click="isActive=false">Close</button>
            <button class="button is-fullwidth is-primary" @click="Search">chercher</button>
          </footer>
        </div>
      </section>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false,
      keyword: "",
      City: "",
      category: "",
      categories: [
        "informatique et multimedia",
        "Vêtements",
        "Sports et Loisirs",
        "Animaux",
        "Cours et Formati12ons",
        "Services",
        "Offres de stages",
        "Autres"
      ],
      Cities: [
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
      ]
    };
  },
  methods: {
    Search: function() {
      this.keyword =  this.keyword.toLowerCase()
      this.$store.dispatch("UpdateSearch", {
        keywords: this.keyword,
        city: this.City,
        category: this.category
      });
      this.isActive = false;
      this.$router.push({name:"Home"})
    }
  },
  computed: {},
  mounted: function() {},
  name: "Search"
};
</script>

