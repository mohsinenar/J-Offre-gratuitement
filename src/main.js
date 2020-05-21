import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './assets/style.css'
import {
    library
} from '@fortawesome/fontawesome-svg-core';
// internal icons
import {
    fas
} from "@fortawesome/free-solid-svg-icons";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
// vue validation
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

const moment = require('moment')
require('moment/locale/fr')
Vue.use(require('vue-moment'), {
    moment
});
library.add(fas);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultIconComponent: "vue-fontawesome",
})
Vue.config.productionTip = false
new Vue({
    watch: {},
    router,
    store,
    render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
    if (from.name == "viewListing" && to.name == "AddListing") {
        next({
            name: "Home"
        })
    }
    if (to.meta.isGuarded == true && store.state.Auth.logedUser.isLoged == false) {
        store.dispatch("openMessage", {
            text: "you need to login before accesing this page",
            type: "is-warning"
        })
        if (to.meta.redirectTologin) {
            next({
                name: "Login"
            })
        }
    } else {
        next()
    }
    next()
})