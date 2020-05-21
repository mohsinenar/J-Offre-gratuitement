import firebase from "firebase/app";
import router from '../router'


let Auth = {
	namespaced: true,
	state: {
		logedUser: {
			isNewUser: "",
		},
	},
	// mutations 
	mutations: {
		INIT_USER: (state) => {
			state.logedUser = JSON.parse(localStorage.getItem("logedUser"))
		},
		UPDATE_USER: (state, payload) => {
			state.logedUser.isNewUser = payload.additionalUserInfo.isNewUser
			state.logedUser.displayName = payload.user.displayName
			state.logedUser.email = payload.user.email
			state.logedUser.uid = payload.user.uid
			state.logedUser.phoneNumber = payload.user.phoneNumber
			state.logedUser.photoURL = payload.user.photoURL
			state.logedUser.refreshToken = payload.user.refreshToken
			state.logedUser.isLoged = true
			localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
			router.push("/");
		}
	},
	actions: {
		init: function(context) {

			var Local = JSON.parse(localStorage.getItem("logedUser"))
			if (Local == null) {
				localStorage.setItem('logedUser', JSON.stringify({
					"isLoged": false
				}));
			}
			context.commit("INIT_USER")
		},
		login(context, payload) {
			context.dispatch("showLoading", null,{root: true})
			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
				.catch((error) => {
					// showing error message 
					let payload = {text:error.code,type:"is-warning"}
					context.dispatch("openMessage",payload,{root: true})
				})
				.then(data => {
					data ?context.commit('UPDATE_USER',data):null
				})
				.finally(() => {
					context.dispatch("hideLoading", null, {root: true})
				})
		},
		logOut(context) {
			firebase.auth().signOut().then(function() {}).catch(function(error) {});
			localStorage.setItem('logedUser', null);
			context.dispatch("init")

		},
		createAccountByEmail(context, payload) {
			context.dispatch("showLoading", null,{root: true})
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
				.catch((error) => {
					let payload = {text:error.code,type:"is-warning"}
					context.dispatch("openMessage",payload,{root: true})
					return ;
				})
				.then(data => {
					data ?context.commit('UPDATE_USER',data):null
				})
				.finally(() => {
					context.dispatch("hideLoading", null,{root: true})
				})
		},
		updateUser(context, payload) {
			context.commit('UPDATE_USER',payload)
		}
	}
}

export default Auth