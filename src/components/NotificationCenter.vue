<template>
        <b-modal  has-modal-card :active="isActive">
              <b-notification auto-close @close="close" :type="message.type" has-icon aria-close-label="Close notification">{{message.text}}</b-notification>
        </b-modal>
</template>
<script>
export default {
  data: () => {
    return {
    };
  },
  computed:{
    isActive:function(){
      return this.$store.state.isMessageActive
    },
    message:function(){
      return this.$store.state.message
    }
  },
  methods:{
    close:function(){
     this.$store.dispatch("closeMessage")
    }
  },
  name: "NotificationCenter",
};
</script>

<style>
</style>