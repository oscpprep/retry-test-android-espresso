var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(self.webpackChunklite=self.webpackChunklite||[]).push([[4586],{965:(e,n,t)=>{"use strict";t.d(n,{JP:()=>b,CP:()=>C});var r=t(59713),o=t.n(r),a=t(63038),l=t.n(a),i=t(28655),c=t.n(i),s=t(71439),u=t(46829),p=t(67294),d=t(25665);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(){var e=c()(["\n  mutation ClapMutation($targetPostId: ID!, $userId: ID!, $numClaps: Int!) {\n    clap(targetPostId: $targetPostId, userId: $userId, numClaps: $numClaps) {\n      viewerEdge {\n        ...ClapMutation_viewerEdge\n      }\n      ...ClapMutation_post\n    }\n  }\n  ","\n  ","\n"]);return v=function(){return e},e}function g(){var e=c()(["\n  fragment ClapMutation_viewerEdge on PostViewerEdge {\n    id\n    clapCount\n  }\n"]);return g=function(){return e},e}function E(){var e=c()(["\n  fragment ClapMutation_post on Post {\n    __typename\n    id\n    clapCount\n    ...MultiVoteCount_post\n  }\n  ","\n"]);return E=function(){return e},e}var b=(0,s.Ps)(E(),d.U),h=(0,s.Ps)(g()),x=(0,s.Ps)(v(),b,h),C=function(){var e=(0,u.useMutation)(x),n=l()(e,1)[0];return(0,p.useCallback)((function(e,t,r,o){return n({variables:{targetPostId:e.id,userId:t,numClaps:r},optimisticResponse:{clap:f(f({__typename:"Post"},e),{},{clapCount:e.clapCount+r,viewerEdge:{id:"post:".concat(e.id,"-viewer:").concat(t),clapCount:r}})},update:function(n,t){var a,l=null==t||null===(a=t.data)||void 0===a?void 0:a.clap;if(l){var i=n.readFragment({id:"Post:".concat(l.id),fragment:b,fragmentName:"ClapMutation_post"});n.writeFragment({id:"Post:".concat(l.id),fragment:b,fragmentName:"ClapMutation_post",data:f(f({},i),{},{clapCount:e.clapCount+r,viewerClapCount:((null==o?void 0:o.clapCount)||0)+r})})}}})}),[])}},25665:(e,n,t)=>{"use strict";t.d(n,{_:()=>se,U:()=>ue});var r=t(28655),o=t.n(r),a=t(59713),l=t.n(a),i=t(71439),c=t(23450),s=t.n(c),u=t(67294),p=t(67154),d=t.n(p),m=t(319),f=t.n(m),v=t(6479),g=t.n(v),E=t(87757),b=t.n(E),h=t(48926),x=t.n(h),C=t(63038),y=t.n(C),w=t(82492),O=t.n(w),P=t(80439),k=t(98281),I=t(31001),j=t(79296),D=t(42933),M=t(82318),S=t(77284),V=t(55099),_=t(85677),L=t(37278),R=t(98024),A=t(18579),F=t(67297);function $(){return($=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var N=u.createElement("g",{fillRule:"evenodd"},u.createElement("path",{d:"M7.94 1h-.89L7.5 2.9zM10.09 1.33l-.84-.3-.23 1.95zM5.73 1.04l-.84.3L5.97 3zM5.63 11.57a3043.52 3043.52 0 0 0-1.6-1.6C2.32 8.26 1.25 7.5 1.75 7c.25-.25.62-.3.93 0 .45.46 1.54 1.65 1.54 1.65a.69.69 0 0 0 .34.2c.17.04.36-.06.5-.2.14-.13.06-.47-.06-.6L2.94 5.98c-.29-.29-.39-.78-.08-1.09.3-.29.64-.14.9.12l2.1 2.15a.33.33 0 0 0 .24.1.42.42 0 0 0 .26-.12c.13-.12.2-.36.07-.49L5 5.2c-.56-.56-.6-.95-.36-1.2.35-.35.82-.24 1.45.48l2.8 2.95-.59-1.46s-.37-.97 0-1.17c.37-.2.74.33 1 .72l1.37 2.62a3.29 3.29 0 0 1-.57 4.05c-1.22 1.22-3.18.69-4.48-.6z"}),u.createElement("path",{d:"M11.37 4.73c-.26-.4-.7-.4-.98-.19-.19.15-.16.48-.15.7l1.18 2.07c.91 1.49 1.23 2.7.19 4.1.31-.14.4-.27.58-.49.65-.8 1.05-2.47.39-3.88a3.35 3.35 0 0 0-.03-.05l-1.18-2.26z"}));const T=function(e){return u.createElement("svg",$({width:15,height:15},e),N)};var z=t(27952);function U(){var e=o()(["\n  query PostVotersDialogQuery($postId: ID!, $pagingOptions: PagingOptions) {\n    post(id: $postId) {\n      id\n      title\n      clapCount\n      voterCount\n      voters(paging: $pagingOptions) {\n        items {\n          user {\n            id\n            name\n            bio\n            username\n            ...UserAvatar_user\n            ...UserFollowButton_user\n            ...userUrl_user\n          }\n          clapCount\n        }\n        pagingInfo {\n          next {\n            page\n          }\n        }\n      }\n      ...UserFollowButton_post\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return U=function(){return e},e}var B=function(e){return{position:"relative",bottom:"12px",borderRadius:"10px",color:e.backgroundColor,fill:e.backgroundColor,background:e.accentColor.fill.normal,textAlign:"center"}},W={left:"20px",padding:"0 6px"},H={left:"24px",padding:"0 2px"},K=function(e){var n=e.clapCount,t=(0,A.n)({name:"detail",color:"DARKER",scale:"S"}),r=n?[t,B,W]:[B,H];return u.createElement(j.h,null,(function(e){return u.createElement("span",{className:e(r)},n?"+".concat(n):u.createElement(T,null))}))},Q=function(e){var n=e.user,t=e.clapCount,r=e.post,o=(0,F.v9)((function(e){return e.config.authDomain})),a=n.username,l=n.name,i=n.bio,c=void 0===i?"":i;return l&&a?u.createElement(D.x,{padding:"12px 0"},u.createElement(D.x,{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},u.createElement(D.x,{display:"flex",alignItems:"flex-start"},u.createElement(D.x,{marginRight:"20px"},u.createElement(k.Yt,{user:n,scale:"S"}),u.createElement(K,{clapCount:t})),u.createElement(D.x,{display:"flex",flexDirection:"column",alignItems:"flex-start"},u.createElement(M.r,{href:(0,z.AWr)(n,o)},u.createElement(L.X6,{scale:"XS"},l," ")),u.createElement(R.F,{scale:"S"},c))),u.createElement(D.x,{marginLeft:"48px"},u.createElement(I.Bv,{buttonSize:"SMALL",post:r,user:n,susiEntry:"follow_list"})))):null},X=function(e){var n=e.isVisible,t=e.hide,r=e.post,o=e.fetchMore,a=u.useState(!1),l=y()(a,2),i=l[0],c=l[1],s=u.useCallback(x()(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||i){e.next=8;break}return c(!0),e.prev=2,e.next=5,o();case 5:return e.prev=5,c(!1),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[2,,5,8]])}))),[o,i,c]);if(!r)return null;var p=r.title,d=r.voters,m=r.clapCount,f=r.voterCount;return u.createElement(S.V,{isVisible:n,hide:t,withAnimation:!0},u.createElement(D.x,{maxWidth:"550px",sm:{paddingTop:"0"},paddingTop:"88px"},u.createElement(D.x,{display:"flex",flexDirection:"column",marginBottom:"24px",textAlign:"center"},u.createElement(L.X6,{scale:"S"},m," claps from ",f," ",1===f?"person":"people",' for "',p,'"')),d&&d.items.map((function(e){var n=e.user,t=e.clapCount;return n&&u.createElement(Q,{user:n,clapCount:t,post:r,key:n.id})})),o&&u.createElement(D.x,{display:"flex",flexDirection:"column",margin:"24px",alignItems:"center"},u.createElement(V.z,{buttonStyle:"SOCIAL",size:"SMALL",onClick:s},"Show more claps"))))};function q(e){var n=e.postId,t=e.isVisible,r=g()(e,["postId","isVisible"]);return t?u.createElement(P.AE,{ssr:!1,query:Y,variables:{postId:n,pagingOptions:{limit:10}}},(function(e){var n,o=e.data,a=(o=void 0===o?{}:o).post,l=e.loading,i=e.error,c=e.fetchMore;if(l)return u.createElement(_.T,null);if(i||null==a||!a.voters)return null;var s=a.voters.pagingInfo&&a.voters.pagingInfo.next;if(s){var p={page:s.page};n=function(){return c({variables:{pagingOptions:p},updateQuery:function(e,n){var t,r,o,a,l,i,c=n.fetchMoreResult;return O()({},c,{post:{voters:{items:[].concat(f()(null!==(t=null==e||null===(r=e.post)||void 0===r||null===(o=r.voters)||void 0===o?void 0:o.items)&&void 0!==t?t:[]),f()(null!==(a=null==c||null===(l=c.post)||void 0===l||null===(i=l.voters)||void 0===i?void 0:i.items)&&void 0!==a?a:[]))}}})}})}}return u.createElement(X,d()({isVisible:t,post:a,loading:l,fetchMore:n},r))})):null}var Y=(0,i.Ps)(U(),k.WQ,I.sj,I.S$,z.$mN),G=t(1932),J=t(27390),Z=t(11642);function ee(){var e=o()(["\n  fragment PostVotersNetwork_post on Post {\n    id\n    voterCount\n    recommenders {\n      name\n    }\n  }\n"]);return ee=function(){return e},e}var ne=function(e){var n,t,r=e.post,o=e.showVoters,a=(0,G.T)(r.id).viewerEdge,l=null!==(n=null===(t=r.recommenders)||void 0===t?void 0:t.map((function(e){return e.name})).filter(Z.b))&&void 0!==n?n:[],i=(null!=a&&a.clapCount?["you"]:[]).concat(l).slice(0,2);if(!i.length)return null;var c=(r.voterCount||0)-i.length,p=i.join(c>0?", ":" and "),d="".concat(i.length>1?",":""," and"),m=s()("other",c),f=c>0?"".concat(d," ").concat((0,J.rR)(c)," ").concat(m):"";return u.createElement(D.x,{sm:{display:"none"}},u.createElement(M.r,{onClick:o},u.createElement(R.F,{scale:"S"},"Applause from ".concat(p).concat(f))))},te=(0,i.Ps)(ee()),re=t(71542),oe=t(19464),ae=t(6688);function le(){var e=o()(["\n  fragment MultiVoteCount_post on Post {\n    id\n    ...PostVotersNetwork_post\n  }\n  ","\n"]);return le=function(){return e},e}function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function se(e){var n=e.clapCount,t=e.hasLabel,r=void 0!==t&&t,o=e.showFullNumber,a=void 0!==o&&o,l=e.post,i=e.shouldShowNetwork,c=e.hasDialog,p=void 0!==c&&c,d=e.shouldShowResponsiveLabelText,m=void 0!==d&&d,f=e.shouldHideClapsText,v=void 0!==f&&f,g=l.id;if(!(n>0))return null;var E=r&&!v?s()("clap",n):"",b=function(e){var n=e.showVoters;return i&&n?u.createElement(ne,{showVoters:n,post:l}):null},h=a?(0,J.rR)(n):(0,J.pY)(n),x=function(e){var n=e.showVoters,t=(0,ae.I)();return u.createElement("div",{className:t(ce(ce({},m||r?{position:"relative",top:"1px"}:{}),{},{"& button":{textAlign:"left"}}))},u.createElement(R.F,{color:m||r||v?"DARKER":"LIGHTER",scale:"M"},m?u.createElement(u.Fragment,null,n?u.createElement(M.r,{onClick:n},h,u.createElement(re.s,null," ",E)):h,u.createElement(re.s,null,u.createElement(b,{showVoters:n}))):u.createElement(u.Fragment,null,n?u.createElement(M.r,{onClick:n},h," ",E):h,u.createElement(b,{showVoters:n}))))};return p&&g?u.createElement(oe.B,null,(function(e){var n=e.isVisible,t=e.show,r=e.hide;return u.createElement(u.Fragment,null,u.createElement(x,{showVoters:t}),u.createElement(q,{isVisible:n,hide:r,postId:g}))})):u.createElement(x,null)}var ue=(0,i.Ps)(le(),te)},71542:(e,n,t)=>{"use strict";t.d(n,{s:()=>s,e:()=>u});var r=t(67154),o=t.n(r),a=t(6479),l=t.n(a),i=t(67294),c=t(42933),s=function(e){var n=e.xs,t=e.sm,r=e.children,a=l()(e,["xs","sm","children"]);return i.createElement(c.x,o()({xs:{display:"none"},sm:{display:n?"inline-block":"none"},md:{display:n||t?"inline-block":"none"},lg:{display:"inline-block"},xl:{display:"inline-block"},tag:"span"},a),r)},u=function(e){var n=e.xs,t=e.sm,r=e.children,a=l()(e,["xs","sm","children"]);return i.createElement(c.x,o()({xs:{display:"inline-block"},sm:{display:n?"none":"inline-block"},md:{display:n||t?"none":"inline-block"},lg:{display:"none"},xl:{display:"none"},tag:"span"},a),r)}},33914:(e,n,t)=>{"use strict";t.d(n,{_:()=>u});var r=t(67294),o=t(42933),a=t(52862),l=t(18579),i=t(24438),c=t(6688),s=t(67122);function u(e){var n=e.children,t=e.tooltipText,u=e.isVisible,p=void 0===u||u,d=e.onMouseLeave,m=e.placement,f=void 0===m?"top":m,v=e.maxWidth,g=e.targetDistance,E=(0,c.I)(),b=(0,l.n)({name:"detail",scale:"S",color:"DARKER"});return r.createElement(a.$,{darkTheme:!0,hideOnClick:!0,isVisible:p,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:f,popoverRenderFn:function(){return r.createElement(o.x,{padding:"8px",maxWidth:v?(0,i.a)(v):void 0,textAlign:"center"},r.createElement("span",{className:E([b,{color:s.ix,whiteSpace:v?void 0:"nowrap"}])},t))},role:"tooltip",targetDistance:g,onMouseLeave:d},n)}},55573:(e,n,t)=>{"use strict";function r(e,n,t){return!!n&&e[n.id]||{clapCount:(null==n?void 0:n.clapCount)||0,viewerClapCount:(null==t?void 0:t.clapCount)||0,viewerHasClappedSinceFetch:!1}}t.d(n,{l:()=>r})}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4586.547ab352.chunk.js.map

}
/*
     FILE ARCHIVED ON 22:50:37 Jun 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:20:31 Feb 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.115
  exclusion.robots.policy: 0.096
  cdx.remote: 0.167
  esindex: 0.02
  LoadShardBlock: 327.305 (6)
  PetaboxLoader3.datanode: 349.607 (7)
  load_resource: 111.558
  PetaboxLoader3.resolve: 63.816
*/