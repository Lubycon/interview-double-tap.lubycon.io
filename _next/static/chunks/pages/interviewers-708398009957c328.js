(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{74608:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var t=n(55641),i=n(17951),o=n(11163),u=n(89353),c=n(88767),a=n(81419),s=n(2132),l=n(23210),p=n(11371),f=n(69445),d=n(35944),v=function(r){var e=r.rating;return(0,d.tZ)(u.Kq,{gutter:2,align:"center",children:(0,s.Cj)(e).map((function(r){return(0,d.tZ)(f.J,{name:"star",color:p.O.yellow[5]},r)}))})};var y={name:"nv9nsw",styles:"width:100%;padding:16px;cursor:pointer"},h={name:"9wes51",styles:"width:30px;height:30px;border-radius:50%"},b=function(r){var e=r.nickname,n=r.company,t=r.description,i=r.rating,o=r.onClick;return(0,d.BX)(l.Z,{css:y,onClick:o,children:[(0,d.BX)(u.Kq,{gutter:16,align:"center",children:[(0,d.tZ)("img",{src:"/image/unknown_user.png",css:h,alt:e}),(0,d.BX)(u.kC,{direction:"column",children:[(0,d.tZ)(u.xv,{size:14,color:p.O.gray[6],children:e}),(0,d.tZ)(u.Ki,{size:8}),(0,d.tZ)(u.xv,{weight:"bold",children:n})]})]}),(0,d.tZ)(u.Ki,{size:1}),(0,d.tZ)(v,{rating:i}),t&&(0,d.BX)(d.HY,{children:[(0,d.tZ)(u.Ki,{size:16}),(0,d.tZ)(u.xv,{size:14,color:p.O.gray[7],children:t})]}),(0,d.tZ)(u.Ki,{size:8})]})};var w={name:"1urdq9i",styles:"padding:0 24px"},m={name:"1d3w5wq",styles:"width:100%"},g=(0,t.DM)((function(){var r=(0,o.useRouter)(),e=(0,c.useQuery)("interviewers",a.fo,{suspense:!0}).data.body.interviewers;return(0,d.BX)("div",{css:w,children:[(0,d.tZ)(i.Z,{upper:(0,d.tZ)(i.Z.Text2,{children:"\uba74\uc811\uad00 \ucc3e\uc544\ubcf4\uae30"})}),(0,d.tZ)(u.Ki,{size:20}),(0,d.tZ)(u.Kq,{direction:"column",gutter:12,as:"ul",children:e.map((function(e){var n=e.id,t=e.company,i=e.description,o=e.rating;return(0,d.tZ)("li",{css:m,children:(0,d.tZ)(b,{nickname:"\uc544\ubb34\uac1c",company:t,description:i,rating:o,onClick:function(){return function(e){var n=(0,s.f0)({interviewerId:e});r.push("/interviewers/detail".concat(n))}(n)}})},n)}))})]})}),{fallback:null})},23210:function(r,e,n){"use strict";var t=n(92809),i=n(70917),o=n(89353),u=n(35944);function c(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function a(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,t.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}e.Z=function(r){var e=null!=r.onClick;return(0,u.tZ)(o.jX,{level:3,children:(0,u.tZ)("div",a({css:(0,i.iv)({borderRadius:14,boxSizing:"border-box",cursor:e?"pointer":"default",transition:"opacity 0.2s ease-in-out","&:hover":{opacity:e?.7:void 0}},"",""),role:e?"button":void 0},r))})}},17951:function(r,e,n){"use strict";var t=n(92809),i=n(70917),o=n(91164),u=n(11371),c=n(89353),a=n(35944),s=["children"],l=["children"];function p(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function f(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,t.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}var d=function(r){var e=r.upper,n=r.lower;return(0,a.BX)(c.kC,{direction:"column",children:[(0,a.tZ)(c.Ki,{size:24}),e,null!=e&&null!=n?(0,a.tZ)(c.Ki,{size:8}):null,n,(0,a.tZ)(c.Ki,{size:16})]})};d.Text2=function(r){var e=r.children,n=(0,o.Z)(r,s);return(0,a.tZ)("h2",f(f({css:(0,i.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:u.O.gray[9],whiteSpace:"pre-line"},"","")},n),{},{children:e}))},d.Text6=function(r){var e=r.children,n=(0,o.Z)(r,l);return(0,a.tZ)("p",f(f({},n),{},{children:e}))},e.Z=d},81419:function(r,e,n){"use strict";n.d(e,{uK:function(){return g},S1:function(){return b},fo:function(){return y}});var t=n(21582),i=n(30266),o=n(809),u=n.n(o),c=[{id:1,company:"\ube44\ubc14\ub9ac\ud37c\ube14\ub9ac\uce74",name:"\uc0ac\ubb34\uc2e4\uc9c0\ubc15\ub839",description:null,profile_image:"https://www.gravatar.com/avatar/1?d=retro&f=y",interview_count:3,rating:3,available_time:null,available_week:null,reserved_time:null,grade:"JUNIOR",position:"FRONTEND_ENGINEER",tags:["\uce5c\uc808","\ub9e4\ub108\uc628\ub3c4\ub192\uc74c"]},{id:2,company:"\ucfe0\ud321",name:"\ucd1d\uc54c\ubc30\uc1a1",description:"\ucfe0\ud321\uc740 \uc778\ud130\ubdf0\ub97c \ud558\ub294 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.",interview_count:3,profile_image:"https://www.gravatar.com/avatar/2?d=retro&f=y",rating:3,available_time:["09:00","11:00"],available_week:["monday","wednesday","sunday"],reserved_time:null,grade:"MIDDLE",position:"FRONTEND_ENGINEER",tags:["\uce5c\uc808","\ub9e4\ub108\uc628\ub3c4\ub192\uc74c","\uc798\uc0dd\uae40"]}],a=n(80090),s=n(65731);function l(r){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(u().mark((function r(e){var n,i,o,c,s;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.F.get("/resume/upload_url");case 2:return n=r.sent,i=n.body,r.next=6,fetch(i.url,{method:"PUT",body:e});case 6:return o=i.url.split("?"),c=(0,t.Z)(o,1),s=c[0],r.abrupt("return",s);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function f(r){var e=r.split("/"),n=(0,t.Z)(e,3);return{owner:n[0],bankName:n[1],accountNumber:n[2]}}function d(r){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(u().mark((function r(e){var n,t,i,o,c,a,p,d,v,y,h,b,w,m,g,O;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.questions,p=null===(n=(0,s.j)(a,"company"))||void 0===n?void 0:n.value,d=null===(t=(0,s.j)(a,"position"))||void 0===t?void 0:t.value,v=null===(i=(0,s.j)(a,"grade"))||void 0===i?void 0:i.value,y=null===(o=(0,s.j)(a,"resume"))||void 0===o?void 0:o.file,h=null===(c=(0,s.j)(a,"bankInfo"))||void 0===c?void 0:c.value,![p,d,v,y,h].some((function(r){return null==r}))){r.next=8;break}throw new Error("\ud544\uc218 \uc815\ubcf4\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4");case 8:return b=f(h),w=b.owner,m=b.bankName,g=b.accountNumber,r.next=11,l(y);case 11:return O=r.sent,r.abrupt("return",{company:p,position:d,grade:v,resume_url:O,bank_owner_name:w,bank_account_number:g,bank_name:m});case 13:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function y(){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.F.get("/interviewers");case 2:return(e=r.sent).body.interviewers=c,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function b(r){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)(u().mark((function r(e){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve({body:c.find((function(r){return r.id===e}))}));case 1:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function m(){return a.F.post("/interviewers",{})}function g(r){return O.apply(this,arguments)}function O(){return(O=(0,i.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d(e);case 2:return n=r.sent,r.next=5,m();case 5:return r.abrupt("return",a.F.post("/interviewers/requests",n));case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},65731:function(r,e,n){"use strict";function t(r,e){return r.find((function(r){return r.fieldName===e}))}function i(r,e){return r.find((function(r){return r.value===e}))}n.d(e,{j:function(){return t},g:function(){return i}})},83186:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviewers",function(){return n(74608)}])},21582:function(r,e,n){"use strict";function t(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function i(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,i,o=[],u=!0,c=!1;try{for(n=n.call(r);!(u=(t=n.next()).done)&&(o.push(t.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==n.return||n.return()}finally{if(c)throw i}}return o}}(r,e)||function(r,e){if(r){if("string"===typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return i}})}},function(r){r.O(0,[542,774,888,179],(function(){return e=83186,r(r.s=e);var e}));var e=r.O();_N_E=e}]);