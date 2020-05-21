<template>
	  <div class="section">
	  	<form action="">
        <b-field 
        label="votre nom " 
        :message="[(!$v.userName.required && $v.userName.$dirty )?'field required :(':'']"
        :type="($v.userName.$invalid && $v.userName.$dirty) ? 'is-danger':undefined  || (!$v.userName.$invalid) ? 'is-success':undefined" 
        >
            <b-input maxlength="30" @blur="$v.userName.$touch()" type="text" v-model="userName">
            </b-input>

        </b-field>



        <b-field 
        label="votre email " 
        :message="[(!$v.email.required && $v.email.$dirty )?' ':'']"
        :type="($v.email.$invalid && $v.email.$dirty) ? 'is-danger':undefined  || (!$v.email.$invalid) ? 'is-success':undefined" 
        >
            <b-input maxlength="30" @blur="$v.email.$touch()"  type="email" v-model="email">
            </b-input>
        </b-field>
         <b-field 
        label="votre password " 
        :message="[(!$v.password.minLength && $v.password.$dirty )?' minLength:5 ':'']"
        :type="($v.password.$invalid && $v.password.$dirty) ? 'is-danger':undefined  || (!$v.password.$invalid) ? 'is-success':undefined" 
        >

            <b-input maxlength="30" @blur="$v.password.$touch()" type="password" v-model="password">
            </b-input>

        </b-field>
        
        <b-field  
        label="repeter mot de passe" 
        :message="[(!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty )?'sameAsPassword':'']"
        :type="($v.repeatPassword.$invalid && $v.repeatPassword.$dirty) ? 'is-danger':undefined  || (!$v.repeatPassword.$invalid) ? 'is-success':undefined" 
        >
            <b-input maxlength="30" :disabled="$v.password.$invalid" @blur="$v.repeatPassword.$touch()"  type="password" v-model="repeatPassword">
            </b-input>
        </b-field>
        <b-field>
            <b-button  :disabled="$v.$invalid" @click="createAccountByEmail" class="is-fullwidth" icon-left="plus-square" type="is-primary">evoyer</b-button>
        </b-field>
        </form>
    </div>
</template>
<script>
import {required,email,sameAs,minLength} from 'vuelidate/lib/validators'

	export default {
		data:()=>{
			return {
				email:"",
				password:"",
				userName:'',
                repeatPassword:""
			}
		},
        validations:{
            email:{
                required,
                email
            },
            password:{
                required,
                minLength:minLength(5)
            },
            userName:{
                required,
                minLength:minLength(5)
            },
            repeatPassword:{
                required,
                sameAsPassword: sameAs('password')
            }
        },
        methods:{
            createAccountByEmail:function () {
                this.$store.dispatch("Auth/createAccountByEmail",
                    {email:this.email,password:this.password,userName:this.userName})
            }
        },
		name:"createAccountByEmail"
	}
</script>