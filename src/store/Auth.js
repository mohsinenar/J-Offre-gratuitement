let Auth = {
	namespaced: true,
	state:{
		logedUser: { isNewUser: "" },
	},
	// mutations 
	mutations:{
		//  logout function
		Logout(state) {
	      console.log(firebase.auth().currentUser)
	      console.log(firebase.auth().User)
	      firebase.auth().signOut().then(function () {

	      }).catch(function (error) {
	      });
	      state.logedUser.isNewUser = ""
	      state.logedUser.email = ""
	      state.logedUser.uid = ""
	      state.logedUser.phoneNumber = ""
	      state.logedUser.photoURL = ""
	      state.logedUser.refreshToken = ""
	      state.logedUser.isLoged = false
	      localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
	    },
	    createAccount(state, payload) {
	      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
	        .catch((error) => {
	          state.isMessageActive = true
	          state.message.text = error.code;
	          state.message.type = "is-warning";
	        })
	        .then(data => {
	          state.logedUser.isNewUser = data.additionalUserInfo.isNewUser
	          state.logedUser.displayName = data.user.displayName
	          state.logedUser.email = data.user.email
	          state.logedUser.uid = data.user.uid
	          state.logedUser.phoneNumber = data.user.phoneNumber
	          state.logedUser.photoURL = data.user.photoURL
	          state.logedUser.refreshToken = data.user.refreshToken
	          state.logedUser.isLoged = true
	          localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
	          router.push("/");
	        })
	    },
	     logIn(state, payload) {
	      state.isLoading = true;
	      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
	        .catch((error) => {
	          state.isMessageActive = true
	          state.message.text = error.code;
	          state.message.type = "is-warning";
	        })
	        .then(data => {
	          state.logedUser.isNewUser = data.additionalUserInfo.isNewUser
	          state.logedUser.displayName = data.user.displayName
	          state.logedUser.email = data.user.email
	          state.logedUser.uid = data.user.uid
	          state.logedUser.phoneNumber = data.user.phoneNumber
	          state.logedUser.photoURL = data.user.photoURL
	          state.logedUser.refreshToken = data.user.refreshToken
	          state.logedUser.isLoged = true
	          localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
	          router.push("/");
	        })
	        .finally(() => {
	          state.isLoading = false;
	        })
	    },

	    init(state) {
	      var Local = JSON.parse(localStorage.getItem("logedUser"))
	      if (Local == null) {
	        localStorage.setItem('logedUser', JSON.stringify({ "isLoged": false }));
	      }
	      state.logedUser = JSON.parse(localStorage.getItem("logedUser"))
	    }
	},
	actions:{
		init: function (context) {
	      context.commit("init")
	    },
		login(context, payload) {
	      context.commit("logIn", payload)
	    },
	    logOut(context) {
	      context.commit("Logout")
	    },
	    createAccount(context, payload) {
	      console.log(payload)
	      context.commit('createAccount', payload)
	    }
	}
}

export default Auth