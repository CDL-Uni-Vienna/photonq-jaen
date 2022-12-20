"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[9835],{85336:function(e,t,n){var r=n(21608),i=n(37355),o=n(84382),a=n(86692),l=(0,r.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,i.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,a.Z)({props:e,name:"MuiContainer"})}});t.Z=l},21608:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(4942),i=n(63366),o=n(87462),a=n(67294),l=n(2585),s=n(12698),c=n(18362),u=n(50565),d=n(72615),p=(0,n(60870).ZP)(),h=n(99174),m=n(85893),f=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,h.Z)(),g=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,s.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),x=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:v})},Z=function(e,t){var n=e.classes,r=e.fixed,i=e.disableGutters,o=e.maxWidth,a={root:["root",o&&"maxWidth".concat((0,s.Z)(String(o))),r&&"fixed",i&&"disableGutters"]};return(0,u.Z)(a,(function(e){return(0,c.Z)(t,e)}),n)};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?g:t,s=e.useThemeProps,c=void 0===s?x:s,u=e.componentName,d=void 0===u?"MuiContainer":u,p=n((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,i=t.breakpoints.values[r];return 0!==i&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(i).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),h=a.forwardRef((function(e,t){var n=c(e),r=n.className,a=n.component,s=void 0===a?"div":a,u=n.disableGutters,h=void 0!==u&&u,v=n.fixed,g=void 0!==v&&v,x=n.maxWidth,b=void 0===x?"lg":x,y=(0,i.Z)(n,f),w=(0,o.Z)({},n,{component:s,disableGutters:h,fixed:g,maxWidth:b}),N=Z(w,d);return(0,m.jsx)(p,(0,o.Z)({as:s,ownerState:w,className:(0,l.Z)(N.root,r),ref:t},y))}));return h}},93361:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(88837);function i(e){var t=e.children,n=e.className;return(0,r.tZ)("div",{className:"max-w-max w-full "+n,children:t})}},62768:function(e,t,n){n.d(t,{Z:function(){return Q}});var r=n(2436),i=n(93433),o=n(29439),a=n(4942),l=n(63366),s=n(87462),c=n(67294),u=n(2585),d=n(50565),p=n(37355),h=n(84382),m=n(86692),f=n(42160),v=n(28571),g=n(60428),x=n(57893),Z=n(18362);function b(e){return(0,Z.Z)("MuiLink",e)}var y,w=(0,x.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),N=n(35429),k=n(62915),C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=function(e){var t=e.theme,n=e.ownerState,r=function(e){return C[e]||e}(n.color),i=(0,N.DW)(t,"palette.".concat(r),!1)||n.color,o=(0,N.DW)(t,"palette.".concat(r,"Channel"));return"vars"in t&&o?"rgba(".concat(o," / 0.4)"):(0,k.Fq)(i,.4)},L=n(85893),W=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],B=(0,h.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,p.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:S({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(w.focusVisible),{outline:"auto"}))})),M=c.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiLink"}),r=n.className,a=n.color,h=void 0===a?"primary":a,g=n.component,x=void 0===g?"a":g,Z=n.onBlur,y=n.onFocus,w=n.TypographyClasses,N=n.underline,k=void 0===N?"always":N,S=n.variant,M=void 0===S?"inherit":S,R=n.sx,P=(0,l.Z)(n,W),G=(0,f.Z)(),D=G.isFocusVisibleRef,F=G.onBlur,X=G.onFocus,j=G.ref,A=c.useState(!1),V=(0,o.Z)(A,2),H=V[0],T=V[1],O=(0,v.Z)(t,j),z=(0,s.Z)({},n,{color:h,component:x,focusVisible:H,underline:k,variant:M}),_=function(e){var t=e.classes,n=e.component,r=e.focusVisible,i=e.underline,o={root:["root","underline".concat((0,p.Z)(i)),"button"===n&&"button",r&&"focusVisible"]};return(0,d.Z)(o,b,t)}(z);return(0,L.jsx)(B,(0,s.Z)({color:h,className:(0,u.Z)(_.root,r),classes:w,component:x,onBlur:function(e){F(e),!1===D.current&&T(!1),Z&&Z(e)},onFocus:function(e){X(e),!0===D.current&&T(!0),y&&y(e)},ref:O,ownerState:z,variant:M,sx:[].concat((0,i.Z)(Object.keys(C).includes(h)?[]:[{color:h}]),(0,i.Z)(Array.isArray(R)?R:[R]))},P))})),R=n(59694),P=n(80),G=n(93361),D=n(88837);function F(e){var t=e.alwaysAtBottom,n="undefined"!=typeof window?(0,R.useLocation)():null;return(0,D.tZ)("footer",{className:(0,u.Z)("flex justify-center py-10 px-8 md:px-16",{"absolute bottom-0 left-0":t}),children:(0,D.BX)(G.Z,{children:[(0,D.BX)("div",{className:"flex flex-col md:flex-row justify-between space-y-5 md:space-y-0",children:[(0,D.BX)("div",{children:[(0,D.tZ)("p",{className:"font-bold",children:"Links"}),(0,D.BX)("div",{className:"flex space-x-14",children:[(0,D.BX)("div",{className:"flex flex-col space-y-4 mt-3",children:[(0,D.tZ)("a",{onClick:function(){return(0,r.navigate)((0,P.N)(null==n?void 0:n.pathname,"/"))},className:"cursor-pointer",children:"Home"}),(0,D.tZ)("a",{className:"cursor-pointer",onClick:function(){return(0,r.navigate)((0,P.N)(null==n?void 0:n.pathname,"/login"))},children:"Log in"}),(0,D.tZ)("a",{className:"cursor-pointer",onClick:function(){return(0,r.navigate)((0,P.N)(null==n?void 0:n.pathname,"/signup"))},children:"Sign up"})]}),(0,D.BX)("div",{className:"flex flex-col space-y-4 mt-3",children:[(0,D.tZ)("a",{className:"cursor-pointer",onClick:function(){return(0,r.navigate)((0,P.N)(null==n?void 0:n.pathname,"/how-to-guides"))},children:"Documentation"}),(0,D.tZ)("a",{className:"cursor-pointer",onClick:function(){return(0,r.navigate)((0,P.N)(null==n?void 0:n.pathname,"/legal"))},children:"Terms & Conditions"}),(0,D.tZ)("a",{className:"cursor-pointer",onClick:function(){return(0,r.navigate)((0,P.N)(null==n?void 0:n.pathname,"/impressum"))},children:"Impressum"})]})]})]}),(0,D.BX)("div",{children:[(0,D.tZ)("p",{className:"font-bold",children:"Partners"}),(0,D.tZ)("div",{className:"flex space-x-14",children:(0,D.BX)("div",{className:"flex flex-col space-y-4 mt-3",children:[(0,D.tZ)(M,{href:"https://www.cdg.ac.at/",target:"_blank",className:"cursor-pointer",style:{color:"#FFF"},children:"Christian Doppler Forschungsgesellschaft (CDG)"}),(0,D.tZ)(M,{href:"https://www.univie.ac.at/",target:"_blank",className:"cursor-pointer",style:{color:"#FFF"},children:"University of Vienna"})]})})]}),(0,D.BX)("address",{children:[(0,D.tZ)("p",{className:"font-bold",children:"PhotonQ is brought to you by"}),(0,D.tZ)("p",{children:"Christian Doppler Laboratory for Photonic Quantum Computing"}),(0,D.tZ)("p",{children:"Walther Group"}),(0,D.tZ)("p",{children:"Faculty of Physics, University of Vienna"})]})]}),(0,D.tZ)("hr",{className:"my-4"}),(0,D.tZ)("div",{className:"flex",children:(0,D.tZ)("p",{children:"Copyright © 2022 Walther Group, Faculty of Physics, University of Vienna. All rights reserved."})})]})})}!function(e){e.Login="/login",e.Register="/signup",e.Profile="/profile",e.MyProjects="/my-projects",e.SingleExperiment="/experiment/:id",e.ExperimentResult="/experiment/:id/result",e.HowToGuides="/how-to-guides",e.Legal="/legal"}(y||(y={}));var X=n(94341),j=n(15861),A=n(64687),V=n.n(A),H=n(99341),T=n(19701);function O(e){var t,n=(0,c.useContext)(X.V).setValue,i="undefined"!=typeof window?(0,R.useLocation)():null;return(0,D.tZ)("a",{onClick:(0,j.Z)(V().mark((function t(){var o;return V().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(o=e.setMobileNavBarOpen)||void 0===o||o.call(e,!1),!e.route.clearAuthState){t.next=8;break}return t.next=4,(0,H.TX)();case 4:n(void 0),!1===e.route.languageSpecific?(0,r.navigate)(T.y$.Login):(0,r.navigate)((0,P.N)(null==i?void 0:i.pathname,T.y$.Login)),t.next=9;break;case 8:!1===e.route.languageSpecific?(0,r.navigate)(e.route.href):(0,r.navigate)((0,P.N)(null==i?void 0:i.pathname,e.route.href));case 9:case"end":return t.stop()}}),t)}))),className:(0,u.Z)("cursor-pointer transform hover:text-primary hover:scale-105 duration-300",(t={},t["font-bold text-primary"]=e.isRouteActive,t["hidden lg:block"]="desktop"===e.variant,t["block lg:hidden"]="mobile"===e.variant,t)),children:e.route.label})}var z=n(78644);function _(e){var t=e.setOpen,n=e.isOpen;return(0,D.tZ)(z.E.div,{animate:n?"open":"closed",className:"lg:hidden flex justify-center items-center rounded-full bg-primary h-10 w-10 z-40",children:(0,D.tZ)("button",{onClick:function(){return t((function(e){return!e}))},className:"mobile-menu-button rounded",children:(0,D.BX)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:[(0,D.tZ)(E,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),(0,D.tZ)(E,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),(0,D.tZ)(E,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})})})}var E=function(e){return(0,D.tZ)(z.E.path,Object.assign({fill:"transparent",strokeWidth:"2",stroke:"hsl(0, 0%, 100%)",strokeLinecap:"round",initial:!1},e))};function U(e){var t,n,i=e.pathname,o=(0,c.useContext)(X.V).value,a=(0,c.useState)(!1),l=a[0],s=a[1],d=function(){return o?[{href:y.Profile,label:"Profile"},{href:y.MyProjects,label:"My Experiments",languageSpecific:!1},{href:y.HowToGuides,label:"Documentation"},{href:y.Login,label:"Logout",clearAuthState:!0}]:[{href:"/",label:"Home"},{href:y.HowToGuides,label:"Documentation"},{href:y.Login,label:"Log in"},{href:y.Register,label:"Sign up"}]},p=(0,c.useMemo)((function(){return d()}),[o]);return(0,D.tZ)("div",{className:"relative text-lg",children:(0,D.BX)("nav",{className:(0,u.Z)("left-0 bg-secondary right-0 border-b z-30 flex justify-center",(t={},t.absolute=!l,t.fixed=l,t)),children:[(0,D.BX)("div",{className:"max-w-max bg-white w-full flex justify-between items-center py-4 px-8 ",children:[(0,D.BX)("div",{onClick:function(){return(0,r.navigate)((0,P.N)(i,"/"))},className:"w-40 cursor-pointer z-40 flex items-center space-x-8 divide-x",children:[(0,D.tZ)("img",{src:"https://photonq.at/assets/CDG_Logo.svg",alt:"Logo Christian Doppler Forschungsgesellschaft",style:{maxHeight:60}}),(0,D.tZ)("img",{src:"https://photonq.at/assets/uni-wien-logo.svg",alt:"Logo Uni Wien",style:{maxHeight:80}})]}),(0,D.BX)("div",{className:"flex space-x-8",children:[p.map((function(e,t){return(0,D.tZ)(O,{variant:"desktop",route:e,isRouteActive:(e.href,!1)},t)})),(0,D.tZ)(_,{isOpen:l,setOpen:s})]})]}),(0,D.tZ)("div",{className:(0,u.Z)("lg:hidden fixed flex overflow-hidden justify-start items-center inset-0 h-full w-full bg-primary-light px-8",(n={},n.hidden=!l,n.block=l,n)),children:(0,D.tZ)("div",{className:"text-3xl space-y-5",children:p.map((function(e,t){return(0,D.tZ)(O,{setMobileNavBarOpen:s,variant:"mobile",route:e,isRouteActive:(e.href,!1)},t)}))})})]})})}var q=n(27729);function Q(e){var t=e.children,n=e.pathname;return(0,D.BX)(D.HY,{children:[(0,D.tZ)(U,{pathname:n}),(0,D.tZ)("main",{children:t}),(0,D.tZ)(q.Z,{fullWidth:!0,primaryBackground:!0,children:(0,D.tZ)("div",{className:"pt-16 lg:pt-28 2xl:pt-32",children:(0,D.tZ)(F,{})})})]})}},27729:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2585),i=n(88837);function o(e){var t,n=e.primaryBackground,o=e.withVerticalPadding,a=e.fullWidth,l=e.children,s=e.withHorizontalPadding;return(0,i.tZ)("section",{className:(0,r.Z)("w-full",(t={},t["py-16 lg:py-32 2xl:py-36"]=o,t["px-8"]=s,t["w-full"]=a,t["bg-primary"]=n,t["text-white"]=n,t)),children:l})}}}]);
//# sourceMappingURL=e99278b6680f291e0e3dd5fc8c80e32e61c6f494-ba19a09289527d4f9e2f.js.map