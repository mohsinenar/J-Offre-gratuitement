webpackJsonp([2],{UJ9N:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("PyHX"),n=(i("ueVu"),{name:"MyOffres",data:function(){return{}},computed:{MyListings:function(){return this.$store.state.MyListings}},components:{smallListing:e.a},methods:{loadListings:function(){this.$store.dispatch("loadMyListings")}},mounted:function(){this.loadListings()}}),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("h1",{staticClass:"title has-text-centered"},[this._v("my offres")]),this._v(" "),this._l(this.MyListings,function(t){return s("div",{key:t.id},[s("smallListing",{attrs:{Listing:t}})],1)})],2)},staticRenderFns:[]},a=i("VU/8")(n,r,!1,null,null,null);s.default=a.exports}});
//# sourceMappingURL=2.bfdb80f8190ecc4ef5fb.js.map