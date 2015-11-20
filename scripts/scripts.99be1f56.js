"use strict";angular.module("slideshowApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngTouch","googlechart","angular-cache","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/slide00.html",controller:"Slide00Ctrl",controllerAs:"slide00"}).when("/slide00",{templateUrl:"views/slide00.html",controller:"Slide00Ctrl",controllerAs:"slide00"}).when("/slide01",{templateUrl:"views/slide01.html",controller:"Slide01Ctrl",controllerAs:"slide01"}).when("/slide02",{templateUrl:"views/slide02.html",controller:"Slide02Ctrl",controllerAs:"slide02"}).when("/slide03",{templateUrl:"views/slide03.html",controller:"Slide03Ctrl",controllerAs:"slide03"}).otherwise({redirectTo:"/"})}]),angular.module("slideshowApp").directive("slideControls",function(){return{template:'<div id="slideControls"><button type="button" class="btn btn-md btn-default" id="prev" ng-click="prevClick()">Prev</button><button type="button" class="btn btn-md btn-default" id="play" ng-click="playClick()">{{playLabel}}</button><button type="button" class="btn btn-md btn-default" id="next" ng-click="nextClick()">Next</button><input type="text" id="inputSec" ng-model="seconds"> sec</div>',restrict:"E",scope:!1}}),angular.module("slideshowApp").controller("SlidesCtrl",["$scope","$interval","$location",function(a,b,c){function d(b){"prev"===b?(c.path("slide"+a.prevSlide),a.currentSlideIndex=a.prevSlideIndex):"next"===b&&(c.path("slide"+a.nextSlide),a.currentSlideIndex=a.nextSlideIndex),a.prevSlideIndex=0===a.currentSlideIndex?f-1:a.currentSlideIndex-1,a.prevSlide=a.slides[a.prevSlideIndex],a.nextSlideIndex=a.currentSlideIndex===f-1?0:a.currentSlideIndex+1,a.nextSlide=a.slides[a.nextSlideIndex]}var e;a.isCollapsed=!1,a.playLabel="Play",a.slides=["00","01","02","03"],a.currentSlideIndex=0,a.seconds=5;var f=a.slides.length;a.prevSlideIndex=f-1,a.prevSlide=a.slides[a.prevSlideIndex],a.nextSlideIndex=f>1?1:0,a.nextSlide=a.slides[a.nextSlideIndex],a.prevClick=function(){b.cancel(e),d("prev")},a.playClick=function(){"Play"===a.playLabel?(a.playLabel="Pause",e=b(function(){d("next")},1e3*a.seconds)):"Pause"===a.playLabel&&(a.playLabel="Play",b.cancel(e))},a.nextClick=function(){b.cancel(e),d("next")}}]),angular.module("slideshowApp").controller("Slide00Ctrl",["$scope","svcGraphData",function(a,b){function c(){if(l++,l===h.length){for(var a=d(h),b={},c=1;c<g.length;c++)b[g[c][0]]=[],b[g[c][0]].push(g[0]),b[g[c][0]].push(g[c]);for(var e=0;e<a.length;e++)b[a[e][1]].push(a[e]);f(b,h)}}function d(a){var b=e(a),c=a.map(function(a){var c=a[3];if(c===b)return[a[0],a[1],a[2],a[4]];var d=(100-b)/(100-c),e=100-(100-a[4])*d;return[a[0],a[1],a[2],e]});return c}function e(a){for(var b=100,c=a.length-1;c>=0;c--)b=a[c][3]<b?a[c][3]:b;return b}function f(b,c){a.slide00Tree1={type:"TreeMap",displayed:!0,data:b.Media,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425,generateTooltip:function(a){for(var d="Media",e=b[d][a+1][0],f=0,g=c.length-1;g>=0;g--)if(c[g][0]===e){f=c[g][4];break}return'<div style="background:#fd9; padding:10px; border-style:solid"><span style="font-family:Courier"><b>BU: '+e+"</b><br> Parent: "+d+"<br> Availability: "+Math.round(100*f)/100+"%</span><br>"}},formatters:{}},a.slide00Tree1kbb={type:"TreeMap",displayed:!0,data:b.MediaKBB,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425,generateTooltip:function(a){for(var d="MediaKBB",e=b[d][a+1][0],f=0,g=c.length-1;g>=0;g--)if(c[g][0]===e){f=c[g][4];break}return'<div style="background:#fd9; padding:10px; border-style:solid"><span style="font-family:Courier"><b>BU: '+e+"</b><br> Parent: "+d+"<br> Availability: "+Math.round(100*f)/100+"%</span><br>"}},formatters:{}},a.slide00Tree2={type:"TreeMap",displayed:!0,data:b.Software,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425,generateTooltip:function(a){for(var d="Software",e=b[d][a+1][0],f=0,g=c.length-1;g>=0;g--)if(c[g][0]===e){f=c[g][4];break}return'<div style="background:#fd9; padding:10px; border-style:solid"><span style="font-family:Courier"><b>BU: '+e+"</b><br> Parent: "+d+"<br> Availability: "+Math.round(100*f)/100+"%</span><br>"}},formatters:{}},a.slide00Tree3={type:"TreeMap",displayed:!0,data:b.Auctions,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425,generateTooltip:function(a){for(var d="Auctions",e=b[d][a+1][0],f=0,g=c.length-1;g>=0;g--)if(c[g][0]===e){f=c[g][4];break}return'<div style="background:#fd9; padding:10px; border-style:solid"><span style="font-family:Courier"><b>BU: '+e+"</b><br> Parent: "+d+"<br> Availability: "+Math.round(100*f)/100+"%</span><br>"}},formatters:{}},a.slide00Tree4={type:"TreeMap",displayed:!0,data:b.Enterprise,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425,generateTooltip:function(a){for(var d="Enterprise",e=b[d][a+1][0],f=0,g=c.length-1;g>=0;g--)if(c[g][0]===e){f=c[g][4];break}return'<div style="background:#fd9; padding:10px; border-style:solid"><span style="font-family:Courier"><b>BU: '+e+"</b><br> Parent: "+d+"<br> Availability: "+Math.round(100*f)/100+"%</span><br>"}},formatters:{}}}for(var g=[["Business Unit","Parent","Relative Importance (size)","Availability (color)"],["Media",null,null,null],["MediaKBB",null,null,null],["Software",null,null,null],["Enterprise",null,null,null],["Auctions",null,null,null]],h=[["ACH Transmissions","Auctions",4,99.5],["ATC Homepage","Media",10,99.95],["ATC Mobile","Media",7,99.95],["ATC SYC","Media",5,99.95],["ATX","Media",5,99.95],["Customer Care Media","Media",6,99.95],["Customer Care","Auctions",4,99.5],["Dealer Site","Media",8,99.95],["EBS","Enterprise",6,99.5],["ECR","Auctions",4,99.5],["Financial Systems","Auctions",4,99.5],["FTP Sterling","Auctions",4,99.5],["Fuel","Enterprise",4,99.5],["HomeNet","Software",10,99.5],["HomeNet Login","Software",10,99.5],["KBB Classifieds","MediaKBB",9,99.5],["KBB Control Modes","MediaKBB",8,99.5],["KBB Home","MediaKBB",10,99.5],["KBB InfoDriver","MediaKBB",5,99.5],["KBB KarPower","MediaKBB",5,99.5],["KBB LeadDriver","MediaKBB",5,99.5],["KBB Price Advisor","MediaKBB",5,99.5],["KBB QuickValues","MediaKBB",5,99.5],["M.power","Auctions",10,99.5],["Manheim Mobile","Auctions",7,99.5],["Manheim.com","Auctions",10,99.5],["OVE.com","Auctions",10,99.5],["RMB","Enterprise",5,99.5],["SalesForce","Enterprise",6,99.5],["Simulcast","Auctions",9,99.5],["Simulcast Everywhere","Auctions",8,99.5],["Simulcast Mobile","Auctions",5,99.5],["vAuto Composite","Software",10,99.5],["vAuto RealDeal","Software",10,99.5],["VinS Dealer Site","Software",10,99.5],["VinS Login","Software",5,99.5]],i=moment().subtract(1,"months").format("YYYY-MM-DD"),j=moment().format("YYYY-MM-DD"),k=h.length-1;k>=0;k--)b.getDataById(h[k][0],k,i,j).then(function(a){for(var b=0,d=a[0].length-1;d>=0;d--)b+=a[0][d].availability;b/=a[0].length,h[a[1]].push(b),c()});var l=0}]),angular.module("slideshowApp").controller("Slide01Ctrl",["$scope","svcslide01",function(a,b){var c=[["City","2010 Population","2000 Population"],["New York City, NY",8175e3,8008e3],["Los Angeles, CA",3792e3,3694e3],["Chicago, IL",2695e3,2896e3],["Houston, TX",2099e3,1953e3],["Philadelphia, PA",1526e3,1517e3]];a.slide01barStack1={type:"Bar",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425},formatters:{}},a.slide01pie1={type:"PieChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425},formatters:{}},a.slide01pie2={type:"PieChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425},formatters:{}},a.slide01bar1={type:"Bar",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:425},formatters:{}}}]),angular.module("slideshowApp").service("svcGraphData",["$q","$http","CacheFactory",function(a,b,c){return c("dataCache",{cacheFlushInterval:288e5,deleteOnExpire:"aggressive"}),{getDataById:function(d,e,f,g){var h=a.defer(),i=c.get("dataCache"),j={"ACH Transmissions":["daily","{%22$in%22:[1860000]}",""],"ATC Homepage":["daily","{%22$in%22:[22052500,1163980,1743885]}",""],"ATC Mobile":["daily_composite","9999002",""],"ATC SYC":["daily","9999003","composite/"],ATX:["daily","{%22$in%22:[22055838,1171430,1483705]}",""],"Customer Care Media":["daily","9999004","composite/"],"Customer Care":["daily","{%22$in%22:[1860010]}",""],"Dealer Site":["daily_composite","9999005",""],EBS:["daily_composite","9999008",""],ECR:["daily","{%22$in%22:[1860020]}",""],"Financial Systems":["daily","{%22$in%22:[1860030]}",""],"FTP Sterling":["daily","{%22$in%22:[1860040]}",""],Fuel:["daily","{%22$in%22:[22054145,1610000]}",""],HomeNet:["daily","{%22$in%22:[22063990,1136342,1476785]}",""],"HomeNet Login":["daily","{%22$in%22:[22064004,1127484,1826280]}",""],"KBB Classifieds":["daily","{%22$in%22:[22064558,1079961,2130445]}",""],"KBB Control Modes":["daily","22064577",""],"KBB Home":["daily","{%22$in%22:[22064605,831929,1247661]}",""],"KBB InfoDriver":["daily","22064761",""],"KBB KarPower":["daily","{%22$in%22:[22065358,22065001]}",""],"KBB LeadDriver":["daily","23202479",""],"KBB Price Advisor":["daily","22537449",""],"KBB QuickValues":["daily","22064844",""],"M.power":["daily","{%22$in%22:[1860050]}",""],"Manheim Mobile":["daily","{%22$in%22:[1860060]}",""],"Manheim.com":["daily","{%22$in%22:[1860070]}",""],"OVE.com":["daily","{%22$in%22:[1860080]}",""],RMB:["daily_composite","9999007",""],SalesForce:["daily","{%22$in%22:[22254553,1653530]}",""],Simulcast:["daily","{%22$in%22:[1860110]}",""],"Simulcast Everywhere":["daily","{%22$in%22:[1860090]}",""],"Simulcast Mobile":["daily","{%22$in%22:[1860100]}",""],"vAuto Composite":["daily_composite","9999006",""],"vAuto RealDeal":["daily","{%22$in%22:[22059996,1136831,1476790]}",""],"VinS Dealer Site":["daily","{%22$in%22:[22057555,1127489,1431539]}",""],"VinS Login":["daily","{%22$in%22:[22057581,1127491,1466150]}",""]};return i.get(d)?h.resolve(i.get(d)):(b.defaults.headers.common.Authorization="Basic "+btoa("serebro_admin:min-irf-yaW-Wok-urN-oR-hAuv-yAnd-Yib"),b.get("https://itsc.autotrader.com:3000/"+j[d][2]+"scorecard/"+j[d][0]+"?query={%22page_id%22:"+j[d][1]+",%22date%22:{%22$gte%22:%22"+f+"%22,%22$lte%22:%22"+g+"%22}}&sort=date").success(function(a){i.put(d,[a,e]),h.resolve([a,e])})),h.promise}}}]),angular.module("slideshowApp").controller("Slide02Ctrl",["$scope","svcslide02",function(a,b){var c=[["City","2010 Population","2000 Population"],["New York City, NY",8175e3,8008e3],["Los Angeles, CA",3792e3,3694e3],["Chicago, IL",2695e3,2896e3],["Houston, TX",2099e3,1953e3],["Philadelphia, PA",1526e3,1517e3]];a.slide02Combo1={type:"LineChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}},a.slide02Combo2={type:"LineChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}},a.slide02Combo3={type:"LineChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}},a.slide02Combo4={type:"LineChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}}}]),angular.module("slideshowApp").controller("Slide03Ctrl",["$scope","svcslide03",function(a,b){var c=[["City","2010 Population","2000 Population"],["New York City, NY",8175e3,8008e3],["Los Angeles, CA",3792e3,3694e3],["Chicago, IL",2695e3,2896e3],["Houston, TX",2099e3,1953e3],["Philadelphia, PA",1526e3,1517e3]];a.slide03Combo1={type:"LineChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}},a.slide03Combo2={type:"LineChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}},a.slide03Combo3={type:"LineChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}},a.slide03Area1={type:"AreaChart",displayed:!0,data:c,options:{minColor:"#d24a32",midColor:"#d9db3f",maxColor:"#23ab23",minColorValue:98.5,maxColorValue:99.5,showScale:!1,height:300},formatters:{}}}]),angular.module("slideshowApp").service("svcslide01",function(){}),angular.module("slideshowApp").service("svcslide02",function(){}),angular.module("slideshowApp").service("svcslide03",function(){}),angular.module("slideshowApp").run(["$templateCache",function(a){a.put("views/slide00.html",'<div class="container"> <span google-chart chart="slide00Tree1" style="{{cssStyle}}" class="col-xs-12 col-sm-12 col-md-4"></span> <span google-chart chart="slide00Tree1kbb" style="{{cssStyle}}" class="col-xs-12 col-sm-12 col-md-4"></span> <span google-chart chart="slide00Tree2" style="{{cssStyle}}" class="col-xs-12 col-sm-12 col-md-4"></span> <span google-chart chart="slide00Tree3" style="{{cssStyle}}" class="col-xs-12 col-sm-12 col-md-9"></span> <span google-chart chart="slide00Tree4" style="{{cssStyle}}" class="col-xs-12 col-sm-12 col-md-3"></span> </div>'),a.put("views/slide01.html",'<div class="container"> <span google-chart chart="slide01barStack1" style="{{cssStyle}}" class="col-xs-12 col-sm-12 col-md-6"></span> <span google-chart chart="slide01pie1" style="{{cssStyle}}" class="col-xs-6 col-sm-6 col-md-3"></span> <span google-chart chart="slide01pie2" style="{{cssStyle}}" class="col-xs-6 col-sm-6 col-md-3"></span> <span google-chart chart="slide01bar1" style="{{cssStyle}}" class="col-xs-12 col-sm-12 col-md-12"></span> </div>'),a.put("views/slide02.html",'<div class="container"> <span google-chart chart="slide02Combo1" style="{{cssStyle}}" class="col-xs-12"></span> <span google-chart chart="slide02Combo2" style="{{cssStyle}}" class="col-xs-12"></span> <span google-chart chart="slide02Combo3" style="{{cssStyle}}" class="col-xs-12"></span> <span google-chart chart="slide02Combo4" style="{{cssStyle}}" class="col-xs-12"></span> </div>'),a.put("views/slide03.html",'<div class="container"> <span google-chart chart="slide03Combo1" style="{{cssStyle}}" class="col-xs-12"></span> <span google-chart chart="slide03Combo2" style="{{cssStyle}}" class="col-xs-12"></span> <span google-chart chart="slide03Combo3" style="{{cssStyle}}" class="col-xs-12"></span> <span google-chart chart="slide03Area1" style="{{cssStyle}}" class="col-xs-12"></span> </div>')}]);