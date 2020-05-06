<template>
  <div class="section">
    <h1 class="title has-text-centred"> LogIn </h1>
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
      <b-button class="is-fullwidth is-primary" @click="LogIn" outlined>login</b-button>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
        email:"mnarmouche@gmail.com",
        passowrd:"mohsine123456789",
      }
  },
  methods:{
    LogIn:function(){
      this.$store.dispatch('login',{"email":this.email,"password":this.passowrd})
    }
  },
  computed:{
  },  
  mounted:function(){
      
  },
  name: 'LoginForm',
}
</script>

