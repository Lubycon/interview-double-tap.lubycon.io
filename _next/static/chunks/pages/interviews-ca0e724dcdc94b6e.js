(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{1794:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(37),i=t(7065),c=t(7951),u=t(9929),o=t(8767),a=t(9230);var s=t(9353),d=t(7294),v=t(266),l=t(809),f=t.n(l),p=t(3210),w=t(1371),h=t(5641),Z=t(4314),b=t(8996),y=t(3006),m=t(1163),g=t(2132),x=t(2770),k=t(8031),O=t(6541),_=t(5944),j=function(e){var n=e.interviewId,t=(0,o.useQuery)(["interviewFeedback",n],(function(){return(0,a.Y)(n)})).data;return null==t?(0,_.tZ)(s.xv,{children:"\ud53c\ub4dc\ubc31\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"}):(0,_.BX)(s.Kq,{gutter:8,children:[(0,_.tZ)(s.xv,{children:t.pros}),(0,_.tZ)(s.xv,{children:t.cons}),(0,_.tZ)(s.xv,{children:t.summary})]})},E=function(e){var n=e.interviewId,t=(0,o.useQuery)(["interviewNPS",n],(function(){return(0,a.gZ)(n)})).data;return null==t?(0,_.tZ)(s.xv,{children:"\ud53c\ub4dc\ubc31\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"}):(0,_.BX)(s.Kq,{gutter:8,children:[(0,_.tZ)(s.xv,{children:t.rating}),(0,_.tZ)(s.xv,{children:t.description})]})},F=function(e){var n=e.show,t=e.onClose,r=e.interview,i=(0,u.E)().me,c=r.interviewer.id===(null===i||void 0===i?void 0:i.id),o=c?r.interviewee:r.interviewer;return(0,_.BX)(O.Z,{show:n,onClose:t,children:[(0,_.tZ)(O.Z.Header,{title:"".concat(o.nickname,"\ub2d8\uc774 \uc791\uc131\ud55c \ud53c\ub4dc\ubc31")}),(0,_.tZ)(O.Z.Content,{children:c?(0,_.tZ)(E,{interviewId:r.id}):(0,_.tZ)(j,{interviewId:r.id})}),(0,_.tZ)(s.Ki,{size:24}),(0,_.tZ)(O.Z.Footer,{children:(0,_.tZ)(k.Z,{onClick:t,children:"\ub2eb\uae30"})})]})};var X={name:"10rtstj",styles:"padding:16px"},B={DONE:{type:"secondary",text:"\uc885\ub8cc"},WAITING:{type:"secondary",text:"\ub300\uae30\uc911"},IN_PROGRESS:{type:"primary",text:"\uba74\uc811\uc911"}},P=function(e){var n=e.interview,t=(0,s.Ir)().open,r=(0,u.E)().me,i=n.interviewer.id===(null===r||void 0===r?void 0:r.id),c=i?n.interviewee:n.interviewer,o=(0,d.useState)(""),a=o[0],l=o[1];(0,h.Yz)((function(){var e=new Date(n.start_datetime),t=(0,Z.Z)(e,{locale:y.Z,addSuffix:!0});l(t)}),500);var k=function(){var e=(0,v.Z)(f().mark((function e(){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("DONE"!==n.status){e.next=3;break}return t((function(e){var t=e.isOpen,r=e.close;return(0,_.tZ)(F,{show:t,onClose:r,interview:n})})),e.abrupt("return");case 3:r=(0,g.f0)({interviewId:n.id}),m.default.push("/interviews/meet".concat(r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=B[n.status],j=O.type,E=O.text;return(0,_.tZ)(p.Z,{css:X,onClick:k,children:(0,_.BX)(s.kC,{direction:"column",children:[(0,_.tZ)(x.Z,{type:j,children:E}),(0,_.tZ)(s.Ki,{size:8}),(0,_.BX)(s.Kq,{direction:"column",gutter:8,children:[(0,_.BX)(s.xv,{as:"h4",weight:"bold",children:[c.nickname,"\ub2d8\uacfc\uc758 \uba74\uc811"]}),(0,_.BX)(s.xv,{size:14,color:w.O.gray[6],children:[(0,b.Z)(new Date(n.start_datetime),"yyyy\ub144 MM\uc6d4 dd\uc77c HH\uc2dc mm\ubd84")," (",a,")"]})]}),(0,_.tZ)(s.Ki,{size:12}),(0,_.BX)(s.Kq,{direction:"column",gutter:8,children:[(0,_.BX)(s.xv,{size:14,children:["\uba74\uc811\uad00: ",i?"".concat(r.nickname,"(\ub098)"):c.nickname]}),(0,_.BX)(s.xv,{size:14,children:["\uc9c0\uc6d0\uc790: ",i?c.nickname:"".concat(null===r||void 0===r?void 0:r.nickname,"(\ub098)")]})]})]})})};var z={name:"1urdq9i",styles:"padding:0 24px"},C=function(){var e=function(){var e=(0,u.E)().me;return(0,o.useQuery)([null===e||void 0===e?void 0:e.id,"interviews","interviewer"],a.jo)}().data,n=function(){var e=(0,u.E)().me;return(0,o.useQuery)([null===e||void 0===e?void 0:e.id,"interviews","interviewee"],a.L7)}().data,t=(0,d.useMemo)((function(){if(null!=n&&null!=e)return[].concat((0,r.Z)(n),(0,r.Z)(e)).sort((function(e,n){return new Date(e.start_datetime).getTime()-new Date(n.start_datetime).getTime()}))}),[n,e]);return null==t?(0,_.tZ)(i.Z,{}):(0,_.BX)("div",{css:z,children:[(0,_.tZ)(c.Z,{upper:(0,_.tZ)(c.Z.Text2,{children:"\ud655\uc815\ub41c \uba74\uc811"})}),(0,_.tZ)(s.Ki,{size:20}),(0,_.tZ)(s.Kq,{direction:"column",align:"stretch",gutter:12,as:"ul",children:t.map((function(e){return(0,_.tZ)("li",{children:(0,_.tZ)(P,{interview:e})},e.id)}))})]})},N=t(3330);function D(){return(0,_.tZ)(N.Z,{children:(0,_.tZ)(C,{})})}},3210:function(e,n,t){"use strict";var r=t(2809),i=t(917),c=t(9353),u=t(5944);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=null!=e.onClick;return(0,u.tZ)(c.jX,{level:3,children:(0,u.tZ)("div",a({css:(0,i.iv)({borderRadius:14,boxSizing:"border-box",cursor:n?"pointer":"default",transition:"opacity 0.2s ease-in-out","&:hover":{opacity:n?.7:void 0}},"",""),role:n?"button":void 0},e))})}},9421:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(917),i=t(2209),c=t(1371),u=t(9711);var o,a=t(5944),s=(0,r.F4)(o||(o=(0,i.Z)(["\n  to {\n    transform: rotate(360deg);\n  }\n"]))),d=function(e){var n=e.size,t=void 0===n?20:n,i=e.borderWidth,o=void 0===i?3:i,d=e.color,v=void 0===d?c.O.gray[9]:d,l=function(e){var n,t,r=null!==(n=null===(t=e.trim().replace("#","").match(/[a-fA-F\d]{2}/g))||void 0===t?void 0:t.map((function(e){return parseInt(e,16)})))&&void 0!==n?n:[],i=(0,u.Z)(r,3);return{red:i[0],green:i[1],blue:i[2]}}(v),f=l.red,p=l.green,w=l.blue;return(0,a.tZ)("div",{css:(0,r.iv)({display:"inline-block",width:t,height:t,border:"".concat(o,"px solid rgba(").concat(f,", ").concat(p,", ").concat(w,", 0.3)"),borderTopColor:v,borderRadius:"50%",animation:"".concat(s," 1s ease-in-out infinite")},"","")})}},9230:function(e,n,t){"use strict";t.d(n,{SR:function(){return o},zk:function(){return a},Y:function(){return s},NQ:function(){return d},gZ:function(){return v},WB:function(){return l},hT:function(){return f},jo:function(){return p},L7:function(){return w},b8:function(){return h}});var r=t(266),i=t(809),c=t.n(i),u=t(90),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.body);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),a=function(e,n){return u.F.post("/interviews/".concat(e,"/feedbacks"),n)},s=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/".concat(n,"/feedbacks"));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(e,n){return u.F.post("/interviews/".concat(e,"/nps"),n)},v=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/".concat(n,"/nps"));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(e){return u.F.get("/users/".concat(e,"/interview_schedules"))},f=function(e){return u.F.put("/interviews/".concat(e,"/in_progress"),{})},p=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/mine/interviewers");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/interviews/mine/interviewees");case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.F.get("/auth/agora/token/".concat(n));case 2:return e.abrupt("return",e.sent.body);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1493:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviews",function(){return t(1794)}])}},function(e){e.O(0,[430,228,31,751,774,888,179],(function(){return n=1493,e(e.s=n);var n}));var n=e.O();_N_E=n}]);