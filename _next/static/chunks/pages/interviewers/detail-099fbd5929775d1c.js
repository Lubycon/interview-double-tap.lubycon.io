(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{30670:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return k}});var t=e(55641),i=e(87004),o=e(8031),u=e(89353),a=e(88767),c=e(81419),s=e(33675),l=e(45329),d=e(65731),f=e(11371),v=e(70917),p=e(35944),b=function(r){var n=r.width,e=void 0===n?1:n,t=r.color,i=void 0===t?f.O.gray[2]:t;return(0,p.tZ)("div",{css:(0,v.iv)({width:"100%",height:e,backgroundColor:i},"","")})},y=function(r){var n=r.title,e=r.children;return(0,p.BX)("section",{children:[(0,p.tZ)(u.xv,{weight:"bold",color:f.O.gray[8],children:n}),(0,p.tZ)(u.Ki,{size:16}),e,(0,p.tZ)(u.Ki,{size:24})]})},h=function(r){var n=r.interviewer;return(0,p.tZ)(y,{title:"\uba74\uc811\uad00 \uc18c\uac1c",children:(0,p.tZ)(u.xv,{size:14,children:n.description})})},m={sunday:"\uc77c\uc694\uc77c",monday:"\uc6d4\uc694\uc77c",tuesday:"\ud654\uc694\uc77c",wednesday:"\uc218\uc694\uc77c",thursday:"\ubaa9\uc694\uc77c",friday:"\uae08\uc694\uc77c",saturday:"\ud1a0\uc694\uc77c"},w=e(67294);var g={name:"qamjgr",styles:"margin-right:4px"},Z=function(r){var n=r.interviewer,e=(0,w.useMemo)((function(){var r;return(null!==(r=n.available_week)&&void 0!==r?r:[]).map((function(r){return{week:r,times:n.available_time}}))}),[n.available_time,n.available_week]);return console.log(e),(0,p.tZ)(y,{title:"\uba74\uc811 \uc2e0\uccad\uc774 \uac00\ub2a5\ud55c \uc2dc\uac04",children:(0,p.tZ)(u.Kq,{as:"ul",direction:"column",gutter:8,children:e.map((function(r,n){var e=r.week,t=r.times;return(0,p.BX)("li",{children:[(0,p.tZ)(u.xv,{display:"inline",size:14,css:g,children:m[e]}),(0,p.tZ)(u.xv,{display:"inline",size:14,color:f.O.gray[8],children:null===t||void 0===t?void 0:t.join(", ")})]},n)}))})})},O=e(82770),_=function(r){var n=r.interviewer.tags;return(0,p.tZ)(y,{title:"\ud0dc\uadf8",children:(0,p.tZ)(u.Kq,{gutter:8,children:n.map((function(r){return(0,p.BX)(O.Z,{type:"secondary",children:["#",r]},r)}))})})};var x={name:"1urdq9i",styles:"padding:0 24px"},j={name:"1ihdugt",styles:"width:48px;height:48px;border-radius:50%"},k=function(){var r,n,e=(0,s.$)().data,v=(0,l.s)().data,y=(0,t.Wd)("interviewerId",Number),m=(0,a.useQuery)(["interviewer",y],(function(){return(0,c.S1)(y)}),{enabled:null!=y}).data;if(null==m||null==e||null==v)return null;var w=m.body;return(0,p.BX)(u.kC,{direction:"column",css:x,children:[(0,p.tZ)(u.Ki,{size:24}),(0,p.tZ)("img",{src:w.profile_image,css:j,alt:w.name}),(0,p.tZ)(u.Ki,{size:16}),(0,p.BX)(u.xv,{children:[w.name," \uba74\uc811\uad00"]}),(0,p.tZ)(u.Ki,{size:8}),(0,p.tZ)(u.xv,{size:24,weight:"bold",children:w.company}),(0,p.tZ)(u.Ki,{size:16}),(0,p.BX)(u.xv,{color:f.O.gray[6],children:[null===(r=(0,d.g)(e.body,w.position))||void 0===r?void 0:r.name," |"," ",null===(n=(0,d.g)(v.body,w.grade))||void 0===n?void 0:n.name]}),(0,p.tZ)(u.Ki,{size:40}),(0,p.tZ)(b,{}),(0,p.tZ)(u.Ki,{size:40}),(0,p.tZ)(h,{interviewer:w}),(0,p.tZ)(Z,{interviewer:w}),(0,p.tZ)(_,{interviewer:w}),(0,p.tZ)(i.Z,{show:!0,children:(0,p.tZ)(o.Z.BottomCTA,{styleType:"primary",children:"\uba74\uc811 \uc2e0\uccad\ud558\uae30"})})]})}},19421:function(r,n,e){"use strict";e.d(n,{Z:function(){return l}});var t=e(70917),i=e(52209),o=e(11371),u=e(21582);var a,c=e(35944),s=(0,t.F4)(a||(a=(0,i.Z)(["\n  to {\n    transform: rotate(360deg);\n  }\n"]))),l=function(r){var n=r.size,e=void 0===n?20:n,i=r.borderWidth,a=void 0===i?3:i,l=r.color,d=void 0===l?o.O.gray[9]:l,f=function(r){var n,e,t=null!==(n=null===(e=r.trim().replace("#","").match(/[a-fA-F\d]{2}/g))||void 0===e?void 0:e.map((function(r){return parseInt(r,16)})))&&void 0!==n?n:[],i=(0,u.Z)(t,3);return{red:i[0],green:i[1],blue:i[2]}}(d),v=f.red,p=f.green,b=f.blue;return(0,c.tZ)("div",{css:(0,t.iv)({display:"inline-block",width:e,height:e,border:"".concat(a,"px solid rgba(").concat(v,", ").concat(p,", ").concat(b,", 0.3)"),borderTopColor:d,borderRadius:"50%",animation:"".concat(s," 1s ease-in-out infinite")},"","")})}},82770:function(r,n,e){"use strict";var t=e(70917),i=e(11875),o=e(35944);n.Z=function(r){var n=r.type,e=r.children;return(0,o.tZ)("div",{css:(0,t.iv)({display:"inline-block",background:(0,i.C)(n),color:(0,i._)(n),borderRadius:20,padding:"4px 8px",fontSize:12},"",""),children:e})}},87004:function(r,n,e){"use strict";e.d(n,{Z:function(){return d}});var t=e(92809),i=e(70917),o=e(91164),u=e(16914),a=e(35944),c=["show","children"];function s(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),e.push.apply(e,t)}return e}function l(r){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){(0,t.Z)(r,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))}))}return r}var d=function(r){var n=r.show,e=r.children,t=(0,o.Z)(r,c);return(0,a.tZ)("div",l(l({css:(0,i.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:u.t,zIndex:100,boxSizing:"border-box"},"","")},t),{},{children:(0,a.tZ)("div",{css:(0,i.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:e})}))}},45329:function(r,n,e){"use strict";e.d(n,{s:function(){return i}});var t=e(22531);function i(){return(0,t.L)("interviewers/grades.json")}},33675:function(r,n,e){"use strict";e.d(n,{$:function(){return i}});var t=e(22531);function i(){return(0,t.L)("interviewers/positions.json")}},22531:function(r,n,e){"use strict";e.d(n,{L:function(){return c}});var t=e(30266),i=e(809),o=e.n(i),u=e(67237),a=e(88767);function c(r){return(0,a.useQuery)("storageData/".concat(r),(0,t.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.gc)("https://raw.githubusercontent.com/Lubycon/double-tap-lab-storage/main/".concat(r)));case 1:case"end":return n.stop()}}),n)}))))}},81419:function(r,n,e){"use strict";e.d(n,{uK:function(){return g},S1:function(){return h},fo:function(){return b}});var t=e(21582),i=e(30266),o=e(809),u=e.n(o),a=[{id:1,company:"\ube44\ubc14\ub9ac\ud37c\ube14\ub9ac\uce74",name:"\uc0ac\ubb34\uc2e4\uc9c0\ubc15\ub839",description:null,profile_image:"https://www.gravatar.com/avatar/1?d=retro&f=y",interview_count:3,rating:3,available_time:null,available_week:null,reserved_time:null,grade:"JUNIOR",position:"FRONTEND_ENGINEER",tags:["\uce5c\uc808","\ub9e4\ub108\uc628\ub3c4\ub192\uc74c"]},{id:2,company:"\ucfe0\ud321",name:"\ucd1d\uc54c\ubc30\uc1a1",description:"\ucfe0\ud321\uc740 \uc778\ud130\ubdf0\ub97c \ud558\ub294 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.",interview_count:3,profile_image:"https://www.gravatar.com/avatar/2?d=retro&f=y",rating:3,available_time:["09:00","11:00"],available_week:["monday","wednesday","sunday"],reserved_time:null,grade:"MIDDLE",position:"FRONTEND_ENGINEER",tags:["\uce5c\uc808","\ub9e4\ub108\uc628\ub3c4\ub192\uc74c","\uc798\uc0dd\uae40"]}],c=e(80090),s=e(65731);function l(r){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(u().mark((function r(n){var e,i,o,a,s;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.F.get("/resume/upload_url");case 2:return e=r.sent,i=e.body,r.next=6,fetch(i.url,{method:"PUT",body:n});case 6:return o=i.url.split("?"),a=(0,t.Z)(o,1),s=a[0],r.abrupt("return",s);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function f(r){var n=r.split("/"),e=(0,t.Z)(n,3);return{owner:e[0],bankName:e[1],accountNumber:e[2]}}function v(r){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(u().mark((function r(n){var e,t,i,o,a,c,d,v,p,b,y,h,m,w,g,Z;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c=n.questions,d=null===(e=(0,s.j)(c,"company"))||void 0===e?void 0:e.value,v=null===(t=(0,s.j)(c,"position"))||void 0===t?void 0:t.value,p=null===(i=(0,s.j)(c,"grade"))||void 0===i?void 0:i.value,b=null===(o=(0,s.j)(c,"resume"))||void 0===o?void 0:o.file,y=null===(a=(0,s.j)(c,"bankInfo"))||void 0===a?void 0:a.value,![d,v,p,b,y].some((function(r){return null==r}))){r.next=8;break}throw new Error("\ud544\uc218 \uc815\ubcf4\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4");case 8:return h=f(y),m=h.owner,w=h.bankName,g=h.accountNumber,r.next=11,l(b);case 11:return Z=r.sent,r.abrupt("return",{company:d,position:v,grade:p,resume_url:Z,bank_owner_name:m,bank_account_number:g,bank_name:w});case 13:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function b(){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.F.get("/interviewers");case 2:return(n=r.sent).body.interviewers=a,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function h(r){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(u().mark((function r(n){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve({body:a.find((function(r){return r.id===n}))}));case 1:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function w(){return c.F.post("/interviewers",{})}function g(r){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)(u().mark((function r(n){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(n);case 2:return e=r.sent,r.next=5,w();case 5:return r.abrupt("return",c.F.post("/interviewers/requests",e));case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},65731:function(r,n,e){"use strict";function t(r,n){return r.find((function(r){return r.fieldName===n}))}function i(r,n){return r.find((function(r){return r.value===n}))}e.d(n,{j:function(){return t},g:function(){return i}})},77679:function(r,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviewers/detail",function(){return e(30670)}])},91164:function(r,n,e){"use strict";function t(r,n){if(null==r)return{};var e,t,i=function(r,n){if(null==r)return{};var e,t,i={},o=Object.keys(r);for(t=0;t<o.length;t++)e=o[t],n.indexOf(e)>=0||(i[e]=r[e]);return i}(r,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)e=o[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(i[e]=r[e])}return i}e.d(n,{Z:function(){return t}})},21582:function(r,n,e){"use strict";function t(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function i(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var e=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var t,i,o=[],u=!0,a=!1;try{for(e=e.call(r);!(u=(t=e.next()).done)&&(o.push(t.value),!n||o.length!==n);u=!0);}catch(c){a=!0,i=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(r,n)||function(r,n){if(r){if("string"===typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(r,n):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,{Z:function(){return i}})},52209:function(r,n,e){"use strict";function t(r,n){return n||(n=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(n)}}))}e.d(n,{Z:function(){return t}})}},function(r){r.O(0,[31,774,888,179],(function(){return n=77679,r(r.s=n);var n}));var n=r.O();_N_E=n}]);