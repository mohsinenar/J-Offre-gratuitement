webpackJsonp([6],{"/KV2":function(e,t){},"4/8o":function(e,t){},EW4O:function(e,t){},"Kj/t":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"box is-clearfix is-paddingless is-fullwidth"},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:e.isLoged&&!e.isSub,expression:"isLoged && !isSub"}],attrs:{"icon-right":"bars",type:"is-text",size:"is-medium"},on:{click:function(t){e.NavbareOpen=!0}}}),e._v(" "),s("b-button",{directives:[{name:"show",rawName:"v-show",value:e.isSub,expression:"isSub"}],attrs:{"icon-right":"arrow-left",type:"is-text",size:"is-medium"},on:{click:function(t){e.Goback()}}}),e._v(" "),s("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.isLoged&&!e.isSub,expression:"!isLoged && !isSub"}],staticClass:"is-pulled-right",staticStyle:{margin:"0 5px"},attrs:{"icon-left":"user",type:"is-text",size:"is-small"},on:{click:function(t){e.Goto("/CreateAccount")}}},[e._v("create account")]),e._v(" "),s("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.isLoged&&!e.isSub,expression:"!isLoged && !isSub"}],staticClass:"is-pulled-right",staticStyle:{margin:"0 5px"},attrs:{"icon-left":"user",type:"is-text",size:"is-small"},on:{click:function(t){e.Goto("/login")}}},[e._v("login")])],1),e._v(" "),s("b-sidebar",{attrs:{type:"is-light",fullheight:"",overlay:"",left:"",open:e.NavbareOpen},on:{"update:open":function(t){e.NavbareOpen=t}}},[s("div",{staticStyle:{padding:"10px"}},[s("b-menu",[s("b-menu-list",{attrs:{label:"Menu"}},[s("b-menu-item",{attrs:{label:"Home"},on:{click:function(t){e.Goto("/")}}}),e._v(" "),s("b-menu-item",{attrs:{label:"Ajouter un Offre"},on:{click:function(t){e.Goto("/AddListing")}}}),e._v(" "),s("b-menu-item",{attrs:{label:"Mes Offres"},on:{click:function(t){e.Goto("/MyOffres")}}})],1),e._v(" "),s("b-menu-list",{attrs:{label:"Actions"}},[s("b-menu-item",{attrs:{label:"Logout"},on:{click:e.logOut}})],1)],1)],1)])],1)},staticRenderFns:[]};var o=s("VU/8")({data:function(){return{NavbareOpen:!1,logedUser:this.$store.state.logedUser}},computed:{isLoged:function(){return this.$store.state.logedUser.isLoged},isSub:function(){return this.$route.meta.isSub}},name:"Navbare",components:{},methods:{Goback:function(){this.$router.go(-1)},logOut:function(){this.$store.dispatch("logOut"),this.Goto("/")},Goto:function(e){this.NavbareOpen=!1,this.$route.path!=e&&(this.NavbareOpen=!1,this.$router.push(e))}}},a,!1,function(e){s("EW4O")},null,null).exports,n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[[s("b-button",{attrs:{"icon-left":"search",size:"is-small",type:"is-text"},on:{click:function(t){e.isActive=!0}}},[s("span",[e._v("search")])])],e._v(" "),s("b-modal",{attrs:{"full-screen":"",active:e.isActive,width:640,scroll:"keep"},on:{"update:active":function(t){e.isActive=t}}},[s("section",[s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[e._v("Rechercher")])]),e._v(" "),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{label:"mot de recherche"}},[s("b-input",{attrs:{type:"text",placeholder:"mot de recherche"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),s("b-field",{attrs:{label:"category:"}},[s("b-select",{attrs:{placeholder:"maroc",icon:"globe",expanded:"","icon-pack":"fas"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},[s("option",{attrs:{value:"",selected:""}},[e._v("tous les categories")]),e._v(" "),e._l(e.categories,function(t,i){return s("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})],2)],1),e._v(" "),s("b-field",{attrs:{label:"ville:"}},[s("b-select",{attrs:{placeholder:e.City,icon:"globe",expanded:"","icon-pack":"fas"},model:{value:e.City,callback:function(t){e.City=t},expression:"City"}},[s("option",{attrs:{value:"",selected:""}},[e._v("Tous le maroc")]),e._v(" "),e._l(e.Cities,function(t,i){return s("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})],2)],1)],1),e._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-fullwidth",attrs:{type:"button"},on:{click:function(t){e.isActive=!1}}},[e._v("Close")]),e._v(" "),s("button",{staticClass:"button is-fullwidth is-primary",on:{click:e.Search}},[e._v("chercher")])])])])])],2)},staticRenderFns:[]},r={data:function(){return{activeTab:1}},components:{Search:s("VU/8")({data:function(){return{isActive:!1,keyword:"",City:"",category:"",categories:["informatique et multimedia","Vêtements","Sports et Loisirs","Animaux","Cours et Formati12ons","Services","Offres de stages","Autres"],Cities:["Casablanca","Agadir","Al Hoceima","Béni Mellal","El Jadida","Errachidia","Fès","Kénitra","Khénifra","Khouribga","Larache","Marrakech","Meknès","Nador","Ouarzazate","Oujda","Rabat","Safi","Settat","Salé","Tanger","Taza","Tétouan","-- AUTRES VILLES --"]}},methods:{Search:function(){this.keyword=this.keyword.toLowerCase(),this.$store.dispatch("UpdateSearch",{keywords:this.keyword,city:this.City,category:this.category}),this.keyword="",this.City="",this.category="",this.isActive=!1,this.$router.push({name:"Home"})}},computed:{},mounted:function(){},name:"Search"},n,!1,null,null,null).exports},name:"BottomNav",methods:{Goto:function(e){this.NavbareOpen=!1,this.$route.path!=e&&(this.NavbareOpen=!1,this.$router.push(e))}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-tabs",{attrs:{expanded:""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[s("b-tab-item",{attrs:{size:"is-small"}},[s("template",{slot:"header"},[s("b-button",{attrs:{size:"is-small",type:"is-text","icon-left":"plus"},on:{click:function(t){e.Goto("AddListing")}}})],1)],2),e._v(" "),s("b-tab-item",{attrs:{size:"is-small"}},[s("template",{slot:"header"},[s("Search")],1)],2)],1)},staticRenderFns:[]};var l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("b-modal",{attrs:{"has-modal-card":"",active:this.isActive}},[t("b-notification",{attrs:{"auto-close":"",type:this.message.type,"has-icon":"","aria-close-label":"Close notification"},on:{close:this.close}},[this._v(this._s(this.message.text))])],1)},staticRenderFns:[]};var u={data:function(){return{}},beforeCreate:function(){this.$store.dispatch("init"),this.$store.dispatch("bindListings")},components:{Navbare:o,BottomNav:s("VU/8")(r,c,!1,function(e){s("VR31")},null,null).exports,NotificationCenter:s("VU/8")({data:function(){return{}},computed:{isActive:function(){return this.$store.state.isMessageActive},message:function(){return this.$store.state.message}},methods:{close:function(){this.$store.dispatch("closeMessage")}},name:"NotificationCenter"},l,!1,function(e){s("Kj/t")},null,null).exports},computed:{message:function(){return this.$store.state.message},type:function(){return this.$store.state.type},isSub:function(){return this.$route.meta.isSub},pageTitle:function(){return this.$route.meta.title},isGuarded:function(){return this.$route.meta.isGuarded},isLoading:function(){return this.$store.state.isLoading}},watch:{pageTitle:function(){document.title=this.pageTitle+" - free offre"}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("b-loading",{attrs:{"is-full-page":!0,active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),e._v(" "),s("NotificationCenter"),e._v(" "),s("Navbare"),e._v(" "),s("div",{staticClass:"container",staticStyle:{"margin-bottom":"70px"}},[s("router-view")],1),e._v(" "),s("div",[s("BottomNav",{directives:[{name:"show",rawName:"v-show",value:!e.isSub,expression:"!isSub"}]})],1)],1)},staticRenderFns:[]},g=s("VU/8")(u,d,!1,null,null,null).exports,h=s("/ocq"),m={name:"Home",components:{smallListing:s("PyHX").a},computed:{Listings:function(){return this.$store.state.Listings},Search:function(){return this.$store.state.Search}},methods:{clear:function(e){switch(e){case"category":this.Search.category="";break;case"city":this.Search.city="";break;case"keywords":this.Search.keywords=""}this.$store.dispatch("UpdateSearch",this.Search)}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.Search.category||e.Search.city||e.Search.keywords,expression:"Search.category || Search.city || Search.keywords"}],staticClass:"box"},[s("b-taglist",[s("b-tag",{directives:[{name:"show",rawName:"v-show",value:e.Search.category,expression:"Search.category"}],attrs:{type:"is-primary",closable:""},on:{close:function(t){e.clear("category")}}},[e._v(e._s(e.Search.category))]),e._v(" "),s("b-tag",{directives:[{name:"show",rawName:"v-show",value:e.Search.city,expression:"Search.city"}],attrs:{type:"is-primary",closable:""},on:{close:function(t){e.clear("city")}}},[e._v(e._s(e.Search.city))]),e._v(" "),s("b-tag",{directives:[{name:"show",rawName:"v-show",value:e.Search.keywords,expression:"Search.keywords"}],attrs:{type:"is-primary",closable:""},on:{close:function(t){e.clear("keywords")}}},[e._v(e._s(e.Search.keywords))])],1)],1),e._v(" "),e._l(e.Listings,function(e){return s("div",{key:e.id},[s("smallListing",{attrs:{Listing:e}})],1)})],2)},staticRenderFns:[]},p=s("VU/8")(m,f,!1,null,null,null).exports;i.a.use(h.a);var v=[{path:"/",name:"Home",component:p,title:"home",meta:{title:"Home",isGuarded:!1,isSub:!1}},{path:"/login",name:"Login",component:function(){return s.e(3).then(s.bind(null,"lmfZ"))},meta:{title:"log in",isSub:!0,isGuarded:!1}},{path:"/CreateAccount",name:"CreateAccount",component:function(){return s.e(4).then(s.bind(null,"5h8r"))},meta:{title:"Create Account",isSub:!0,isGuarded:!1}},{path:"/AddListing",name:"AddListing",component:function(){return s.e(0).then(s.bind(null,"SO+j"))},meta:{title:"add listing",isGuarded:!0,isSub:!0,redirectTologin:!0}},{path:"/viewListing/:ListingID",name:"viewListing",component:function(){return s.e(1).then(s.bind(null,"H11a"))},meta:{title:"view listing",isSub:!0,isGuarded:!1}},{path:"/MyOffres/",name:"MyOffres",component:function(){return s.e(2).then(s.bind(null,"UJ9N"))},meta:{title:"Mes Offres",isSub:!0,isGuarded:!1}}],b=new h.a({base:Object({NODE_ENV:"production"}).BASE_URL,routes:v}),y=s("mvHQ"),w=s.n(y),L=s("Dd8w"),S=s.n(L),_=s("NYxO"),U=s("yviF"),k=s.n(U),x=s("ueVu"),N=s("rLbv");i.a.use(_.a);var C=new _.a.Store({state:{isLoading:!1,isMessageActive:!1,MyListings:[],message:{text:"hello",type:"is-success"},type:"is-success",Listings:[],logedUser:{isNewUser:""},Search:{keywords:"",city:"",category:""}},mutations:S()({},N.b,{UpdateSearch:function(e,t){e.Search=t},showLoading:function(e){e.isLoading=!0},hideLoading:function(e){e.isLoading=!1},closeMessage:function(e){e.isMessageActive=!1,e.message.text="",e.message.type=""},openMessage:function(e,t){e.message.text=t.text,e.message.type=t.type,e.isMessageActive=!0},Logout:function(e){console.log(k.a.auth().currentUser),console.log(k.a.auth().User),k.a.auth().signOut().then(function(){}).catch(function(e){}),e.logedUser.isNewUser="",e.logedUser.email="",e.logedUser.uid="",e.logedUser.phoneNumber="",e.logedUser.photoURL="",e.logedUser.refreshToken="",e.logedUser.isLoged=!1,localStorage.setItem("logedUser",w()(e.logedUser))},createAccount:function(e,t){k.a.auth().createUserWithEmailAndPassword(t.email,t.password).catch(function(t){e.isMessageActive=!0,e.message.text=t.code,e.message.type="is-warning"}).then(function(t){e.logedUser.isNewUser=t.additionalUserInfo.isNewUser,e.logedUser.displayName=t.user.displayName,e.logedUser.email=t.user.email,e.logedUser.uid=t.user.uid,e.logedUser.phoneNumber=t.user.phoneNumber,e.logedUser.photoURL=t.user.photoURL,e.logedUser.refreshToken=t.user.refreshToken,e.logedUser.isLoged=!0,localStorage.setItem("logedUser",w()(e.logedUser)),b.push("/")})},logIn:function(e,t){e.isLoading=!0,k.a.auth().signInWithEmailAndPassword(t.email,t.password).catch(function(t){e.isMessageActive=!0,e.message.text=t.code,e.message.type="is-warning"}).then(function(t){e.logedUser.isNewUser=t.additionalUserInfo.isNewUser,e.logedUser.displayName=t.user.displayName,e.logedUser.email=t.user.email,e.logedUser.uid=t.user.uid,e.logedUser.phoneNumber=t.user.phoneNumber,e.logedUser.photoURL=t.user.photoURL,e.logedUser.refreshToken=t.user.refreshToken,e.logedUser.isLoged=!0,localStorage.setItem("logedUser",w()(e.logedUser)),b.push("/")}).finally(function(){e.isLoading=!1})},init:function(e){null==JSON.parse(localStorage.getItem("logedUser"))&&localStorage.setItem("logedUser",w()({isLoged:!1})),e.logedUser=JSON.parse(localStorage.getItem("logedUser"))}}),actions:{closeMessage:function(e){e.commit("closeMessage")},openMessage:function(e,t){e.commit("openMessage",t)},showLoading:function(e){e.commit("showLoading")},hideLoading:function(e){e.commit("hideLoading")},UpdateSearch:function(e,t){e.commit("UpdateSearch",t),e.dispatch("bindListings")},init:function(e){e.commit("init")},loadMyListings:Object(N.a)(function(e){var t=x.a.collection("Listings");return t=(t=t.where("ownerId","==",e.state.logedUser.uid)).limit(50),e.bindFirestoreRef("MyListings",t)}),bindListings:Object(N.a)(function(e){var t=x.a.collection("Listings").where("IsActive","==",!0);return""!=e.state.Search.keywords&&(t=t.where("Keywords","array-contains",e.state.Search.keywords),console.log("search by keyword",e.state.Search.keywords)),""!=e.state.Search.city&&(t=t.where("city","==",e.state.Search.city),console.log("search by city",e.state.Search.city)),""!=e.state.Search.category&&(t=t.where("category","==",e.state.Search.category),console.log("search by category",e.state.Search.category)),t=t.limit(50),e.bindFirestoreRef("Listings",t)}),Delete:function(e,t){e.commit("showLoading"),x.a.collection("Listings").doc(t.id).delete().then(function(){e.commit("openMessage",{text:"done!",type:"is-info"}),b.go(-1)}).catch(function(t){e.commit("openMessage",{text:t.code,type:"is-warning"})}).finally(function(){e.commit("hideLoading")})},login:function(e,t){e.commit("logIn",t)},logOut:function(e){e.commit("Logout")},createAccount:function(e,t){console.log(t),e.commit("createAccount",t)}}}),A=s("k5jX"),O=(s("/KV2"),s("Q0/0"),s("C/JF")),$=s("fhbW"),M=s("1e6/");i.a.use(s("8AgW")),O.c.add($.a),i.a.component("vue-fontawesome",M.a),i.a.use(A.a,{defaultIconPack:"fas",defaultIconComponent:"vue-fontawesome"}),i.a.config.productionTip=!1,new i.a({watch:{},router:b,store:C,render:function(e){return e(g)}}).$mount("#app"),b.beforeEach(function(e,t,s){console.log(C.state.logedUser.isLoged),"viewListing"==t.name&&"AddListing"==e.name&&s({name:"Home"}),1==e.meta.isGuarded&&0==C.state.logedUser.isLoged?(C.dispatch("openMessage",{text:"you need to login before accesing this page",type:"is-warning"}),e.meta.redirectTologin&&s({name:"Login"})):s(),s()})},PyHX:function(e,t,s){"use strict";s("ueVu");var i={data:function(){return{images:[]}},methods:{viewListing:function(e){this.$router.push({name:"viewListing",params:{ListingID:this.Listing.id}})},LoadImages:function(){0!=this.Listing.images.length||this.Listing.images.push("./no-pictures.svg")}},props:{Listing:Object},mounted:function(){this.LoadImages()}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section is-paddingless",staticStyle:{margin:"10px auto"},on:{click:function(t){e.viewListing(e.Listing)}}},[s("div",{staticClass:"is-paddingless box media",staticStyle:{padding:"10px !important"}},[s("div",{staticClass:"media-left"},[s("span",{staticClass:"image is-96x96"},[s("img",{attrs:{src:e.Listing.images[0]}})])]),e._v(" "),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",{staticClass:"is-size-7"},[s("strong",[e._v(e._s(e.Listing.title))])]),e._v(" "),s("hr"),e._v(" "),s("b-tag",[e._v(e._s(e._f("moment")(e.Listing.CreatedAt,"from","now"))+" @ "+e._s(e.Listing.city))])],1)])])])},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(e){s("4/8o")},null,null);t.a=o.exports},"Q0/0":function(e,t){},VR31:function(e,t){},ueVu:function(e,t,s){"use strict";s.d(t,"a",function(){return o});var i=s("yviF"),a=s.n(i),o=(s("cWbj"),s("881v"),s("dih4"),a.a.initializeApp({apiKey:"AIzaSyD1Wg3aSrmIgCKBbBusN5uzzTBOgk4Eb3I",authDomain:"j-offre-gratuitement-3b3a5.firebaseapp.com",databaseURL:"https://j-offre-gratuitement-3b3a5.firebaseio.com",projectId:"j-offre-gratuitement-3b3a5",storageBucket:"j-offre-gratuitement-3b3a5.appspot.com",messagingSenderId:"26391709226",appId:"1:26391709226:web:bb424a28ab7bd57c19e553",measurementId:"G-BKNGZ1N1PL"}).firestore());a.a.storage()}},["NHnr"]);
//# sourceMappingURL=app.3e2caa6dadaf1c20b183.js.map