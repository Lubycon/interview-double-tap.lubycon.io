"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{73967:function(e,n,r){var t=r(14332),o=r(36861),i=r(35944);var l={name:"1ov30w2",styles:"padding-left:24px;padding-right:24px;position:absolute;width:100%;box-sizing:border-box"};n.Z=function(e){var n=e.show,r=e.children;return(0,i.tZ)(t.M,{children:n&&(0,i.tZ)(o.E.div,{css:l,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:-300,opacity:0},transition:{ease:"easeOut"},children:r})})}},45922:function(e,n,r){var t=r(92809),o=r(70917),i=r(91164),l=r(16914),u=r(35944),c=["show","children"];function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.show,r=e.children,t=(0,i.Z)(e,c);return(0,u.tZ)("div",s(s({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:l.t,zIndex:100,boxSizing:"border-box"},"","")},t),{},{children:(0,u.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(n?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:r})}))}},19421:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(70917),o=r(52209),i=r(11371),l=r(21582);var u,c=r(35944),a=(0,t.F4)(u||(u=(0,o.Z)(["\n  to {\n    transform: rotate(360deg);\n  }\n"]))),s=function(e){var n=e.size,r=void 0===n?20:n,o=e.borderWidth,u=void 0===o?3:o,s=e.color,d=void 0===s?i.O.gray[9]:s,f=function(e){var n,r,t=null!==(n=null===(r=e.trim().replace("#","").match(/[a-fA-F\d]{2}/g))||void 0===r?void 0:r.map((function(e){return parseInt(e,16)})))&&void 0!==n?n:[],o=(0,l.Z)(t,3);return{red:o[0],green:o[1],blue:o[2]}}(d),p=f.red,g=f.green,h=f.blue;return(0,c.tZ)("div",{css:(0,t.iv)({display:"inline-block",width:r,height:r,border:"".concat(u,"px solid rgba(").concat(p,", ").concat(g,", ").concat(h,", 0.3)"),borderTopColor:d,borderRadius:"50%",animation:"".concat(a," 1s ease-in-out infinite")},"","")})}},43274:function(e,n,r){r.d(n,{Z:function(){return q}});var t=r(70917),o=r(73967),i=r(45922),l=r(17951),u=r(8031),c=r(11371),a=r(11640),s=r(89353),d=r(67294),f=r(87536),p=r(59184),g=r(88587),h=r(55641),v=r(94033),m=r(35944);var b={name:"eivff4",styles:"display:none"},y={name:"1efi8gv",styles:"font-weight:bold"};var Z={ShortText:function(e){var n=e.label,r=e.name,t=e.control,o=e.rules,i=e.defaultValue,l=e.error,u=e.autoFocus,c=e.autoComplete,a=e.placeholder,s=e.type,p=e.onChange,g=e.onKeyUp,b=(0,d.useRef)(null),y=(0,d.useRef)(),Z=(0,f.bc)({name:r,control:t,rules:o,defaultValue:i}).field,O=Z.ref,w=Z.name,x=Z.onChange,k=Z.onBlur,q=(0,h.HB)(O,b);return(0,d.useEffect)((function(){return function(){clearTimeout(y.current)}}),[]),(0,m.tZ)(h.mU,{onImpressionStart:function(){!0===u&&null!=b.current&&null!=window&&(y.current=window.setTimeout((function(){var e;null===(e=b.current)||void 0===e||e.focus()}),300))},children:(0,m.BX)("div",{children:[null!=n?(0,m.tZ)(v.__,{children:n}):null,(0,m.tZ)(v.II,{type:s,name:w,onChange:function(e){x(e),null===p||void 0===p||p(e)},onKeyUp:g,onBlur:k,autoComplete:c,placeholder:a,error:l,ref:q})]})})},Select:function(e){var n=e.label,r=e.name,o=e.control,i=e.rules,l=e.defaultValue,u=e.children,a=e.error,s=(0,f.bc)({name:r,control:o,rules:i,defaultValue:l}),d=s.field,p=d.ref,g=d.name,h=d.onChange,b=d.onBlur,y=s.formState.isDirty;return(0,m.BX)("div",{children:[null!=n?(0,m.tZ)(v.__,{children:n}):null,(0,m.BX)(v.Ph,{ref:p,name:g,onChange:h,onBlur:b,error:a,initial:!y,children:[(0,m.tZ)("option",{value:"",disabled:!0,selected:!0,css:(0,t.iv)({color:c.O.gray[3]},"",""),children:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),u]})]})},File:function(e){var n=e.label,r=e.name,o=e.control,i=e.rules,l=e.defaultValue,a=e.accept,p=(0,d.useState)(null),g=p[0],Z=p[1],O=(0,d.useRef)(null),w=(0,f.bc)({name:r,control:o,rules:i,defaultValue:l}).field,x=w.ref,k=w.name,q=w.onChange,P=w.onBlur,z=(0,h.HB)(x,O);return(0,m.BX)("div",{children:[null!=n?(0,m.tZ)(v.__,{children:n}):null,(0,m.tZ)("input",{type:"file",name:k,accept:a,onChange:function(e){var n,r,t=null!==(n=null===(r=e.target.files)||void 0===r?void 0:r[0])&&void 0!==n?n:null;Z(t),q(t)},onBlur:P,css:b,ref:z}),null!=g?(0,m.BX)(m.HY,{children:[(0,m.BX)("p",{css:(0,t.iv)({fontSize:14,color:c.O.gray[8]},"",""),children:["\ud604\uc7ac \uc5c5\ub85c\ub4dc\ub41c \ud30c\uc77c\uc740 ",(0,m.tZ)("strong",{css:y,children:g.name})," \uc774\uc5d0\uc694"]}),(0,m.tZ)(s.Ki,{size:16})]}):null,(0,m.tZ)(u.Z,{onClick:function(){var e;null===(e=O.current)||void 0===e||e.click()},children:null==g?"\ucca8\ubd80\ud558\uae30":"\ubcc0\uacbd\ud558\uae30"})]})},Datetime:g.Z};var O=new Date,w=(0,a.Z)(O,1),x={name:"1bfm292",styles:"padding:0px 8px 16px 8px"},k={name:"1oaeivz",styles:"margin-right:8px"},q=function(e){var n=e.intro,r=e.outro,a=e.data,g=e.loading,h=e.onSubmit,v=e.onNextStep,b=e.onPrevStep,y=null==n?0:-1,q=null==r?a.questions.length-1:a.questions.length,P=(0,f.cI)({defaultValues:null!==a&&void 0!==a?a:{}}),z=P.handleSubmit,C=P.setError,S=P.clearErrors,j=P.getValues,B=P.formState,_=P.control,D=(0,d.useState)(y),T=D[0],I=D[1],E=function(){if(T!==q){var e=function(e){if("file"===e.type){var n=null==e.file;return!0===e.required&&n?{type:"required",message:"\ud30c\uc77c\uc744 \ucca8\ubd80\ud574\uc8fc\uc138\uc694"}:null}return!0!==e.required||""!==(r=e.value)&&null!=r?"email"!==e.type||function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(e)}(e.value)?"tel"!==e.type||function(e){return/01[0|1|6|7|8|9]-?\d{4}-?\d{4}/.test(e)}(e.value)?null:{type:"pattern",message:"\uc62c\ubc14\ub978 \ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}:{type:"pattern",message:"\uc62c\ubc14\ub978 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}:{type:"required",message:"\ub2f5\ubcc0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"};var r}(j().questions[T]);null==e?(I((function(e){return e+1})),null===v||void 0===v||v(T,T+1,j())):C("questions.".concat(T),e)}},X=function(e){var n=B.errors.questions;return null===n||void 0===n?void 0:n[e]},F=function(e){var n;null===(n=e.currentTarget)||void 0===n||n.blur(),E()},V=function(e,n){switch(e.type){case"select":return(0,m.tZ)(Z.Select,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:_,error:null!=X(n),onChange:function(e){S("questions.".concat(n)),F(e)},children:e.options.map((function(e){return(0,m.tZ)("option",{value:e,children:e},e)}))});case"file":return(0,m.tZ)(Z.File,{name:"questions.".concat(n,".file"),rules:{required:e.required},control:_,error:null!=X(n),onChange:function(e){S("questions.".concat(n)),F(e)},accept:"application/pdf"});case"datetime":return(0,m.tZ)(Z.Datetime,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:_,error:null!=X(n),min:(0,p.x)(O),max:(0,p.x)(w),onChange:function(e){S("questions.".concat(n)),F(e)}});default:return(0,m.tZ)(Z.ShortText,{name:"questions.".concat(n,".value"),rules:{required:e.required},control:_,autoComplete:"off",placeholder:e.placeholder,type:e.type,error:null!=X(n),autoFocus:!0,onChange:function(){return S("questions.".concat(n))},onKeyUp:function(e){"Enter"===e.key&&F(e)}})}};return(0,m.BX)(m.HY,{children:[-1===T&&null!=n?n:null,a.questions.map((function(e,n){var r;return(0,m.BX)(o.Z,{show:T===n,children:[(0,m.tZ)(l.Z,{lower:(0,m.tZ)(l.Z.Text2,{children:e.question})}),(0,m.tZ)(s.Ki,{size:20}),V(e,n),(0,m.tZ)(s.Ki,{size:8}),(0,m.tZ)("p",{css:(0,t.iv)({fontSize:14,whiteSpace:"pre-line",lineHeight:1.3,color:X(n)?c.O.red[5]:c.O.gray[6]},"",""),children:X(n)?null===(r=X(n))||void 0===r?void 0:r.message:e.description})]},n)})),T===q&&null!=r?r:null,(0,m.tZ)(i.Z,{show:!0,css:x,children:(0,m.BX)(s.kC,{direction:"row",children:[T!==y?(0,m.tZ)(u.Z,{styleType:"secondary",onClick:function(){T!==y&&(I((function(e){return e-1})),null===b||void 0===b||b(T,T-1,j()))},disabled:g,css:k,children:"\uc774\uc804"}):null,T!==q?(0,m.tZ)(u.Z,{styleType:"primary",onClick:E,children:"\ub2e4\uc74c"}):null,T===q?(0,m.tZ)(u.Z,{styleType:"primary",type:"submit",onClick:z((function(e){null===h||void 0===h||h(e)})),disabled:g,loading:g,children:"\uc81c\ucd9c\ud558\uae30"}):null]})})]})}},17951:function(e,n,r){var t=r(92809),o=r(70917),i=r(91164),l=r(11371),u=r(89353),c=r(35944),a=["children"],s=["children"];function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=function(e){var n=e.upper,r=e.lower;return(0,c.BX)(u.kC,{direction:"column",children:[(0,c.tZ)(u.Ki,{size:24}),n,null!=n&&null!=r?(0,c.tZ)(u.Ki,{size:8}):null,r,(0,c.tZ)(u.Ki,{size:16})]})};p.Text2=function(e){var n=e.children,r=(0,i.Z)(e,a);return(0,c.tZ)("h2",f(f({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:l.O.gray[9],whiteSpace:"pre-line"},"","")},r),{},{children:n}))},p.Text6=function(e){var n=e.children,r=(0,i.Z)(e,s);return(0,c.tZ)("p",f(f({},r),{},{children:n}))},n.Z=p},88587:function(e,n,r){var t=r(94033),o=r(87536),i=r(35944);n.Z=function(e){var n=e.label,r=e.name,l=e.control,u=e.rules,c=e.defaultValue,a=e.error,s=e.min,d=e.max,f=(0,o.bc)({name:r,control:l,rules:u,defaultValue:c}).field,p=f.ref,g=f.name,h=f.onChange,v=f.onBlur;return(0,i.BX)("div",{children:[null!=n?(0,i.tZ)(t.__,{children:n}):null,(0,i.tZ)(t.II,{type:"datetime-local",min:s,max:d,ref:p,name:g,onChange:h,onBlur:v,error:a})]})}},94033:function(e,n,r){r.d(n,{II:function(){return u},Ph:function(){return c},__:function(){return a}});var t=r(16947),o=r(70917),i=r(11371),l=(0,o.iv)("border:none;border-bottom:2px solid ",i.O.gray[3],";font-size:24px;padding:8px;width:100%;box-sizing:border-box;outline:0;border-radius:0;background-color:transparent;&:focus{border-bottom-color:",i.O.primary,";}",""),u=(0,t.Z)("input",{target:"ek67crv3"})(l," &::placeholder{color:",i.O.gray[5],";}border-bottom-color:",(function(e){return!0===e.error?i.O.red[5]:void 0}),";"),c=(0,t.Z)("select",{target:"ek67crv2"})(l," color:",(function(e){return!0===e.initial?i.O.gray[5]:i.O.gray[9]}),";appearance:none;border-bottom-color:",(function(e){return!0===e.error?i.O.red[5]:void 0}),";"),a=((0,t.Z)("select",{target:"ek67crv1"})(l,";"),(0,t.Z)("label",{target:"ek67crv0"})("display:block;font-size:14px;line-height:1.3;margin-bottom:8px;font-weight:bold;color:",i.O.gray[7],";"))},55340:function(e,n,r){r.d(n,{XU:function(){return o},$:function(){return i},D5:function(){return l},f3:function(){return u},Dh:function(){return c},ii:function(){return a}});var t=r(80253),o=t.k.getPageLogger("Home"),i=t.k.getPageLogger("ApplyInterviewee"),l=t.k.getPageLogger("ApplyIntervieweeFinish"),u=t.k.getPageLogger("ApplyInterviewer"),c=(t.k.getPageLogger("ApplyInterviewerFinish"),t.k.getPageLogger("FrontendTestEvent")),a=t.k.getPageLogger("FrontendTestEventResult")},22531:function(e,n,r){r.d(n,{L:function(){return c}});var t=r(30266),o=r(809),i=r.n(o),l=r(67237),u=r(88767);function c(e){return(0,u.useQuery)("storageData/".concat(e),(0,t.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.gc)("https://raw.githubusercontent.com/Lubycon/double-tap-lab-storage/main/".concat(e)));case 1:case"end":return n.stop()}}),n)}))))}},59184:function(e,n,r){r.d(n,{x:function(){return o}});var t=r(22475),o=function(e){return(0,t.Z)(e,"yyyy-MM-dd'T'HH:mm")}}}]);