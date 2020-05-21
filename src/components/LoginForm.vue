<template>
  <div class="section">
    <h1 class="title has-text-centred"> Se connecter </h1>
     <b-field label="E-mail"
            type=""
            message="">
            <b-input type="email"
                v-model="email"
                required
                maxlength="30">
            </b-input>
        </b-field>
        <b-field label="mot de passe"
             required
            :message="[]">
            <b-input type="password"  v-model="passowrd" maxlength="30"></b-input>
        </b-field>
      <b-button class="is-fullwidth is-primary" @click="LogIn" outlined>Se connecter</b-button>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
        email:"",
        passowrd:"",
      }
  },
  methods:{
    LogIn:function(){
      this.$store.dispatch('Auth/login',{"email":this.email,"password":this.passowrd})
    }
  },
  computed:{
  },
  mounted:function(){

  },
  name: 'LoginForm',
}
</script>
