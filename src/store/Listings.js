import {
	vuexfireMutations,
	firestoreAction
} from 'vuexfire'
import {
	db
} from '../db'

let Listings = {
	namespaced: true,
	state: {
		MyListings: [],
		Listings: [],

	},
	mutations: {
		...vuexfireMutations,
	},
	actions: {
		loadMyListings: firestoreAction((context) => {
			let Query = db.collection('Listings')
			Query = Query.where("ownerId", '==', context.state.logedUser.uid)
			Query = Query.limit(50);
			return context.bindFirestoreRef('MyListings', Query)
		}),
		bindListings: firestoreAction((context) => {

			let Query = db.collection('Listings').where("IsActive", "==", true)
			if (context.state.Search.keywords != "") {
				Query = Query.where("Keywords", 'array-contains', context.state.Search.keywords)
				console.log("search by keyword", context.state.Search.keywords)
			}

			if (context.state.Search.city != "") {
				Query = Query.where("city", '==', context.state.Search.city)
				console.log("search by city", context.state.Search.city)

			}

			if (context.state.Search.category != "") {
				Query = Query.where("category", '==', context.state.Search.category)
				console.log("search by category", context.state.Search.category)

			}
			Query = Query.limit(50);
			return context.bindFirestoreRef('Listings', Query)
		}),
		Delete: (context, payload) => {
			context.commit("showLoading")
			db.collection('Listings').doc(payload.id)
				.delete()
				.then(() => {
					context.commit("openMessage", {
						text: "done!",
						type: "is-info"
					})
					router.go(-1)
				})
				.catch((error) => {
					context.commit("openMessage", {
						text: error.code,
						type: "is-warning"
					})
				})
				.finally(() => {
					context.commit("hideLoading")
				})
		},
	},

}

export default Listings