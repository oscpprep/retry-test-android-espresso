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

(self.webpackChunklite=self.webpackChunklite||[]).push([[5064],{28859:(e,t,r)=>{"use strict";r.d(t,{u6:()=>c,Am:()=>u,TA:()=>l});var n=r(63038),a=r.n(n),i=r(67294),o={updateWatchedBounds:function(){},watchedBounds:new Map},c=i.createContext(o),u=function(e){var t=new Map,r=i.useState(t),n=a()(r,2),o=n[0],u=n[1],l={offset:{left:0,right:0,top:0,bottom:0}},s={watchedBounds:o,updateWatchedBounds:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;u((function(n){var a=new Map(n);return a.set(e,{ref:t,opts:r}),a}))}};return i.createElement(c.Provider,{value:s},e.children)},l=function(e){var t=e.children,r=e.className,n=e.name,a=e.type,o=e.offset,u=i.useContext(c).updateWatchedBounds,l=i.useRef(null);return i.useEffect((function(){u&&u(n,l,{type:a,offset:o})}),[]),i.createElement("div",{className:r,ref:l},t)}},7647:(e,t,r)=>{"use strict";r.d(t,{U:()=>a,R:()=>i});var n=r(67294),a=n.createContext(!1),i=function(e){var t=e.children;return n.createElement(a.Provider,{value:!0},t)}},51736:(e,t,r)=>{"use strict";r.d(t,{ph:()=>qe,Jj:()=>He,_V:()=>Me});var n=r(28655),a=r.n(n),i=r(34575),o=r.n(i),c=r(93913),u=r.n(c),l=r(2205),s=r.n(l),h=r(78585),p=r.n(h),d=r(29754),g=r.n(d),f=r(71439),m=r(67294),v=r(28859),E=r(59713),x=r.n(E),y=r(63038),S=r.n(y),b=r(12291),T=r(3011),w=r(93340),R=r(25309),P=r(319),O=r.n(P),k=r(18579),_=r(24438),I=r(6688),W=r(80637),C=function(e){return function(t){return x()({marginTop:"10px",textAlign:e,maxWidth:"".concat((0,_.G)(t,8,!0),"px"),marginLeft:"left"===e?"0":"auto",marginRight:"auto"},W.lg(t),{marginLeft:"auto",textAlign:"center"})}},N=function(e){return function(){var t=e&&100*e;return{width:"".concat(t,"%"),position:"relative",left:"calc(".concat(100-t/2,"% - 8px)"),transform:"translateX(-50%)"}}},L=m.forwardRef((function(e,t){var r=e.children,n=e.richTextStyle,a=e.textAlign,i=void 0===a?"center":a,o=e.extendLeftRatio,c=(0,I.I)(),u=(0,k.n)({name:"detail",scale:"CARD"===n||"SHORTFORM_CARD"===n?"S":"M",color:"LIGHTER"});return m.createElement("figcaption",{className:c([C(i),u].concat(O()(o?[N(o)]:[]))),ref:t},r)}));function q(e){var t=e.children,r=e.figCaption,n=e.className,a=e.figureRef;return m.createElement("figure",{className:n,ref:a},t,r)}var H=r(67154),M=r.n(H),A=r(27108),B=r(41331),j=r(53006),U=function(e){return{backgroundColor:e.baseColor.background.normal}},F=function(){return{width:"1px",minWidth:"100%","*width":"100%"}},D=(0,b.$j)((function(e){return{isAmp:e.config.isAmp}}))((function(e){var t,r=e.src,n=e.title,a=e.height,i=e.width,o=e.allowFullScreen,c=e.frameBorder,u=e.thumbnailUrl,l=e.rules,s=e.placeholderRef,h=e.iframeRef,p=e.isAmp,d=(0,I.I)(),g={src:r,allowFullScreen:o,frameBorder:c,height:a,width:i},f=m.useState(!1),v=S()(f,2),E=v[0],x=v[1],y=m.useState(!1),b=S()(y,2),T=b[0],w=b[1];if(T||A.V6.on("load",(function(){return w(!0)})),null!=h&&null!==(t=h.current)&&void 0!==t&&t.parentElement&&h.current.parentElement.offsetWidth<h.current.offsetWidth&&!E&&x(!0),p){var R,P={allowFullScreen:o};for(var O in P)g[O]=g[O]?"":null;return R=u?m.createElement("amp-img",{placeholder:"",src:u,layout:"fill"}):m.createElement("div",{placeholder:"",className:d([j.m,U])}),m.createElement("amp-iframe",M()({},g,{class:d(l),placeholder:"",resizable:"",layout:"responsive",sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"}),R,m.createElement("div",{tabIndex:0,role:"button","aria-label":"Read more"},"Read more"))}return T?m.createElement(B.v,{rootMargin:"200px 0px",target:s},(function(e){return e?m.createElement("iframe",M()({},g,{ref:h,title:n,className:d(E?[l,F]:l),scrolling:E?"no":"auto"})):null})):null})),z=r(69703),G=r(65441),V=r(27952);function X(){var e=a()(["\n  fragment IframeParagraph_paragraph on Paragraph {\n    iframe {\n      mediaResource {\n        id\n        iframeSrc\n        iframeHeight\n        iframeWidth\n        title\n      }\n    }\n    layout\n    ...getEmbedlyCardUrlParams_paragraph\n    ...Markups_paragraph\n  }\n  ","\n  ","\n"]);return X=function(){return e},e}var Y=function(e){var t=e.host,r=e.isAmp,n=e.paragraph,a=e.paragraphStyle,i=e.richTextStyle,o=e.spaceTop,c=e.updateWatchedBounds,u=(0,I.I)(),l=m.useRef(null),s=(n.iframe||{}).mediaResource,h=s||{},p=h.id,d=h.iframeSrc,g=h.iframeHeight,f=h.iframeWidth,v=h.title,E=d;E||(E=p?(0,V.jU$)(t,p):"");var y=function(e){var t=e.src,r=e.initialHeight,n=e.initialWidth,a=m.useRef(null),i=m.useState(r),o=S()(i,2),c=o[0],u=o[1],l=m.useState(n),s=S()(l,2),h=s[0],p=s[1];return m.useEffect((function(){if(""!==t){var e=(0,w.x)((function(e,r){a.current&&"MEASURE"===e.type&&e.details.height>0&&(p(a.current.offsetWidth),a.current.contentWindow===r&&u(e.details.height)),"iframe.resize"===e.context&&e.src===t&&e.height>0&&(a.current&&p(a.current.offsetWidth),u(e.height))})).destructor;return function(){e()}}}),[t,r]),[c,h,a]}({src:E,initialHeight:g||0,initialWidth:f||0}),b=S()(y,3),P=b[0],O=b[1],k=b[2],_=m.useRef(null);if(m.useEffect((function(){if(c&&s&&s.id&&O&&P){var e="";l.current&&(e=l.current.offsetTop.toString()),c("".concat(s.id,"-").concat(e),l,{type:"image"})}}),[]),!E)return null;var C=n.text?m.createElement(L,{richTextStyle:i},m.createElement(T.T2,{paragraph:n,paragraphStyle:a,richTextStyle:i})):null,N=[(0,z.qB)(o)];N.push((function(){return{clear:"both"}})),"OUTSET_LEFT"===(n.layout||void 0)&&"STREAM"!==i&&N.push((function(e){var t;return t={background:e.backgroundColor,borderWidth:e.borderWidthThick+"px",borderStyle:e.borderStyle,borderColor:e.backgroundColor,float:"left",marginLeft:"-150px",marginRight:"30px",width:"75%",padding:"0",paddingBottom:"10px"},x()(t,W.md(e),{float:"none",marginLeft:"0",marginRight:"0",width:"100%"}),x()(t,"marginBottom","16px"),t}));var H=r?(0,G.XC)(n):null;return m.createElement(q,{className:u(N),figCaption:C,figureRef:l},H?m.createElement(m.Fragment,null,m.createElement("amp-embedly-card",{"data-url":H.url,layout:"responsive",width:O,height:P,"data-card-controls":"0"})):m.createElement(R.G,{height:P,width:O,backgroundColor:"NONE",ref:_},m.createElement(D,{placeholderRef:_,iframeRef:k,src:E,title:v||"",height:P,width:O,allowFullScreen:!0,frameBorder:"0",rules:j.m})))},Q=m.memo(Y),Z=(0,b.$j)((function(e){return{isAmp:e.config.isAmp,host:e.navigation.host}}))(Q),J=(0,f.Ps)(X(),G.Zp,T.Zr),$=r(59854),K=r.n($),ee=r(7647),te=r(69677),re=r(24219),ne=r(65922),ae=r(41707),ie=r(90038),oe=function(e){return{backgroundColor:e.brandColor.sage.light}},ce=function(e,t){var r=(0,ie.W6)({freezeGifs:!1,miroId:e,strategy:ie._S.Resample,width:t.breakpoints.sm}),n=(0,ie.W6)({freezeGifs:!1,miroId:e,strategy:ie._S.Resample,width:t.breakpoints.md}),a=(0,ie.W6)({freezeGifs:!1,miroId:e,strategy:ie._S.Resample,width:t.breakpoints.lg}),i=(0,ie.W6)({freezeGifs:!1,miroId:e,strategy:ie._S.Resample,width:t.breakpoints.xl});return{xl:"url('".concat(i,"')"),lg:"url('".concat(i,"')"),md:"url('".concat(a,"')"),sm:"url('".concat(n,"')"),xs:"url('".concat(r,"')")}};function ue(e){var t=e.metadata,r=(0,I.I)();return m.createElement(ae.Z,null,(function(e){return m.createElement("div",{className:r(oe)},m.createElement(ne.B,{backgroundImage:ce(t.id,e),miroId:t.id,height:"60vh",width:"100%",minHeight:{xl:500,lg:400,md:400,sm:300,xs:300},imgHeight:500,imgWidth:2e3,focusPercent:null===t.focusPercentX||void 0===t.focusPercentX||null===t.focusPercentY||void 0===t.focusPercentY?void 0:[t.focusPercentX,t.focusPercentY]}))}))}var le=r(61889),se=r(62031),he=r(42933),pe=r(8667);function de(){var e=a()(["\n  fragment ImageParagraph_privateNote on Note {\n    ...PostAnnotationsMarker_privateNote\n  }\n  ","\n"]);return de=function(){return e},e}function ge(){var e=a()(["\n  fragment ImageParagraph_highlight on Quote {\n    id\n    ...Markups_highlight\n  }\n  ","\n"]);return ge=function(){return e},e}function fe(){var e=a()(["\n  fragment ImageParagraph_paragraph on Paragraph {\n    href\n    layout\n    metadata {\n      id\n      originalHeight\n      originalWidth\n      focusPercentX\n      focusPercentY\n      alt\n    }\n    ...Markups_paragraph\n    ...ParagraphRefsMapContext_paragraph\n    ...PostAnnotationsMarker_paragraph\n  }\n  ","\n  ","\n  ","\n"]);return fe=function(){return e},e}var me=function(e){var t=e.width,r=e.isCard,n=e.paragraphLayout,a=e.originalWidth,i=e.imageProps,o=(0,I.I)(),c={};return t>0&&(c.maxWidth="".concat(t,"px")),r&&("INSET_CENTER"===n||"OUTSET_LEFT"===n)&&a&&(c.marginLeft="auto",c.marginRight="auto"),m.createElement("div",{className:o(c)},m.createElement(le.F,i))},ve=function(e){var t=e.highlights,r=e.isSequenceCover,n=void 0!==r&&r,a=e.marginTopOverride,i=e.paragraph,o=e.paragraphStyle,c=e.privateNotes,u=e.richTextStyle,l=e.sequenceAspectRatio,s=e.spaceTop,h=e.updateWatchedBounds,p=(0,I.I)(),d=m.useRef(null),g=(0,te.CF)(i,o),f=m.useContext(ee.U);return m.useEffect((function(){if(h){var e=i.name,t=i.metadata&&i.metadata.id;if(e&&t){var r="";d.current&&(r=d.current.offsetTop.toString()),h("".concat(e,"-").concat(t,"-").concat(r),d,{type:"image"})}}}),[]),m.useMemo((function(){var e=i.metadata,r=i.layout;if(!e)return null;var h,v=e.id,E=e.originalHeight,y=e.originalWidth,S=e.alt,b=(0,ie.JI)(v),w="CARD"===u||"SHORTFORM_CARD"===u,R=(0,pe.jg)({layout:r,originalWidth:y||0,originalHeight:E||0,sequenceAspectRatio:l,richTextStyle:u}),P=R.width,O=R.height,k=R.strategy,_=R.otherWidths;if("OUTSET_ROW_CONTINUE"===r&&y&&E&&l){var I=y/E;h=K()(l/I,2)}var C,N=i.text?m.createElement(L,{ref:g,richTextStyle:u,textAlign:n?"left":"center",extendLeftRatio:h},c&&m.createElement(re.A7,{paragraph:i,privateNotes:c}),m.createElement(T.T2,{highlights:t,paragraph:i,paragraphStyle:o,richTextStyle:u})):null;if(n)C=m.createElement(ue,{metadata:{id:v,focusPercentX:e.focusPercentX,focusPercentY:e.focusPercentY}});else{var H={isAmp:!1,alt:S||"",miroId:v,height:O,width:P,rules:f?[{width:"100%",maxWidth:"100%",height:"auto"}]:O?[j.m]:[{maxWidth:"100%"}],maxWidth:O?void 0:"100%",strategy:k,freezeGifs:"STREAM"===u||"RESAMPLE"!==k,focusPercentX:e.focusPercentX,focusPercentY:e.focusPercentY,expectedWidth:P,otherWidths:_};if((0,G.jH)(u)){if(!P||!O)return m.createElement("div",{className:p((0,z.qB)(s))},m.createElement(me,{width:P,originalWidth:y,imageProps:H,isCard:w,paragraphLayout:r}));C=m.createElement(me,{width:P,originalWidth:y,imageProps:H,isCard:w,paragraphLayout:r})}else if("OUTSET_LEFT"===r||"INSET_LEFT"===r||"INSET_CENTER"===r&&y||"OUTSET_CENTER"===r&&y){var A=y&&(b?y/2:y);C=m.createElement(se.X1,{isLinked:!!i.href,width:H.width,height:H.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:d},m.createElement("div",{className:p((function(e){return{marginLeft:"auto",marginRight:"auto",maxWidth:"OUTSET_CENTER"===r&&A&&A<e.maxWidths.outset?"".concat(e.maxWidths.outset,"px"):"".concat(A,"px")}}))},m.createElement(le.F,M()({},H,{height:e.originalHeight||H.height,width:e.originalWidth||H.width}))))}else C=y&&"INSET_CENTER"!==r?m.createElement(se.X1,{isLinked:!!i.href,width:H.width,height:H.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:d},m.createElement(le.F,M()({},H,{height:e.originalHeight||H.height,width:e.originalWidth||H.width}))):m.createElement(he.x,{display:"flex",justifyContent:"center",alignItems:"flex-start",sm:{display:"block"}},m.createElement(se.X1,{isLinked:!!i.href,width:H.width,height:H.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:d},m.createElement(le.F,M()({},H,{width:null,maxWidth:"100%",strategy:null}))));i.href&&(C=m.createElement("a",{href:i.href},C))}var B="SHORTFORM_CARD"===u?[]:[a?(0,z.qB)(a):(0,z.qB)(s)];if(B.push({clear:"both"}),n)B.push((function(e){return x()({},W.lg(e),{paddingLeft:"0px",paddingRight:"0px"})}));else if(("OUTSET_ROW"===r||"OUTSET_ROW_CONTINUE"===r)&&y&&E&&l){var U=y/E,F=K()(U/l*100,2);B.push({width:"".concat(F,"%"),marginRight:"10px",paddingTop:"5px",paddingBottom:"5px",":last-of-type":{marginRight:0}})}else"OUTSET_CENTER"===r?B.push({paddingBottom:"5px",paddingTop:"5px"}):"OUTSET_LEFT"===r&&w?B.push({marginLeft:"auto",marginRight:"auto"}):"OUTSET_LEFT"!==r||w?"INSET_LEFT"===r?B.push({float:"left",width:"50%",paddingBottom:"10px",paddingRight:"30px",marginBottom:"16px"}):"FULL_WIDTH"===r?B.push({width:"100%"}):"INSET_CENTER"===r&&B.push({marginLeft:"auto",marginRight:"auto"}):B.push((function(e){var t;return t={background:e.backgroundColor,borderWidth:e.borderWidthThick+"px",borderStyle:e.borderStyle,borderColor:e.backgroundColor,float:"left",marginLeft:"-150px",marginRight:"30px",width:"75%",padding:"0",paddingBottom:"10px"},x()(t,W.lg(e),{float:"none",marginLeft:"0",marginRight:"0",width:"100%"}),x()(t,"marginBottom","16px"),t}));return m.createElement(q,{className:"".concat(p(B)," paragraph-image"),figCaption:N,figureRef:d},C)}),[JSON.stringify(i),JSON.stringify(c)])},Ee=m.memo(ve),xe=(0,f.Ps)(fe(),T.Zr,te.pK,re.Mx),ye=(0,f.Ps)(ge(),T.DV),Se=(0,f.Ps)(de(),re.uR),be=r(98462),Te=r(80908),we=r(87561),Re=r(98024);function Pe(){var e=a()(["\n  fragment MixtapeParagraph_paragraph on Paragraph {\n    text\n    type\n    mixtapeMetadata {\n      href\n      thumbnailImageId\n    }\n    markups {\n      start\n      end\n      type\n      href\n    }\n  }\n"]);return Pe=function(){return e},e}var Oe=function(e){return{boxShadow:"inset 0 0 0 1px ".concat(e.baseColor.border.lighter)}},ke=function(e){var t=e.paragraph,r=e.spaceTop,n=e.structuredMarkup,a=(0,I.I)(),i=t.mixtapeMetadata,o=t.type;if(!i||!i.href||!o)return null;var c=i.href,u=n||function(e){var t=e.text,r=e.markups;if(!t)return null;var n=r.find((function(e){return"STRONG"===e.type}));if(!n)return null;var a=r.find((function(e){return"EM"===e.type})),i=n.end,o=a?a.end:n.end;return{title:t.slice(n.start,i).trim(),description:a?t.slice(a.start,a.end).trim():null,domain:t.slice(o).trim()||null}}(t);if(!u)return null;var l=u.title,s=u.description,h=u.domain,p=[(0,z.qB)(r),Oe];return m.createElement("div",{className:a(p)},m.createElement(be.P,{href:c||"",disableSourceParam:!0,target:"_blank"},m.createElement(he.x,{display:"flex",flexShrink:"0",padding:"0px"},m.createElement(he.x,{padding:"16px 20px",flexShrink:"1",flexGrow:"1",display:"flex",justifyContent:"center",flexDirection:"column",sm:{padding:"10px 12px 10px"}},m.createElement(Te.Dx,{scale:"XS",clamp:2},l),s&&m.createElement(he.x,{marginTop:"8px"},m.createElement(we.QE,{scale:"S",clamp:2},s)),h&&m.createElement(he.x,{marginTop:"12px"},m.createElement(Re.F,{scale:"S",clamp:2},h))),i&&i.thumbnailImageId&&m.createElement(he.x,{width:"160px"},m.createElement(ne.B,{boxShadowRules:Oe,miroId:i.thumbnailImageId,width:160,height:167,strategy:ie._S.Resample,focusPercent:[50,50],imgHeight:167,imgWidth:160})))))},_e=(0,f.Ps)(Pe()),Ie=r(19692),We=r(11642);function Ce(){var e=a()(["\n      fragment PostBodyParagraph_paragraph on Paragraph {\n        name\n        type\n        ...ImageParagraph_paragraph\n        ...TextParagraph_paragraph\n        ...IframeParagraph_paragraph\n        ...MixtapeParagraph_paragraph\n      }\n      ","\n      ","\n      ","\n      ","\n    "]);return Ce=function(){return e},e}function Ne(){var e=a()(["\n  fragment PostBodyParagraph_privateNote on Note {\n    ...TextParagraph_privateNote\n    ...ImageParagraph_privateNote\n  }\n  ","\n  ","\n"]);return Ne=function(){return e},e}function Le(){var e=a()(["\n  fragment PostBodyParagraph_highlight on Quote {\n    ...TextParagraph_highlight\n    ...ImageParagraph_highlight\n  }\n  ","\n  ","\n"]);return Le=function(){return e},e}var qe=function(e){s()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=g()(t);if(r){var a=g()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return p()(this,e)});function a(){return o()(this,a),n.apply(this,arguments)}return u()(a,[{key:"render",value:function(){var e,t=this.props,r=t.highlights,n=t.inserts,a=t.marginTopOverride,i=t.paragraph,o=t.paragraphStyle,c=t.privateNotes,u=t.richTextStyle,l=t.sequenceAspectRatio,s=t.spaceTop;switch(o){case G.qq.IMG:e=m.createElement(v.u6.Consumer,null,(function(e){var t=e.updateWatchedBounds;return m.createElement(Ee,{highlights:r,marginTopOverride:a,paragraph:i,paragraphStyle:o,privateNotes:c,richTextStyle:u,sequenceAspectRatio:l,spaceTop:s,updateWatchedBounds:t})}));break;case G.qq.P:case G.qq.BQ:case G.qq.PQ:case G.qq.H1:case G.qq.H2:case G.qq.H3:case G.qq.H4:case G.qq.ULI:case G.qq.OLI:case G.qq.PRE:case G.qq.Kicker:case G.qq.Subtitle:case G.qq.Title:e=m.createElement(Ie.Do,{highlights:r,marginTopOverride:a,paragraph:i,paragraphStyle:o,privateNotes:c,richTextStyle:u,spaceTop:s});break;case G.qq.IFRAME:e=m.createElement(v.u6.Consumer,null,(function(e){var t=e.updateWatchedBounds;return m.createElement(Z,{paragraph:i,paragraphStyle:o,richTextStyle:u,spaceTop:s,updateWatchedBounds:t})}));break;case G.qq.MIXTAPE_EMBED:e=m.createElement(ke,{paragraph:i,paragraphStyle:o,richTextStyle:u,spaceTop:s});break;case G.qq.COVER_TITLE:case G.qq.SECTION_CAPTION:case G.qq.HR:e=null;break;default:(0,We.v)(o),e=null}return n&&n.length?m.createElement(m.Fragment,null,n.map((function(e){return"before"===e.order&&e.component})),e,n.map((function(e){return"after"===e.order&&e.component}))):e}}]),a}(m.Component);qe.fragments={paragraph:(0,f.Ps)(Ce(),J,xe,Ie.Rg,_e)};var He=(0,f.Ps)(Le(),Ie.m8,ye),Me=(0,f.Ps)(Ne(),Ie.hz,Se)},95064:(e,t,r)=>{"use strict";r.d(t,{ZQ:()=>P,PL:()=>O,NR:()=>k,lD:()=>_,l:()=>W});var n=r(63038),a=r.n(n),i=r(28655),o=r.n(i),c=r(59713),u=r.n(c),l=r(67154),s=r.n(l),h=r(71439),p=r(67294),d=r(28859),g=r(10515),f=r(51736),m=r(19692),v=r(98701),E=r(6688),x=r(80637),y=r(65441);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(){var e=o()(["\n  fragment ParagraphStyleGrouping_privateNote on Note {\n    ...PostBodyParagraph_privateNote\n  }\n  ","\n"]);return T=function(){return e},e}function w(){var e=o()(["\n  fragment ParagraphStyleGrouping_highlight on Quote {\n    ...PostBodyParagraph_highlight\n  }\n  ","\n"]);return w=function(){return e},e}function R(e){var t=e.styleGroup,r=e.postBodyInserts,n=e.richTextStyle,a=(0,E.I)(),i=C(t),o=t.paragraphViewModels.map((function(e){var i=e.paragraph.name,o=r&&r[i],c=p.createElement(f.ph,s()({key:e.paragraph.name,inserts:o},e));return"Title"===e.paragraphStyle||"Subtitle"===e.paragraphStyle?p.createElement(d.TA,{name:"title",type:"byline",offset:{left:-600},key:"".concat(e.paragraph.name,"-wb"),className:"SHORTFORM_CARD"===n?a((function(e){return u()({zIndex:2,position:"absolute",bottom:"".concat(t.paragraphViewModels[0].marginBottomOverride||0,"px"),margin:"48px 40px"},x.md(e),{margin:"32px 24px"})})):""},c):c}));return i?p.createElement(g.M.Consumer,null,(function(e){return p.createElement(i,{className:a([W({paragraphStyle:t.paragraphStyle,topSpacing:t.topSpacing,paragraphLayout:t.paragraphLayout,richTextStyle:t.paragraphViewModels[0].richTextStyle,isEmbedded:e})])},o)})):o}var P=p.memo(R),O=(0,h.Ps)(w(),f.Jj),k=(0,h.Ps)(T(),f._V),_=function(e){var t=[];return e.forEach((function(e){var r=e.paragraphStyle,n=e.paragraph.layout,a=t[t.length-1];a&&I(a,e)?a.paragraphViewModels.push(e):t.push({paragraphStyle:r,paragraphLayout:n,topSpacing:e.sequenceSpaceTop||0,paragraphViewModels:[e]})})),t},I=function(e,t){if(e.paragraphStyle!==t.paragraphStyle)return!1;var r=t.paragraph.layout;return"OUTSET_ROW"===e.paragraphLayout?"OUTSET_ROW_CONTINUE"===r:e.paragraphLayout===r},W=function(e){var t=e.paragraphStyle,r=e.topSpacing,n=e.paragraphLayout,i=e.richTextStyle,o=e.isEmbedded;return function(e){var c={};switch(r&&(c.marginTop=(0,v.mu)((function(e){var t=a()(e,1)[0];return"".concat(t,"px")}),r)),t){case"BQ":var u=e.baseColor.border.darker||"";return b(b({},c),{},{boxShadow:"inset ".concat(3,"px 0 0 0 ").concat(u),paddingLeft:"".concat(23,"px"),marginLeft:(0,y.jH)(i)?"0px":"-20px"});case"PRE":return b(b({},c),{},{padding:"20px",background:e.baseColor.background.normal,overflowX:"auto"});case"PQ":return b(b({},c),{},{paddingLeft:"SERIES"===i?"0px":"30px"});case"ULI":if(o)return m.Pq}switch(n){case"OUTSET_ROW":return b(b({},c),{},{display:"flex",flexDirection:"row"})}return c}},C=function(e){var t=e.paragraphStyle,r=e.paragraphLayout;switch(t){case"OLI":return"ol";case"ULI":return"ul";case"BQ":case"PQ":return"blockquote";case"PRE":return"pre"}switch(r){case"OUTSET_ROW":return"div"}return null}},93340:(e,t,r)=>{"use strict";function n(e){e&&e.iframe&&e.height&&e.iframe.getAttribute&&"number"==typeof e.height&&o({context:"iframe.resize",height:e.height,src:e.iframe.getAttribute("src")||""})}function a(e){if(e.data&&"string"==typeof e.data){var t;try{t=JSON.parse(e.data)}catch(e){return}o(t,e.source)}}r.d(t,{x:()=>c});var i=[];function o(e,t){i.forEach((function(r){return r(e,t)}))}function c(e){return window._resizeIframe||(window._resizeIframe=n,window.addEventListener("message",a)),i.push(e),{destructor:function(){0===(i=i.filter((function(t){return e!==t}))).length&&"undefined"!=typeof window&&(window._resizeIframe=null,window.removeEventListener("message",a))}}}},25309:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var n=r(67294),a=r(42933),i=n.forwardRef((function(e,t){var r=e.height,i=e.width,o=e.backgroundColor,c=void 0===o?"BASE_NORMAL":o,u=e.children,l=i/r;return n.createElement(a.x,{position:"relative",margin:"auto",backgroundColor:c,ref:t},n.createElement(a.x,{paddingBottom:"".concat(100/l,"%"),height:"0"},u))}))},65922:(e,t,r)=>{"use strict";r.d(t,{B:()=>p});var n=r(63038),a=r.n(n),i=r(67294),o=r(98701),c=r(6688),u=r(90038),l=function(e){var t=a()(e,1)[0];return"number"==typeof t?"".concat(t,"px"):t},s=function(e){var t=a()(e,1)[0];return"".concat(t[0],"% ").concat(t[1],"%")},h=function(e){return a()(e,1)[0]};function p(e){var t=e.backgroundImage,r=e.boxShadowRules,n=e.miroId,a=e.height,p=e.width,d=e.minHeight,g=e.minWidth,f=e.imgHeight,m=e.imgWidth,v=e.focusPercent,E=e.strategy,x=void 0===E?u._S.Resample:E,y=e.darken,S=e.freezeGifs,b=(0,c.I)(),T=t;if(!T){var w=(0,u.W6)({miroId:n,height:f,width:m,strategy:x,darken:y,freezeGifs:S});T="url(".concat(w,")")}var R=(0,o.mu)(l,a),P=(0,o.mu)(l,p),O=d&&(0,o.mu)(l,d),k=g&&(0,o.mu)(l,g),_=(0,o.mu)(s,v),I={backgroundImage:(0,o.mu)(h,T),display:"block",backgroundOrigin:"border-box",backgroundSize:"cover",height:R,width:P,minHeight:O,minWidth:k,backgroundPosition:_,maxWidth:"100%"};return i.createElement("div",{className:b([I,r])})}p.defaultProps={focusPercent:[50,50]}},61889:(e,t,r)=>{"use strict";r.d(t,{F:()=>R});var n=r(63038),a=r.n(n),i=r(59713),o=r.n(i),c=r(319),u=r.n(c),l=r(67294),s=r(12291),h=r(7647),p=r(25309),d=r(27721),g=r(12598),f=r(62031),m=r(36891),v=r(6688),E=r(53006),x=r(90038),y=r(8667);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(e){return e?{opacity:1,transition:"opacity ".concat(400,"ms 0ms")}:{opacity:0,transition:"opacity 100ms ".concat(400,"ms")}},w={overflow:"hidden",willChange:"transform",transform:"translateZ(0)"},R=(0,s.$j)((function(e){return{isAmp:e.config.isAmp}}))((function(e){var t=e.isAmp,r=e.alt,n=e.rules,i=e.miroId,o=e.width,c=e.maxWidth,s=e.expectedWidth,S=e.otherWidths,R=e.height,P=e.strategy,O=e.darken,k=e.freezeGifs,_=e.focusPercentX,I=e.focusPercentY,W=e.autoSize,C=(0,v.I)(),N=(0,f.BO)(),L=R?(0,x.vJ)({miroId:i,height:R,width:o}):void 0,q={miroId:i,width:o,height:R,strategy:P,darken:O,freezeGifs:k,focusPercentX:_,focusPercentY:I},H=(0,x.W6)(q),M=(N?[].concat(u()(S),[y.Hj]):S).map((function(e){var t=(0,x.W6)(b(b({},q),{},{width:e}));return"".concat(t," ").concat(e,"w")})).join(", "),A=s===y.Hj||N?"100vw":"".concat(s,"px"),B=M&&M.length>0,j=l.createElement(g.E,{src:H,alt:r,rules:n,height:R,width:o,srcSet:B?M:void 0,sizes:B?A:void 0}),U=function(e){var t=!1,r=l.useState(!1),n=a()(r,2),i=n[0],o=n[1],c=l.useRef(null),u=l.useCallback((function(r){if(e&&r.isIntersecting&&!t){t=!0;var n=new Image;n.src=e;var a=function(){o(!0),t=!1};n.decode?n.decode().then((function(){return a()})).catch((function(){})):n.onload=function(){return a()},n.onerror=function(){}}}),[e]);return(0,m.S)({onIntersect:u,disconnect:function(){return!e||i},target:c,threshold:.1,rootMargin:"500px 0px 1000px 0px"},[i,u]),[i,c]}(t?null:H),F=a()(U,2),D=F[0],z=F[1],G=l.useState(!1),V=a()(G,2),X=V[0],Y=V[1],Q=l.useRef(null);if(l.useEffect((function(){var e=Q.current;if(e){var t=function(){return Y(!0)};return e.complete?t():e.addEventListener("load",t),function(){e.removeEventListener("load",t)}}}),[]),l.useContext(h.U))return l.createElement(d.UV,e);var Z=X&&!D,J=[T(D)];if(n&&(J=J.concat(n).concat((function(e){return{backgroundColor:e.backgroundColor}}))),R)return t?l.createElement(p.G,{height:R,width:o},j):l.createElement(p.G,{height:R,width:o},l.createElement("div",{className:C([T(Z),E.m,w])},l.createElement(g.E,{src:L,alt:r,rules:[E.m,($=!D,{filter:"blur(20px)",transform:"scale(1.1)",visibility:$?"visible":"hidden",transition:$?null:"visibility 0ms ".concat(400,"ms")})],height:R,width:o,imgRef:Q})),l.createElement(g.E,{src:D?H:void 0,alt:r,rules:J,height:W?void 0:R,width:W?void 0:o,imgRef:z,srcSet:D?M:void 0,sizes:D?A:void 0}),l.createElement("noscript",null,j));var $,K={};return c&&(K.maxWidth=c),l.createElement(g.E,{src:H,alt:r,rules:K,height:R,width:o})}))},62031:(e,t,r)=>{"use strict";r.d(t,{BO:()=>v,X1:()=>E});var n=r(63038),a=r.n(n),i=r(59713),o=r.n(i),c=r(67294),u=r(77284),l=r(95760),s=r(6688),h=r(27108),p=r(89349),d=r(74465),g=r(85740),f=function(e,t,r,n,a,i,c){var u;if(!c)return{};var l=Math.min(Math.min(t,n||1/0)/i,Math.min(e,r||1/0)/a),s=i*l,h=a*l,g=(e-h)/2,f=((t-s)/2-(c.left+(i-s)/2))/l,m=(g-(c.top+(a-h)/2))/l;return u={},o()(u,(0,p.nk)("no-preference"),{transition:"transform 300ms cubic-bezier(0.2, 0, 0.2, 1)"}),o()(u,"zIndex",d.ZP.floating),o()(u,"transform","scale(".concat(l,") translate(").concat(f,"px, ").concat(m,"px)")),o()(u,"position","absolute"),o()(u,"height","".concat(a,"px")),o()(u,"width","".concat(i,"px")),o()(u,"cursor","zoom-out"),u},m=c.createContext(!1),v=function(){return c.useContext(m)},E=function(e){var t=e.children,r=e.height,n=e.width,a=e.originalHeight,i=e.originalWidth,o=e.paragraphRef;return e.isLinked||!a||!i||!r||r===a&&n===i?t:c.createElement(x,{originalHeight:a,originalWidth:i,height:r,width:n,paragraphRef:o},t)},x=function(e){var t=e.children,r=e.originalHeight,n=e.originalWidth,i=e.height,v=e.width,E=e.paragraphRef,x=c.useState(null),y=a()(x,2),S=y[0],b=y[1],T=c.useState(0),w=a()(T,2),R=w[0],P=w[1],O=c.useState(0),k=a()(O,2),_=k[0],I=k[1],W=c.useState(0),C=a()(W,2),N=C[0],L=C[1],q=(0,s.I)(),H=(0,l.Av)(),M=E&&E.current&&E.current.getBoundingClientRect(),A=c.useRef(null),B=c.useCallback((function(){H.event("client.action",{action:"zoom",eventType:"click"})}),[]),j=c.useCallback((function(){A.current&&A.current.focus(),b(!1)}),[null==A?void 0:A.current,b]),U=c.useCallback((function(){S&&Math.abs(N-window.scrollY)>40&&j()}),[S,N,j]),F=c.useCallback((function(){P(window.innerHeight),I(window.innerWidth)}),[P,I]);c.useEffect((function(){return P(window.innerHeight),I(window.innerWidth),L(window.scrollY),h.V6.on("scroll",U),h.V6.on("resize",F),function(){h.V6.off("scroll",U),h.V6.off("resize",F)}}),[P,I,L,U,F]);var D,z,G=(0,g.r)((function(){S?j():(B(),b(!0))}),[B,b,S,j]);return c.createElement(c.Fragment,null,c.createElement(m.Provider,{value:S},c.createElement("div",{onClick:G,onKeyDown:G,role:"button",tabIndex:0,ref:A,className:q(S?f(R,_,r,n,i,v,M):(D=S,z={},o()(z,(0,p.nk)("no-preference"),{transition:"transform 300ms cubic-bezier(0.2, 0, 0.2, 1)"}),o()(z,"cursor","zoom-in"),o()(z,"position","relative"),o()(z,"zIndex",null===D?"auto":d.ZP.floating),o()(z,"width","100%"),o()(z,":focus",{transform:"scale(1.01)"}),z)),onTransitionEnd:function(){S||b(null)}},t),c.createElement(u.V,{shouldTrapFocus:!1,padding:0,withPageScroll:!0,isVisible:!!S,hide:j,withCloseButton:!1},c.createElement(c.Fragment,null))))}},41331:(e,t,r)=>{"use strict";r.d(t,{v:()=>c});var n=r(63038),a=r.n(n),i=r(67294),o=r(36891),c=function(e){var t=e.rootMargin,r=e.children,n=e.target,c=i.useState(!1),u=a()(c,2),l=u[0],s=u[1],h=i.useCallback((function(e){!l&&e.isIntersecting&&s(!0)}),[l]);return(0,o.S)({onIntersect:h,target:n,disconnect:function(){return l},rootMargin:t},[l]),"function"==typeof r?i.createElement(i.Fragment,null,r(l)):l?i.createElement(i.Fragment,null,r):null}},85740:(e,t,r)=>{"use strict";r.d(t,{r:()=>a});var n=r(67294),a=function(e,t){return n.useCallback((function(t){"key"in t&&"Enter"!==t.key&&" "!==t.key||("key"in t&&" "===t.key&&t.preventDefault(),e(t))}),t)}},8667:(e,t,r)=>{"use strict";r.d(t,{Hj:()=>i,jg:()=>c});var n=r(57640),a=r(90038),i=2400,o=1e3,c=function(e){var t=e.layout,r=e.originalWidth,c=e.originalHeight,u=e.sequenceAspectRatio,l=e.richTextStyle,s=a._S.Resample,h=c&&r?c/r:null,p=r;switch(t){case"CROPPED_HEIGHT_PREVIEW":p=700,h=.3,s=a._S.Crop;break;case"CONSTRAINED_HEIGHT_PREVIEW":p=700,h&&240/h<p&&(p=240/h);break;case"INSET_LEFT":case"INSET_CENTER_SMALL":case"INSET_RIGHT":p=350;break;case"OUTSET_LEFT":p="CARD"===l||"SHORTFORM_CARD"===l?o:500;break;case"OUTSET_ROW":case"OUTSET_ROW_CONTINUE":p=o,u&&h&&(p*=1/h/u);break;case"OUTSET_CENTER":p=o;break;case"FULL_WIDTH":case"FULL_WIDTH_CROPPED_COVER":p=i;break;default:p=700}r&&(p=Math.min(p,r)),p=Math.ceil(p);var d=[n.u.breakpoints.sm,n.u.breakpoints.md,n.u.breakpoints.lg,n.u.breakpoints.xl].reduce((function(e,t,r,n){var a=r===n.length-1;if(0===r&&e.push(.5*t),e.push(t),a&&(e.push(1.25*t),e.push(1.5*t),e.push(1.75*t),e.push(2*t)),!a){var i=(t+n[r+1])/2;e.push(i)}return e}),[]).reduce((function(e,t){return p>t&&e.push(Math.ceil(t)),e}),[]);return p>d[d.length-1]&&d.push(p),{width:p,height:h?Math.ceil(h*p):void 0,strategy:s,otherWidths:d}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5064.a8440544.chunk.js.map

}
/*
     FILE ARCHIVED ON 21:46:57 Jun 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:20:24 Feb 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.122
  exclusion.robots.policy: 0.099
  cdx.remote: 0.173
  esindex: 0.018
  LoadShardBlock: 146.962 (6)
  PetaboxLoader3.datanode: 278.25 (7)
  load_resource: 299.375
  PetaboxLoader3.resolve: 122.444
*/