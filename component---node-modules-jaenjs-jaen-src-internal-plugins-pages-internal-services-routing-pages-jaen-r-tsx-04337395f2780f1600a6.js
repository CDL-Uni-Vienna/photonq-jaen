"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[9121],{75778:function(e,t,a){a.d(t,{D8:function(){return y},Ex:function(){return _}});var n=a(63366),r=a(67294),i=a(41460),s=a(4382),o=a(29819),l=a(29741),u=["size","isIndeterminate"],d=["size","max","min","valueText","getValueText","value","capIsRound","children","thickness","color","trackColor","isIndeterminate"],c=["min","max","value","isIndeterminate","role"],m=["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby","aria-valuetext","title","role"];var v=(0,s.keyframes)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),f=(0,s.keyframes)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),p=(0,s.keyframes)({"0%":{left:"-40%"},"100%":{left:"100%"}}),g=(0,s.keyframes)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function h(e){var t=e.value,a=void 0===t?0:t,n=e.min,r=e.max,i=e.valueText,s=e.getValueText,o=e.isIndeterminate,l=e.role,u=void 0===l?"progressbar":l,d=function(e,t,a){return 100*(e-t)/(a-t)}(a,n,r);return{bind:{"data-indeterminate":o?"":void 0,"aria-valuemax":r,"aria-valuemin":n,"aria-valuenow":o?void 0:a,"aria-valuetext":function(){if(null!=a)return"function"==typeof s?s(a,d):i}(),role:u},percent:d,value:a}}var b=function(e){var t=e.size,a=e.isIndeterminate,s=(0,n.Z)(e,u);return r.createElement(i.m$.svg,Object.assign({viewBox:"0 0 100 100",__css:{width:t,height:t,animation:a?f+" 2s linear infinite":void 0}},s))};b.displayName="Shape";var k=function(e){return r.createElement(i.m$.circle,Object.assign({cx:50,cy:50,r:42,fill:"transparent"},e))};k.displayName="Circle";var y=(0,i.Gp)((function(e,t){var a,s=e.size,o=void 0===s?"48px":s,l=e.max,u=void 0===l?100:l,c=e.min,m=void 0===c?0:c,f=e.valueText,p=e.getValueText,g=e.value,y=e.capIsRound,x=e.children,j=e.thickness,I=void 0===j?"10px":j,w=e.color,_=void 0===w?"#0078d4":w,C=e.trackColor,E=void 0===C?"#edebe9":C,O=e.isIndeterminate,P=(0,n.Z)(e,d),Z=h({min:m,max:u,value:g,valueText:f,getValueText:p,isIndeterminate:O}),D=O?void 0:2.64*(null!==(a=Z.percent)&&void 0!==a?a:0),S=O?{css:{animation:v+" 1.5s linear infinite"}}:{strokeDashoffset:66,strokeDasharray:null==D?void 0:D+" "+(264-D),transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},T={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:o};return r.createElement(i.m$.div,Object.assign({ref:t,className:"chakra-progress"},Z.bind,P,{__css:T}),r.createElement(b,{size:o,isIndeterminate:O},r.createElement(k,{stroke:E,strokeWidth:I,className:"chakra-progress__track"}),r.createElement(k,Object.assign({stroke:_,strokeWidth:I,className:"chakra-progress__indicator",strokeLinecap:y?"round":void 0,opacity:0!==Z.value||O?void 0:0},S))),x)}));y.displayName="CircularProgress";var x=(0,l.k)({name:"ProgressStylesContext",errorMessage:"useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" "}),j=x[0],I=x[1],w=(0,i.Gp)((function(e,t){var a=e.min,s=e.max,o=e.value,l=e.isIndeterminate,u=e.role,d=(0,n.Z)(e,c),m=h({value:o,min:a,max:s,isIndeterminate:l,role:u}),v=I(),f=Object.assign({height:"100%"},v.filledTrack);return r.createElement(i.m$.div,Object.assign({ref:t,style:Object.assign({width:m.percent+"%"},d.style)},m.bind,d,{__css:f}))})),_=(0,i.Gp)((function(e,t){var a,s=(0,o.Lr)(e),l=s.value,u=s.min,d=void 0===u?0:u,c=s.max,v=void 0===c?100:c,f=s.hasStripe,h=s.isAnimated,b=s.children,k=s.borderRadius,y=s.isIndeterminate,x=s["aria-label"],I=s["aria-labelledby"],_=s["aria-valuetext"],C=s.title,E=s.role,O=(0,n.Z)(s,m),P=(0,i.jC)("Progress",e),Z=null!=k?k:null==(a=P.track)?void 0:a.borderRadius,D={animation:g+" 1s linear infinite"},S=!y&&f&&h,T=Object.assign({},S&&D,y&&{position:"absolute",willChange:"left",minWidth:"50%",animation:p+" 1s ease infinite normal none running"}),N=Object.assign({overflow:"hidden",position:"relative"},P.track);return r.createElement(i.m$.div,Object.assign({ref:t,borderRadius:Z,__css:N},O),r.createElement(j,{value:P},r.createElement(w,{"aria-label":x,"aria-labelledby":I,"aria-valuetext":_,min:d,max:v,value:l,isIndeterminate:y,css:T,borderRadius:Z,title:C,role:E}),b))}));_.displayName="Progress";(0,i.m$)("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}}).displayName="CircularProgressLabel"},3980:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(59694),r=a(15861),i=a(64687),s=a.n(i),o=a(64113),l=a(75778),u=a(26085),d=a(67294);var c=a(2616),m=a(63506),v=a(88837),f=(0,c.Xt)((function(e){var t,a,n=(0,c.CG)((function(e){return e.internal.routing.dynamicPaths}));if("undefined"==typeof window)return(0,v.tZ)(v.HY,{children:"dynamic"});var i=null===(t=e.location)||void 0===t||null===(a=t.hash)||void 0===a?void 0:a.substring(1);d.useEffect((function(){i&&n[i]||(0,u.navigate)("/")}),[i]);var f=(0,v.tZ)(o.M5,{my:"24",children:(0,v.tZ)(l.D8,{isIndeterminate:!0,color:"teal.300"})});return i&&n[i]?(0,v.tZ)((function(t){var a=t.path,i=n[a],o=i.pageId,l=i.templateName,c=(0,m.useSiteContext)().templateLoader;d.useEffect((function(){if(!(a in n)){var e=Object.keys(n).find((function(e){var t;return(null===(t=n[e])||void 0===t?void 0:t.pageId)===o}));e?(0,u.navigate)("/jaen/r#"+e):(0,u.navigate)("/")}}),[n]);var p,g,h,b,k,y=(0,m.useJaenTemplates)().templates,x=y?y.find((function(e){return e.name===l})):null,j=(p=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=4;break}return e.next=3,c(l);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),g=[x],h=d.useState({status:"idle",value:null,error:null}),b=h[0],k=h[1],d.useEffect((function(){p().then((function(e){return k({status:"fulfilled",value:e,error:null})})).catch((function(e){return k({status:"rejected",value:null,error:e})}))}),g),b).value;return j?(0,v.tZ)(j,Object.assign({},e,{pageContext:Object.assign({},e.pageContext,{jaenPageId:o}),data:Object.assign({},e.data,{jaenPage:null})})):f}),{path:i}):f})),p=function(){return"undefined"!=typeof window?(0,v.tZ)(n.Router,{primary:!1,children:(0,v.tZ)(f,{path:"/jaen/r"})}):null}}}]);
//# sourceMappingURL=component---node-modules-jaenjs-jaen-src-internal-plugins-pages-internal-services-routing-pages-jaen-r-tsx-04337395f2780f1600a6.js.map