(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],p=0,g=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&g.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/LukeAhrensTownsend.github.io/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"00ca":function(t,e,o){t.exports=o.p+"img/A-Mazing-Game.f47ccacc.png"},"034f":function(t,e,o){"use strict";var a=o("85ec"),n=o.n(a);n.a},"2bcd":function(t,e,o){t.exports=o.p+"img/linkedin-logo-light.c71588a9.png"},"2d6f":function(t,e,o){t.exports=o.p+"img/email-logo-dark.82d9cdd2.png"},"33b1":function(t,e,o){"use strict";var a=o("e517"),n=o.n(a);n.a},"35be":function(t,e,o){t.exports=o.p+"img/Soccer-Ball-Juggler.f3029b2b.png"},"36b3":function(t,e,o){t.exports=o.p+"img/email-logo-light.86276d1a.png"},4207:function(t,e,o){t.exports=o.p+"img/Arduino-Cat-Feeder.a368037c.png"},"50a2":function(t,e,o){t.exports=o.p+"img/github-logo-light.f78e768b.png"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{directives:[{name:"show",rawName:"v-show",value:"/"!==this.$route.path,expression:"this.$route.path !== '/'"}],attrs:{toggleable:"md",sticky:!0,type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("img",{staticClass:"navbar-logo",attrs:{id:"website-logo",src:o("cf05"),alt:"logo"}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/about",active:"/about"===this.$route.path,hidden:""}},[t._v("About")]),a("b-nav-item",{attrs:{to:"/projects",active:"/projects"===this.$route.path}},[t._v(" Projects "),a("b-badge",{attrs:{variant:"/projects"===this.$route.path?"light":""}},[t._v(t._s(t.projectData.length))])],1),a("b-nav-item",{attrs:{to:"/resume",active:"/resume"===this.$route.path,hidden:""}},[t._v("Resume")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-button-toolbar",{staticClass:"justify-content-md-center",attrs:{id:"social-button-group"}},[a("b-button",{staticClass:"social-button",attrs:{id:"email-button",variant:"dark"}},[a("img",{staticClass:"navbar-logo",attrs:{src:o("36b3"),alt:"E-mail logo"}})]),a("b-button",{staticClass:"social-button",attrs:{id:"phone-button",variant:"dark"}},[a("img",{staticClass:"navbar-logo",attrs:{src:o("d161"),alt:"Phone logo"}})]),a("b-button",{staticClass:"social-button",attrs:{href:"https://ca.linkedin.com/in/luke-ahrens-townsend-09a8aa181",variant:"dark"}},[a("img",{staticClass:"navbar-logo",attrs:{src:o("2bcd"),alt:"LinkedIn logo"}})]),a("b-button",{staticClass:"social-button",attrs:{href:"https://github.com/LukeAhrensTownsend",variant:"dark"}},[a("img",{staticClass:"navbar-logo",attrs:{src:o("50a2"),alt:"GitHub logo"}})])],1)],1),a("b-tooltip",{attrs:{target:"email-button",placement:"bottom"}},[t._v(" Please e-mail me at "),a("b-link",{attrs:{href:"mailto:lahrenstownsend@gmail.com"}},[t._v("lahrenstownsend@gmail.com")])],1),a("b-tooltip",{attrs:{target:"phone-button",placement:"bottom"}},[t._v(" Please call me at "),a("a",{attrs:{id:"phone-field",href:"tel:+12048036976"}},[t._v("1 (204) 803-6976")])])],1)],1),a("router-view",{attrs:{projectData:t.projectData}})],1)},r=[],i=(o("d3b7"),o("96cf"),o("1da1")),s=(o("f9e3"),o("2dd8"),{name:"App",head:{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}]},data:function(){return{projectData:{}}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/LukeAhrensTownsend/repos",{method:"GET"});case 3:return o=e.sent,e.next=6,o.json();case 6:t.projectData=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}),l=s,c=(o("034f"),o("2877")),u=Object(c["a"])(l,n,r,!1,null,null,null),p=u.exports,g=o("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"my-auto mx-auto"},[a("div",{staticClass:"text-center",attrs:{id:"title-name"}},[t._v("Luke Ahrens-Townsend")]),a("div",{staticClass:"lead text-center",attrs:{id:"title-description"}},[t._v("Software Developer (BSc 4-year in Applied Computer Science)")]),a("b-button-toolbar",{staticClass:"justify-content-center"},[a("b-button",{staticClass:"mx-3",attrs:{to:"/about",variant:"outline-info",hidden:""}},[t._v("About Me")]),a("b-button",{staticClass:"mx-3",attrs:{to:"/projects",variant:"outline-info"}},[t._v("Projects")]),a("b-button",{staticClass:"mx-3",attrs:{to:"/resume",variant:"outline-info",hidden:""}},[t._v("Resume")])],1),a("b-button-toolbar",{staticClass:"justify-content-center",attrs:{id:"social-button-group"}},[a("b-button",{staticClass:"social-button mx-3",attrs:{id:"email-button-home",variant:"white"}},[a("img",{staticClass:"social-logo",attrs:{src:o("2d6f"),alt:"E-mail logo"}})]),a("b-button",{staticClass:"social-button mx-3",attrs:{id:"phone-button-home",variant:"white"}},[a("img",{staticClass:"social-logo",attrs:{src:o("714a"),alt:"Phone logo"}})]),a("b-button",{staticClass:"social-button mx-3",attrs:{href:"https://ca.linkedin.com/in/luke-ahrens-townsend-09a8aa181",variant:"white"}},[a("img",{staticClass:"social-logo",attrs:{src:o("e7f9"),alt:"LinkedIn logo"}})]),a("b-button",{staticClass:"social-button mx-3",attrs:{href:"https://github.com/LukeAhrensTownsend",variant:"white"}},[a("img",{staticClass:"social-logo",attrs:{src:o("77b6"),alt:"GitHub logo"}})])],1),a("b-tooltip",{attrs:{target:"email-button-home",placement:"top"}},[t._v(" Please e-mail me at "),a("b-link",{attrs:{href:"mailto:lahrenstownsend@gmail.com"}},[t._v("lahrenstownsend@gmail.com")])],1),a("b-tooltip",{attrs:{target:"phone-button-home",placement:"top"}},[t._v(" Please call me at "),a("b-link",{attrs:{id:"phone-field",href:"tel:+12048036976"}},[t._v("1 (204) 803-6976")])],1)],1)])])},m=[],d={head:{title:{inner:"Portfolio",complement:"Luke Ahrens-Townsend"}}},f=d,h=(o("33b1"),Object(c["a"])(f,b,m,!1,null,"735f2222",null)),v=h.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-jumbotron",{attrs:{header:"Projects",lead:"Here's some of the projects I've worked on recently..."}}),a("b-container",[a("b-row",t._l(this.$props.projectData,(function(e){return a("b-card",{key:e.id,staticClass:"mb-5 mx-auto mx-md-3",staticStyle:{"max-width":"20rem"},attrs:{title:e.name.replace(/-/g," "),"img-src":o("9e01")("./"+e.name+".png"),"img-alt":e.name+" image","img-top":"",tag:"article"}},[a("b-card-text",[t._v(t._s(e.description))]),a("b-button-toolbar",{attrs:{justify:""}},[a("b-button",{attrs:{href:e.html_url,variant:"outline-primary"}},[t._v("Source Code")]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:null!==e.homepage&&""!==e.homepage,expression:"project.homepage !== null && project.homepage !== ''"}],attrs:{href:e.homepage,variant:"primary"}},[t._v("Live Version")])],1)],1)})),1)],1)],1)},j=[],x={props:["projectData"],head:{title:{inner:"Projects",complement:"Luke Ahrens-Townsend"}}},k=x,A=Object(c["a"])(k,w,j,!1,null,"4619597a",null),C=A.exports;a["default"].use(g["a"]);var E=new g["a"]({routes:[{path:"/",component:v},{path:"/projects",component:C}]}),B=o("342d"),O=o.n(B),I=o("5f5b");a["default"].use(O.a),a["default"].use(I["a"]),a["default"].config.productionTip=!1,new a["default"]({router:E,render:function(t){return t(p)}}).$mount("#app")},"5c9b":function(t,e,o){t.exports=o.p+"img/about-section-logo-light.d08d1f6c.png"},6158:function(t,e,o){t.exports=o.p+"img/resume-section-logo-light.20b5c049.png"},"714a":function(t,e,o){t.exports=o.p+"img/phone-logo-dark.c691b3dc.png"},"77b6":function(t,e,o){t.exports=o.p+"img/github-logo-dark.d2edaeac.png"},"813b":function(t,e,o){t.exports=o.p+"img/NHL-Stats.f6e489af.png"},"85ec":function(t,e,o){},"9e01":function(t,e,o){var a={"./A-Mazing-Game.png":"00ca","./Arduino-Cat-Feeder.png":"4207","./Message-Board.png":"e36c","./NHL-Stats.png":"813b","./Soccer-Ball-Juggler.png":"35be","./TCP-Messenger.png":"f732","./about-section-logo-light.png":"5c9b","./email-logo-dark.png":"2d6f","./email-logo-light.png":"36b3","./github-logo-dark.png":"77b6","./github-logo-light.png":"50a2","./linkedin-logo-dark.png":"e7f9","./linkedin-logo-light.png":"2bcd","./logo-dark.png":"b68a","./logo.png":"cf05","./phone-logo-dark.png":"714a","./phone-logo-light.png":"d161","./resume-section-logo-light.png":"6158"};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="9e01"},b68a:function(t,e,o){t.exports=o.p+"img/logo-dark.3f4f602f.png"},cf05:function(t,e,o){t.exports=o.p+"img/logo.559db8cf.png"},d161:function(t,e,o){t.exports=o.p+"img/phone-logo-light.e6c5ce5c.png"},e36c:function(t,e,o){t.exports=o.p+"img/Message-Board.f0431f29.png"},e517:function(t,e,o){},e7f9:function(t,e){t.exports="data:image/png;base64,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"},f732:function(t,e,o){t.exports=o.p+"img/TCP-Messenger.c62194a7.png"}});
//# sourceMappingURL=app.285355b9.js.map