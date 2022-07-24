(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{1640:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(3946),u=t(9013),i=t(3882);function o(e,n){(0,i.Z)(2,arguments);var t=(0,u.Z)(e),o=(0,r.Z)(n);if(isNaN(o))return new Date(NaN);if(!o)return t;var c=t.getDate(),a=new Date(t.getTime());a.setMonth(t.getMonth()+o+1,0);var s=a.getDate();return c>=s?a:(t.setFullYear(a.getFullYear(),a.getMonth(),c),t)}},3223:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var r=t(3330),u=t(2809),i=t(266),o=t(9711),c=t(809),a=t.n(c),s=t(5641),l=t(917),p=t(3967),f=t(7566),d=t(7951),v=t(8031),h=t(1371),w=t(4332),m=t(9353),y=t(7294),Z=t(7536),b=t(6826),g=t(9977),q=t(7880),x=t(3946),k=t(9013),N=t(3882);var O=t(1640);function D(e){(0,N.Z)(1,arguments);var n=(0,k.Z)(e);return n.setHours(0,0,0,0),n}var _=t(8996),S=t(8767),j=t(9230),F=t(5944);var P=new Date,T=function(e,n){(0,N.Z)(2,arguments);var t=(0,k.Z)(e),r=(0,x.Z)(n);return isNaN(r)?new Date(NaN):r?(t.setDate(t.getDate()+r),t):t}(P,1),C=(0,O.Z)(P,1),E={name:"1bfm292",styles:"padding:0px 8px 16px 8px"},H={name:"1oaeivz",styles:"margin-right:8px"},z=function(e){var n=e.intro,t=e.outro,r=e.data,u=e.loading,o=e.interviewer,c=e.onSubmit,s=e.onNextStep,x=e.onPrevStep,k=(0,S.useQuery)(["reservedInterviews",o.id],(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.WB)(o.id);case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})))).data,O=function(e){return(null!==k&&void 0!==k?k:[]).some((function(n){var t=n.datetime;return function(e,n){(0,N.Z)(2,arguments);var t=D(e),r=D(n);return t.getTime()===r.getTime()}(new Date(t),e)}))},P=null==n?0:-1,z=null==t?r.questions.length-1:r.questions.length,B=(0,Z.cI)({defaultValues:null!==r&&void 0!==r?r:{}}),Q=B.handleSubmit,X=B.setError,I=B.clearErrors,K=B.getValues,L=B.formState,M=B.control,Y=(0,y.useState)(P),R=Y[0],U=Y[1],W=function(){if(R!==z){var e=K().questions[R],n=(0,g.Q)(e);null==n?(U((function(e){return e+1})),null===s||void 0===s||s(R,R+1,K())):X("questions.".concat(R),n)}},V=function(e){var n=L.errors.questions;return null===n||void 0===n?void 0:n[e]},A=function(e){var n;null===(n=e.currentTarget)||void 0===n||n.blur(),W()},G=function(e,n){var t,r,u=null===o||void 0===o||null===(t=o.interviewer)||void 0===t?void 0:t.available_week,i=null===o||void 0===o||null===(r=o.interviewer)||void 0===r?void 0:r.available_time;switch(e.type){case"select":return(0,F.tZ)(b.Q.Select,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:M,error:null!=V(n),onChange:function(e){I("questions.".concat(n)),A(e)},children:e.options.map((function(e){return(0,F.tZ)("option",{value:e.value,children:e.name},e.value)}))});case"file":return(0,F.tZ)(b.Q.File,{name:"questions.".concat(n,".file"),rules:{required:e.required},control:M,error:null!=V(n),onChange:function(e){I("questions.".concat(n)),A(e)},accept:"application/pdf"});case"datetime":return(0,F.tZ)(b.Q.Datetime,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:M,error:null!=V(n),onChange:function(e){I("questions.".concat(n)),A(e)},availableDate:function(e){return(0,q.L0)(null!==u&&void 0!==u?u:[],e)&&!O(e)},availableTime:function(e){return(0,q.H)(null!==i&&void 0!==i?i:[],e)&&(n=e,!(null!==k&&void 0!==k?k:[]).some((function(e){var t=e.datetime,r=(0,_.Z)(new Date(t),"HH:mm"),u=(0,_.Z)(new Date(n),"HH:mm");return O(n)&&r===u})));var n},minDate:T,maxDate:C});default:return(0,F.tZ)(b.Q.ShortText,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:M,autoComplete:"off",placeholder:e.placeholder,type:e.type,error:null!=V(n),autoFocus:!0,onChange:function(){return I("questions.".concat(n))},onKeyUp:function(e){"Enter"===e.key&&A(e)}})}};return(0,F.BX)(F.HY,{children:[-1===R&&null!=n?n:null,(0,F.tZ)(w.M,{children:r.questions.map((function(e,n){var t;return(0,F.BX)(p.Z,{show:R===n,children:[(0,F.tZ)(d.Z,{lower:(0,F.tZ)(d.Z.Text2,{children:e.question})}),(0,F.tZ)(m.Ki,{size:20}),G(e,n),(0,F.tZ)(m.Ki,{size:8}),(0,F.tZ)("p",{css:(0,l.iv)({fontSize:14,whiteSpace:"pre-line",lineHeight:1.3,color:V(n)?h.O.red[5]:h.O.gray[6]},"",""),children:V(n)?null===(t=V(n))||void 0===t?void 0:t.message:e.description})]},n)}))}),R===z&&null!=t?t:null,(0,F.tZ)(f.Z,{show:!0,css:E,children:(0,F.BX)(m.kC,{direction:"row",children:[R!==P?(0,F.tZ)(v.Z,{styleType:"secondary",onClick:function(){R!==P&&(U((function(e){return e-1})),null===x||void 0===x||x(R,R-1,K()))},disabled:u,css:H,children:"\uc774\uc804"}):null,R!==z?(0,F.tZ)(v.Z,{styleType:"primary",onClick:W,children:"\ub2e4\uc74c"}):null,R===z?(0,F.tZ)(v.Z,{styleType:"primary",type:"submit",onClick:Q((function(e){null===c||void 0===c||c(e)})),disabled:u,loading:u,children:"\uacb0\uc81c\ud558\uae30"}):null]})})]})},B=t(8571),Q=t(2132),X=t(3675);var I={name:"1efi8gv",styles:"font-weight:bold"},K={name:"1efi8gv",styles:"font-weight:bold"},L=function(e){var n=e.show;return(0,F.BX)(p.Z,{show:n,children:[(0,F.tZ)(d.Z,{lower:(0,F.tZ)(d.Z.Text2,{children:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ud655\uc778\ud574\uc8fc\uc138\uc694!"})}),(0,F.tZ)(m.Ki,{size:20}),(0,F.BX)("p",{css:(0,l.iv)({color:h.O.gray[9],lineHeight:1.3},"",""),children:["\ub354\ube14\ud0ed \uc11c\ube44\uc2a4 \uc774\uc6a9\ub8cc\ub294 ",(0,F.tZ)("strong",{css:I,children:"\uba74\uc811 1\ud68c \ub2f9 5\ub9cc\uc6d0"}),"\uc785\ub2c8\ub2e4."]}),(0,F.tZ)(m.Ki,{size:6}),(0,F.BX)("p",{css:(0,l.iv)({color:h.O.gray[9],lineHeight:1.3},"",""),children:["\uac00\uaca9 \uc815\ucc45\uc744 \ud655\uc778\ud558\uc168\ub2e4\uba74, ",(0,F.tZ)("strong",{css:K,children:"\uacb0\uc81c\ud558\uae30"})," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uacb0\uc81c\uc640 \uc2e0\uccad\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694!"]})]})},M=t(8584),Y=t(9838),R=t(9929),U=t(9328),W=t(6728),V=t(3066);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=function(e){return e.reduce((function(e,n){return G(G({},e),{},(0,u.Z)({},n.question,String(n.value)))}),{})},J=function(){var e=(0,V.p)().openToast,n=(0,R.E)().me,t=(0,Y.PE)().tossPayments,r=(0,s.Wd)("interviewerId"),u=(0,S.useQuery)(["interviewer",r],(function(){return null==r?Promise.resolve(null):(0,M.S1)(Number(r))})).data,c=(0,W.k)(),l=(0,o.Z)(c,3),p=l[0],f=l[1],d=l[2],v=function(){var e,n=(0,X.$)(),t=n.data;if(!n.isLoading)return{questions:[{fieldName:"position",question:"\uc9c0\uc6d0\ud558\uace0\uc790 \ud558\ub294\n\ud3ec\uc9c0\uc158\uc744 \uc54c\ub824\uc8fc\uc138\uc694",type:"select",value:"",options:null!==(e=null===t||void 0===t?void 0:t.body)&&void 0!==e?e:[],required:!0},{fieldName:"techStack",question:"\uc8fc\ub85c \uc0ac\uc6a9\ud558\uc2dc\ub294\n\uc5b8\uc5b4\ub098 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc54c\ub824\uc8fc\uc138\uc694",placeholder:"ex) React, TypeScript",type:"text",value:"",required:!0},{fieldName:"currentCompany",question:"\ud604\uc7ac \uc5b4\ub5a4 \ud68c\uc0ac\uc5d0 \ub2e4\ub2c8\uace0 \uc788\ub098\uc694?",description:"\uc9c0\uc6d0\uc790\ub2d8\uacfc \uac19\uc740 \ud68c\uc0ac\uc5d0 \ub2e4\ub2c8\uace0 \uc788\ub294 \uba74\uc811\uad00\uc740 \ub9e4\uce6d\uc5d0\uc11c \uc81c\uc678\ud574\ub4dc\ub824\uc694.\n\ud68c\uc0ac\ub97c \ub2e4\ub2c8\uace0 \uc788\uc9c0 \uc54a\ub2e4\uba74 \ub2e4\uc74c\uc73c\ub85c \ub118\uc5b4\uac00\uc8fc\uc138\uc694",type:"text",value:"",required:!0},{fieldName:"targetCompany",question:"\uad00\uc2ec\uc788\ub294 \ud68c\uc0ac\uac00 \uc788\ub2e4\uba74\n\uc54c\ub824\uc8fc\uc138\uc694",description:"\uc790\uc720\ub86d\uac8c \uc801\uc5b4\uc8fc\uc2dc\ub418, \uc5c6\ub2e4\uba74 \ubb34\uc2dc\ud558\uace0 \ub2e4\uc74c\uc73c\ub85c \ub118\uc5b4\uac00\uc8fc\uc138\uc694",placeholder:"ex) \ub124\uc774\ubc84, \ub2f9\uadfc\ub9c8\ucf13, \ud1a0\uc2a4",type:"text",value:""},{fieldName:"interviewDate",question:"\uba74\uc811\uc744 \ud76c\ub9dd\ud558\ub294 \ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \uc815\ud574\uc8fc\uc138\uc694",type:"datetime",value:new Date,required:!0}]}}(),h=(0,s.zj)(),w=(0,o.Z)(h,3),m=w[0],Z=w[1],b=w[2],g=function(){var r=(0,i.Z)(a().mark((function r(i){var o,c,s,l;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null!=u&&null!=t){r.next=2;break}return r.abrupt("return");case 2:return Z(),B.tj.click("interviewee_apply",G({},$(i.questions))),null!=p&&d(),r.prev=5,o=5e4,c="".concat(u.nickname,"\ub2d8\uacfc\uc758 \uba74\uc811"),r.next=10,(0,U.Ls)({amount:o,order_name:c});case 10:s=r.sent,l=s.order_id,f({interviewerId:u.id,questions:i,orderId:l}),t.requestPayment("\uce74\ub4dc",{amount:o,orderId:l,orderName:c,customerName:null===n||void 0===n?void 0:n.nickname,successUrl:"".concat(location.origin,"/interviewers/interviews/requests/pay-success"),failUrl:"".concat(location.origin,"/interviewers/interviews/requests/pay-fail")}),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(5),e({message:"\uc9c0\uc6d0\uc11c \uc81c\ucd9c\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694. \ubb38\uc81c\uac00 \uacc4\uc18d \ubc1c\uc0dd\ud55c\ub2e4\uba74 help@double-tap.io\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694."});case 19:return r.prev=19,b(),r.finish(19);case 22:case"end":return r.stop()}}),r,null,[[5,16,19,22]])})));return function(e){return r.apply(this,arguments)}}();return(0,y.useEffect)((function(){var e=(0,Q.dD)(location.search);B.tj.view(G({},e))}),[]),null==v||null==u?null:(0,F.tZ)(z,{data:v,outro:(0,F.tZ)(L,{show:!0}),loading:m,onSubmit:g,interviewer:u,onNextStep:function(e,n,t){B.tj.click("next_step",G({from:e,to:n},$(t.questions)))},onPrevStep:function(e,n,t){B.tj.click("prev_step",G({from:e,to:n},$(t.questions)))}})};function ee(){return(0,F.tZ)(r.Z,{children:(0,F.tZ)(J,{})})}},6728:function(e,n,t){"use strict";t.d(n,{k:function(){return u}});var r=t(5641);function u(){return(0,r._)("@doubletap/interviewRequest")}},9230:function(e,n,t){"use strict";t.d(n,{SR:function(){return c},zk:function(){return a},Y:function(){return s},NQ:function(){return l},gZ:function(){return p},WB:function(){return f},hT:function(){return d},jo:function(){return v},L7:function(){return h},b8:function(){return w}});var r=t(266),u=t(809),i=t.n(u),o=t(90),c=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.body);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),a=function(e,n){return o.F.post("/interviews/".concat(e,"/feedbacks"),n)},s=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/".concat(n,"/feedbacks"));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(e,n){return o.F.post("/interviews/".concat(e,"/nps"),n)},p=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/".concat(n,"/nps"));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(e){return o.F.get("/users/".concat(e,"/interview_schedules"))},d=function(e){return o.F.put("/interviews/".concat(e,"/in_progress"),{})},v=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/mine/interviewers");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/interviews/mine/interviewees");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.get("/auth/agora/token/".concat(n));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9328:function(e,n,t){"use strict";t.d(n,{Ls:function(){return c},m3:function(){return s},eG:function(){return p},Aj:function(){return d}});var r=t(266),u=t(809),i=t.n(u),o=t(90);function c(e){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.post("/payments/request",n);case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.post("/payments/success",n);case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.F.post("/payments/fail",n);case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.F.post("/payments/cancel",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3128:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviewers/interviews/requests",function(){return t(3223)}])}},function(e){e.O(0,[6430,3469,9198,8031,6104,6688,9963,9774,2888,179],(function(){return n=3128,e(e.s=n);var n}));var n=e.O();_N_E=n}]);