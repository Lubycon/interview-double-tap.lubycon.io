"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{17951:function(e,r,n){var t=n(92809),o=n(70917),i=n(91164),c=n(11371),u=n(89353),a=n(35944),l=["children"],s=["children"];function d(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?d(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var p=function(e){var r=e.upper,n=e.lower;return(0,a.BX)(u.kC,{direction:"column",children:[(0,a.tZ)(u.Ki,{size:24}),r,null!=r&&null!=n?(0,a.tZ)(u.Ki,{size:8}):null,n,(0,a.tZ)(u.Ki,{size:16})]})};p.Text2=function(e){var r=e.children,n=(0,i.Z)(e,l);return(0,a.tZ)("h2",f(f({css:(0,o.iv)({fontWeight:"bold",fontSize:24,lineHeight:1.3,color:c.O.gray[9],whiteSpace:"pre-line"},"","")},n),{},{children:r}))},p.Text6=function(e){var r=e.children,n=(0,i.Z)(e,s);return(0,a.tZ)("p",f(f({},n),{},{children:r}))},r.Z=p},87004:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(92809),o=n(70917),i=n(91164),c=n(16914),u=n(35944),a=["show","children"];function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var d=function(e){var r=e.show,n=e.children,t=(0,i.Z)(e,a);return(0,u.tZ)("div",s(s({css:(0,o.iv)({position:"fixed",bottom:"0",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:c.t,zIndex:100,boxSizing:"border-box"},"","")},t),{},{children:(0,u.tZ)("div",{css:(0,o.iv)({transform:"translateY(".concat(r?"0":"100%",")"),transition:"transform 0.3s ease-in-out"},"",""),children:n})}))}},75954:function(e,r,n){n.r(r),n.d(r,{default:function(){return R}});var t=n(87004),o=n(17951),i=n(8031),c=n(30266),u=n(21582),a=n(809),l=n.n(a),s=n(55641),d=n(67294),f=n(8424),p=n.n(f);var h=n(10767),v={nickname:"\uba74\uc811\ud5c8\uc811",email:"bboydart92@gmail.com",user_id:3,roles:["USER"],interviewer:null},b=function(e){var r;return function(){return r||(r=p().createClient(e)),r}}({mode:"rtc",codec:"vp8"}),m=function(e){var r=null;return function(){var n=(0,d.useState)(!1),t=n[0],o=n[1],i=(0,d.useState)(null),c=i[0],u=i[1],a=(0,d.useRef)(r);return(0,d.useEffect)((function(){return null===a.current?function(){try{return Promise.resolve(p().createMicrophoneAudioTrack(e)).then((function(e){return r=e}))}catch(n){return Promise.reject(n)}}().then((function(e){a.current=e,o(!0)}),(function(e){u(e)})):o(!0),function(){r=null}}),[]),{ready:t,track:a.current,error:c}}}({encoderConfig:{sampleRate:48e3,stereo:!0,bitrate:128}});var y=n(89353),g=n(70917),O=n(69445),k=n(11371),w=n(35944),Z=function(e){var r=e.defaultValue,n=e.onChange,t=(0,d.useState)(null!==r&&void 0!==r&&r),o=t[0],i=t[1],c=o?"mic-off":"mic";return(0,d.useEffect)((function(){null===n||void 0===n||n(o)}),[o]),(0,w.tZ)("button",{css:(0,g.iv)({backgroundColor:o?k.O.gray[4]:k.O.gray[2],borderRadius:"50%",border:"none",width:80,height:80,cursor:"pointer",transition:"background-color 0.2s ease-in-out"},"",""),onClick:function(){return i((function(e){return!e}))},children:(0,w.tZ)(O.J,{name:c,type:"outline",size:40,color:k.O.white},c)})},j=n(92809),C=n(91164);var T=["color","size","fontSize","children","audioTrack"];function P(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function E(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?P(Object(n),!0).forEach((function(r){(0,j.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var x=function(e){var r=e.color,n=e.size,t=(e.fontSize,e.children),o=e.audioTrack,i=(0,C.Z)(e,T),c=(0,d.useState)(0),u=c[0],a=c[1],l=.3*u+1;return(0,d.useEffect)((function(){if(null!=o)return o.setAudioFrameCallback((function(e){var r=e.getChannelData(0);a(function(e){var r=e.reduce((function(e,r){return e+Math.abs(r)}),0);return Math.sqrt(r/e.length)}(r))})),function(){null===o||void 0===o||o.setAudioFrameCallback(null)}}),[o]),(0,w.BX)(y.kC,E(E({direction:"column",justify:"center",align:"center",css:(0,g.iv)({backgroundColor:r,color:k.O.white,width:n,height:n,borderRadius:"50%",opacity:.6,transition:"background-color 0.5s ease-in"},"","")},i),{},{children:[t,(0,w.tZ)("div",{style:{transform:"scale(".concat(l,")")},css:(0,g.iv)({width:n,height:n,transition:"transform 0.1s ease-in-out",filter:"blur(2px)",position:"absolute",zIndex:0,backgroundColor:r,opacity:.3,borderRadius:"50%"},"","")})]}))};var z={name:"1d3w5wq",styles:"width:100%"},S=function(e){var r=e.playing,n=e.me,t=e.myAudioTrack,o=e.remoteUser,i=e.remoteUserAudioTrack,c=null!=o,u=c&&null==i;return(0,w.BX)(y.Kq,{justify:"center",align:"center",gutter:16,css:z,children:[(0,w.tZ)(x,{color:r?k.O.primary:k.O.gray[6],size:150,audioTrack:t,children:(0,w.tZ)(y.xv,{children:n.nickname})}),(0,w.BX)(x,{color:c?k.O.cyan[5]:k.O.gray[6],size:150,audioTrack:i,children:[(0,w.tZ)(y.xv,{children:c?o.nickname:""}),u&&(0,w.BX)(w.HY,{children:[(0,w.tZ)(y.Ki,{size:8}),(0,w.tZ)(O.J,{name:"mic-off",size:20,color:k.O.red[5]})]})]})]})};var D={nickname:"\uba74\uc811\uc309\uace0\uc218",email:"bboydart91@gmail.com",user_id:2,roles:["USER","INTERVIEWER"],interviewer:{id:1,name:"\uc5d0\ubc18\ubb38\uba74\uc811\uad00",profile_image:"https://www.gravatar.com/avatar/2?d=retro&f=y",description:"\uac1c\ubbf8\ub294 \ub6a0\ub6a0! \uc624\ub298\ub3c4 \ub6a0\ub6a0 \uc5f4\uc2ec\ud788 \uc77c\uc744 \ud558\ub124",company:"\ube44\ubc14\ub9ac\ud37c\ube14\ub9ac\uce74",interview_count:1,rating:2,available_time:null,available_week:null,reserved_time:null,grade:"MIDDLE",position:"FRONTEND_ENGINEER",tags:[]}},N={name:"a3z6ut",styles:"padding:0 20px"},A={name:"1d3w5wq",styles:"width:100%"},R=function(e){var r,n=e.token,a=e.channelName,f=e.onReady,p=function(e){var r=e.channelName,n=e.token,t=b(),o=m(),i=o.track,a=o.ready,f=(0,s.zj)(),p=(0,u.Z)(f,3),y=p[0],g=p[1],O=p[2],k=(0,d.useState)(),w=k[0],Z=k[1],j=(0,d.useState)(),C=j[0],T=j[1],P=(0,d.useCallback)((0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.join(h.xD,r,n,null);case 2:g(),null!=i&&t.publish(i);case 4:case"end":return e.stop()}}),e)}))),[i,g]),E=(0,d.useCallback)((function(){Z(void 0),T(void 0),t.leave(),null===i||void 0===i||i.setMuted(!1),O()}),[t,O,i]);return(0,d.useEffect)((function(){if(!1!==a&&null!=i){var e=function(){var e=(0,c.Z)(l().mark((function e(r){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\uc720\uc800\uac00 \ucc44\ub110\uc5d0 \uc785\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4",r),Z(v);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),r=function(){var e=(0,c.Z)(l().mark((function e(r,n){var o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799\uc744 Publish \ud558\uc600\uc2b5\ub2c8\ub2e4",r),e.next=3,t.subscribe(r,n);case 3:null===(o=r.audioTrack)||void 0===o||o.setVolume(250),null===(i=r.audioTrack)||void 0===i||i.play(),T(r.audioTrack);case 6:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),n=function(){var e=(0,c.Z)(l().mark((function e(r){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\uc0c1\ub300\ubc29\uc774 \uc624\ub514\uc624 \ud2b8\ub799 Publish\ub97c \uc911\ub2e8\ud558\uc600\uc2b5\ub2c8\ub2e4",r),null===(n=r.audioTrack)||void 0===n||n.stop(),e.next=4,t.unsubscribe(r);case 4:T(r.audioTrack);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(e){console.log("\uc0c1\ub300\ubc29\uc774 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc600\uc2b5\ub2c8\ub2e4",e),E()};return t.on("user-joined",e),t.on("user-published",r),t.on("user-unpublished",n),t.on("user-left",o),i.setVolume(250),function(){"CONNECTED"!==t.connectionState&&"CONNECTING"!==t.connectionState||(t.off("user-joined",e),t.off("user-published",r),t.off("user-unpublished",n),t.off("user-left",o))}}}),[a,i]),{client:t,ready:a,localAudioTrack:i,isCalling:y,joinToChannel:P,leaveToChannel:E,remoteUser:w,remoteAudioTrack:C}}({channelName:a,token:n}),g=p.ready,O=p.localAudioTrack,k=p.isCalling,j=p.joinToChannel,C=p.leaveToChannel,T=p.remoteUser,P=p.remoteAudioTrack;return(0,d.useEffect)((function(){!0===g&&(null===f||void 0===f||f())}),[g]),(0,w.BX)(y.kC,{direction:"column",css:N,children:[(0,w.tZ)(o.Z,{upper:(0,w.BX)(o.Z.Text2,{children:["\ucc44\ub110\uba85 [",a,"]"]})}),(0,w.tZ)(y.Ki,{size:40}),(0,w.tZ)(S,{playing:k,me:D,myAudioTrack:null!==O&&void 0!==O?O:void 0,remoteUser:T,remoteUserAudioTrack:P}),k?(0,w.BX)(y.kC,{direction:"column",align:"center",justify:"center",css:A,children:[(0,w.tZ)(y.Ki,{size:50}),(0,w.tZ)(Z,{defaultValue:null===O||void 0===O?void 0:O.muted,onChange:function(e){null===O||void 0===O||O.setMuted(e)}}),(0,w.tZ)(y.Ki,{size:12}),(0,w.tZ)("input",{type:"range",min:"0",max:"1000",defaultValue:1e3*(null!==(r=null===O||void 0===O?void 0:O.getVolumeLevel())&&void 0!==r?r:0),onChange:function(e){null===O||void 0===O||O.setVolume(Number(e.target.value))}})]}):null,(0,w.tZ)(t.Z,{show:!0,children:k?(0,w.tZ)(i.Z.BottomCTA,{styleType:"danger",onClick:C,children:"\ub098\uac00\uae30"}):(0,w.tZ)(i.Z.BottomCTA,{styleType:"primary",onClick:j,disabled:!1===g||null==O,children:"\uc785\uc7a5\ud558\uae30"})})]})}}}]);