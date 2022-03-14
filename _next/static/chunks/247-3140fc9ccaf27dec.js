"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{73967:function(e,n,t){var r=t(36861),o=t(35944);var i={name:"1ov30w2",styles:"padding-left:24px;padding-right:24px;position:absolute;width:100%;box-sizing:border-box"};n.Z=function(e){var n=e.show,t=e.children;return n?(0,o.tZ)(r.E.div,{css:i,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:-300,opacity:0},transition:{ease:"easeOut"},children:t}):null}},45922:function(e,n,t){var r=t(92809),o=t(70917),i=t(91164),l=t(16914),u=t(35944),c=["show","children"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.show,t=e.children,r=(0,i.Z)(e,c);return(0,u.tZ)("div",s(s({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:l.t,zIndex:100,boxSizing:"border-box"},"","")},r),{},{children:(0,u.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:t})}))}},43274:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(70917),o=t(73967),i=t(45922),l=t(17951),u=t(8031),c=t(11371),a=t(11640),s=t(14332),d=t(89353),f=t(67294),p=t(87536),h=t(59184),g=t(88587),v=t(55641),m=t(94033),y=t(35944);var b={name:"eivff4",styles:"display:none"},Z={name:"1efi8gv",styles:"font-weight:bold"};var w={ShortText:function(e){var n=e.label,t=e.name,r=e.control,o=e.rules,i=e.defaultValue,l=e.error,u=e.autoFocus,c=e.autoComplete,a=e.placeholder,s=e.type,d=e.onChange,h=e.onKeyUp,g=(0,f.useRef)(null),b=(0,f.useRef)(),Z=(0,p.bc)({name:t,control:r,rules:o,defaultValue:i}).field,w=Z.ref,O=Z.name,x=Z.onChange,q=Z.onBlur,P=(0,v.HB)(w,g);return(0,f.useEffect)((function(){return function(){clearTimeout(b.current)}}),[]),(0,y.tZ)(v.mU,{onImpressionStart:function(){!0===u&&null!=g.current&&null!=window&&(b.current=window.setTimeout((function(){var e;null===(e=g.current)||void 0===e||e.focus()}),300))},children:(0,y.BX)(y.HY,{children:[null!=n?(0,y.tZ)(m.__,{children:n}):null,(0,y.tZ)(m.II,{type:s,name:O,onChange:function(e){x(e),null===d||void 0===d||d(e)},onKeyUp:h,onBlur:q,autoComplete:c,placeholder:a,error:l,ref:P})]})})},Select:function(e){var n=e.label,t=e.name,o=e.control,i=e.rules,l=e.defaultValue,u=e.children,a=e.error,s=(0,p.bc)({name:t,control:o,rules:i,defaultValue:l}),d=s.field,f=d.ref,h=d.name,g=d.onChange,v=d.onBlur,b=s.formState.isDirty;return(0,y.BX)("div",{children:[null!=n?(0,y.tZ)(m.__,{children:n}):null,(0,y.BX)(m.Ph,{ref:f,name:h,onChange:g,onBlur:v,error:a,initial:!b,children:[(0,y.tZ)("option",{value:"",disabled:!0,selected:!0,css:(0,r.iv)({color:c.O.gray[3]},"",""),children:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),u]})]})},File:function(e){var n=e.label,t=e.name,o=e.control,i=e.rules,l=e.defaultValue,a=e.accept,s=(0,f.useState)(null),h=s[0],g=s[1],w=(0,f.useRef)(null),O=(0,p.bc)({name:t,control:o,rules:i,defaultValue:l}).field,x=O.ref,q=O.name,P=O.onChange,C=O.onBlur,S=(0,v.HB)(x,w);return(0,y.BX)("div",{children:[null!=n?(0,y.tZ)(m.__,{children:n}):null,(0,y.tZ)("input",{type:"file",name:q,accept:a,onChange:function(e){var n,t,r=null!==(n=null===(t=e.target.files)||void 0===t?void 0:t[0])&&void 0!==n?n:null;g(r),P(r)},onBlur:C,css:b,ref:S}),null!=h?(0,y.BX)(y.HY,{children:[(0,y.BX)("p",{css:(0,r.iv)({fontSize:14,color:c.O.gray[8]},"",""),children:["\ud604\uc7ac \uc5c5\ub85c\ub4dc\ub41c \ud30c\uc77c\uc740 ",(0,y.tZ)("strong",{css:Z,children:h.name})," \uc774\uc5d0\uc694"]}),(0,y.tZ)(d.Ki,{size:16})]}):null,(0,y.tZ)(u.Z,{onClick:function(){var e;null===(e=w.current)||void 0===e||e.click()},children:null==h?"\ucca8\ubd80\ud558\uae30":"\ubcc0\uacbd\ud558\uae30"})]})},Datetime:g.Z};var O=new Date,x=(0,a.Z)(O,1),q={name:"1bfm292",styles:"padding:0px 8px 16px 8px"},P={name:"1oaeivz",styles:"margin-right:8px"},C=function(e){var n=e.intro,t=e.outro,a=e.data,g=e.loading,v=e.onSubmit,m=e.onNextStep,b=e.onPrevStep,Z=null==n?0:-1,C=null==t?a.questions.length-1:a.questions.length,S=(0,p.cI)({defaultValues:null!==a&&void 0!==a?a:{}}),j=S.handleSubmit,k=S.setError,z=S.clearErrors,B=S.getValues,D=S.formState,T=S.control,_=(0,f.useState)(Z),E=_[0],X=_[1],I=function(){if(E!==C){var e=function(e){if("file"===e.type){var n=null==e.file;return!0===e.required&&n?{type:"required",message:"\ud30c\uc77c\uc744 \ucca8\ubd80\ud574\uc8fc\uc138\uc694"}:null}return!0!==e.required||""!==(t=e.value)&&null!=t?"email"!==e.type||function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(e)}(e.value)?"tel"!==e.type||function(e){return/01[0|1|6|7|8|9]-?\d{4}-?\d{4}/.test(e)}(e.value)?null:{type:"pattern",message:"\uc62c\ubc14\ub978 \ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}:{type:"pattern",message:"\uc62c\ubc14\ub978 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}:{type:"required",message:"\ub2f5\ubcc0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"};var t}(B().questions[E]);null==e?(X((function(e){return e+1})),null===m||void 0===m||m(E,E+1,B())):k("questions.".concat(E),e)}},H=function(e){var n=D.errors.questions;return null===n||void 0===n?void 0:n[e]},V=function(e){var n;null===(n=e.currentTarget)||void 0===n||n.blur(),I()},K=function(e,n){switch(e.type){case"select":return(0,y.tZ)(w.Select,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:T,error:null!=H(n),onChange:function(e){z("questions.".concat(n)),V(e)},children:e.options.map((function(e){return(0,y.tZ)("option",{value:e,children:e},e)}))});case"file":return(0,y.tZ)(w.File,{name:"questions.".concat(n,".file"),rules:{required:e.required},control:T,error:null!=H(n),onChange:function(e){z("questions.".concat(n)),V(e)},accept:"application/pdf"});case"datetime":return(0,y.tZ)(w.Datetime,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:T,error:null!=H(n),min:(0,h.x)(O),max:(0,h.x)(x),onChange:function(e){z("questions.".concat(n)),V(e)}});default:return(0,y.tZ)(w.ShortText,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:T,autoComplete:"off",placeholder:e.placeholder,type:e.type,error:null!=H(n),autoFocus:!0,onChange:function(){return z("questions.".concat(n))},onKeyUp:function(e){"Enter"===e.key&&V(e)}})}};return(0,y.BX)(y.HY,{children:[-1===E&&null!=n?n:null,(0,y.tZ)(s.M,{children:a.questions.map((function(e,n){var t;return(0,y.BX)(o.Z,{show:E===n,children:[(0,y.tZ)(l.Z,{lower:(0,y.tZ)(l.Z.Text2,{children:e.question})}),(0,y.tZ)(d.Ki,{size:20}),K(e,n),(0,y.tZ)(d.Ki,{size:8}),(0,y.tZ)("p",{css:(0,r.iv)({fontSize:14,whiteSpace:"pre-line",lineHeight:1.3,color:H(n)?c.O.red[5]:c.O.gray[6]},"",""),children:H(n)?null===(t=H(n))||void 0===t?void 0:t.message:e.description})]},n)}))}),E===C&&null!=t?t:null,(0,y.tZ)(i.Z,{show:!0,css:q,children:(0,y.BX)(d.kC,{direction:"row",children:[E!==Z?(0,y.tZ)(u.Z,{styleType:"secondary",onClick:function(){E!==Z&&(X((function(e){return e-1})),null===b||void 0===b||b(E,E-1,B()))},disabled:g,css:P,children:"\uc774\uc804"}):null,E!==C?(0,y.tZ)(u.Z,{styleType:"primary",onClick:I,children:"\ub2e4\uc74c"}):null,E===C?(0,y.tZ)(u.Z,{styleType:"primary",type:"submit",onClick:j((function(e){null===v||void 0===v||v(e)})),disabled:g,loading:g,children:"\uc81c\ucd9c\ud558\uae30"}):null]})})]})}},17951:function(e,n,t){var r=t(92809),o=t(70917),i=t(91164),l=t(11371),u=t(89353),c=t(35944),a=["children"],s=["children"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e){var n=e.upper,t=e.lower;return(0,c.BX)(u.kC,{direction:"column",children:[(0,c.tZ)(u.Ki,{size:24}),n,null!=n&&null!=t?(0,c.tZ)(u.Ki,{size:8}):null,t,(0,c.tZ)(u.Ki,{size:16})]})};p.Text2=function(e){var n=e.children,t=(0,i.Z)(e,a);return(0,c.tZ)("h2",f(f({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:l.O.gray[9],whiteSpace:"pre-line"},"","")},t),{},{children:n}))},p.Text6=function(e){var n=e.children,t=(0,i.Z)(e,s);return(0,c.tZ)("p",f(f({},t),{},{children:n}))},n.Z=p},88587:function(e,n,t){var r=t(94033),o=t(87536),i=t(35944);n.Z=function(e){var n=e.label,t=e.name,l=e.control,u=e.rules,c=e.defaultValue,a=e.error,s=e.min,d=e.max,f=(0,o.bc)({name:t,control:l,rules:u,defaultValue:c}).field,p=f.ref,h=f.name,g=f.onChange,v=f.onBlur;return(0,i.BX)("div",{children:[null!=n?(0,i.tZ)(r.__,{children:n}):null,(0,i.tZ)(r.II,{type:"datetime-local",min:s,max:d,ref:p,name:h,onChange:g,onBlur:v,error:a})]})}},55340:function(e,n,t){t.d(n,{XU:function(){return o},$:function(){return i},D5:function(){return l},f3:function(){return u},Dh:function(){return c},ii:function(){return a}});var r=t(80253),o=r.k.getPageLogger("Home"),i=r.k.getPageLogger("ApplyInterviewee"),l=r.k.getPageLogger("ApplyIntervieweeFinish"),u=r.k.getPageLogger("ApplyInterviewer"),c=(r.k.getPageLogger("ApplyInterviewerFinish"),r.k.getPageLogger("FrontendTestEvent")),a=r.k.getPageLogger("FrontendTestEventResult")},22531:function(e,n,t){t.d(n,{L:function(){return c}});var r=t(30266),o=t(809),i=t.n(o),l=t(67237),u=t(88767);function c(e){return(0,u.useQuery)("storageData/".concat(e),(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.gc)("https://raw.githubusercontent.com/Lubycon/double-tap-lab-storage/main/".concat(e)));case 1:case"end":return n.stop()}}),n)}))))}},59184:function(e,n,t){t.d(n,{x:function(){return o}});var r=t(22475),o=function(e){return(0,r.Z)(e,"yyyy-MM-dd'T'HH:mm")}}}]);