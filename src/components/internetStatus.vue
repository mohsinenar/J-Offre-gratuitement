<template>
  <div v-show="false"  style="padding:10px !important;position:fixed; width:100%; top:0px ;z-index:10" class="box is-clearfix is-fullwidth">
  	   <b-notification
            :closable="false"
            type="is-danger"
            has-icon
            aria-close-label="Close notification"
            role="alert">
            aucun connexion d'internet
        </b-notification>
  </div>
</template>
<script>

export default {
  data: function() {
    return {

    };
  },
  computed: {
      
  },
  name: "Navbare",
  components:{
  },
  methods: {
  }
};
</script>

<style>
</style>
