"use strict";angular.module("itscApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","googlechart","angular-cache","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/summary",{templateUrl:"views/summary.html",controller:"SummaryCtrl",controllerAs:"summary"}).when("/digital",{templateUrl:"views/digital.html",controller:"DigitalCtrl",controllerAs:"digital"}).when("/software",{templateUrl:"views/software.html",controller:"SoftwareCtrl",controllerAs:"software"}).when("/enterprise",{templateUrl:"views/enterprise.html",controller:"EnterpriseCtrl",controllerAs:"enterprise"}).when("/auctions",{templateUrl:"views/auctions.html",controller:"AuctionsCtrl",controllerAs:"auctions"}).when("/additional",{templateUrl:"views/additional.html",controller:"AdditionalCtrl",controllerAs:"additional"}).otherwise({redirectTo:"/summary"})}]),angular.module("itscApp").controller("MenuCtrl",["$rootScope","$scope","config",function(a,b,c){var d=$(window),e=$("#wrapper"),f=$("#sidebar-wrapper"),g=_.debounce(function(){var a=$(window).scrollTop(),b=e.offset().top;a>b?f.addClass("stick"):f.removeClass("stick")},13);d.scroll(g),b.menuItems=c}]),angular.module("itscApp").controller("SummaryCtrl",["$scope","config","summaryButtons","impactsChart","severity",function(a,b,c,d,e){function f(){a.buttonData=[],a.impactsData=[];var b=c.getData(g);b.then(function(b){a.buttonData=b});var e=d.getData(g);e.then(function(b){a.impactsData=b})}a.$on("reload",function(){f()});var g="summary";a.severity=e,a.pageTitle=b[g].name,a.icon=b[g].icon,a.summaryText="Availability",f()}]),angular.module("itscApp").controller("DigitalCtrl",["$scope","itscData","Dates","config","summaryChart","impactsChart","notesChart","severity",function(a,b,c,d,e,f,g,h){function i(){var b=e.getData(j);b.then(function(b){a.summaryChartData=b});var c=f.getData(j);c.then(function(b){a.impactsData=b}),a.notesOrder="date_sort",a.reverse=!0,a.order=function(b){a.reverse=a.notesOrder===b?!a.reverse:!1,a.notesOrder=b,console.log(b),console.log(a.reverse)};var d=g.getData(j);d.then(function(b){a.notesData=b})}a.$on("reload",function(){i()});var j="digital_media";a.severity=h,a.pageTitle=d[j].name,a.icon=d[j].icon,i()}]),angular.module("itscApp").controller("SoftwareCtrl",["$scope","itscData","Dates","summaryChart","impactsChart","notesChart","config","severity",function(a,b,c,d,e,f,g,h){function i(){var b=d.getData(j);b.then(function(b){a.summaryChartData=b});var c=e.getData(j);c.then(function(b){a.impactsData=b}),a.notesOrder="date_sort",a.reverse=!0,a.order=function(b){a.reverse=a.notesOrder===b?!a.reverse:!1,a.notesOrder=b};var g=f.getData(j);g.then(function(b){a.notesData=b})}a.$on("reload",function(){i()});var j="software";a.severity=h,a.pageTitle=g[j].name,a.icon=g[j].icon,i()}]),angular.module("itscApp").controller("EnterpriseCtrl",["$scope","itscData","Dates","summaryChart","impactsChart","notesChart","config","severity",function(a,b,c,d,e,f,g,h){function i(){var b=d.getData(j);b.then(function(b){a.summaryChartData=b});var c=e.getData(j);c.then(function(b){a.impactsData=b}),a.notesOrder="date_sort",a.reverse=!0,a.order=function(b){a.reverse=a.notesOrder===b?!a.reverse:!1,a.notesOrder=b};var g=f.getData(j);g.then(function(b){a.notesData=b})}a.$on("reload",function(){i()});var j="enterprise";a.severity=h,a.pageTitle=g[j].name,a.icon=g[j].icon,i()}]),angular.module("itscApp").controller("AuctionsCtrl",["$scope","itscData","Dates","summaryChart","impactsChart","notesChart","config","severity",function(a,b,c,d,e,f,g,h){function i(){var b=d.getData(j);b.then(function(b){a.summaryChartData=b});var c=e.getData(j);c.then(function(b){a.impactsData=b}),a.notesOrder="date_sort",a.reverse=!0,a.order=function(b){a.reverse=a.notesOrder===b?!a.reverse:!1,a.notesOrder=b};var g=f.getData(j);g.then(function(b){a.notesData=b})}a.$on("reload",function(){i()});var j="north_america_auction";a.hidePerformance=!0,a.severity=h,a.pageTitle=g[j].name,a.icon=g[j].icon,i()}]),angular.module("itscApp").controller("AdditionalCtrl",["$scope","config",function(a,b){a.$on("reload",function(){});var c="additional_information";a.pageTitle=b[c].name,a.icon=b[c].icon}]),angular.module("itscApp").controller("DatepickerCtrl",["$scope","$rootScope","Dates",function(a,b,c){function d(){return e.width()<730&&e.width()>450?f.css("margin-left",function(){return(e.width()-450)/2}):e.width()>=730&&e.width()<768?f.css("margin-left",140):f.css("margin-left",0)}a.getInitialDates=function(){a.dateFrom=moment().add(-1,"M").toDate(),a.dateTo=moment().toDate(),c.setFrom(a.dateFrom),c.setTo(a.dateTo)},a.getInitialDates(),a.dateUpdateClick=function(){c.setFrom(a.dateFrom),c.setTo(a.dateTo),b.$broadcast("reload")},a.dateResetClick=function(){a.dateFrom=moment().add(-1,"M").toDate(),a.dateTo=moment().toDate(),c.setFrom(a.dateFrom),c.setTo(a.dateTo),b.$broadcast("reload")};var e=$(window),f=$(".date-container");e.resize(d).trigger("resize")}]),angular.module("itscApp").directive("datePicker",function(){return{templateUrl:"views/datepicker.html",restrict:"E"}}),angular.module("itscApp").directive("toggleClass",function(){return{restrict:"A",link:function(a,b,c){b.bind("click",function(){var a=c.toggleClass.split(" ")[0],b=c.toggleClass.split(" ")[1];$("#"+b).toggleClass(a)})}}}),angular.module("itscApp").directive("menu",function(){return{templateUrl:"views/menu.html",restrict:"E"}}),angular.module("itscApp").directive("pageTitle",function(){return{templateUrl:"views/pagetitle.html",restrict:"E"}}),angular.module("itscApp").directive("summaryChart",function(){return{templateUrl:"views/summarychart.html",restrict:"E"}}),angular.module("itscApp").directive("impactsChart",function(){return{templateUrl:"views/impactschart.html",restrict:"E"}}),angular.module("itscApp").directive("notesChart",function(){return{templateUrl:"views/noteschart.html",restrict:"E"}}),angular.module("itscApp").directive("summaryButtons",function(){return{templateUrl:"views/summarybuttons.html",restrict:"E"}}),angular.module("itscApp").directive("summaryTitle",function(){return{templateUrl:"views/summarytitle.html",restrict:"E"}}),angular.module("itscApp").directive("notesModal",["$uibModal",function(a){return{restrict:"A",scope:!0,template:'<span class="glyphicon glyphicon-file icon"></span>Notes',link:function(b,c,d){c.bind("click",function(){var c=d.notesModal;b.page_idsFilter=function(a){return-1!==c.indexOf(a.page_id)},a.open({templateUrl:"views/notesmodal.html",scope:b,size:"lg"})})}}}]),angular.module("itscApp").factory("getPageInfo",["pages",function(a){return{get:function(b,c){if(b){if(b&&!c){var d=$.grep(a,function(a){return a.name===b});return d[0]}var e=$.grep(a,function(a){return a.name===b});return e[0][c]}return a}}}]),angular.module("itscApp").factory("Dates",function(){var a={fromDate:"",toDate:""};return{setFrom:function(b){a.fromDate=b},getFrom:function(b){return b?moment(a.fromDate).format(b):a.fromDate},setTo:function(b){a.toDate=b},getTo:function(b){return b?moment(a.toDate).format(b):a.toDate}}}),angular.module("itscApp").value("creds",["serebro_admin","min-irf-yaW-Wok-urN-oR-hAuv-yAnd-Yib"]).value("config",{summary:{name:"Summary",icon:"glyphicon-dashboard",link:"summary",units:[{title:"Digital",link:"digital",dc:9999010,availTarget:99.5,incTarget:2.5,inc:["AutoTrader.com","AutoTrader Group","Kelley Blue Book"],order:0},{title:"Software",link:"software",dc:9999011,availTarget:99.5,incTarget:2.5,inc:["HomeNet","VinSolutions","vAuto","AIS Rebates","CDMData"],order:1},{title:"Enterprise",link:"enterprise",dc:9999012,availTarget:99.5,incTarget:.5,inc:["Fuel"],order:2},{title:"Auctions",link:"auctions",dc:9999013,availTarget:99.9,incTarget:3.5,inc:["Manheim","Auction Genius"],order:3}]},digital_media:{name:"Digital Media",icon:"glyphicon-modal-window",link:"digital",inc:["AutoTrader.com","AutoTrader Group","Kelley Blue Book"],units:[{name:"ATC Web",page_id:"1163980",dataURI:["composite_sc_daily",9999001],notesURI:[22052500,22052521,22052524,22052502,22052519,1163980],availTarget:"99.95",perfTarget:"4.00",description:"Single test for www.autotrader.com Homepage"},{name:"ATC Mobile",page_id:"9999002",dataURI:["composite_sc_daily",9999002],notesURI:[9999002,22088430,22088545,22088544],availTarget:"99.95",perfTarget:"3.00",description:"ATC Mobile represents a composite score obtained by testing for the FYC, SRP, and VDP tests on the m.autotrader.com website."},{name:"ATC SYC",page_id:"9999003",dataURI:["composite_sc_daily",9999003],notesURI:[9999003,22060042,23057e3],availTarget:"99.95",perfTarget:"7.50",description:"ATC SYC test is comprised of a 2 step transaction that starts from the sell.autotrader.com package selection page and ends at the Vehicle Details form entry page."},{name:"ATC Classics",page_id:"1171430",dataURI:["daily",[26047142,22055838,1171430,1483705]],notesURI:[22055838,1171430],availTarget:"99.95",perfTarget:"6.00",description:"Home page for AutoTrader Classics Website - www.autotraderclassics.com"},{name:"Dealer Site",page_id:"9999005",dataURI:["sc_daily_composite",9999005],notesURI:9999005,availTarget:"99.95",perfTarget:"6.25",description:"AutoTrader Dealersite is a 3 step transaction that logins into dealers.autotrader.com and than hits the Dashboard and Inventory listing pages."},{name:"Customer Care",page_id:"9999004",dataURI:["composite_sc_daily",9999004],notesURI:[9999004,22052472,22059927],availTarget:"99.90",perfTarget:"9.00",description:"The Fastlane test is a multi-step transaction that logins into fastlane.autotrader.com and performs a Dealer search and validates some of the primary functions including eSO Contracts and Feature Manager, plus tests for the Microsoft CRM dynamics sites"},{name:"KBB Home",page_id:"831929",dataURI:["daily",[22064605,831929,1247661]],notesURI:831929,availTarget:"99.50",perfTarget:"5.50",description:"Hits the KBB home page on www.kbb.com website."},{name:"KBB Classifieds",page_id:"1079961",dataURI:["daily",[22064558,1079961,2130445]],notesURI:1079961,availTarget:"99.50",perfTarget:"6.00",description:"Hits the KBB used cars for sales page on www.kbb.com website."},{name:"KBB LeadDriver",page_id:"23202479",dataURI:["daily",23202479],notesURI:23202479,availTarget:"99.50",perfTarget:"3.00",description:"Call to 'Get Year' Lead Driver Service Page"},{name:"KBB InfoDriver",page_id:"22064761",dataURI:["daily",22064761],notesURI:22064761,availTarget:"99.95",perfTarget:"1.00",description:"Call to 'GetMakesByYear' method at InfoDriver Web Service"},{name:"KBB KarPower",page_id:"22065358",dataURI:["daily",[22065358,22065001]],notesURI:22065358,availTarget:"99.50",perfTarget:"10.00",description:"Multipage call to Karpower, Login, Lookup Pre-Owned Car In Inventory"},{name:"KBB QuickValues",page_id:"22064844",dataURI:["daily",22064844],notesURI:22064844,availTarget:"99.95",perfTarget:"2.00",description:"Gomez call to www.quickvalues.com home login page."},{name:"KBB Control Modes",page_id:"22064577",dataURI:["daily",22064577],notesURI:22064577,availTarget:"99.95",perfTarget:"0.50",description:"Gomez call to custom monitor page for Control Modes Service"},{name:"KBB Price Advisor",page_id:"22537449",dataURI:["daily",22537449],notesURI:22537449,availTarget:"99.95",perfTarget:"4.00",description:"Gomez call to customer monitor page for Syndicated Price Advisor"}]},software:{name:"Software Division",icon:"glyphicon-floppy-disk",link:"software",inc:["HomeNet","VinSolutions","vAuto","AIS Rebates","CDMData"],units:[{name:"HomeNet",page_id:"1136342",dataURI:["daily",[22063990,1136342,1476785]],notesURI:1136342,availTarget:"99.50",perfTarget:"3.00",description:"Hits the HomeNet home page at www.homenetauto.com"},{name:"HomeNet Login",page_id:"1127484",dataURI:["daily",[22064004,1127484,1826280]],notesURI:1127484,availTarget:"99.50",perfTarget:"6.00",description:"Checks the login functionality for the HomeNet IOL website starting with the page www.homenetiol.com"},{name:"VinS Login",page_id:"1127491",dataURI:["daily",[22057581,1127491,1466150]],notesURI:1127491,availTarget:"99.50",perfTarget:"15.00",description:"Tests the VinSolutions application login page at apps.vinmanager.com/cardashboard/vslogin.aspx"},{name:"VinS Dealer Site",page_id:"1127489",dataURI:["daily",[22057555,1127489,1431539]],notesURI:1127489,availTarget:"99.50",perfTarget:"15.00",description:"VinSolutions Test Dealer page at houktestsite.vinmanagersites.com"},{name:"vAuto Composite",page_id:"9999006",dataURI:["sc_daily_composite",9999006],notesURI:9999006,availTarget:"99.50",perfTarget:"15.00",description:"This a multi-step transaction used to test the vAuto application by first logging into the application at www2.vauto.com and validating the pages Appraisal Summary, Appraisals List, Appraisal Edit, Inventory List, and Inventory Details."},{name:"vAuto RealDeal",page_id:"1136831",dataURI:["daily",[22059996,1136831,1476790]],notesURI:1136831,availTarget:"99.50",perfTarget:"15.00",description:"Tests the home page of the RealDeal site at www.realdeal.com/RealDeal"}]},enterprise:{name:"Enterprise Division",icon:"glyphicon-equalizer",link:"enterprise",inc:["Fuel"],units:[{name:"Fuel",page_id:"1610000",dataURI:["daily",[22054145,161e4]],notesURI:161e4,availTarget:"99.50",perfTarget:"13.00",description:"Test the availability of the Employee portal thehub.autotradergroup.com by first logging in thru the okta access control layer."},{name:"SalesForce",page_id:"1653530",dataURI:["daily",[22254553,1653530]],notesURI:1653530,availTarget:"99.50",perfTarget:"13.00",description:"Multi-step transaction that checks the availability of the ATG Dealer instance at atgdealer.my.salesforce.com. The test logs into the portal and validates the chatter feed is available."},{name:"RMB",page_id:"9999007",dataURI:["sc_daily_composite",9999007],notesURI:9999007,availTarget:"99.50",perfTarget:"5.00",description:"This is a multi-step transaction tested internally via the HP BSM monitoring tool starting with logging into prodrmb.autotrader.com and validating the AccountPortal and ContractPortal by searching for a SVOC account. This system is hosted by Oracle and used for Revenue Management."},{name:"EBS",page_id:"9999008",dataURI:["sc_daily_composite",9999008],notesURI:9999008,availTarget:"99.50",perfTarget:"5.00",description:"EBS is another Oracle Financials application and the testing is done internally using HP BSM. We are testing the login and InvoiceBatches pages within a multi-step transaction."}]},north_america_auction:{name:"North America Auctions",icon:"glyphicon-bullhorn",link:"auctions",inc:["Manheim","Auction Genius"],units:[{name:"Simulcast",page_id:"1860110",dataURI:["daily",[1860110]],notesURI:1860110,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"Manheim.com",page_id:"1860070",dataURI:["daily",[1860070]],notesURI:1860070,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"OVE.com",page_id:"1860080",dataURI:["daily",[1860080]],notesURI:1860080,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"ECR",page_id:"1860020",dataURI:["daily",[1860020]],notesURI:1860020,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"Manheim Mobile",page_id:"1860060",dataURI:["daily",[1860060]],notesURI:1860060,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"Simulcast Mobile",page_id:"1860100",dataURI:["daily",[1860100]],notesURI:1860100,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"Simulcast Everywhere",page_id:"1860090",dataURI:["daily",[1860090]],notesURI:1860090,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"Customer Care",page_id:"1860010",dataURI:["daily",[1860010]],notesURI:1860010,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"Financial Systems",page_id:"1860030",dataURI:["daily",[1860030]],notesURI:1860030,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"M.power",page_id:"1860050",dataURI:["daily",[1860050]],notesURI:1860050,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"FTP Sterling",page_id:"1860040",dataURI:["daily",[1860040]],notesURI:1860040,availTarget:"99.9",perfTarget:"8.00",description:""},{name:"ACH Transmissions",page_id:"1860000",dataURI:["daily",[186e4]],notesURI:186e4,availTarget:"99.9",perfTarget:"8.00",description:""}]},manheim_beta:{name:"Manheim Beta",icon:"glyphicon-bullhorn",link:"auctionsbeta",inc:["Manheim","Auction Genius"],units:[{name:"Manheim.com Prime",page_id:"4179493",dataURI:["daily",[4179493]],notesURI:4179493,availTarget:"99.5",perfTarget:"7.00",description:"MAN - Manheim.com - Manheim.com Prime"},{name:"Simulcast Prime",page_id:"2947162",dataURI:["daily",[2947162]],notesURI:2947162,availTarget:"99.5",perfTarget:"12.00",description:"MAN -  Web Services - Simulcast  Prime"},{name:"OVE Prime",page_id:"3992049",dataURI:["daily",[3992049]],notesURI:3992049,availTarget:"99.5",perfTarget:"20.00",description:"MAN - ove.com - OVE Prime"},{name:"Manheim.com Mobile IOS",page_id:"4206929",dataURI:["daily",[4206929]],notesURI:4206929,availTarget:"99.5",perfTarget:"10.00",description:"MAN - Mobile - M.Manheim.com - IOS - Prime"},{name:"Manheim.com Mobile FF",page_id:"3279619",dataURI:["daily",[3279619]],notesURI:3279619,availTarget:"99.5",perfTarget:"10.50",description:"MAN - Mobile - Mobile FF Prime"},{name:"Simulcast Everywhere",page_id:"18472221",dataURI:["daily",[18472221]],notesURI:18472221,availTarget:"99.5",perfTarget:"1.00",description:"MAN - Simocast Everywhere - OVE LIB01"},{name:"Saphire Prime",page_id:"2741949",dataURI:["daily",2741949],notesURI:2741949,availTarget:"99.75",perfTarget:"8.00",description:"MAN - Manheim.com - Sapphire Prime"},{name:"My Manheim Prime",page_id:"3036814",dataURI:["daily",3036814],notesURI:3036814,availTarget:"99.5",perfTarget:"6.00",description:"MAN -  MyManheim - My Manheim  Prime"},{name:"My Account Prime",page_id:"3036813",dataURI:["daily",3036813],notesURI:3036813,availTarget:"99.5",perfTarget:"6.00",description:"MAN - MyAccount - My Account Prime"},{name:"MyPurchases Prime",page_id:"6746295",dataURI:["daily",6746295],notesURI:6746295,availTarget:"99.5",perfTarget:"7.00",description:"MAN - MyPurchases  - MyPurchases Prime"},{name:"Workbook Prime",page_id:"6355512",dataURI:["daily",6355512],notesURI:6355512,availTarget:"99.5",perfTarget:"8.00",description:"MAN -  Workbook - Workbook  Prime"},{name:"PowerSearch Prime",page_id:"2741984",dataURI:["daily",2741984],notesURI:2741984,availTarget:"99.5",perfTarget:"8.00",description:"MAN -  PowerSearch - PowerSearch  Prime"}]},additional_information:{name:"Additional Information",icon:"glyphicon-th",link:"additional",units:[]}}).value("severity",{green:{icon:"glyphicon-ok",color:"#00B200"},yellow:{icon:"glyphicon-warning-sign",color:"#FFCC00"},red:{icon:"glyphicon-remove",color:"#db1818"}}),angular.module("itscApp").factory("itscData",["$q","$http","creds","CacheFactory",function(a,b,c,d){function e(a,b,c,d,e){var g=f[a],h="";if("incidents"===a&&(e&&(g+='"type":"{0}",'.format(e)),d?(h=JSON.stringify(d),g+='"unit":{"$in":{0}},"begin":{"$gte":"{1}","$lte":"{2}"}}'.format(h,b,c)):g+='"begin":{"$gte":"{0}","$lte":"{1}"}}&sort=[("begin",-1)]&max_results=100'.format(b,c)),"daily_notes"===a&&(e&&(g+=Array.isArray(d)?'"page_id":{"$in":[{0}]},'.format(d):'"page_id":{0},'.format(d)),g+='"opened_at":{"$gte":"{0}","$lte":"{1}"}}&sort=opened_at'.format(b,c)),"daily"===a){var i=moment(b).format("YYYY-MM-DD")+" GMT",j=moment(c).format("YYYY-MM-DD")+" GMT";Array.isArray(d)?(h=JSON.stringify(d),g+='"page_id":{"$in":{0}},"date":{"$gte":"{1}","$lte":"{2}"}}&sort=date'.format(h,i,j)):(h=JSON.stringify(d),g+='"page_id":{0},"date":{"$gte":"{1}","$lte":"{2}"}}&sort=date'.format(h,i,j))}if("sc_daily_composite"===a){var k=moment(b).format("YYYY-MM-DD")+" GMT",l=moment(c).format("YYYY-MM-DD")+" GMT";g+='"page_id":{0},"date":{"$gte":"{1}","$lte":"{2}"}}&sort=date'.format(d,k,l)}if("composite_sc_daily"===a){var m=moment(b).format("YYYY-MM-DD")+" GMT",n=moment(c).format("YYYY-MM-DD")+" GMT";g+='"page_id":{0},"date":{"$gte":"{1}","$lte":"{2}"}}&sort=date'.format(d,m,n)}return g}String.prototype.format=function(){for(var a=this,b=0;b<arguments.length;b++){var c="{"+b+"}";a=a.replace(c,arguments[b])}return a},d.get("itscDataCache")||d.createCache("itscDataCache",{maxAge:3e5,deleteOnExpire:"aggressive"});var f={incidents:"https://itsc.autotrader.com:8080/incidents?where={",daily:"https://itsc.autotrader.com:3000/scorecard/daily?query={",daily_notes:"https://itsc.autotrader.com:3000/scorecard/daily_notes?query={",sc_daily_composite:"https://itsc.autotrader.com:3000/scorecard/daily_composite?query={",composite_sc_daily:"https://itsc.autotrader.com:3000/composite/scorecard/daily?query={"};return{get:function(f,g,h,i,j){f="undefined"!=typeof f?f:"",g="undefined"!=typeof g?g:"",h="undefined"!=typeof h?h:"",i="undefined"!=typeof i?i:"",j="undefined"!=typeof j?j:"";var k,l=e(f,g,h,i,j),m=String(f)+String(g+h)+String(i)+String(j),n=a.defer(),o=d.get("itscDataCache");return o.get(m)&&(k=o.get(m)),k?n.resolve(k):(b.defaults.headers.common.Authorization="Basic "+btoa(c[0]+":"+c[1]),b.get(l).success(function(a){o.put(m,a),n.resolve(a)})),n.promise}}}]),angular.module("itscApp").factory("summaryChart",["$q","Dates","config","itscData",function(a,b,c,d){function e(a,e){var g=c[a].units.length;c[a].units.forEach(function(a){var c={product:a.name,from:b.getFrom("MMM DD, YYYY"),to:b.getTo("MMM DD, YYYY"),availTarget:a.availTarget,availability:{status:"",avail:""},p1:"",availTrend:"",availTrendModal:"",availGauge:"",perfTarget:a.perfTarget,performance:{status:"",perf:""},perfTrend:"",perfTrendModal:"",perfGauge:"",notes:!1,notesPageIds:[],dataURI:[],trending:!0};d.get(a.dataURI[0],b.getFrom(),b.getTo(),a.dataURI[1]).then(function(h){for(var i=0,j=0,k=c.availTarget,l=c.perfTarget,m=[["Day","Availability","Target"]],n=[["Day","Performance","Target"]],o=[["Label","Value"]],p=[["Label","Value"]],q=moment(b.getFrom()),r=moment(b.getTo()),s=r.diff(q,"days"),t=Math.round(s/12),u={type:"AreaChart",data:m,options:{vAxis:{textPosition:"none",gridlines:{color:"transparent"}},hAxis:{textPosition:"none",gridlines:{color:"transparent"}},legend:{position:"none"},tooltip:{isHtml:!0,ignoreBounds:!0,textStyle:{fontSize:14}},lineWidth:1,height:"30",width:"140",chartArea:{left:"0%",top:"0%",right:"0%",width:"100%",height:"100%"},series:{1:{color:"green",lineWidth:1,pointSize:0,type:"line"}}}},v={type:"AreaChart",data:n,options:{vAxis:{textPosition:"none",gridlines:{color:"transparent"}},hAxis:{textPosition:"none",gridlines:{color:"transparent"}},legend:{position:"none"},tooltip:{isHtml:!0,ignoreBounds:!0,textStyle:{fontSize:14}},lineWidth:1,height:"30",width:"140",chartArea:{left:"0%",top:"0%",right:"0%",width:"100%",height:"100%"},series:{1:{color:"green",lineWidth:1,pointSize:0,type:"line"}}}},w={type:"Gauge",data:o,options:{width:220,height:220,min:98,max:100,redFrom:98,redTo:99,yellowFrom:99,yellowTo:"",greenFrom:"",greenTo:100,majorTicks:["98","","100"]}},x={type:"Gauge",data:p,options:{width:220,height:220,min:0,max:"",greenFrom:0,greenTo:"",yellowFrom:"",yellowTo:"",redFrom:"",redTo:"",majorTicks:["0","","","",""]}},y={type:"AreaChart",data:m,options:{title:"Availability",vAxis:{maxValue:100,minValue:98},hAxis:{showTextEvery:t},legend:{position:"none"},tooltip:{isHtml:!0,ignoreBounds:!0,textStyle:{fontSize:14}},lineWidth:2,pointSize:4,chartArea:{left:"0px",top:"0px",right:"0px",bottom:"30px",width:"88%"},series:{1:{color:"green",lineWidth:1,pointSize:0,type:"line"}}}},z={type:"AreaChart",data:n,options:{title:"Performance",vAxis:{maxValue:5,minValue:0},hAxis:{showTextEvery:t},legend:{position:"none"},tooltip:{isHtml:!0,ignoreBounds:!0,textStyle:{fontSize:14}},lineWidth:2,pointSize:4,chartArea:{left:"0px",top:"10px",right:"0px",bottom:"30px",width:"88%"},series:{1:{color:"green",lineWidth:1,pointSize:0,type:"line"}}}},A=0;A<h.length;A++){var B=moment(b.getFrom()).add(A,"days").format("MMM D");m.push([B,h[A].availability,Number(k)]),n.push([B,h[A].performance,Number(l)]),j+=h[A].availability,i+=h[A].performance}var C=j/h.length,D=i/h.length;C=C.toFixed(2),D=D.toFixed(2),Number(C)<Number(k)?c.availability.status="yellow":c.availability.status="green",Number(D)>Number(l)?c.performance.status="yellow":c.performance.status="green",w.options.yellowTo=k,w.options.greenFrom=k,x.options.max=2*Number(l),x.options.greenTo=l,x.options.yellowFrom=l,x.options.yellowTo=1.5*Number(l),x.options.redFrom=1.5*Number(l),x.options.redTo=2*Number(l),x.options.majorTicks.push(2*Number(l)),o.push(["Availability",Number(C)]),p.push(["Performance",Number(D)]),c.availability.avail=C,c.performance.perf=D,c.availTrend=u,c.perfTrend=v,c.availTrendModal=y,c.perfTrendModal=z,c.availGauge=w,c.perfGauge=x,d.get("daily_notes",moment(b.getFrom()).format("YYYY-MM-DD"),moment(b.getTo()).format("YYYY-MM-DD"),a.notesURI,1).then(function(a){c.p1=a.length,a.length>0&&(c.notes=!0)}),Array.isArray(a.notesURI)?c.notesPageIds=a.notesURI:c.notesPageIds.push(a.notesURI),c.dataURI=a.dataURI,f.push(c),f.length===g&&e(f)})})}var f=[];return{getData:function(b){return a(function(a){f=[],e(b,a)})}}}]),angular.module("itscApp").factory("summaryButtons",["$q","Dates","config","itscData",function(a,b,c,d){function e(a,c,d){var e={title:c.title,link:c.link,severity:"",uptime:0,impacts:0,mttr:0},h=0,i=0;if(a.sc){for(var j=a.sc.length,k=0;k<a.sc.length;k++)h+=a.sc[k].availability;i=(h/j).toFixed(2)}else i="100%";e.uptime=i;var l=a.inc._items,m=0,n=0,o=l.length;o>0&&(n=l.length,m=l.reduce(function(a,b){return a+Number(b.duration)},0),m=m/l.length/1e6/60,m=Math.round(m)),e.impacts=n,e.mttr=m;var p=moment(b.getTo()).diff(moment(b.getFrom()),"days"),q=Math.ceil(p/7*c.incTarget),r="";r=98>i||n>=1.25*q?"red":i>=98&&i<c.availTarget||n>=q?"yellow":"green",e.severity=r,f[c.order]=e,f.length===g&&d(f)}var f=[],g=0;return{getData:function(f){return a(function(a){g=c[f].units.length,c[f].units.forEach(function(c){d.get("sc_daily_composite",moment(b.getFrom()).format("YYYY-MM-DD"),moment(b.getTo()).format("YYYY-MM-DD"),c.dc,null,c.title).then(function(f){d.get("incidents",moment(b.getFrom()).format("ddd, DD MMM YYYY HH:mm:")+"00 GMT",moment(b.getTo()).format("ddd, DD MMM YYYY HH:mm:")+"00 GMT",c.inc).then(function(b){var d={sc:f,inc:b};e(d,c,a)})})})})}}}]),angular.module("itscApp").factory("impactsChart",["$q","Dates","config","itscData",function(a,b,c,d){function e(a,b){a._items.length>0?a._items.forEach(function(a){var b={status:a.status,order:Number(moment(a.begin,"ddd, DD MMM YYYY HH:mm:ss z").format("YYMMDD")),details:{unit:a.unit,title:a.title,type:a.type,begin:moment(a.begin,"ddd, DD MMM YYYY HH:mm:ss z").format("MMM DD, YYYY h:mm:ss A"),end:a.end?moment(a.end,"ddd, DD MMM YYYY HH:mm:ss z").format("MMM DD, YYYY h:mm:ss A"):"Still ongoing",description:a.summary}};f||(f=[]),f.push(b)}):f=null,b(f)}var f=null;return{getData:function(g){return a(function(a){f=[],d.get("incidents",moment(b.getFrom()).format("ddd, DD MMM YYYY HH:mm:")+"00 GMT",moment(b.getTo()).format("ddd, DD MMM YYYY HH:mm:")+"00 GMT",c[g].inc).then(function(b){e(b,a)})})}}}]),angular.module("itscApp").factory("notesChart",["$q","Dates","config","itscData",function(a,b,c,d){function e(a,b){h++,a.forEach(function(a){var b={date:moment(a.opened_at).format("MM/DD/YYYY"),date_sort:a.opened_at,unit:a.unit,description:a.description,page_id:a.page_id};f||(f=[]),f.push(b)}),g===h&&b(f)}var f=null,g=0,h=0;return{getData:function(i){return a(function(a){f=null,g=c[i].units.length,h=0,c[i].units.forEach(function(c){d.get("daily_notes",moment(b.getFrom()).format("YYYY-MM-DD"),moment(b.getTo()).format("YYYY-MM-DD"),c.notesURI,1).then(function(b){e(b,a)})})})}}}]),angular.module("itscApp").directive("availTrendModal",["$uibModal",function(a){return{scope:!0,restrict:"A",link:function(b,c){c.bind("click",function(){var c=a.open({templateUrl:"views/availtrendmodal.html",scope:b,size:"lg"});c.rendered.then(function(){function a(){console.log("resize");var a=$("#modalBox").width();b.rowData.availTrendModal.options.width=a,b.rowData.perfTrendModal.options.width=a}var c=$(window);c.resize(a).trigger("resize");var d=$("#modalBox").width();b.rowData.availTrendModal.options.width=d,b.rowData.perfTrendModal.options.width=d})})}}}]),angular.module("itscApp").run(["$templateCache",function(a){a.put("views/additional.html","<div> <page-title></page-title> </div>"),a.put("views/auctions.html","<div> <page-title></page-title> <summary-title></summary-title> <summary-chart></summary-chart> <impacts-chart></impacts-chart> <notes-chart></notes-chart> </div>"),a.put("views/availtrendmodal.html",'<div class="trend-modal"> <page-title></page-title> <div id="sub-heading"> <b>{{rowData.product}}</b> Availability<br> Date range: <b>{{rowData.from}}</b> to <b>{{rowData.to}}</b> </div> <div id="gauges"> <div google-chart chart="rowData.availGauge" id="left-gauge"></div> <div ng-hide="hidePerformance" google-chart chart="rowData.perfGauge" id="right-gauge"></div> </div> <div id="modalBox"> <span google-chart chart="rowData.availTrendModal"> <span ng-hide="hidePerformance" google-chart chart="rowData.perfTrendModal"> </div> </div>'),a.put("views/datepicker.html",'<div class="container dateinputs" ng-controller="DatepickerCtrl"> <div class="col-sm-4"> <input type="date" class="form-control" uib-datepicker-popup ng-model="dateFrom" datepicker-options="dateOptions" ng-required="true"> </div> <div class="col-sm-4"> <input type="date" class="form-control" uib-datepicker-popup ng-model="dateTo" datepicker-options="dateOptions" ng-required="true"> </div> <div class="col-sm-4"> <button type="button" class="btn btn-md btn-default" id="Update" ng-click="dateUpdateClick()">Update</button> <button type="button" class="btn btn-md btn-default" id="Reset" ng-click="dateResetClick()">Reset</button> </div> </div>'),a.put("views/digital.html","<div> <page-title></page-title> <summary-title></summary-title> <summary-chart></summary-chart> <impacts-chart></impacts-chart> <notes-chart></notes-chart> </div>"),a.put("views/enterprise.html","<div> <page-title></page-title> <summary-title></summary-title> <summary-chart></summary-chart> <impacts-chart></impacts-chart> <notes-chart></notes-chart> </div>"),a.put("views/impactschart.html",'<div ng-show="impactsData"> <div class="section-heading">Service Impact</div> <table id="impact-chart"> <thead> <tr> <th>Status</th> <th>Details</th> </tr> </thead> <tbody> <tr ng-repeat="rowData in impactsData | orderBy:\'order\':true"> <td class="status"> <span class="glyphicon {{severity[rowData.status].icon}} icon" style="color: {{severity[rowData.status].color}}"></span> <div>{{rowData.status}}</div> </td> <td> <div class="head"> {{rowData.details.unit}} - {{rowData.details.title}} </div> <div class="details"> <b>Type: </b>{{rowData.details.type}} <span class="pipes">||</span> <b>Begin: </b>{{rowData.details.begin}} <span class="pipes">||</span> <b>End: </b>{{rowData.details.end}} </div> {{rowData.details.description}} </td> </tr> </tbody> </table> </div>'),a.put("views/menu.html",'<div id="sidebar-wrapper" ng-controller="MenuCtrl"> <ul id="sidebar_menu" class="sidebar-nav"> <li class="sidebar-brand"> <a id="menu-toggle" toggle-class="active wrapper" title="Open Menu">Menu<span id="main_icon" class="glyphicon glyphicon-align-justify"></span></a> </li> </ul> <ul class="sidebar-nav" id="sidebar" ng-repeat="menuItem in menuItems"> <li> <a href="#/{{menuItem.link}}" title="{{menuItem.name}}">{{menuItem.name}}<span class="sub_icon glyphicon {{menuItem.icon}}"></span></a> </li> </ul> </div>'),a.put("views/noteschart.html",'<div ng-show="notesData"> <div class="section-heading">Notes</div> <table id="notes-chart"> <thead> <tr> <th ng-click="order(\'date_sort\')"> Date <span ng-show="notesOrder === \'date_sort\' && reverse" class="glyphicon glyphicon-chevron-down"></span> <span ng-show="notesOrder === \'date_sort\' && !reverse" class="glyphicon glyphicon-chevron-up"></span> </th> <th ng-click="order(\'unit\')"> Unit <span ng-show="notesOrder === \'unit\' && reverse" class="glyphicon glyphicon-chevron-up"></span> <span ng-show="notesOrder === \'unit\' && !reverse" class="glyphicon glyphicon-chevron-down"></span> </th> <th>Description</th> </tr> </thead> <tbody> <tr ng-repeat="rowData in notesData | orderBy:notesOrder:reverse"> <td>{{rowData.date}}</td> <td>{{rowData.unit}}</td> <td>{{rowData.description}}</td> </tr> </tbody> </table> </div>'),
a.put("views/notesmodal.html",'<div class="section-heading">Notes</div> <table id="notes-chart"> <thead> <tr> <th ng-click="order(\'date_sort\')"> Date <span ng-show="notesOrder === \'date_sort\' && reverse" class="glyphicon glyphicon-chevron-down"></span> <span ng-show="notesOrder === \'date_sort\' && !reverse" class="glyphicon glyphicon-chevron-up"></span> </th> <th ng-click="order(\'unit\')"> Unit <span ng-show="notesOrder === \'unit\' && reverse" class="glyphicon glyphicon-chevron-down"></span> <span ng-show="notesOrder === \'unit\' && !reverse" class="glyphicon glyphicon-chevron-up"></span> </th> <th>Description</th> </tr> </thead> <tbody> <tr ng-repeat="rowData in notesData | orderBy:notesOrder:reverse | filter:page_idsFilter"> <td>{{rowData.date}}</td> <td>{{rowData.unit}}</td> <td>{{rowData.description}}</td> </tr> </tbody> </table>'),a.put("views/pagetitle.html",'<div class="page-title"><span class="glyphicon {{icon}}"></span> {{pageTitle}}</div>'),a.put("views/software.html","<div> <page-title></page-title> <summary-title></summary-title> <summary-chart></summary-chart> <impacts-chart></impacts-chart> <notes-chart></notes-chart> </div>"),a.put("views/summary.html","<div> <page-title></page-title> <summary-title></summary-title> <summary-buttons></summary-buttons> <impacts-chart></impacts-chart> </div>"),a.put("views/summarybuttons.html",'<div class="container-fluid" id="summary-buttons"> <div class="summary-button col-xs-6 col-md-3" ng-repeat="buttonInfo in buttonData"> <div class="sb-inner" style="border-color: {{severity[buttonInfo.severity].color}}; box-shadow: 0 0 58px {{severity[buttonInfo.severity].color}} inset"> <a href="#/{{buttonInfo.link}}"> <div id="title">{{buttonInfo.title}}</div> <div id="uptime"> <span class="glyphicon {{severity[buttonInfo.severity].icon}}" id="icon" style="color: {{severity[buttonInfo.severity].color}}"> </span><span>{{buttonInfo.uptime}}%</span> </div> <div id="impacts">Impact: {{buttonInfo.impacts}}</div> <div id="mttr">MTTR: {{buttonInfo.mttr}} min</div> </a> </div> </div> </div>'),a.put("views/summarychart.html",'<table id="summary-chart"> <thead> <tr> <th>Product</th> <th>Target</th> <th>Availability</th> <th>P1</th> <th>Avail Trend</th> <th ng-hide="hidePerformance">Target</th> <th ng-hide="hidePerformance">Performance</th> <th ng-hide="hidePerformance">Perf Trend</th> <th>Notes</th> </tr> </thead> <tbody> <tr ng-repeat="rowData in summaryChartData | orderBy:&quot;product&quot;"> <td>{{rowData.product}}</td> <td>{{rowData.availTarget}}</td> <td> <span class="glyphicon {{severity[rowData.availability.status].icon}} icon" style="color: {{severity[rowData.availability.status].color}}"></span> {{rowData.availability.avail}} </td> <td>{{rowData.p1}}</td> <td style="width:150px"> <div avail-trend-modal> <span google-chart chart="rowData.availTrend" style="width:100%; height:50px"></span> </div> </td> <td ng-hide="hidePerformance">{{rowData.perfTarget}}</td> <td ng-hide="hidePerformance"> <span class="glyphicon {{severity[rowData.performance.status].icon}} icon" style="color: {{severity[rowData.performance.status].color}}"></span> {{rowData.performance.perf}} </td> <td ng-hide="hidePerformance" style="width:150px"> <div avail-trend-modal> <span google-chart chart="rowData.perfTrend"></span> </div> </td> <td style="width:60px"> <button ng-if="rowData.notes" type="button" class="btn btn-default sumBtn" notes-modal="{{rowData.notesPageIds}}"> </td> </tr> </tbody> </table>'),a.put("views/summarytitle.html",'<div class="section-heading">{{summaryText ? summaryText : pageTitle}} Summary</div>')}]);