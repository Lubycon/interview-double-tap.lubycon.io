"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{73967:function(e,n,t){var r=t(36861),o=t(35944);var u={name:"1ov30w2",styles:"padding-left:24px;padding-right:24px;position:absolute;width:100%;box-sizing:border-box"};n.Z=function(e){var n=e.show,t=e.children;return n?(0,o.tZ)(r.E.div,{css:u,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:-300,opacity:0},transition:{ease:"easeOut"},children:t}):null}},83330:function(e,n,t){var r=t(93824),o=t(11163),u=t(67294),i=t(2132),l=t(35944);n.Z=function(e){var n=e.children,t=(0,r.E)().isAuthenticated;return(0,u.useEffect)((function(){if(console.log(t),!t){var e=(0,i.f0)({redirectTo:location.href});o.default.replace("/login".concat(e))}}),[t]),(0,l.tZ)(l.HY,{children:t?n:null})}},43274:function(e,n,t){t.d(n,{Z:function(){return q}});var r=t(70917),o=t(73967),u=t(87004),i=t(17951),l=t(8031),c=t(11371),a=t(11640),s=t(14332),f=t(89353),d=t(67294),p=t(87536),v=t(59184),h=t(88587),m=t(55641),g=t(94033),y=t(35944);var b={name:"eivff4",styles:"display:none"},Z={name:"1efi8gv",styles:"font-weight:bold"};var w={ShortText:function(e){var n=e.label,t=e.name,r=e.control,o=e.rules,u=e.defaultValue,i=e.error,l=e.autoFocus,c=e.autoComplete,a=e.placeholder,s=e.type,f=e.onChange,v=e.onKeyUp,h=(0,d.useRef)(null),b=(0,d.useRef)(),Z=(0,p.bc)({name:t,control:r,rules:o,defaultValue:u}).field,w=Z.ref,x=Z.name,O=Z.onChange,k=Z.onBlur,j=(0,m.HB)(w,h);return(0,d.useEffect)((function(){return function(){clearTimeout(b.current)}}),[]),(0,y.tZ)(m.mU,{onImpressionStart:function(){!0===l&&null!=h.current&&null!=window&&(b.current=window.setTimeout((function(){var e;null===(e=h.current)||void 0===e||e.focus()}),300))},children:(0,y.BX)(y.HY,{children:[null!=n?(0,y.tZ)(g.__,{children:n}):null,(0,y.tZ)(g.II,{type:s,name:x,onChange:function(e){O(e),null===f||void 0===f||f(e)},onKeyUp:v,onBlur:k,autoComplete:c,placeholder:a,error:i,ref:j})]})})},Select:function(e){var n=e.label,t=e.name,o=e.control,u=e.rules,i=e.defaultValue,l=e.children,a=e.error,s=(0,p.bc)({name:t,control:o,rules:u,defaultValue:i}),f=s.field,d=f.ref,v=f.name,h=f.onChange,m=f.onBlur,b=s.formState.isDirty;return(0,y.BX)("div",{children:[null!=n?(0,y.tZ)(g.__,{children:n}):null,(0,y.BX)(g.Ph,{ref:d,name:v,onChange:h,onBlur:m,error:a,initial:!b,children:[(0,y.tZ)("option",{value:"",disabled:!0,selected:!0,css:(0,r.iv)({color:c.O.gray[3]},"",""),children:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),l]})]})},File:function(e){var n=e.label,t=e.name,o=e.control,u=e.rules,i=e.defaultValue,a=e.accept,s=(0,d.useState)(null),v=s[0],h=s[1],w=(0,d.useRef)(null),x=(0,p.bc)({name:t,control:o,rules:u,defaultValue:i}).field,O=x.ref,k=x.name,j=x.onChange,q=x.onBlur,P=(0,m.HB)(O,w);return(0,y.BX)("div",{children:[null!=n?(0,y.tZ)(g.__,{children:n}):null,(0,y.tZ)("input",{type:"file",name:k,accept:a,onChange:function(e){var n,t,r=null!==(n=null===(t=e.target.files)||void 0===t?void 0:t[0])&&void 0!==n?n:null;h(r),j(r)},onBlur:q,css:b,ref:P}),null!=v?(0,y.BX)(y.HY,{children:[(0,y.BX)("p",{css:(0,r.iv)({fontSize:14,color:c.O.gray[8]},"",""),children:["\ud604\uc7ac \uc5c5\ub85c\ub4dc\ub41c \ud30c\uc77c\uc740 ",(0,y.tZ)("strong",{css:Z,children:v.name})," \uc774\uc5d0\uc694"]}),(0,y.tZ)(f.Ki,{size:16})]}):null,(0,y.tZ)(l.Z,{onClick:function(){var e;null===(e=w.current)||void 0===e||e.click()},children:null==v?"\ucca8\ubd80\ud558\uae30":"\ubcc0\uacbd\ud558\uae30"})]})},Datetime:h.Z};var x=new Date,O=(0,a.Z)(x,1),k={name:"1bfm292",styles:"padding:0px 8px 16px 8px"},j={name:"1oaeivz",styles:"margin-right:8px"},q=function(e){var n=e.intro,t=e.outro,a=e.data,h=e.loading,m=e.onSubmit,g=e.onNextStep,b=e.onPrevStep,Z=null==n?0:-1,q=null==t?a.questions.length-1:a.questions.length,P=(0,p.cI)({defaultValues:null!==a&&void 0!==a?a:{}}),C=P.handleSubmit,S=P.setError,z=P.clearErrors,B=P.getValues,_=P.formState,E=P.control,T=(0,d.useState)(Z),D=T[0],F=T[1],X=function(){if(D!==q){var e=function(e){if("file"===e.type){var n=null==e.file;return!0===e.required&&n?{type:"required",message:"\ud30c\uc77c\uc744 \ucca8\ubd80\ud574\uc8fc\uc138\uc694"}:null}return!0!==e.required||""!==(t=e.value)&&null!=t?"email"!==e.type||function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(e)}(e.value)?"tel"!==e.type||function(e){return/01[0|1|6|7|8|9]-?\d{4}-?\d{4}/.test(e)}(e.value)?null:{type:"pattern",message:"\uc62c\ubc14\ub978 \ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}:{type:"pattern",message:"\uc62c\ubc14\ub978 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}:{type:"required",message:"\ub2f5\ubcc0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"};var t}(B().questions[D]);null==e?(F((function(e){return e+1})),null===g||void 0===g||g(D,D+1,B())):S("questions.".concat(D),e)}},I=function(e){var n=_.errors.questions;return null===n||void 0===n?void 0:n[e]},H=function(e){var n;null===(n=e.currentTarget)||void 0===n||n.blur(),X()},K=function(e,n){switch(e.type){case"select":return(0,y.tZ)(w.Select,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:E,error:null!=I(n),onChange:function(e){z("questions.".concat(n)),H(e)},children:e.options.map((function(e){return(0,y.tZ)("option",{value:e.value,children:e.name},e.value)}))});case"file":return(0,y.tZ)(w.File,{name:"questions.".concat(n,".file"),rules:{required:e.required},control:E,error:null!=I(n),onChange:function(e){z("questions.".concat(n)),H(e)},accept:"application/pdf"});case"datetime":return(0,y.tZ)(w.Datetime,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:E,error:null!=I(n),min:(0,v.x)(x),max:(0,v.x)(O),onChange:function(e){z("questions.".concat(n)),H(e)}});default:return(0,y.tZ)(w.ShortText,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:E,autoComplete:"off",placeholder:e.placeholder,type:e.type,error:null!=I(n),autoFocus:!0,onChange:function(){return z("questions.".concat(n))},onKeyUp:function(e){"Enter"===e.key&&H(e)}})}};return(0,y.BX)(y.HY,{children:[-1===D&&null!=n?n:null,(0,y.tZ)(s.M,{children:a.questions.map((function(e,n){var t;return(0,y.BX)(o.Z,{show:D===n,children:[(0,y.tZ)(i.Z,{lower:(0,y.tZ)(i.Z.Text2,{children:e.question})}),(0,y.tZ)(f.Ki,{size:20}),K(e,n),(0,y.tZ)(f.Ki,{size:8}),(0,y.tZ)("p",{css:(0,r.iv)({fontSize:14,whiteSpace:"pre-line",lineHeight:1.3,color:I(n)?c.O.red[5]:c.O.gray[6]},"",""),children:I(n)?null===(t=I(n))||void 0===t?void 0:t.message:e.description})]},n)}))}),D===q&&null!=t?t:null,(0,y.tZ)(u.Z,{show:!0,css:k,children:(0,y.BX)(f.kC,{direction:"row",children:[D!==Z?(0,y.tZ)(l.Z,{styleType:"secondary",onClick:function(){D!==Z&&(F((function(e){return e-1})),null===b||void 0===b||b(D,D-1,B()))},disabled:h,css:j,children:"\uc774\uc804"}):null,D!==q?(0,y.tZ)(l.Z,{styleType:"primary",onClick:X,children:"\ub2e4\uc74c"}):null,D===q?(0,y.tZ)(l.Z,{styleType:"primary",type:"submit",onClick:C((function(e){null===m||void 0===m||m(e)})),disabled:h,loading:h,children:"\uc81c\ucd9c\ud558\uae30"}):null]})})]})}},17951:function(e,n,t){var r=t(92809),o=t(70917),u=t(91164),i=t(11371),l=t(89353),c=t(35944),a=["children"],s=["children"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e){var n=e.upper,t=e.lower;return(0,c.BX)(l.kC,{direction:"column",children:[(0,c.tZ)(l.Ki,{size:24}),n,null!=n&&null!=t?(0,c.tZ)(l.Ki,{size:8}):null,t,(0,c.tZ)(l.Ki,{size:16})]})};p.Text2=function(e){var n=e.children,t=(0,u.Z)(e,a);return(0,c.tZ)("h2",d(d({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:i.O.gray[9],whiteSpace:"pre-line"},"","")},t),{},{children:n}))},p.Text6=function(e){var n=e.children,t=(0,u.Z)(e,s);return(0,c.tZ)("p",d(d({},t),{},{children:n}))},n.Z=p},88587:function(e,n,t){var r=t(94033),o=t(87536),u=t(35944);n.Z=function(e){var n=e.label,t=e.name,i=e.control,l=e.rules,c=e.defaultValue,a=e.error,s=e.min,f=e.max,d=(0,o.bc)({name:t,control:i,rules:l,defaultValue:c}).field,p=d.ref,v=d.name,h=d.onChange,m=d.onBlur;return(0,u.BX)("div",{children:[null!=n?(0,u.tZ)(r.__,{children:n}):null,(0,u.tZ)(r.II,{type:"datetime-local",min:s,max:f,ref:p,name:v,onChange:h,onBlur:m,error:a})]})}},87004:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(92809),o=t(70917),u=t(91164),i=t(16914),l=t(35944),c=["show","children"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.show,t=e.children,r=(0,u.Z)(e,c);return(0,l.tZ)("div",s(s({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:i.t,zIndex:100,boxSizing:"border-box"},"","")},r),{},{children:(0,l.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:t})}))}},55340:function(e,n,t){t.d(n,{XU:function(){return o},$:function(){return u},D5:function(){return i},f3:function(){return l},Dh:function(){return c},ii:function(){return a}});var r=t(80253),o=r.k.getPageLogger("Home"),u=r.k.getPageLogger("ApplyInterviewee"),i=r.k.getPageLogger("ApplyIntervieweeFinish"),l=r.k.getPageLogger("ApplyInterviewer"),c=(r.k.getPageLogger("ApplyInterviewerFinish"),r.k.getPageLogger("FrontendTestEvent")),a=r.k.getPageLogger("FrontendTestEventResult")},33675:function(e,n,t){t.d(n,{$:function(){return o}});var r=t(22531);function o(){return(0,r.L)("interviewers/positions.json")}},22531:function(e,n,t){t.d(n,{L:function(){return c}});var r=t(30266),o=t(809),u=t.n(o),i=t(67237),l=t(88767);function c(e){return(0,l.useQuery)("storageData/".concat(e),(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.gc)("https://raw.githubusercontent.com/Lubycon/double-tap-lab-storage/main/".concat(e)));case 1:case"end":return n.stop()}}),n)}))))}},38584:function(e,n,t){t.d(n,{fo:function(){return v},S1:function(){return m},uK:function(){return b}});var r=t(21582),o=t(30266),u=t(809),i=t.n(u),l=t(80090),c=t(65731);function a(e){return s.apply(this,arguments)}function s(){return(s=(0,o.Z)(i().mark((function e(n){var t,o,u,c,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.F.get("/resume/upload_url");case 2:return t=e.sent,o=t.body,e.next=6,fetch(o.url,{method:"PUT",body:n});case 6:return u=o.url.split("?"),c=(0,r.Z)(u,1),a=c[0],e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){var n=e.split("/"),t=(0,r.Z)(n,3);return{owner:t[0],bankName:t[1],accountNumber:t[2]}}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)(i().mark((function e(n){var t,r,o,u,l,s,d,p,v,h,m,g,y,b,Z,w;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=n.questions,d=null===(t=(0,c.j)(s,"company"))||void 0===t?void 0:t.value,p=null===(r=(0,c.j)(s,"position"))||void 0===r?void 0:r.value,v=null===(o=(0,c.j)(s,"grade"))||void 0===o?void 0:o.value,h=null===(u=(0,c.j)(s,"resume"))||void 0===u?void 0:u.file,m=null===(l=(0,c.j)(s,"bankInfo"))||void 0===l?void 0:l.value,![d,p,v,h,m].some((function(e){return null==e}))){e.next=8;break}throw new Error("\ud544\uc218 \uc815\ubcf4\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4");case 8:return g=f(m),y=g.owner,b=g.bankName,Z=g.accountNumber,e.next=11,a(h);case 11:return w=e.sent,e.abrupt("return",{company:d,position:p,grade:v,resume_url:w,bank_owner_name:y,bank_account_number:Z,bank_name:b});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.F.get("/interviewers");case 2:return n=e.sent.body,e.abrupt("return",n.interviewers);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,o.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.F.get("/interviewers/".concat(n));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return l.F.post("/interviewers",{})}function b(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:return t=e.sent,e.next=5,y();case 5:return e.abrupt("return",l.F.post("/interviewers/requests",t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},59184:function(e,n,t){t.d(n,{x:function(){return o}});var r=t(22475),o=function(e){return(0,r.Z)(e,"yyyy-MM-dd'T'HH:mm")}},65731:function(e,n,t){function r(e,n){return e.find((function(e){return e.fieldName===n}))}function o(e,n){return e.find((function(e){return e.value===n}))}t.d(n,{j:function(){return r},g:function(){return o}})}}]);