if (self.CavalryLogger) { CavalryLogger.start_js(["2c0Xc"]); }

__d("onAfterDisplay",["NavigationMetrics","TimeSlice","requestIdleCallback"],(function(a,b,c,d,e,f){"use strict";var g=[],h=!1;function a(a){a=b("TimeSlice").guard(a,"onAfterDisplay invocation",{propagationType:b("TimeSlice").PropagationType.ORPHAN});h?b("requestIdleCallback")(a):g.push(a)}b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,c){["all_pagelets_displayed","e2e"].indexOf(c.event)>-1&&!h&&(h=!0,g.forEach(function(a){b("requestIdleCallback")(a)}))});e.exports=a}),null);
__d("XGamesDesktopAppDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/desktopapp/download/",{app_id:{type:"Int"},fbsource:{type:"Int"},ref:{type:"String"},canvas_url:{type:"String"}})}),null);