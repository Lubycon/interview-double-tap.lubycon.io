(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{3251:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(37),i=n(7065),c=n(7951),o=n(9929),u=n(8767),a=n(9230);var s=n(9353),l=n(7294),d=n(266),f=n(809),v=n.n(f),p=n(3210),h=n(1371),w=n(5641),b=n(4314),Z=n(8996),g=n(3006),y=n(1163),m=n(2132),O=n(5944);var k={name:"10rtstj",styles:"padding:16px"},j=function(e){var t=e.interview,n=(0,o.E)().me,r=t.interviewer.id===(null===n||void 0===n?void 0:n.id),i=r?t.interviewee:t.interviewer,c=(0,l.useState)(""),u=c[0],f=c[1];(0,w.Yz)((function(){var e=new Date(t.start_datetime),n=(0,b.Z)(e,{locale:g.Z,addSuffix:!0});f(n)}),500);var j=function(){var e=(0,d.Z)(v().mark((function e(){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("DONE"!==t.status){e.next=3;break}return alert("\uc774\ubbf8 \uc885\ub8cc\ub41c \uc778\ud130\ubdf0\uc5d0\uc694"),e.abrupt("return");case 3:return e.next=5,(0,a.b8)(t.agora_channel_id);case 5:n=e.sent,r=(0,m.f0)({token:n.access_token,interviewId:t.id}),y.default.push("/interviews/meet".concat(r));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,O.BX)(p.Z,{css:k,onClick:j,children:[(0,O.BX)(s.Kq,{direction:"column",gutter:8,children:[(0,O.BX)(s.xv,{as:"h4",weight:"bold",children:[i.nickname,"\ub2d8\uacfc\uc758 \uba74\uc811"]}),(0,O.BX)(s.xv,{size:14,color:h.O.gray[6],children:[(0,Z.Z)(new Date(t.start_datetime),"yyyy\ub144 MM\uc6d4 dd\uc77c HH\uc2dc mm\ubd84")," (",u,")"]})]}),(0,O.tZ)(s.Ki,{size:12}),(0,O.BX)(s.Kq,{direction:"column",gutter:8,children:[(0,O.BX)(s.xv,{size:14,children:["\uba74\uc811\uad00: ",r?"".concat(n.nickname,"(\ub098)"):i.nickname]}),(0,O.BX)(s.xv,{size:14,children:["\uc9c0\uc6d0\uc790: ",r?i.nickname:"".concat(null===n||void 0===n?void 0:n.nickname,"(\ub098)")]})]})]})};var x={name:"1urdq9i",styles:"padding:0 24px"},_=function(){var e=function(){var e=(0,o.E)().me;return(0,u.useQuery)([null===e||void 0===e?void 0:e.id,"interviews","interviewer"],a.jo)}().data,t=function(){var e=(0,o.E)().me;return(0,u.useQuery)([null===e||void 0===e?void 0:e.id,"interviews","interviewee"],a.L7)}().data,n=(0,l.useMemo)((function(){if(null!=t&&null!=e)return[].concat((0,r.Z)(t),(0,r.Z)(e)).sort((function(e,t){return new Date(e.start_datetime).getTime()-new Date(t.start_datetime).getTime()}))}),[t,e]);return null==n?(0,O.tZ)(i.Z,{}):(0,O.BX)("div",{css:x,children:[(0,O.tZ)(c.Z,{upper:(0,O.tZ)(c.Z.Text2,{children:"\uc608\uc815\ub41c \uba74\uc811"})}),(0,O.tZ)(s.Ki,{size:20}),(0,O.tZ)(s.Kq,{direction:"column",align:"stretch",gutter:12,as:"ul",children:n.map((function(e){return(0,O.tZ)("li",{children:(0,O.tZ)(j,{interview:e})},e.id)}))})]})},P=n(3330);function z(){return(0,O.tZ)(P.Z,{children:(0,O.tZ)(_,{})})}},3210:function(e,t,n){"use strict";var r=n(2809),i=n(917),c=n(9353),o=n(5944);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=null!=e.onClick;return(0,o.tZ)(c.jX,{level:3,children:(0,o.tZ)("div",a({css:(0,i.iv)({borderRadius:14,boxSizing:"border-box",cursor:t?"pointer":"default",transition:"opacity 0.2s ease-in-out","&:hover":{opacity:t?.7:void 0}},"",""),role:t?"button":void 0},e))})}},7065:function(e,t,n){"use strict";var r=n(917),i=n(9421),c=n(1371),o=n(9353),u=n(5944);t.Z=function(e){var t=e.description;return(0,u.BX)(o.kC,{direction:"column",align:"center",justify:"center",css:(0,r.iv)({position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:200,backgroundColor:c.O.white},"",""),children:[(0,u.tZ)(i.Z,{color:c.O.primary,size:50}),(0,u.tZ)(o.Ki,{size:16}),t&&(0,u.tZ)(o.xv,{color:c.O.gray[6],size:14,children:t})]})}},9421:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(917),i=n(2209),c=n(1371),o=n(9711);var u,a=n(5944),s=(0,r.F4)(u||(u=(0,i.Z)(["\n  to {\n    transform: rotate(360deg);\n  }\n"]))),l=function(e){var t=e.size,n=void 0===t?20:t,i=e.borderWidth,u=void 0===i?3:i,l=e.color,d=void 0===l?c.O.gray[9]:l,f=function(e){var t,n,r=null!==(t=null===(n=e.trim().replace("#","").match(/[a-fA-F\d]{2}/g))||void 0===n?void 0:n.map((function(e){return parseInt(e,16)})))&&void 0!==t?t:[],i=(0,o.Z)(r,3);return{red:i[0],green:i[1],blue:i[2]}}(d),v=f.red,p=f.green,h=f.blue;return(0,a.tZ)("div",{css:(0,r.iv)({display:"inline-block",width:n,height:n,border:"".concat(u,"px solid rgba(").concat(v,", ").concat(p,", ").concat(h,", 0.3)"),borderTopColor:d,borderRadius:"50%",animation:"".concat(s," 1s ease-in-out infinite")},"","")})}},3330:function(e,t,n){"use strict";var r=n(9929),i=n(1163),c=n(7294),o=n(2132),u=n(5944);t.Z=function(e){var t=e.children,n=(0,r.E)().isAuthenticated;return(0,c.useEffect)((function(){if(!n){var e=(0,o.f0)({redirectTo:location.href});i.default.replace("/login".concat(e))}}),[n]),(0,u.tZ)(u.HY,{children:n?t:null})}},7951:function(e,t,n){"use strict";var r=n(2809),i=n(917),c=n(1164),o=n(1371),u=n(9353),a=n(5944),s=["children"],l=["children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.upper,n=e.lower;return(0,a.BX)(u.kC,{direction:"column",children:[(0,a.tZ)(u.Ki,{size:24}),t,null!=t&&null!=n?(0,a.tZ)(u.Ki,{size:8}):null,n,(0,a.tZ)(u.Ki,{size:16})]})};v.Text2=function(e){var t=e.children,n=(0,c.Z)(e,s);return(0,a.tZ)("h2",f(f({css:(0,i.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:o.O.gray[9],whiteSpace:"pre-line"},"","")},n),{},{children:t}))},v.Text6=function(e){var t=e.children,n=(0,c.Z)(e,l);return(0,a.tZ)("p",f(f({},n),{},{children:t}))},t.Z=v},9230:function(e,t,n){"use strict";n.d(t,{SR:function(){return u},zk:function(){return a},Up:function(){return s},WB:function(){return l},hT:function(){return d},uC:function(){return f},jo:function(){return v},L7:function(){return p},b8:function(){return h}});var r=n(266),i=n(809),c=n.n(i),o=n(90),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.body);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(e,t){return o.F.post("/interviews/".concat(e,"/feedbacks"),t)},s=function(e,t){return o.F.post("/interviews/".concat(e,"/nps"),t)},l=function(e){return o.F.get("/users/".concat(e,"/interview_schedules"))},d=function(e){return o.F.put("/interviews/".concat(e,"/in_progress"),{})},f=function(e){return o.F.put("/interviews/".concat(e,"/done"),{})},v=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/mine/interviewers");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/mine/interviewees");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/auth/agora/token/".concat(t));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1493:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviews",function(){return n(3251)}])}},function(e){e.O(0,[604,396,774,888,179],(function(){return t=1493,e(e.s=t);var t}));var t=e.O();_N_E=t}]);