"use strict";(self.webpackChunkgoit_test=self.webpackChunkgoit_test||[]).push([[889],{1237:function(e,t,r){r.r(t),r.d(t,{default:function(){return ae}});var n,i,a=r(9439),s=r(2791),l=r(176),o=r(4165),u=r(3433),c=r(5861),p=r(1933),f=r(1243),C="all",d="follow",x="following",g=function(e){var t=e.baseNum,r=void 0===t?0:t,n=e.toSubtract,i=void 0===n?0:n;return Number(r)-Number(i)},h=function(e){var t=e.baseNum,r=void 0===t?0:t,n=e.toAdd,i=void 0===n?0:n;return Number(r)+Number(i)},v=C,b=d,w=x,m=f.Z.create({baseURL:"https://6454b79ba74f994b3346ffc7.mockapi.io"}),y=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t){var r,n,i,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.page,n=t.filter,i=(s=n)===v?null:s!==b&&(s===w||void 0),e.prev=2,e.next=5,m.get("/users",{params:{page:r,limit:3,isFollowing:i}});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}var s}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t){var r,n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.body,e.prev=1,e.next=4,m.put("/users/".concat(r),n);case 4:return i=e.sent,e.abrupt("return",i.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.page,r=e.filter,n=(0,p.useQueryClient)();return(0,p.useMutation)(j,{onMutate:function(){var e=(0,c.Z)((0,o.Z)().mark((function e(i){var a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.body,e.next=3,n.cancelQueries(["users",{page:t,filter:r}]);case 3:return s=n.getQueryData(["users",{page:t,filter:r}]),n.setQueryData(["users",{page:t,filter:r}],(function(e){return[].concat((0,u.Z)(e),[a])})),e.abrupt("return",{previousUsers:s,newData:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onError:function(e,i,a){n.setQueryData(["users",{filter:r,page:t}],a.previousUsers)},onSettled:function(){n.invalidateQueries(["users",{page:t,filter:r}])}})},Z=r(1413),F=r(4925),k=r(2347),E=r(3541),L=r(2899),O=r(3303),H=r(4087),V=r(182),M=r(4224),D=r(2503),R=(0,D.m)("div",{baseStyle:{backgroundColor:"brand.main",boxShadow:"0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF",borderRadius:"100%",width:"80px",height:"80px",display:"flex",alignItems:"center",justifyContent:"center"}}),B=(0,D.m)("div",{baseStyle:{alignSelf:"center",height:"8px",width:"calc((380px - 80px) / 2)",backgroundColor:"brand.main",boxShadow:" 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF"}}),N=["title","titleId"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}function Q(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function z(e,t){var r=e.title,a=e.titleId,l=Q(e,N);return s.createElement("svg",I({width:76,height:22,viewBox:"0 0 76 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),r?s.createElement("title",{id:a},r):null,n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H33.5019L42.3182 11L33.5019 22H0V0ZM15.1088 9.8781C15.0565 9.83654 15.0048 9.79507 14.9535 9.75385C14.8238 9.6497 14.6962 9.54717 14.5649 9.44886C14.2066 9.17794 13.8174 8.96214 13.3711 8.86598C12.8783 8.75925 12.3808 8.72055 11.8893 8.86832C11.1882 9.07825 10.7002 9.53565 10.3777 10.1725C10.1099 10.7026 10.0385 11.2644 10.1087 11.8484C10.1647 12.3058 10.3134 12.7304 10.586 13.1068C11.0049 13.685 11.5762 14.0193 12.2904 14.1072C12.9331 14.187 13.5556 14.1072 14.1447 13.8281C14.3459 13.7325 14.3459 13.7308 14.3459 13.5107V13.5068C14.3459 13.4531 14.346 13.3997 14.3461 13.3462C14.3464 13.2395 14.3466 13.133 14.3459 13.0259C14.3457 13.0044 14.346 12.9861 14.3463 12.9704C14.347 12.9258 14.3473 12.903 14.3359 12.8914C14.3238 12.8792 14.2986 12.8795 14.247 12.8801C14.2341 12.8803 14.2195 12.8805 14.203 12.8805H12.3344C12.3177 12.8805 12.3029 12.8806 12.2898 12.8808C12.2375 12.8814 12.212 12.8817 12.1998 12.8694C12.1882 12.8576 12.1887 12.8345 12.1897 12.7892C12.19 12.7741 12.1904 12.7566 12.1904 12.7362C12.1896 12.2436 12.1899 11.7511 12.1901 11.2585L12.1901 11.2539C12.1903 11.0092 12.1904 10.7644 12.1904 10.5196C12.1904 10.5107 12.1906 10.5016 12.1909 10.4925C12.1914 10.4741 12.192 10.4556 12.1904 10.4375C12.1868 10.3941 12.2023 10.3707 12.2499 10.3754C12.2682 10.3769 12.287 10.3764 12.3057 10.3759L12.3219 10.3755L12.3332 10.3754H17.0571C17.0881 10.3754 17.1143 10.3812 17.1095 10.4199C17.1074 10.4432 17.1222 10.4589 17.1374 10.4749C17.1558 10.4943 17.1747 10.5142 17.1643 10.5489C17.1552 10.5789 17.1575 10.6115 17.1598 10.6443C17.1609 10.6591 17.1619 10.6739 17.1619 10.6885L17.1618 11.5304C17.1616 12.6528 17.1614 13.7756 17.1643 14.8977C17.1643 14.9892 17.1357 15.0466 17.0655 15.1041C16.1859 15.8254 15.1969 16.3297 14.0781 16.5795C13.4163 16.7273 12.7462 16.7683 12.069 16.7144C11.2692 16.651 10.5086 16.4481 9.8064 16.0635C8.51741 15.3574 7.70568 14.2855 7.33196 12.8863C7.16771 12.2683 7.11772 11.6385 7.17009 11.0028C7.36648 8.64549 9.03991 6.80654 11.2823 6.2952C11.9226 6.1486 12.5689 6.12749 13.2211 6.17088C13.721 6.20489 14.2126 6.2823 14.6934 6.42303C15.4135 6.63531 16.049 7.00122 16.6275 7.47034C16.6953 7.52546 16.762 7.58059 16.8274 7.63688C16.9108 7.70725 16.9131 7.74712 16.8405 7.83391C16.4763 8.26785 16.112 8.70081 15.7466 9.13357L15.7458 9.13444C15.564 9.35105 15.3822 9.56766 15.1992 9.78311C15.1945 9.7891 15.1899 9.7953 15.1851 9.80159C15.165 9.82856 15.1435 9.85718 15.1088 9.8781ZM28.1735 7.62632C27.0725 6.63413 25.7609 6.16149 24.4053 6.15093C23.7792 6.15211 23.3115 6.20254 22.8151 6.33037C21.375 6.70215 20.2479 7.49965 19.4992 8.77331C18.7304 10.0798 18.5744 11.4813 19.0041 12.9227C19.4849 14.5341 20.5097 15.7069 22.0951 16.3602C23.3127 16.8609 24.5743 16.9278 25.8466 16.5971C27.3248 16.2136 28.4579 15.3656 29.2006 14.0427C29.8266 12.9274 29.9945 11.7311 29.7612 10.4821C29.5517 9.35971 29.028 8.39802 28.1735 7.62632ZM24.0839 8.83313C23.34 8.84955 22.5735 9.26941 22.0939 10.1455C21.7678 10.7401 21.6916 11.3816 21.8154 12.0443C21.913 12.5673 22.1427 13.0306 22.5235 13.4106C23.1175 14.004 23.8447 14.2374 24.6778 14.1424C25.5395 14.045 26.1799 13.6088 26.5905 12.8593C26.9392 12.2213 27.0118 11.5388 26.8488 10.8363C26.5798 9.67051 25.5931 8.82961 24.0839 8.83313Z",fill:"white",fillOpacity:.3})),i||(i=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.3182 0H76V22H42.3182V0ZM53.6266 11.2735V6.29027C53.6266 6.27294 53.6264 6.25775 53.6262 6.24444C53.6255 6.19689 53.6251 6.1733 53.637 6.16178C53.6487 6.15043 53.6722 6.15078 53.7189 6.15147C53.727 6.15159 53.7358 6.15172 53.7454 6.1518C53.7511 6.15185 53.7572 6.15188 53.7635 6.15188C54.3317 6.1511 54.9004 6.15136 55.4689 6.15162C55.7531 6.15175 56.0373 6.15188 56.3213 6.15188C56.3281 6.15188 56.3349 6.15214 56.3416 6.15241C56.355 6.15293 56.3681 6.15344 56.3808 6.15188C56.4451 6.14484 56.4653 6.17534 56.4593 6.23398C56.4578 6.24961 56.4583 6.26525 56.4588 6.28089L56.4592 6.2929L56.4593 6.30434V16.2591C56.4593 16.2694 56.4594 16.279 56.4596 16.288C56.4597 16.2976 56.4599 16.3065 56.4601 16.3147C56.4611 16.3616 56.4616 16.3857 56.4496 16.3978C56.4371 16.4105 56.4107 16.4102 56.3567 16.4096C56.3428 16.4094 56.3271 16.4092 56.3094 16.4092C55.7467 16.41 55.184 16.4097 54.6217 16.4095H54.6194C54.338 16.4093 54.0566 16.4092 53.7754 16.4092C53.7675 16.4092 53.7596 16.4089 53.7516 16.4087C53.7358 16.4081 53.7199 16.4076 53.704 16.4092C53.6374 16.4186 53.6219 16.3846 53.6266 16.3271C53.6282 16.3068 53.6277 16.286 53.6272 16.2651C53.6269 16.2545 53.6266 16.2439 53.6266 16.2333V11.2735ZM67.7353 6.15222H63.5101H63.5086C62.1011 6.15222 60.6936 6.15222 59.2872 6.15105C59.2765 6.15105 59.2658 6.15118 59.2553 6.15131C59.2342 6.15157 59.2134 6.15183 59.192 6.15105C59.1444 6.1487 59.1277 6.17099 59.1313 6.21438C59.1321 6.22763 59.1318 6.24036 59.1316 6.25326C59.1314 6.25977 59.1313 6.26633 59.1313 6.27302V8.65381C59.1313 8.72194 59.129 8.75306 59.1436 8.76713C59.1585 8.78139 59.1909 8.77812 59.261 8.77812H61.9152C62.0015 8.77812 62.0444 8.77812 62.0656 8.79911C62.0866 8.81979 62.0866 8.86083 62.0866 8.94232V16.2829C62.0866 16.3505 62.0824 16.3819 62.0964 16.3963C62.1103 16.4107 62.1422 16.4084 62.2139 16.4084H62.2496H64.761C64.8406 16.4084 64.8802 16.4084 64.8998 16.389C64.9193 16.3698 64.9193 16.3317 64.9193 16.2559V8.91534C64.9193 8.84117 64.9146 8.80714 64.9297 8.79165C64.9449 8.77604 64.9803 8.7793 65.0609 8.7793H67.7627C67.8793 8.7793 67.8793 8.7793 67.8805 8.66553V8.63035V6.29648C67.8805 6.21469 67.885 6.17866 67.8689 6.16306C67.8529 6.14756 67.8166 6.15222 67.7353 6.15222Z",fill:"white",fillOpacity:.3})))}var P=s.forwardRef(z),A=(r.p,r.p+"static/media/cardBgImage.86562350dcaa714a1442.png"),T=r(184);function _(e){var t=e.user,r=e.page,n=e.filter,i=t.followers,a=t.tweets,s=t.avatar,o=t.isFollowing,u=S({page:r,filter:n}),c=u.mutate,p=u.isLoading;return(0,T.jsx)(E.HC,{children:(0,T.jsx)(L.Z,{layerStyle:"card",width:"380px",height:"460px",children:(0,T.jsxs)(O.e,{display:"flex",flexDirection:"column",justifyContent:"end",alignItems:"center",padding:"0px",children:[(0,T.jsx)(H.xu,{pos:"absolute",top:"20px",left:"20px",children:(0,T.jsx)(P,{})}),(0,T.jsx)(H.xu,{bgImage:"url(".concat(A,")"),width:"308px",height:"168px"}),(0,T.jsxs)(l.k,{mb:"26px",children:[(0,T.jsx)(B,{}),(0,T.jsx)(R,{children:(0,T.jsx)(V.E,{src:s,alt:"user's avatar",boxSize:"62px",borderRadius:"50%"})}),(0,T.jsx)(B,{})]}),(0,T.jsxs)(k.x,{textStyle:"cardText",mb:"16px",children:["followers ",i.toLocaleString()]}),(0,T.jsxs)(k.x,{textStyle:"cardText",mb:"26px",children:["tweets ",a.toLocaleString()]}),(0,T.jsx)(M.z,{isLoading:p,isDisabled:p,textStyle:"btnText",variant:"followBtn",layerStyle:o?"active":"inactive",_hover:{transform:"scale(1.05)"},onClick:function(){return function(e){var t=e.isFollowing,r=e.id;c(t?{id:r,body:(0,Z.Z)((0,Z.Z)({},e),{},{followers:g({baseNum:i,toSubtract:1}),isFollowing:!1})}:{id:r,body:(0,Z.Z)((0,Z.Z)({},e),{},{followers:h({baseNum:i,toAdd:1}),isFollowing:!0})})}(t)},children:o?"Following":"Follow"})]})})})}var U=["users","isFetching"];function W(e){var t=e.props,r=t.users,n=(t.isFetching,(0,F.Z)(t,U));return 0===r.length?(0,T.jsx)(k.x,{fontWeight:600,fontSize:"48px",mb:"212px",mt:"212px",children:"The list is Empty"}):(0,T.jsx)(E.aV,{mb:"36px",children:(0,T.jsx)(l.k,{gridGap:"48px",justifyContent:"center",flexWrap:"wrap",children:r.map((function(e){return(0,T.jsx)(_,(0,Z.Z)({user:e},n),e.id)}))})})}var G=r(5192),q=C,J=d,K=x,X=function(e){var t=e.props,r=t.onClick,n=t.isFetching,i=t.filter;return(0,T.jsx)(H.xu,{mb:"36px",children:(0,T.jsxs)(G.P,{size:"md",onClick:r,isDisabled:n,children:[(0,T.jsx)("option",{value:"all",default:i===q,children:"All"}),(0,T.jsx)("option",{value:"follow",default:i===J,children:"Follow"}),(0,T.jsx)("option",{value:"following",default:i===K,children:"Following"})]})})},Y=function(e){var t=e.props,r=t.onPagination,n=t.isFetching,i=t.data,a=t.isSuccess;return i.length<3&&a?(0,T.jsx)(k.x,{children:"That's all what we've got!"}):(0,T.jsx)(M.z,{name:"prev",layerStyle:"inactive",_hover:{transform:"scale(1.05)"},onClick:r,isLoading:n,isDisabled:n,children:"Load More"})};var $=r(3466),ee=r(1087),te=function(){return(0,T.jsx)($.r,{as:ee.rU,alignSelf:"start",pl:"40px",to:"/",children:(0,T.jsx)(M.z,{name:"prev",layerStyle:"inactive",_hover:{transform:"scale(1.05)"},children:"Back"})})},re=C,ne=d,ie=x,ae=function(){var e=(0,s.useState)(1),t=(0,a.Z)(e,2),r=t[0],n=t[1],i=(0,s.useState)(re),o=(0,a.Z)(i,2),u=o[0],c=o[1],f=function(e){var t=e.page,r=e.filter;return(0,p.useQuery)(["users",{filter:r,page:t}],(function(){return y({page:t,filter:r})}))}({page:r,filter:u}),C=f.data,d=void 0===C?[]:C,x=f.isFetching,g=f.isSuccess,h=(0,s.useState)([]),v=(0,a.Z)(h,2),b=v[0],w=void 0===b?[]:b,m=v[1],j=(0,s.useRef)({filter:u,page:r});(0,s.useEffect)((function(){1===r&&m(d),m((function(e){return function(e){var t=e.key,r=e.arrays,n={};return r.forEach((function(e){e.forEach((function(e){n[e[t]]=Object.assign({},n[e[t]],e)}))})),Object.values(n)}({key:"id",arrays:[e,d]})}))}),[d,u,r]),(0,s.useEffect)((function(){n(1)}),[u]);var S={onPagination:function(){n((function(e){return e+1})),j.current.page=r},isFetching:x,data:d,isSuccess:g},Z={users:w,page:r,filter:u,isFetching:x},F={onClick:function(e){var t=e.target.value;switch(j.current.filter=u,t){case ne:c(ne);break;case ie:c(ie);break;default:c(re)}},filter:u,isFetching:x};return(0,T.jsxs)(l.k,{flexDir:"column",justify:"center",align:"center",children:[(0,T.jsx)(te,{}),(0,T.jsx)(X,{props:F}),(0,T.jsx)(W,{props:Z}),(0,T.jsx)(Y,{props:S})]})}}}]);
//# sourceMappingURL=889.10b648cc.chunk.js.map