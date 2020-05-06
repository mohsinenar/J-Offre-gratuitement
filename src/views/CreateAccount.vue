<template>
  <div class="section">
        <h1 class="title has-text-centred"> create account </h1>


     <b-field label="votre nom"
            type=""
            message="">
            <b-input type="text"
                v-model="name"
                required
                maxlength="30">
            </b-input>
     </b-field>

     <b-field label="Email"
            type=""
            message="">
            <b-input type="email"
                v-model="email"
                required
                maxlength="30">
            </b-input>
        </b-field>
        <b-field label="Password"
             required
            :message="[]">
            <b-input type="password"  v-model="passowrd" maxlength="30"></b-input>
        </b-field>
      <b-button class="is-fullwidth is-primary" @click="createAccount" outlined>createAccount</b-button>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
        email:"mnarmouche@gmail.com",
        passowrd:"mohsine123456789",
        name:"mohsine123456789",
      }
  },
  methods:{
    createAccount:function(){
      this.$store.dispatch('createAccount',{"email":this.email,"password":this.passowrd})
    }
  },
  computed:{
  },  
  mounted:function(){
      
  },
  name: 'CreateAccount',
}
</script>

