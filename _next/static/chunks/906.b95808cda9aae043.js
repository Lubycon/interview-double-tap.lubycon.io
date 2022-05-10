"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{7951:function(e,t,r){var n=r(2809),o=r(917),i=r(1164),u=r(1371),c=r(9353),a=r(5944),s=["children"],l=["children"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.upper,r=e.lower;return(0,a.BX)(c.kC,{direction:"column",children:[(0,a.tZ)(c.Ki,{size:24}),t,null!=t&&null!=r?(0,a.tZ)(c.Ki,{size:8}):null,r,(0,a.tZ)(c.Ki,{size:16})]})};p.Text2=function(e){var t=e.children,r=(0,i.Z)(e,s);return(0,a.tZ)("h2",d(d({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:u.O.gray[9],whiteSpace:"pre-line"},"","")},r),{},{children:t}))},p.Text6=function(e){var t=e.children,r=(0,i.Z)(e,l);return(0,a.tZ)("p",d(d({},r),{},{children:t}))},t.Z=p},7566:function(e,t,r){var n=r(2809),o=r(917),i=r(1164),u=r(6914),c=r(6557),a=r(5944),s=["show","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.show,r=e.children,n=(0,i.Z)(e,s);return(0,a.tZ)("div",f(f({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:u.t,zIndex:c.k.FIXED_BOTTOM,boxSizing:"border-box"},"","")},n),{},{children:(0,a.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(t?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:r})}))}},906:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(7566),o=r(7951),i=r(8031),u=r(266),c=r(9711),a=r(809),s=r.n(a),l=r(5641),f=r(7294),d=r(8424),p=r.n(d);var v=r(767),b=r(3824),h=r(8767),y=r(9230);function O(e){return(0,h.useQuery)(["interview",e],(function(){return(0,y.SR)(e)}))}var m=function(e){var t;return function(){return t||(t=p().createClient(e)),t}}({mode:"rtc",codec:"vp8"}),g=function(e){var t=null;return function(){var r=(0,f.useState)(!1),n=r[0],o=r[1],i=(0,f.useState)(null),u=i[0],c=i[1],a=(0,f.useRef)(t);return(0,f.useEffect)((function(){return null===a.current?function(){try{return Promise.resolve(p().createMicrophoneAudioTrack(e)).then((function(e){return t=e}))}catch(r){return Promise.reject(r)}}().then((function(e){a.current=e,o(!0)}),(function(e){c(e)})):o(!0),function(){t=null}}),[]),{ready:n,track:a.current,error:u}}}({encoderConfig:{sampleRate:48e3,stereo:!0,bitrate:128}});var w=r(9353),k=r(917),j=r(9445),Z=r(1371),P=r(5944),T=function(e){var t=e.defaultValue,r=e.onChange,n=(0,f.useState)(null!==t&&void 0!==t&&t),o=n[0],i=n[1],u=o?"mic-off":"mic";return(0,f.useEffect)((function(){null===r||void 0===r||r(o)}),[o]),(0,P.tZ)("button",{css:(0,k.iv)({backgroundColor:o?Z.O.gray[4]:Z.O.gray[2],borderRadius:"50%",border:"none",width:80,height:80,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return i((function(e){return!e}))},children:(0,P.tZ)(j.J,{name:u,type:"outline",size:40,color:Z.O.white},u)})},C=r(2809),x=r(1164);var S=["color","size","fontSize","children","audioTrack"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,C.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){var t=e.color,r=e.size,n=(e.fontSize,e.children),o=e.audioTrack,i=(0,x.Z)(e,S),u=(0,f.useState)(0),c=u[0],a=u[1],s=.3*c+1;return(0,f.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var t=e.getChannelData(0);a(function(e){var t=e.reduce((function(e,t){return e+Math.abs(t)}),0);return Math.sqrt(t/e.length)}(t))})),function(){null===o||void 0===o||o.setAudioFrameCallback(null)}}),[o]),(0,P.BX)(w.kC,z(z({direction:"column",justify:"center",align:"center",css:(0,k.iv)({backgroundColor:t,color:Z.O.white,width:r,height:r,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},i),{},{children:[n,(0,P.tZ)("div",{style:{transform:"scale(".concat(s,")")},css:(0,k.iv)({width:r,height:r,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:t,opacity:.3,borderRadius:"50%"},"","")})]}))};var A={name:"1d3w5wq",styles:"width:100%"},N=function(e){var t=e.playing,r=e.me,n=e.myAudioTrack,o=e.remoteUser,i=e.remoteUserAudioTrack,u="JOINED"===e.remoteStatus,c=u&&null==i;return(0,P.BX)(w.Kq,{justify:"center",align:"center",gutter:16,css:A,children:[(0,P.tZ)(D,{color:t?Z.O.primary:Z.O.gray[6],size:150,audioTrack:n,children:(0,P.tZ)(w.xv,{children:r.nickname})}),(0,P.BX)(D,{color:u?Z.O.cyan[5]:Z.O.gray[6],size:150,audioTrack:i,children:[(0,P.tZ)(w.xv,{children:u?o.nickname:""}),c&&(0,P.BX)(P.HY,{children:[(0,P.tZ)(w.Ki,{size:8}),(0,P.tZ)(j.J,{name:"mic-off",size:20,color:Z.O.red[5]})]})]})]})};var I={name:"a3z6ut",styles:"padding:0 20px"},B={name:"1d3w5wq",styles:"width:100%"},F=function(e){var t,r=e.interviewId,a=e.token,d=e.channelName,p=e.onReady,h=(0,b.E)().me,y=function(e){var t=e.interviewId,r=e.channelName,n=e.token,o=m(),i=g(),a=i.track,d=i.ready,p=(0,l.zj)(),h=(0,c.Z)(p,3),y=h[0],w=h[1],k=h[2],j=(0,f.useState)("WAITING"),Z=j[0],P=j[1],T=(0,f.useState)(),C=T[0],x=T[1],S=(0,b.E)().me,E=O(t).data,z=(0,f.useMemo)((function(){return(null===E||void 0===E?void 0:E.interviewer.id)===(null===S||void 0===S?void 0:S.id)?null===E||void 0===E?void 0:E.interviewee:null===E||void 0===E?void 0:E.interviewer}),[E,S]),D=(0,f.useCallback)((0,u.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.join(v.xD,r,n,null);case 2:w(),null!=a&&o.publish(a);case 4:case"end":return e.stop()}}),e)}))),[a,w]),A=(0,f.useCallback)((function(){P("LEFT"),x(void 0),o.leave(),null===a||void 0===a||a.setMuted(!1),k()}),[o,k,a]);return(0,f.useEffect)((function(){if(!1!==d&&null!=a){var e=function(){var e=(0,u.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",t),P("JOINED");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=(0,u.Z)(s().mark((function e(t,r){var n,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",t),e.next=3,o.subscribe(t,r);case 3:null===(n=t.audioTrack)||void 0===n||n.setVolume(250),null===(i=t.audioTrack)||void 0===i||i.play(),x(t.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),r=function(){var e=(0,u.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",t),null===(r=t.audioTrack)||void 0===r||r.stop(),e.next=4,o.unsubscribe(t);case 4:x(t.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),A()};return o.on("user-joined",e),o.on("user-published",t),o.on("user-unpublished",r),o.on("user-left",n),a.setVolume(250),function(){"CONNECTED"!==o.connectionState&&"CONNECTING"!==o.connectionState||(o.off("user-joined",e),o.off("user-published",t),o.off("user-unpublished",r),o.off("user-left",n))}}}),[d,a]),{client:o,ready:d,localAudioTrack:a,isCalling:y,joinToChannel:D,leaveToChannel:A,remoteUser:z,remoteStatus:Z,remoteAudioTrack:C}}({interviewId:r,channelName:d,token:a}),k=y.ready,j=y.localAudioTrack,Z=y.isCalling,C=y.joinToChannel,x=y.leaveToChannel,S=y.remoteUser,E=y.remoteAudioTrack,z=y.remoteStatus;return(0,f.useEffect)((function(){!0===k&&(null===p||void 0===p||p())}),[k,p]),null==h||null==S?null:(0,P.BX)(w.kC,{direction:"column",css:I,children:[(0,P.tZ)(o.Z,{upper:(0,P.BX)(o.Z.Text2,{children:["\ucc44\ub110\uba85 [",d,"]"]})}),(0,P.tZ)(w.Ki,{size:40}),(0,P.tZ)(N,{playing:Z,me:h,myAudioTrack:null!==j&&void 0!==j?j:void 0,remoteUser:S,remoteUserAudioTrack:E,remoteStatus:z}),Z?(0,P.BX)(w.kC,{direction:"column",align:"center",justify:"center",css:B,children:[(0,P.tZ)(w.Ki,{size:50}),(0,P.tZ)(T,{defaultValue:null===j||void 0===j?void 0:j.muted,onChange:function(e){null===j||void 0===j||j.setMuted(e)}}),(0,P.tZ)(w.Ki,{size:12}),(0,P.tZ)("input",{type:"range",min:"0",max:"1000",defaultValue:1e3*(null!==(t=null===j||void 0===j?void 0:j.getVolumeLevel())&&void 0!==t?t:0),onChange:function(e){null===j||void 0===j||j.setVolume(Number(e.target.value))}})]}):null,(0,P.tZ)(n.Z,{show:!0,children:Z?(0,P.tZ)(i.Z.BottomCTA,{styleType:"danger",onClick:x,children:"\ub098\uac00\uae30"}):(0,P.tZ)(i.Z.BottomCTA,{styleType:"primary",onClick:C,disabled:!1===k||null==j,children:"\uc785\uc7a5\ud558\uae30"})})]})}},9230:function(e,t,r){r.d(t,{eg:function(){return l},x1:function(){return f},SR:function(){return d},zk:function(){return p},Up:function(){return v},uT:function(){return b}});var n=r(2809),o=r(266),i=r(809),u=r.n(i),c=r(90);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviews/requests/mine/interviewers");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviews/requests/mine/interviewees");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.F.get("/interviews".concat(t));case 2:return r=e.sent,e.abrupt("return",r.body);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e,t){return c.F.post("/interviews/".concat(e,"/feedbacks"),t)},v=function(e,t){return c.F.post("/interviews/".concat(e,"/nps"),t)},b=function(e,t){return c.F.put("/interview/requests",s(s({},e),{},{updatedFields:t}))}},1164:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})}}]);