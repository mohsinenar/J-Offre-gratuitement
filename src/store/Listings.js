import {
	firestoreAction
} from 'vuexfire'

import {
	db
} from '../db'
import router from '../router'

let Listings = {
	namespaced: true,
	state: {
		MyListings: [],
		Listings: {},
		Search: {
			keywords: "",
			city: "",
			category: "",
		}
	},
	mutations: {
		UPDATE_SEARCH(state, payload) {
			state.Search = payload
		},
	},
	actions: {
		loadMyListings: firestoreAction((context) => {
			let Query = db.collection('Listings')
			Query = Query.where("ownerId", '==', context.rootState.Auth.logedUser.uid)
			Query = Query.limit(50);
			return context.bindFirestoreRef('MyListings', Query)
		}),
		bindListings: firestoreAction((context) => {
			let Query = db.collection('Listings').where("IsActive", "==", true)
			if (context.state.Search.keywords != "") {
				Query = Query.where("Keywords", 'array-contains', context.state.Search.keywords)
			}
			if (context.state.Search.city != "") {
				Query = Query.where("city", '==', context.state.Search.city)

			}
			if (context.state.Search.category != "") {
				Query = Query.where("category", '==', context.state.Search.category)

			}
			return context.bindFirestoreRef('Listings', Query)

		}),
		Delete: (context, payload) => {
			context.dispatch("showLoading", null, {
				root: true
			})
			db.collection('Listings').doc(payload.id)
				.delete()
				.then(() => {
					context.dispatch("openMessage", {
						text: "votre annonce est bien supprimé",
						type: "is-info"
					}, {
						root: true
					})
					router.go(-1)
				})
				.catch((error) => {
					context.dispatch("openMessage", {
						text: error.code,
						type: "is-warning"
					}, {
						root: true
					})
				})
				.finally(() => {
					context.dispatch("hideLoading", null, {
						root: true
					})
				})
		},
		UpdateSearch: (context, payload) => {
			context.commit("UPDATE_SEARCH", payload)
			context.dispatch("bindListings");

		},
	},

}

export default Listings