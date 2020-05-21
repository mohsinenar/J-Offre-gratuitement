<template>
    <div class="section">
        <form action="">
            <b-steps :rounded="false" animated="" position="left" size="is-small" v-bind:hasnavigation="false" v-model="currentStep">
                <!-- step 1 showing the phone input -->
                <b-step-item icon="phone">
                    <b-field :message="[(!$v.userName.required && $v.userName.$dirty )?'field required :(':'']" :type="($v.userName.$invalid && $v.userName.$dirty) ? 'is-danger':undefined  || (!$v.userName.$invalid) ? 'is-success':undefined" label="votre nom ">
                        <b-input @blur="$v.userName.$touch()" maxlength="30" type="text" v-model="userName">
                        </b-input>
                    </b-field>
                    <b-field  placeholder="+212606000000" :message="[(!$v.PhoneNumber.required && $v.PhoneNumber.$dirty )?' ':'']" :type="($v.PhoneNumber.$invalid && $v.PhoneNumber.$dirty) ? 'is-danger':undefined  || (!$v.PhoneNumber.$invalid) ? 'is-success':undefined" label="numero de telephone">
                        <b-input @blur="$v.PhoneNumber.$touch()" type="text" v-model="PhoneNumber">
                        </b-input>
                    </b-field>
                    <div id="recaptcha">
                    </div>
                    <hr>


                        <b-field>
                            <b-button :disabled="$v.PhoneNumber.$invalid" @click="createAccountByPhone" class="is-fullwidth" icon-left="plus-square" type="is-primary">
                                evoyer
                            </b-button>
                        </b-field>
                    </hr>
                </b-step-item>
                <b-step-item icon='times'>
                    <b-field>
                        <b-input @blur="$v.confirmationCode.$touch()" type="number" v-model="confirmationCode">
                        </b-input>
                    </b-field>
                    <b-field>
                        <b-button :disabled="$v.$confirmationCode" @click="confirmation" class="is-fullwidth" icon-left="plus-square" type="is-primary">
                            confirm
                        </b-button>
                    </b-field>
                </b-step-item>
                <template slot="navigation" slot-scope="{previous, next}">
                    <span>
                    </span>
                </template>
            </b-steps>
        </form>
    </div>
</template>
<script>
    import {required,email,sameAs,minLength} from 'vuelidate/lib/validators'
const ValidPhoneNumber = (value)=> value.length == 10 && value[1]==6 || value[1]==7 && value[0]==0 ;

import firebase from 'firebase'
  export default {
    data:()=>{
      return {
       confirmationCode:'',
       PhoneNumber:'+212606639978',
       userName:'',
       recaptchaVerifier:undefined,
       currentStep:undefined,
       confirmationResult:undefined
      }
    },
    methods:{
        confirmation:function(){
            this.confirmationResult.confirm(this.confirmationCode)
            .then((user)=>{
                this.$store.dispatch("Auth/updateUser",user)
            })
            .catch((error)=>{

                let payload = {text:error,type:"is-warning"}
                this.$store.dispatch("openMessage",payload,)
                return ;
            })
        },
        createAccountByPhone(){
            this.$store.dispatch("showLoading")

            firebase.auth().signInWithPhoneNumber(this.PhoneNumber,this.recaptchaVerifier)
                .catch((error) => {
                    let payload = {text:error.code,type:"is-warning"}
                    this.$store.dispatch("openMessage",payload,)
                    return ;
                })
                .then(confirmationResult => {
                    if(confirmationResult){
                        this.confirmationResult = confirmationResult ;
                        this.currentStep=1;
                    }
                })
                .finally(() => {
                    this.$store.dispatch("hideLoading", null,{root: true})
                })
        },
        ConfigCapacha(){
            firebase.auth().languageCode = 'fr';
            this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha',{'size': 'normale',});
            this.recaptchaVerifier.render()
            .then((data)=>{
                console.log("capatch success",data)
            })
            .catch((error)=>{
                this.ConfigCapacha()
            });
        }
    },
        validations:{
            userName:{
                required,
                minLength:minLength(5)
            },
            PhoneNumber:{
                required,

            },
            confirmationCode:{
                required,
                minLength:minLength(6)

            }
        },
        mounted:function(){
            this.ConfigCapacha()
        },
    name:"createAccountByPhone"
  }
</script>
