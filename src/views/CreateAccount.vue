<template>
    <div class="section">
        <h1 class="title is-size-6 has-text-centered ">
            créer un compte Par:
        </h1>
        <hr>
            <b-field>
                <b-button  @click="Goto({name:'createAccountByEmail'})" class="is-fullwidth" icon-left="envelope" outlined="" size="is-large" type="is-primary">
                    email
                </b-button>
            </b-field>
            <b-field>
                <b-button  disabled @click="Goto({name:'createAccountByPhone'})"  class="is-fullwidth" icon-left="phone" outlined="" size="is-large" type="is-primary">
                    Telphone
                </b-button>
            </b-field>
                        <b-field>
                <b-button  disabled @click="Goto({name:'createAccountByPhone'})"  class="is-fullwidth" icon-left="facebook" outlined="" size="is-large" type="is-primary">
                    Facebook
                </b-button>
            </b-field>
                        <b-field>
                <b-button  disabled @click="Goto({name:'createAccountByPhone'})"  class="is-fullwidth" icon-left="google" outlined="" size="is-large" type="is-primary">
                    Google
                </b-button>
            </b-field>
        </hr>
    </div>
</template>
<script>
    export default {
    data: function() {
      return {

      }
    },
    methods: {
      Goto:function(payload){
            this.$router.push(payload);
        },
   
    },
    name: 'CreateAccount',
  }
</script>