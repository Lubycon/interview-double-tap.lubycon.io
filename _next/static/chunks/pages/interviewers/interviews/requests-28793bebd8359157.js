(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{5485:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(3330),i=r(2809),o=r(266),u=r(9711),c=r(809),s=r.n(c),a=r(5641),l=r(3274),p=r(5340),v=r(1163),f=r(7294),d=r(90),y=r(5731);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){var r=function(e){var t,r,n,i,o,u=e.questions;return{position:null===(t=(0,y.j)(u,"position"))||void 0===t?void 0:t.value,tech_stack:null===(r=(0,y.j)(u,"techStack"))||void 0===r?void 0:r.value,current_company:null===(n=(0,y.j)(u,"currentCompany"))||void 0===n?void 0:n.value,target_company:null===(i=(0,y.j)(u,"targetCompany"))||void 0===i?void 0:i.value,interview_date:null===(o=(0,y.j)(u,"interviewDate"))||void 0===o?void 0:o.value}}(t);return d.F.post("/interview/requests",{interview_request:b({interviewer_id:e},r)})}var O=r(2132),j=r(3675);var g=r(917),m=r(3967),_=r(7951),P=r(1371),Z=r(9353),q=r(5944);var k={name:"1efi8gv",styles:"font-weight:bold"},x={name:"1efi8gv",styles:"font-weight:bold"},N=function(e){var t=e.show;return(0,q.BX)(m.Z,{show:t,children:[(0,q.tZ)(_.Z,{lower:(0,q.tZ)(_.Z.Text2,{children:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ud655\uc778\ud574\uc8fc\uc138\uc694!"})}),(0,q.tZ)(Z.Ki,{size:20}),(0,q.BX)("p",{css:(0,g.iv)({color:P.O.gray[9],lineHeight:1.3},"",""),children:["\ub354\ube14\ud0ed \uc11c\ube44\uc2a4 \uc774\uc6a9\ub8cc\ub294 ",(0,q.tZ)("strong",{css:k,children:"\uba74\uc811 1\ud68c \ub2f9 5\ub9cc\uc6d0"}),"\uc774\uba70, \uba74\uc811\uc774 \ubaa8\ub450 \uc885\ub8cc\ub41c \uc774\ud6c4\uc5d0 \ub354\ube14\ud0ed\uc774 \uc548\ub0b4\ub4dc\ub9ac\ub294 \uacc4\uc88c\ub85c \uc785\uae08\ud574\uc8fc\uc2dc\uba74 \ub3fc\uc694."]}),(0,q.tZ)(Z.Ki,{size:6}),(0,q.BX)("p",{css:(0,g.iv)({color:P.O.gray[9],lineHeight:1.3},"",""),children:["\uac00\uaca9 \uc815\ucc45\uc744 \ud655\uc778\ud558\uc168\ub2e4\uba74, ",(0,q.tZ)("strong",{css:x,children:"\uc81c\ucd9c\ud558\uae30"})," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc9c0\uc6d0\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694!"]})]})},D=r(8767),S=r(8584);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){return e.reduce((function(e,t){return C(C({},e),{},(0,i.Z)({},t.question,t.value))}),{})},T=function(){var e=(0,a.Wd)("interviewerId"),t=(0,D.useQuery)(["interviewer",e],(function(){return null==e?Promise.resolve(null):(0,S.S1)(Number(e))})).data,r=function(){var e,t=(0,j.$)(),r=t.data;if(!t.isLoading)return{questions:[{fieldName:"position",question:"\uc9c0\uc6d0\ud558\uace0\uc790 \ud558\ub294\n\ud3ec\uc9c0\uc158\uc744 \uc54c\ub824\uc8fc\uc138\uc694",type:"select",value:"",options:null!==(e=null===r||void 0===r?void 0:r.body)&&void 0!==e?e:[],required:!0},{fieldName:"techStack",question:"\uc8fc\ub85c \uc0ac\uc6a9\ud558\uc2dc\ub294\n\uc5b8\uc5b4\ub098 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc54c\ub824\uc8fc\uc138\uc694",placeholder:"ex) React, TypeScript",type:"text",value:"",required:!0},{fieldName:"currentCompany",question:"\ud604\uc7ac \uc5b4\ub5a4 \ud68c\uc0ac\uc5d0 \ub2e4\ub2c8\uace0 \uc788\ub098\uc694?",description:"\uc9c0\uc6d0\uc790\ub2d8\uacfc \uac19\uc740 \ud68c\uc0ac\uc5d0 \ub2e4\ub2c8\uace0 \uc788\ub294 \uba74\uc811\uad00\uc740 \ub9e4\uce6d\uc5d0\uc11c \uc81c\uc678\ud574\ub4dc\ub824\uc694.\n\ud68c\uc0ac\ub97c \ub2e4\ub2c8\uace0 \uc788\uc9c0 \uc54a\ub2e4\uba74 \ub2e4\uc74c\uc73c\ub85c \ub118\uc5b4\uac00\uc8fc\uc138\uc694",type:"text",value:"",required:!0},{fieldName:"targetCompany",question:"\uad00\uc2ec\uc788\ub294 \ud68c\uc0ac\uac00 \uc788\ub2e4\uba74\n\uc54c\ub824\uc8fc\uc138\uc694",description:"\uc790\uc720\ub86d\uac8c \uc801\uc5b4\uc8fc\uc2dc\ub418, \uc5c6\ub2e4\uba74 \ubb34\uc2dc\ud558\uace0 \ub2e4\uc74c\uc73c\ub85c \ub118\uc5b4\uac00\uc8fc\uc138\uc694",placeholder:"ex) \ub124\uc774\ubc84, \ub2f9\uadfc\ub9c8\ucf13, \ud1a0\uc2a4",type:"text",value:""},{fieldName:"interviewDate",question:"\uba74\uc811\uc744 \ud76c\ub9dd\ud558\ub294 \ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \uc815\ud574\uc8fc\uc138\uc694",type:"datetime",value:"",required:!0}]}}(),n=(0,a.zj)(),i=(0,u.Z)(n,3),c=i[0],d=i[1],y=i[2],w=(0,v.useRouter)(),b=function(){var e=(0,o.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}return e.abrupt("return");case 2:return d(),p.tj.click("interviewee_apply",C({},X(r.questions))),e.prev=4,e.next=7,h(t.id,r);case 7:w.push("/interviewers/interviews/requests/finish"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),alert("\uc9c0\uc6d0\uc11c \uc81c\ucd9c\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694. \ubb38\uc81c\uac00 \uacc4\uc18d \ubc1c\uc0dd\ud55c\ub2e4\uba74 help@double-tap.io\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694.");case 13:return e.prev=13,y(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[4,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){var e=(0,O.dD)(location.search);p.tj.view(C({},e))}),[]),null==r?null:(0,q.tZ)(l.Z,{data:r,outro:(0,q.tZ)(N,{show:!0}),loading:c,onSubmit:b,onNextStep:function(e,t,r){p.tj.click("next_step",C({from:e,to:t},X(r.questions)))},onPrevStep:function(e,t,r){p.tj.click("prev_step",C({from:e,to:t},X(r.questions)))}})};function z(){return(0,q.tZ)(n.Z,{children:(0,q.tZ)(T,{})})}},3128:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviewers/interviews/requests",function(){return r(5485)}])}},function(e){e.O(0,[556,486,475,31,104,348,774,888,179],(function(){return t=3128,e(e.s=t);var t}));var t=e.O();_N_E=t}]);