(function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"799945a6","chunk-332d9f1e":"a11af30f","chunk-4854240b":"e8370f53","chunk-42f8e079":"e93d01df","chunk-4b33a0ea":"b8915834","chunk-6051e4d4":"7c3daa6a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-332d9f1e":1,"chunk-4854240b":1,"chunk-42f8e079":1,"chunk-4b33a0ea":1,"chunk-6051e4d4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2086b7":"31d6cfe0","chunk-332d9f1e":"35cce7a6","chunk-4854240b":"e6b125bb","chunk-42f8e079":"eccff30d","chunk-4b33a0ea":"7ef17037","chunk-6051e4d4":"8594d38b"}[e]+".css",s=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===s))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],l=i.getAttribute("data-href");if(l===r||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}s[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16a3":function(e,t,n){"use strict";var r=n("cd8c"),a=n.n(r);a.a},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},"4b77":function(e,t,n){},"4f87":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.error?n("Errors",{attrs:{msg:e.error}}):e._e(),e.isLoggedIn?n("Navbar"):e._e(),n("vue-page-transition",{attrs:{name:"fade-in-left"}},[n("router-view")],1)],1)},s=[],o=n("5530"),c=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{staticClass:"app-navbar",attrs:{fixed:"top",type:"dark",variant:"dark"}},[n("b-navbar-nav",[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{exact:"",to:"/"}},[e._v("Födelsedagar")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/birthday"}},[e._v("Födelsedag")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/slideshow"}},[e._v("Bildspel")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[e._v("Admin")])],1),e.isLoggedIn?n("b-nav-item",{attrs:{href:"/logout"},on:{click:function(t){return t.preventDefault(),e.logoutUser(t)}}},[e._v("Logga ut")]):e._e()],1)],1)],1)},i=[],l={methods:Object(o["a"])({},Object(c["b"])(["logout"]),{logoutUser:function(){this.logout()}}),computed:Object(o["a"])({},Object(c["c"])(["isLoggedIn"]))},f=l,d=(n("16a3"),n("2877")),b=Object(d["a"])(f,u,i,!1,null,null,null),m=b.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.msg))])},p=[],g={props:["msg"]},j=g,v=(n("cbe1"),Object(d["a"])(j,h,p,!1,null,"f2034c8e",null)),k=v.exports,y={components:{Navbar:m,Errors:k},computed:Object(o["a"])({},Object(c["c"])(["isLoggedIn","error"])),methods:Object(o["a"])({},Object(c["b"])(["fetchPersons"])),created:function(){this.fetchPersons()}},w=y,_=Object(d["a"])(w,a,s,!1,null,null,null),O=_.exports,x=n("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc"),n("d3b7");var S=n("8c4f"),P=(n("96cf"),n("1da1")),E=n("bc3a"),R=n.n(E),T={token:localStorage.getItem("token")||"",user:{},status:"",error:null},z={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}},C={login:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("auth_request"),n.prev=2,n.next=5,R.a.post("/api/users/login",t);case 5:return a=n.sent,a.data.success&&(s=a.data.token,o=a.data.user,localStorage.setItem("token",s),R.a.defaults.headers.common["Authorization"]=s,r("auth_success",s,o)),n.abrupt("return",a);case 10:n.prev=10,n.t0=n["catch"](2),r("auth_error",n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()},register:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,r("register_request"),n.next=5,R.a.post("/api/users/register",t);case 5:return a=n.sent,void 0!==a.data.success&&r("register_success"),n.abrupt("return",a);case 10:n.prev=10,n.t0=n["catch"](1),r("register_error",n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},getProfile:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("profile_request"),t.next=4,R.a.get("/api/users/profile");case 4:return r=t.sent,n("user_profile",r.data.user),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,localStorage.removeItem("token");case 3:return n("logout"),delete R.a.defaults.headers.common["Authorization"],Y.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},A={auth_request:function(e){e.error=null,e.status="loading"},auth_success:function(e,t,n){e.token=t,e.user=n,e.status="success",e.error=null},auth_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.error=null,e.status="loading"},register_success:function(e){e.error=null,e.status="success"},register_error:function(e,t){e.error=t.response.data.msg},logout:function(e){e.error=null,e.status="",e.token="",e.user=""},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t}},N={state:T,actions:C,mutations:A,getters:z},I=(n("4de4"),n("b0c0"),"/api/persons/"),L={persons:[],birthdayPersons:null},q={allPersons:function(e){return e.persons},allbirthdayPersons:function(e){return e.birthdayPersons}},B={fetchPersons:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,R.a.get(I);case 3:r=t.sent,a=r.data,s=a.filter((function(e){return 0==e.daysLeft})),s&&s.length>0?(console.log("birthdays",s),n("SET_BIRTHDAY_PERSONS",s)):(console.log("no birthdays"),n("SET_BIRTHDAY_PERSONS",null)),n("SET_PERSONS",a);case 8:case"end":return t.stop()}}),t)})))()},fetchPersonById:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,R.a.get(I+t);case 3:return a=n.sent,s=a.data,console.log(r),n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)})))()},addPerson:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o,c,u,i,l,f,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,n.prev=1,a=t.name,s=t.month,o=t.day,c=t.year,u=t.image,console.log({submitting:t}),!u){n.next=18;break}return i=new FormData,i.set("name",a),i.set("month",s),i.set("day",o),i.set("year",c),i.set("image",u),console.log({bodyFormData:i}),n.next=14,R()({method:"post",url:I,data:i,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 14:l=n.sent,console.log(l),n.next=23;break;case 18:return n.next=20,R.a.post(I,{name:a,month:s,day:o,year:c});case 20:f=n.sent,d=f.data,console.log({response:d});case 23:n.next=28;break;case 25:n.prev=25,n.t0=n["catch"](1),console.log(n.t0);case 28:console.log(r);case 29:case"end":return n.stop()}}),n,null,[[1,25]])})))()},deleteThePerson:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,console.log("deleting",t),n.next=5,R.a.delete(I+t);case 5:r("SPLICE_PERSON",t),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:console.log(r);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()},updatePerson:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o,c,u,i,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,console.log({payload:t}),a=t._id,s=t.name,o=t.month,c=t.day,u=t.year,n.next=6,R.a.put(I+a,{name:s,month:o,day:c,year:u});case 6:i=n.sent,l=i.data,console.log({response:l}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),console.log(n.t0);case 14:console.log(r);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()}},D={SET_PERSONS:function(e,t){return e.persons=t},SET_BIRTHDAY_PERSONS:function(e,t){return e.birthdayPersons=t},SPLICE_PERSON:function(e,t){return e.persons=e.persons.filter((function(e){return e._id!==t}))}},F={state:L,getters:q,actions:B,mutations:D};r["default"].use(c["a"]);var $=new c["a"].Store({modules:{auth:N,persons:F}});r["default"].use(S["a"]);var M,U,H=[{path:"/",name:"Birthdays",component:function(){return Promise.all([n.e("chunk-4854240b"),n.e("chunk-42f8e079")]).then(n.bind(null,"931e"))},meta:{checkForBirthday:!0}},{path:"/birthday",name:"Birthday",component:function(){return Promise.all([n.e("chunk-4854240b"),n.e("chunk-4b33a0ea")]).then(n.bind(null,"eeee"))}},{path:"/slideshow",name:"Slideshow",component:function(){return n.e("chunk-6051e4d4").then(n.bind(null,"8762"))},meta:{checkForBirthday:!0}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/admin",name:"Admin",component:function(){return n.e("chunk-332d9f1e").then(n.bind(null,"3530"))},meta:{requiresAuth:!0}}],G=new S["a"]({mode:"history",base:"/",routes:H});G.beforeEach((function(e,t,n){"/slideshow"===e.path&&(clearTimeout(M),clearTimeout(U),M=setTimeout((function(){G.push("/",(function(){}))}),3e4)),"/"===e.path&&(clearTimeout(M),clearTimeout(U),U=setTimeout((function(){G.push("/slideshow",(function(){}))}),3e4)),"/admin"!==e.path&&"/login"!==e.path||(console.log("clear timouyt"),clearTimeout(M),clearTimeout(U)),e.matched.some((function(e){return e.meta.requiresAuth}))?$.getters.isLoggedIn?n():n("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&$.getters.isLoggedIn?n("/profile"):n()}));var Y=G,J=n("5f5b"),K=n("b1e0"),Q=(n("4f87"),n("c1df")),V=n.n(Q),W=n("f0eb");V.a.locale("sv"),Object.defineProperty(r["default"].prototype,"$moment",{value:V.a}),r["default"].config.productionTip=!1,r["default"].use(W["default"]),r["default"].use(J["a"]),r["default"].use(K["a"]),r["default"].prototype.$http=R.a;var X=localStorage.getItem("token");X&&(r["default"].prototype.$http.defaults.headers.common["Authorization"]=X),new r["default"]({router:Y,store:$,render:function(e){return e(O)}}).$mount("#app")},cbe1:function(e,t,n){"use strict";var r=n("4b77"),a=n.n(r);a.a},cd8c:function(e,t,n){}});
//# sourceMappingURL=app.97d6ceff.js.map