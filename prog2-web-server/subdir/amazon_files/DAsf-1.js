!function i(r,s,d){function l(t,e){if(!s[t]){if(!r[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(c)return c(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=s[t]={exports:{}};r[t][0].call(o.exports,function(e){return l(r[t][1][e]||e)},o,o.exports,i,r,s,d)}return s[t].exports}for(var c="function"==typeof require&&require,e=0;e<d.length;e++)l(d[e]);return l}({1:[function(e,t,a){var n=e("./lib/replace"),o=e("./lib/getSlotPlaceholder");t.exports.replace=n,t.exports.getSlotPlaceholder=o},{"./lib/getSlotPlaceholder":2,"./lib/replace":4}],2:[function(e,t,a){var s=e("./globals"),d="data-val";t.exports=function(e,t,a){var n=s.getDocument(),o=[e,a,t].join("_"),i=n.getElementById("ape_"+o+"_placement_ClickTracking");if(!(i&&i.hasAttribute&&"function"==typeof i.hasAttribute&&i.hasAttribute(d)&&i.getAttribute&&"function"==typeof i.getAttribute))return"";var r=i.getAttribute(d);return"string"!=typeof r?"":r}},{"./globals":3}],3:[function(e,t,a){t.exports.getDocument=function(){return document}},{}],4:[function(e,t,a){var o="&pd_rd_plhdr=t",i=/(&amp;|\?){1}pd_rd_plhdr=t(&amp;|'|&quot;){1}/g,r=/(&|\?){1}pd_rd_plhdr=t(&|'|"|\\"|\\'){1}/g;t.exports=function(e,t){var a=t,n=e;"string"!=typeof e||e===o?n="":(n.startsWith("&")&&(n=n.replace(/^&+/,"")),n.endsWith("&")&&(n=n.replace(/&+$/,"")));try{return""===n?a.replace(new RegExp("\\bpd_rd_plhdr=t&"),"").replace(new RegExp(o+"\\b"),"").replace(new RegExp("\\?pd_rd_plhdr=t\\b"),""):a.replace(r,"$1"+n+"$2").replace(i,"$1"+n.replace(/&/g,"&amp;")+"$2")}catch(e){return t}}},{}],5:[function(e,t,a){var n=e("./ajaxRequest");t.exports.Tracer=function(e,t){return this.traceId=e,this.adStartTime=t,this.storedTrace={},this.logTrace=function(e,t){if(void 0!==this.traceId){var a,n=(new Date).getTime();this.storedTrace.hasOwnProperty(e)||(this.storedTrace[e]=[]),(a=t===Object(t)?Object.assign({},t):(a='{ "'+e+'":"'+t+'"}',JSON.parse(a))).timeStamp=n,a.timeSinceAdStart=n-this.adStartTime,this.storedTrace[e].push(a)}},this.sendTrace=function(){var t=function(){console.log("failed to send request to /gp/adbarplus")};if(!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(this.storedTrace)){var e="/gp/adbarplus?traceId="+this.traceId+"&systemName=browser";for(var a in n.sendAjaxRequest(e,"POST",JSON.stringify(this.storedTrace),{"Content-Type":"application/x-www-form-urlencoded"},function(e){4===e.readyState&&200!==e.status&&t()},t),this.storedTrace)this.storedTrace.hasOwnProperty(a)&&delete this.storedTrace[a]}},this.bindSendTraceToPageOnLoad=function(){var e=function(e,t){return function(){return e.apply(t)}},t=function(){this.sendTrace()},a=function(){this.sendTrace(),window.setInterval(e(t,this),3e3)};"loading"!==document.readyState?e(a,this)():window.addEventListener?window.addEventListener("load",e(a,this)):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&e(a,this)()})},void 0!==e&&this.bindSendTraceToPageOnLoad(),{traceId:this.traceId,adStartTime:this.adStartTime,storedTrace:this.storedTrace,allData:this.allData,logTrace:this.logTrace,sendTrace:this.sendTrace}}},{"./ajaxRequest":7}],6:[function(e,t,a){t.exports.AdBlockerCSMMediator=function(o,e){var i=this;this.adbMap=e||{};var n=function(e,t,a){var n=i.adbMap;!0!==n[e].adBlockerIsDisabled&&void 0!==n[e].adBlockerIsDisabled&&!1===n[e].adBlockerIsDisabled&&(!1===t?o(n[e].slot,n[e].placementId,"adblocker:blocked:".concat(a),1):!0===t&&o(n[e].slot,n[e].placementId,"adblocker:notblocked:".concat(a),1))};this.updateAdBlockerIsDisabled=function(e,t){var a=i.adbMap;a[e]&&(a[e].adBlockerIsDisabled=t,a[e].adBlockerIsDisabled?o(a[e].slot,a[e].placementId,"adblockernotdetected",1):o(a[e].slot,a[e].placementId,"adblockerdetected",1),n(e,a[e].adImgLoaded,"adimg"),n(e,a[e].adImpressionsFired,"adimpressions"),n(e,a[e].adViewabilityFired,"adviewability"))},this.updateAdImgLoaded=function(e,t){var a=i.adbMap;a[e]&&void 0===a[e].adImgLoaded&&(a[e].adImgLoaded=t,n(e,a[e].adImgLoaded,"adimg"))},this.updateAdImpressionsFired=function(e,t){var a=i.adbMap;a[e]&&void 0===a[e].adImpressionsFired&&(a[e].adImpressionsFired=t,n(e,a[e].adImpressionsFired,"adimpressions"))},this.updateAdViewabilityFired=function(e,t){var a=i.adbMap;a[e]&&void 0===a[e].adViewabilityFired&&(a[e].adViewabilityFired=t,n(e,a[e].adViewabilityFired,"adviewability"))},this.updateNoInventoryViewabilityFired=function(e,t){var a=i.adbMap;a[e]&&void 0===a[e].noInventoryViewabilityFired&&(a[e].noInventoryViewabilityFired=t,n(e,a[e].noInventoryViewabilityFired,"noInventoryViewability"))},this.updateNoInventoryImpressionFired=function(e,t){var a=i.adbMap;a[e]&&void 0===a[e].noInventoryImpressionsFired&&(a[e].noInventoryImpressionsFired=t,n(e,a[e].noInventoryImpressionsFired,"noInventoryImpressions"))}}},{}],7:[function(e,t,a){t.exports.sendAjaxRequest=function(e,t,a,n,o,i){try{var r=null;if(window.XMLHttpRequest?r=new XMLHttpRequest:i(),r){if(r.onreadystatechange=function(){o(r)},r.open(t,e,!0),null!==n)for(var s in n)r.setRequestHeader(s,n[s]);r.send(a)}else i()}catch(e){i()}}},{}],8:[function(e,t,a){var c=e("./counters");t.exports.checkCache=function(e,t,a,n,o){var i=c.CACHE_COUNTERS;if("undefined"!=typeof performance&&void 0!==performance.getEntriesByType){var r=performance.getEntriesByType("resource");if(void 0!==r&&Array.isArray(r)&&!(r.length<1)&&void 0!==r[0].duration){var s=void 0!==r[0].transferSize?function(e,t){0===e.transferSize?d(t+"cached"):d(t+"uncached")}:function(e,t){e.duration<20?d(t+"fastload"):d(t+"slowload")};l(e,i.SF_LIBRARY),l(t,i.SF_HTML)}}function d(e){o(a,n,e,1)}function l(e,t){if(e)for(var a=0;a<r.length;a++){var n=r[a];if(n.name&&-1!==n.name.indexOf(e))return void s(n,t)}}}},{"./counters":10}],9:[function(e,t,a){var n=e("@apejs/click-tracking");t.exports.getSlotPlaceholder=function(e){if(!("pageType"in e&&"subPageType"in e&&"slot"in e))return"";try{return n.getSlotPlaceholder(e.pageType,e.subPageType,e.slot)}catch(e){return""}}},{"@apejs/click-tracking":1}],10:[function(e,t,a){t.exports.AD_LOAD_COUNTERS={START:"adload:start",CALLBACK:"adload:delayloadcallback",IFRAME_CREATED:"adload:iframecreated"},t.exports.CACHE_COUNTERS={SF_LIBRARY:"cache:sflibrary:",SF_HTML:"cache:sfhtml:"},t.exports.FEEDBACK_COUNTERS={REQUEST:"adfeedback:request",SUCCESS:"adfeedback:success",FALLBACK:"adfeedback:fallback"},t.exports.MESSENGER_COUNTERS={API:"messenger:"},t.exports.ABP_STATUS_COUNTERS={1:"abpstatus:enabled",0:"abpstatus:notenabled","-1":"abpstatus:unknown"},t.exports.SF_VERSION_COUNTERS={VERSION:"sfversion"}},{}],11:[function(e,t,a){var r={bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};t.exports.sendCsmMetric=function(e,t,a,n){var o=r[e],i=n?n+":":"";"function"==typeof window[o]&&(window[o](e,"adplacements:"+i+t.replace(/_/g,":"),{wb:1}),a&&window[o](e,"adplacements:"+i+a,{wb:1}))},t.exports.sendCsmCounter=function(e,t,a,n){if(window.ue&&"function"==typeof window.ue.count){var o="adplacements:"+a;if(e&&(o+=":"+e.replace(/_/g,":")),window.ue.count(o,n),t){var i="adplacements:"+(a&&t?a+":":a)+t;window.ue.count(i,n)}}},t.exports.addCsmTag=function(e,t,a,n){if(window.ue&&window.ue.tag){var o=e+":"+t.replace(/_/g,":")+(n?":"+n:"");if(window.ue.tag(o),a){var i=e+":"+a+(n?":"+n:"");window.ue.tag(i)}}}},{}],12:[function(e,a,t){
/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
a.exports.debounce=function(t,a,n){var o,i,r,s,d,l=function(){var e=u()-s;e<a&&0<=e?o=setTimeout(l,a-e):(o=null,n||(d=t.apply(r,i),o||(r=i=null)))};return function(){r=this,i=arguments,s=u();var e=n&&!o;return o||(o=setTimeout(l,a)),e&&(d=t.apply(r,i),r=i=null),d}},a.exports.throttle=function(a,n,o){var i,r,s,d=null,l=0;o||(o={});var c=function(){l=!1===o.leading?0:u(),d=null,s=a.apply(i,r),d||(i=r=null)};return function(){var e=u();l||!1!==o.leading||(l=e);var t=n-(e-l);return i=this,r=arguments,t<=0||n<t?(d&&(clearTimeout(d),d=null),l=e,s=a.apply(i,r),d||(i=r=null)):d||!1===o.trailing||(d=setTimeout(c,t)),s}};var u=function(){return Date.now?Date.now():(new Date).getTime()};function n(){return window.P&&window.P.AUI_BUILD_DATE}a.exports.addListener=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):window.attachEvent&&e.attachEvent("on"+t,a)},a.exports.addWindowListener=function(e,t){a.exports.addListener(window,e,t)},a.exports.removeWindowListener=function(e,t){window.removeEventListener?window.removeEventListener(e,t,!1):window.detachEvent&&window.detachEvent("on"+e,t)},a.exports.ensureMessageListener=function(e){a.exports.removeWindowListener("message",e),a.exports.addWindowListener("message",e)},a.exports.decodeBase64=function(e){var t,a,n,o,i,r,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="",l=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<e.length;)t=s.indexOf(e.charAt(l++))<<2|(o=s.indexOf(e.charAt(l++)))>>4,a=(15&o)<<4|(i=s.indexOf(e.charAt(l++)))>>2,n=(3&i)<<6|(r=s.indexOf(e.charAt(l++))),d+=String.fromCharCode(t),64!=i&&(d+=String.fromCharCode(a)),64!=r&&(d+=String.fromCharCode(n));return d=function(e){for(var t="",a=0,n=0,o=0,i=0;a<e.length;)(n=e.charCodeAt(a))<128?(t+=String.fromCharCode(n),a++):191<n&&n<224?(o=e.charCodeAt(a+1),t+=String.fromCharCode((31&n)<<6|63&o),a+=2):(o=e.charCodeAt(a+1),i=e.charCodeAt(a+2),t+=String.fromCharCode((15&n)<<12|(63&o)<<6|63&i),a+=3);return t}(d)},a.exports.createScript=function(e,t,a,n,o){if(!document.getElementById(a)){var i=document.createElement("script");return i.async=!0,i.setAttribute("crossorigin","anonymous"),i.src=e,i.type=t,i.id=a,i.onerror=n,i.onload=o,i}},a.exports.isAUIAvailable=n,a.exports.safeFunctionWrapper=function(e,t,a){return n()&&"function"==typeof window.P.guardError?P.guardError("APE-SafeFrame",e):function(){try{e.apply(this,arguments)}catch(e){"function"==typeof t&&a&&t(a,e)}}},a.exports.getCookie=function(e){var t=e+"=";try{for(var a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var o=a[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}}catch(e){}return""}},{}],13:[function(e,c,t){function u(e,t,a){var n=0;return document.hidden?n:(n=0<e?a-e:0<t?Math.min(t,a):0,Math.min(n,t-e))}function p(){try{var e={};return e.t=window.screenY?window.screenY:window.screenTop,e.l=window.screenX?window.screenX:window.screenLeft,e.w=c.exports.windowWidth(),e.h=c.exports.windowHeight(),e.b=e.t+e.h,e.r=e.l+e.w,e}catch(e){return null}}function m(e,t){try{var a={},n=t||e.getBoundingClientRect();a.t=n.top,a.l=n.left,a.r=n.right,a.b=n.bottom,a.w=n.width||a.r-a.l,a.h=n.height||a.b-a.t,e&&(a.z=Number(window.getComputedStyle(e,null).zIndex));var o=c.exports.windowWidth(),i=c.exports.windowHeight(),r=Math.max(0,u(a.t,a.b,i)),s=Math.max(0,u(a.l,a.r,o)),d=r*s,l=a.h*Math.min(a.w,c.exports.windowWidth());return a.xiv=Number(Math.min(1,s/a.w).toFixed(2)),a.yiv=Number(Math.min(1,r/a.h).toFixed(2)),a.iv=Number(Math.min(1,Math.max(0,d/l)).toFixed(2)),a}catch(e){return null}}function f(e,t){try{var a={},n=t||e.getBoundingClientRect();return a.t=n.top,a.l=n.left,a.r=c.exports.windowWidth()-n.right,a.b=c.exports.windowHeight()-n.bottom,a.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>c.exports.windowWidth()?1:0,a.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>c.exports.windowHeight()?1:0,a}catch(e){return null}}c.exports.PERCENT_VIEWABLE=.5,c.exports.DURATION_VIEWABLE=500,c.exports.findPercentInView=function(e){try{var t=e.getBoundingClientRect(),a=u(t.top,t.bottom,c.exports.windowHeight())*u(t.left,t.right,c.exports.windowWidth()),n=(t.bottom-t.top)*Math.min(t.right-t.left,c.exports.windowWidth());return Math.min(1,Math.max(0,a/n))}catch(e){return null}},c.exports.findVerticalPositionReached=function(){try{return window.scrollY+c.exports.windowHeight()}catch(e){return null}},c.exports.findDistanceInView=function(e){try{return e.getBoundingClientRect().top-c.exports.windowHeight()}catch(e){return null}},c.exports.getViewableInfo=function(e){if(!e)return null;var t={},a=p(),n=m(e),o=f(e);return a&&n&&o?(t.geom={},t.geom.win=a,t.geom.self=n,t.geom.exp=o,t.payload={},t.payload.wh=a.h,t.payload.ww=a.w,t.payload.sx=window.scrollX,t.payload.sy=window.scrollY,t.payload.ah=n.h,t.payload.aw=n.w,t.payload.top=n.t,t.payload.left=n.l,t):null},c.exports.takeSnapshotOfSlotPosition=function(e){try{return{initialBoundingRect:e.getBoundingClientRect(),adHeight:e.offsetHeight,adWidth:e.offsetWidth,originalScrollX:window.scrollX,originalScrollY:window.scrollY}}catch(e){return null}},c.exports.getNoInventoryViewabilityData=function(e){var t,a,n,o,i,r,s={},d=(a=(t=e).initialBoundingRect,n=a.top-(window.scrollY-t.originalScrollY),o=n+t.adHeight,i=a.left-(window.scrollX-t.originalScrollX),r=i+t.adWidth,{top:n,bottom:o,left:i,right:r,width:t.adWidth,height:t.adHeight}),l=p(),c=m(null,d),u=f(null,d);return l&&c&&u?(s.geom={},s.geom.win=l,s.geom.self=c,s.geom.exp=u,s.payload={},s.payload.wh=l.h,s.payload.ww=l.w,s.payload.sx=window.scrollX,s.payload.sy=window.scrollY,s.payload.ah=c.h,s.payload.aw=c.w,s.payload.top=c.t,s.payload.left=c.l,s):null},c.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},c.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}],14:[function(i,e,t){
/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * APE SafeFrame v1.50.62847f7 -- 2019-03-28T17:25:19+0000
*/
!function(L,F){var e=i("./messenger/msgHandler"),t=i("../components/adBlockerHandler"),R=i("../components/counters"),l=i("../components/cacheChecker"),D=i("../components/adBarTracer"),N=i("../components/ajaxRequest"),c=i("../components/csm"),B=i("../components/clickTrackingHelper"),u=e.util,p=e.viewability,W=e.messenger,_=e.logError,m=W.appendErrorDetails,a=e.loadScript,z=c.sendCsmMetric,P=c.sendCsmCounter,O=c.addCsmTag,n=e.fireViewableLatencyMetrics,V=e.hasClass,f=e.createIframeWithName,H=e.logCounter,U=e.collapseSlot,q=e.resizeSafeFrameAd,j=e.delayLoad,J=e.getMediaCentralOrigin,$=e.scriptValidator,Q=e.sizeValidator,Y=e.appendJsScript,X=e.checkAgainstWhitelist,K=new t.AdBlockerCSMMediator(P);function o(){if(L.DAsf)L.DAsf.loadAds();else{L.DAsf={version:"1.50.62847f7"},P(null,null,R.SF_VERSION_COUNTERS.VERSION+":"+L.DAsf.version,1);var g="text/x-dacx-safeframe",e=J(),h=e+"/images/G/01/ape/sf/desktop/sf-1.50.62847f7._V468670182_.html",w=e+"/images/G/01/ape/sf/whitelisted/desktop/sf-1.50.62847f7._V468670177_.html",v={1:"Enabled",0:"NotEnabled","-1":"Unknown"},y="data-arid",b="d16g_postMessageUnsupported",S="d16g_postMessageSupported",T=R.ABP_STATUS_COUNTERS,A=R.AD_LOAD_COUNTERS,a=R.MESSENGER_COUNTERS,o={},i={},x={},I={},r=null,s=null;s=u.safeFunctionWrapper(u.debounce(function(){return function(e,t){c.sendCsmCounter(null,null,"renderviewableads",1);var a=!0;for(var n in i)if(i[n].iframe&&i[n].iframe.contentWindow&&!i[n].alreadyRendered){a=!1;var o=i[n].slot;p.findPercentInView(o)>=e?i[n].timeout||(i[n].timeout=setTimeout(d(n),t)):i[n].timeout&&(clearTimeout(i[n].timeout),i[n].timeout=null)}a&&(u.removeWindowListener("scroll",s),u.removeWindowListener("resize",s))}(p.PERCENT_VIEWABLE,p.DURATION_VIEWABLE)},100)),W.supportedCommands={sendAdBarTrace:function(e,t){e.options.arid in I&&I[e.options.arid].logTrace(t.field,t.traceInfo)},logAPIInvocation:function(e,t){P(null,null,a.API+t.apiName,1),P(e.options.slot,e.options.placementId,a.API+t.apiName,1),e.options.arid in I&&I[e.options.arid].logTrace("apiCalls",t)},resizeSafeFrameAd:function(e,t){u.addWindowListener("resize",o[e.options.arid].defaultResizeSafeFrameHandler),q(e.options.arid,e.options.size.width,e.options.size.height,e.options.maxAdWidth,W,x)},changeSize:function(e,t){var a=e.options.allowedSizes;if(X(t,a,Q))e.slot.style.width=t.width,e.iframe.height=t.height,e.iframe.width=t.width;else{var n="Size is not whitelisted: "+t.width+" x "+t.height+m(e.options.arid);_(n)}},collapseSlot:function(e,t){U(x[e.options.arid].placementDivId),"nav-sitewide-msg"===e.options.slotName&&j("amznJQ.available:navbarJSLoaded",function(){void 0!==parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(e,t){var a=e.options.allowedDomains;if(X(t.src,a,$))e.slot=F.getElementById(x[e.options.arid].placementDivId),void 0!==e.slot&&Y(t.src,e.slot,t.charset);else{var n="Domain is not whitelisted: "+t.src+m(e.options.arid);_(n)}},logError:function(e,t){_(t.message+m(e.options.arid)+": "+e.options.slot,t.error)},sendMetrics:function(e,t){z(t.metric,e.options.slot,e.options.placementId,t.metricMsg)},countMetric:function(e,t){t.isGlobal?P(null,null,t.metricMsg,t.value):P(e.options.slot,e.options.placementId,t.metricMsg,t.value)},addCsmTag:function(e,t){O(t.tag,e.options.slot,e.options.placementId,t.msg)},fireViewableLatencyMetrics:function(e,t){n(e.options.arid,e.options.slot,e.options.placementId)},customMessage:function(e,t){W.customMessage(t.key,t.body)},notifyWhenViewable:function(e,t){i[e.options.arid]||(e.rendered=!1,i[e.options.arid]=e),s(),u.addWindowListener("scroll",s),u.addWindowListener("resize",s)},enableViewabilityTracker:function(e){W.updateViewability(e.options.arid);var t=u.throttle(W.updateViewability,20);E(e.options.arid,e.options.slot,"viewabilityTracker",function(){t(e.options.arid)}),u.addWindowListener("scroll",o[e.options.arid].viewabilityTracker),u.addWindowListener("resize",o[e.options.arid].viewabilityTracker),u.addListener(F,"visibilitychange",o[e.options.arid].viewabilityTracker)},enableNoInventoryViewabilityTrackerAndInvokeFallback:function(e){W.takeSnapshotOfSlotPosition(e.options.arid),W.updateNoInventoryViewability(e.options.arid),W.sendMessageToAd(e.options.arid,"handleFallbackBehavior",{});var t=u.throttle(W.updateNoInventoryViewability,20);E(e.options.arid,e.options.slot,"noInventoryViewabilityTracker",function(){t(e.options.arid)}),u.addWindowListener("scroll",o[e.options.arid].noInventoryViewabilityTracker),u.addWindowListener("resize",o[e.options.arid].noInventoryViewabilityTracker),u.addListener(F,"visibilitychange",o[e.options.arid].noInventoryViewabilityTracker)},loadAdBlockerDetectorScript:function(e,t){var a=J()+"/images/G/01/ads/advertising/ads._TTH_.js?cachebust="+Math.ceil(99989999*Math.random()+1e4),n=u.safeFunctionWrapper(function(){K.updateAdBlockerIsDisabled(e.options.arid,!1),W.sendMessageToAd(e.options.arid,"forceFallback",{})}),o=u.createScript(a,"text/javascript","APE_adblockerdetector",n,function(){K.updateAdBlockerIsDisabled(e.options.arid,!0)}),i=F.getElementById(x[e.options.arid].placementDivId);i?i.appendChild(o):F.body.appendChild(o)},updateAdImgLoaded:function(e,t){K.updateAdImgLoaded(e.options.arid,t.isLoaded)},loadAdFeedback:function(e,t){var a=W.adMap[e.options.arid].iframe;e.options.adCreativeMetaData=t,function(e,i){var t={};if(t.isFeedbackLoaded=e.isFeedbackLoaded,e&&!e.isFeedbackLoaded&&i.adFeedbackInfo.boolFeedback){e.isFeedbackLoaded=!0;var a=e.parentNode,r=i.placementId,n=i.adFeedbackInfo.slugText,o=i.adFeedbackInfo.endPoint,s=i.advertisementStyle,d=i.feedbackDivStyle,l=R.FEEDBACK_COUNTERS,c={adPlacementMetaData:i.adPlacementMetaData,adCreativeMetaData:i.adCreativeMetaData};t.slot=a,t.placementId=r,t.slugText=n,t.endPoint=o,t.advertisementStyle=s,t.feedbackDivStyle=d,t.adFeedbackParams=c;var u=function(e,t,a,n){var o=F.createElement(e);for(var i in t)o.setAttribute(i,t[i]);return function(e,t){if(e&&t)for(var a in t)e.style[a]=t[a]}(o,a),n&&n.insertBefore(o,null),o},p=a.getElementsByTagName("div")[0]||u("div",{id:a.id+"_Feedback"},d,a),m=function(){I[i.arid].logTrace("adFeedBack",{renderFallbackAdvertisement:!0}),P(i.slot,r,l.FALLBACK,1);var e=p.getElementsByTagName("div")[0]||u("div",0,s,p);e.innerHTML=n},f=o&&o.length?L.location.protocol+"//"+L.location.hostname+o+"?pl="+(g=c,encodeURIComponent(JSON.stringify(g))):o;t.requestUrl=f,I[i.arid].logTrace("adFeedBack",{adFeedbackRequest:t}),f?(P(i.slot,r,l.REQUEST,1),N.sendAjaxRequest(f,"GET",null,null,function(e){var t={feedbackResponseStarted:!0};if(4===e.readyState){if(200===e.status)try{var a=e.responseText,n=JSON.parse(a);if((t.response=n)&&"ok"===n.status){if("html"in n&&n.html&&(p.innerHTML=n.html),"script"in n&&n.script){var o=p.getElementsByTagName("script")[0]||u("script",0,null,p);o.innerHTML=n.script}P(i.slot,r,l.SUCCESS,1),t.feedBackResponseReturned=!0}else m()}catch(e){m()}else t.feedBackResponseReturned=!1,m();I[i.arid].logTrace("adFeedBack",{adFeedBackResponse:t})}},m)):m()}var g}(a,e.options)},safeFrameReady:function(e){},requestVideoAutoplay:function(e,t){if(r===e.options.arid&&W.sendCustomMessageToAd(e.options.arid,"videoAutoplayResponse",!0),null===r&&null!==e.options.arid){var a=F.getElementsByTagName("video"),n=a&&0===a.length;r=n?e.options.arid:null,W.sendCustomMessageToAd(e.options.arid,"videoAutoplayResponse",n)}},releaseVideoAutoplay:function(e,t){r=null,W.sendCustomMessageToAd(e.options.arid,"videoAutoplayReleased")}},u.addWindowListener("message",W.receiveMessage),L.DAsf.registerCustomMessageListener=W.registerCustomMessageListener,L.DAsf.sendCustomMessage=W.sendCustomMessage,L.DAsf.loadAds=function(){var e,t,a=0,n=null,o=[];if("function"!=typeof F.getElementsByClassName){var i=F.getElementsByTagName("div"),r=F.getElementsByTagName("script"),s=0;for(s=0;s<i.length;s++)o[s]=i[s];for(s=0;s<r.length;s++)o[s+i.length]=r[s]}else o=F.getElementsByClassName(g);for(0===o.length&&(o=F.getElementsByTagName("script"));n=o[a++];)if("DIV"===n.tagName&&V(n,g)||n.getAttribute("type")===g){var d=n.getAttribute("data-ad-details")||n.text||n.innerHTML||n.innerText;try{var l="ape_"+(d=JSON.parse(d)).slot+"_placement",c=F.getElementById(l);if(!W.adMap[d.arid]&&c&&c.innerHTML&&(c.innerHTML="",n.removeAttribute(y)),n.getAttribute(y))continue;d.arid=d.arid||Math.random().toString(16).slice(2),I[d.arid]=new D.Tracer(d.traceId,L[d.slotName]&&L[d.slotName].adStartTime||0),I[d.arid].logTrace("safeFrameInput",d);var u={};u.caches=L.caches?L.caches:null,u.plugins=F.plugins?F.plugins:null,u.cookies=F.cookie?F.cookie:null,u.userAgents=navigator.userAgent?navigator.userAgent:null,I[d.arid].logTrace("browserData",u),n.setAttribute(y,d.arid),d.hostDomain=location.protocol+"//"+location.host,d.allowedSizes="object"==typeof d.allowedSizes&&0<=d.allowedSizes.length?d.allowedSizes.concat(d.size):[d.size];var p="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(d.allowedDomains="object"==typeof d.allowedDomains&&0<=d.allowedDomains.length?d.allowedDomains.concat(p):p,d.productAdsUrl=L.paSearchTowerAdsURL||L.paCusRevAllURL,d.parentLocation=location.origin||location.protocol+location.hostname,d.queryParams=M(),d.aPageStart=L.aPageStart,d.adStartTime=L[d.slotName]&&L[d.slotName].adStartTime||0,E(d.arid,d.slot,"defaultResizeSafeFrameHandler",C(d)),e=d.arid,t=d.slot,x[e]={slotId:t,placementDivId:"ape_"+t+"_placement",iframeId:"ape_"+t+"_iframe"},"clickTracking"in d&&""===d.clickTracking&&(d.clickTracking=B.getSlotPlaceholder(d)),d.forcePunt){O("forcePunt",d.slot,d.placementId),U(x[d.arid].placementDivId);continue}if(d.safeFrameSrc="true"===d.abpAcceptable?w:h,d.abpStatus)for(var m in O("ABPStatus"+v[d.abpStatus],d.slot),v)P(d.slot,d.placementId,T[m],d.abpStatus===m?1:0);z("af",d.slot,d.placementId),P(d.slot,d.placementId,A.START,1);var f={};if(f.hostDomain=d.hostDomain,f.allowedSizes=d.allowedSizes,f.allowedDomains=d.allowedDomains,f.productAdsUrl=d.productAdsUrl,f.parentLocation=d.parentLocation,f.queryParams=d.queryParams,f.aPageStart=d.aPageStart,f.adStartTime=d.adStartTime,f.safeFrameSrc=d.safeFrameSrc,f.abpStatus=d.abpStatus,"function"!=typeof L.postMessage){H(b,1),U(x[d.arid].placementDivId),f.postMessage="postMessageNotSupported";continue}H(S,1),j(d.loadAfter,k(d),0,n),f.postMessage="postMessageSupported",f.loadAfter=d.loadAfter,I[d.arid].logTrace("additionalInitilizationParams",f)}catch(e){d=null,_("Error parsing sf tag",e)}}},L.DAsf.loadAds()}function E(e,t,a,n){o[e]=o[e]||{},o[e][a]=u.safeFunctionWrapper(n,_,"Error within ad handler "+a+": "+t)}function d(t){return function(){var e={key:"readyToRender",data:t};W.sendMessageToAd(t,"customMessage",e),c.sendCsmCounter(null,null,"renderadmessage",1),i[t].timeout=null,i[t].alreadyRendered=!0}}function M(){var e={};try{for(var t=L.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("="),o=n[0];1<n.length&&0===o.indexOf("sf-")&&(e[o]=n[1])}}catch(e){_("Error parsing query parameters",e)}return e}function C(e){return function(){q(e.arid,e.size.width,e.size.height,e.maxAdWidth,W,x)}}function k(t){return u.safeFunctionWrapper(function(){var e={callbackOccurred:!0};e.loadAfter=t.loadAfter,I[t.arid].logTrace("pageCallBack",e),P(t.slot,t.placementId,A.CALLBACK,1),function(e,t){if(!e)return!1;var a=F.getElementById(e);if(a&&!a.innerHTML){var n=a.getAttribute(y);if(n&&n===t.arid)return!0}return!1}(x[t.arid].placementDivId,t)&&function(t){try{var a,n=JSON.stringify(t),e=F.getElementById(x[t.arid].placementDivId),o={};if(/MSIE (6|7|8)/.test(navigator.userAgent))try{a=F.createElement("<iframe name='"+n+"'>")}catch(e){a=f(n)}else a=f(n);a.id=x[t.arid].iframeId,a.src=t.safeFrameSrc,a.scrolling="no",a.height=t.size.height||"250px",a.width=t.size.width||"300px",a.className=t.iframeClass||"",a.setAttribute("frameborder","0"),a.setAttribute("marginheight","0"),a.setAttribute("marginwidth","0"),a.setAttribute("scrolling","no"),a.setAttribute("allowtransparency","true"),a.setAttribute("allowfullscreen",""),a.setAttribute("mozallowfullscreen",""),a.setAttribute("webkitallowfullscreen",""),a.setAttribute(y,t.arid),a.style.cssText=t.iframeExtraStyle||"",t.iframeSandbox&&(a.sandbox=t.iframeSandbox,o.sandbox=a.sandbox),a.onload=function(){l.checkCache(t.DAsfUrl,t.safeFrameSrc,t.slot,t.placementId,P)},e.appendChild(a),z("cf",t.slot,t.placementId),P(t.slot,t.placementId,A.IFRAME_CREATED,1),W.adMap[t.arid]={slot:e,iframe:a,options:t},K.adbMap[t.arid]={slot:t.slot,adBlockerIsDisabled:void 0,adImgLoaded:void 0,adImpressionsFired:void 0,adViewabilityFired:void 0,placementId:t.placementId},o.id=a.id,o.src=a.src,o.scrolling=a.scrolling,o.height=a.height,o.width=a.width,o.className=a.className,o.styleCssText=a.style.cssText,I[t.arid].logTrace("createSafeFrame",o)}catch(e){_("Error creating safeFrame",e),I[t.arid]&&I[t.arid].logTrace("createSafeFrame",{error:{message:"errorCreatingSafeFrame",ex:e}})}}(t)},_,"Error in callback to create Safeframe.")}}u.safeFunctionWrapper(function(){"undefined"==typeof JSON?a("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",o):o()},_,"Error initializing safeFrame")()}(window,document)},{"../components/adBarTracer":5,"../components/adBlockerHandler":6,"../components/ajaxRequest":7,"../components/cacheChecker":8,"../components/clickTrackingHelper":9,"../components/counters":10,"../components/csm":11,"./messenger/msgHandler":15}],15:[function(e,t,a){var p=e("../../components/viewability"),m=e("../../components/util"),n=e("../../components/csm"),o=n.sendCsmMetric,i=n.sendCsmCounter,r={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},c=s();function f(e,t){var a=t||new Error(e);i("",null,"safeFrameError",1),window.sfLogErrors&&(window.ueLogError?window.ueLogError(a,{logLevel:r.ERROR,attribution:"APE-safeframe",message:e+" "}):"undefined"!=typeof console&&console.error&&console.error(e,a))}function s(){var e=window.location.host.match(/^.*\.([^.:/]*)/),t=null;if(e&&1<e.length&&(t=e[1]),!/s/.test(location.protocol))return"cn"===t?"http://g-ec4.images-amazon.com":"http://z-ecx.images-amazon.com";var a="na";return/^(com|ca|mx)$/.test(t)?a="na":/^(uk|de|fr|it|es|in)$/.test(t)?a="eu":/^(jp|au)$/.test(t)?a="fe":/^(cn)$/.test(t)&&(a="cn"),"https://images-"+a+".ssl-images-amazon.com"}function u(e){return e.replace(/^.{1,5}:\/\/|^\/\//,"")}function g(e,t,a,n){var o=!1,i=function(){n(a,e)&&(t(),o=!0)},r=m.safeFunctionWrapper(m.throttle(function(){i(),o&&(m.removeWindowListener("scroll",i),m.removeWindowListener("resize",i))},20));m.addWindowListener("scroll",r),m.addWindowListener("resize",r)}t.exports.util=m,t.exports.viewability=p,t.exports.messenger=new function(e,t,a){var l=this;this.adMap=e||{},this.supportedCommands=t||{},this.msgListeners=a||{};var r=function(e){var t=l.adMap,a=t[e].options;if(t==={}||a==={})return null;var n="ape_"+a.slot+"_iframe";return t[e].iframe&&(t[e].iframe=t[e].iframe&&t[e].iframe.innerHTML?t[e].iframe:document.getElementById(n)),t[e].iframe};this.sendMessageToAd=function(e,t,a){var n=r(e),o=n?n.contentWindow:null;if(o){var i={command:t,data:a};i=JSON.stringify(i),o.postMessage(i,"*")}},this.receiveMessage=function(t){var e=l.adMap,a=l.supportedCommands;if(e!=={}){var n,o,i,r,s;try{if(t.data&&t.data.message&&/.*Mash.*/i.test(t.data.message.id))throw"Received Mash message";o=e[(n=JSON.parse(t.data)).arid]}catch(e){return}try{if(s=t,!(r=o)||!r.options||!r.options.msfInlined&&u(s.origin)!==u(c)||"object"!=typeof n.data)throw"Invalid Message: "+JSON.stringify(t.data);var d=a[n.command];d&&(o.options.debug&&"undefined"!=typeof console&&console.log(t),d(o,n.data))}catch(e){i="Problem with message: "+t.data,void 0!==n&&(i+=l.appendErrorDetails(n.arid)),f(i,e)}}},this.appendErrorDetails=function(e){var t=l.adMap;if(t==={})return"";var a="";if(void 0!==t[e]){var n=t[e].options;void 0!==n.aanResponse&&(a=" Ad Details: "+JSON.stringify(n.aanResponse))}return a},this.customMessage=function(e,t){var a=l.msgListeners;if(a[e])try{a[e](t)}catch(e){f("Custom Message Error",e)}else f("Unrecognized custom message key: "+e)},this.registerCustomMessageListener=function(e,t,a){var n=!1,o=l.msgListeners;try{!o[e]||"function"!=typeof o[e]||a?(o[e]=t,n=!0):f("Duplicate Key",new Error("Custom message listener already exists for key: "+e))}catch(e){f("Error registering custom message listener",e)}return n},this.sendCustomMessage=function(e,t){var a=l.adMap,n={key:e,data:t};for(var o in a)l.sendMessageToAd(o,"customMessage",n)},this.sendCustomMessageToAd=function(e,t,a){var n={key:t,data:a};l.sendMessageToAd(e,"customMessage",n)},this.takeSnapshotOfSlotPosition=function(e){var t=l.adMap,a=t&&t[e]&&t[e].options;if(t&&t!=={}&&a&&a!=={}){var n=r(e);l.adMap[e].options.slotSnapshot=p.takeSnapshotOfSlotPosition(n)}},this.updateViewability=function(e){var t=l.adMap,a=t&&t[e]&&t[e].options;if(t&&t!=={}&&a&&a!=={}){var n=r(e),o=t[e].options.viewabilityStandards,i=p.getViewableInfo(n);null!==i&&(i.viewabilityStandards=o,l.sendMessageToAd(e,"updateViewability",i))}},this.updateNoInventoryViewability=function(e){var t=l.adMap,a=t&&t[e]&&t[e].options,n=a&&a.slotSnapshot;if(t&&t!=={}&&a&&a!=={}&&n){var o=a.viewabilityStandards,i=p.getNoInventoryViewabilityData(n);null!==i&&(i.viewabilityStandards=o,l.sendMessageToAd(e,"updateViewability",i))}}},t.exports.logError=f,t.exports.SF_DOMAIN=c,t.exports.loadScript=function(e,t){var a=document.createElement("script");a.src=e,a.setAttribute("crossorigin","anonymous"),a.onload=a.onreadystatechange=function(){a.readyState&&"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onload=a.onreadystatechange=null,t&&"function"==typeof t&&t())},a.onerror=function(e){return f("Error loading script",e),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)},t.exports.fireViewableLatencyMetrics=function(e,t,a){window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[e]&&window.apeViewableLatencyTrackers[e].valid&&(window.apeViewableLatencyTrackers[e].loaded=!0,window.apeViewableLatencyTrackers[e].viewed&&(o("ld",t,a,"viewablelatency"),i(t,a,"htmlviewed:loaded",1)))},t.exports.hasClass=function(e,t){var a=new RegExp("(^|\\s)"+t+"(\\s|$)"),n=e.className;return n&&a.test(n)},t.exports.createIframeWithName=function(e){var t=document.createElement("iframe");return t.name=e,t},t.exports.logCounter=function(e,t){window.ue&&"function"==typeof window.ue.count&&window.ue.count(e,t)},t.exports.collapseSlot=function(e){var t=document.getElementById(e);void 0!==t&&t&&(t.style.display="none")},t.exports.resizeSafeFrameAd=function(t,a,n,e,o,i){try{var r=document.getElementById(i[t].placementDivId),s=document.getElementById(i[t].wrapperDivId)||r,d=document.getElementById(i[t].iframeId);if(null===s||null===r||null===d)return;var l=n,c=a,u=function(e){l=Math.round(e*n/a),c=Math.round(e)},p=0===s.offsetWidth?window.innerWidth:s.offsetWidth;e&&window.innerHeight<window.innerWidth?u(e):u(p),o&&o.adMap&&o.adMap[t]&&o.adMap[t].options&&o.adMap[t].options.slotSnapshot&&(o.adMap[t].options.slotSnapshot.adHeight=l,o.adMap[t].options.slotSnapshot.adWidth=c),l+="px",c+="px",d.style.height=l;var m={width:d.style.width=c,height:l};s!==r&&(r.style.height=l,o.sendMessageToAd(t,"resizeCreativeWrapper",m))}catch(e){f("Error resizing ad: "+i[t].slotId,e)}},t.exports.delayLoad=function(e,t,a,n){var o="undefined"!=typeof P,i="undefined"!=typeof amznJQ,r="number"==typeof a&&0!==a?function(){setTimeout(t,a)}:t;if("windowOnLoad"===e)"complete"===document.readyState?r():m.addWindowListener("load",r);else if("spATFEvent"===e)o?P.when("search-page-utilities").execute(function(e){e.afterEvent("spATFEvent",r)}):i?amznJQ.available("search-js-general",function(){window.SPUtils.afterEvent("spATFEvent",r)}):r();else if("aboveTheFold"===e)o?P.when("af").execute(r):i?amznJQ.onCompletion("amznJQ.AboveTheFold",r):r();else if("criticalFeature"===e)o?P.when("cf").execute(r):i?amznJQ.onCompletion("amznJQ.criticalFeature",r):r();else if("r2OnLoad"===e)o?P.when("r2Loaded").execute(r):i?amznJQ.onReady("r2Loaded",r):r();else if(e.match("[^:]+:.+")){var s=e.split(":"),d=s[0].split("."),l=s[1],c=2<s.length?s[2]:l;o?P.when(c,"A").execute(r):i&&1<d.length?amznJQ[d[1]](l,r):r()}else if(e.match(/^\d{1,4}px$/g))g(parseInt(e,10),r,n,function(e,t){return e&&p.findDistanceInView(e)<=t});else{var u=/^reached(\d{1,5}px)FromTop$/g.exec(e);u?g(parseInt(u[1],10),r,n,function(e,t){return p.findVerticalPositionReached()>=t}):r()}},t.exports.getMediaCentralOrigin=s,t.exports.appendJsScript=function(e,t,a){var n=document.createElement("script");n.charset=a||"utf-8",n.src=e,t.appendChild(n)},t.exports.scriptValidator=function(e,t){return e.match(/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/)[2]===t},t.exports.sizeValidator=function(e,t){return e.height===t.height&&e.width===t.width},t.exports.checkAgainstWhitelist=function(e,t,a){if(!t||"object"!=typeof t)return!1;for(var n=0,o=t.length;n<o;n++)if(a(e,t[n]))return!0;return!1}},{"../../components/csm":11,"../../components/util":12,"../../components/viewability":13}]},{},[14]);