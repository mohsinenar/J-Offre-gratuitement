webpackJsonp([3],{lmfZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section"},[s("h1",{staticClass:"title has-text-centred"},[e._v(" LogIn ")]),e._v(" "),s("b-field",{attrs:{label:"Email",type:"",message:""}},[s("b-input",{attrs:{type:"email",required:"",maxlength:"30"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),s("b-field",{attrs:{label:"Password",required:"",message:[]}},[s("b-input",{attrs:{type:"password",maxlength:"30"},model:{value:e.passowrd,callback:function(t){e.passowrd=t},expression:"passowrd"}})],1),e._v(" "),s("b-button",{staticClass:"is-fullwidth is-primary",attrs:{outlined:""},on:{click:e.LogIn}},[e._v("login")])],1)},staticRenderFns:[]},a={components:{LoginForm:s("VU/8")({data:function(){return{email:"mnarmouche@gmail.com",passowrd:"mohsine123456789"}},methods:{LogIn:function(){this.$store.dispatch("login",{email:this.email,password:this.passowrd})}},computed:{},mounted:function(){},name:"LoginForm"},n,!1,null,null,null).exports}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LoginForm")],1)},staticRenderFns:[]},l=s("VU/8")(a,i,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=3.86571a0cd26153db9a38.js.map