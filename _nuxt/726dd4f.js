(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{411:function(e,t,r){e.exports=r.p+"img/logo.17bb66c.png"},429:function(e,t,r){"use strict";r.r(t);r(89);var n=r(22),o={data:function(){return{valid:!1,show1:!1,show2:!0,show3:!1,show4:!1,password:"password",username:"demo",image:"https://images.squarespace-cdn.com/content/v1/5608c2dae4b0ffbc0ff092a2/1462484735802-94M1A977HJJEL2THCD2Q/ke17ZwdGBToddI8pDm48kLl6r9ydDU0pEbLAVM93WoUUqsxRUqqbr1mOJYKfIPR7IxQp-SzSi0mUVxNxPLQ2a8ST-OHudl8xFkQoit3yJpm7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtBAdYz4rrMKLrjAsWFNRtjSprFKWBuEhUbdsZxltHXcCjLISwBs8eEdxAxTptZAUg/Medical-physician-doctor-hands.png?format=2500w",rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}}}},layout:"home",methods:{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$auth.loginWith("local",{data:{username:e.username,password:e.password}});case 3:r=t.sent,console.log(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},l=r(54),c=r(78),d=r.n(c),m=r(236),v=r(379),f=r(378),h=r(425),w=r(376),x=r(427),k=r(426),y=r(373),V=r(428),C=r(36),T=r(178),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{staticClass:"justify-center",attrs:{align:"center",justify:"center","no-gutters":""}},[n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"12"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{prominent:"",src:e.image,flat:""}},[n("v-toolbar-title",{attrs:{color:"white",dense:""}},[n("img",{staticClass:"mt-6",attrs:{height:"100px",width:"100",src:r(411),alt:""}})]),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-card-text",[n("v-form",{staticClass:"mt-3",attrs:{id:"check-login-form"},on:{submit:function(t){return t.preventDefault(),e.login({username:e.username,password:e.password})}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"Username",placeholder:"e.g. demo","prepend-inner-icon":"person",rules:[e.rules.required],value:"user",required:"",outlined:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"lock","append-icon":e.show1?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",placeholder:"e.g ********",hint:"At least 8 characters",counter:"",required:"",outlined:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.valid,form:"check-login-form"}},[e._v("Login")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCol:h.a,VContainer:w.a,VForm:x.a,VRow:k.a,VSpacer:y.a,VTextField:V.a,VToolbar:C.a,VToolbarTitle:T.a})}}]);