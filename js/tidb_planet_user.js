!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/js/",t(t.s=18)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setCookies=t.getCookies=t.cookiesKeyMap=void 0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a="_tidb_planet_",i=t.cookiesKeyMap={CONTRIBUTIONS_RANK:a+"contributions_rank",USERNAME:a+"username",DATE:a+"date",AVATAR:a+"avatar_url",CONTRIBUTIONS:a+"contributions",FIRST_ACCESS:a+"first_access"};t.getCookies=function(){var e={};for(var t in i){var n=o.default.get(i[t]);e[t]=n}return e},t.setCookies=function(e,t){o.default.set(i[e],t)}},1:function(e,t,n){"use strict";var r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i){var s=!1;if(r=i,void 0!==(o="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=o),s=!0,"object"===a(t)&&(e.exports=i(),s=!0),!s){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,o,a){var i;if("undefined"!=typeof document){if(arguments.length>1){if(a=e({path:"/"},r.defaults,a),"number"==typeof a.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*a.expires),a.expires=s}a.expires=a.expires?a.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var u in a)a[u]&&(c+="; "+u,!0!==a[u]&&(c+="="+a[u]));return document.cookie=t+"="+o+c}t||(i={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,f=0;f<l.length;f++){var m=l[f].split("="),y=m.slice(1).join("=");this.json||'"'!==y.charAt(0)||(y=y.slice(1,-1));try{var h=m[0].replace(d,decodeURIComponent);if(y=n.read?n.read(y,h):n(y,h)||y.replace(d,decodeURIComponent),this.json)try{y=JSON.parse(y)}catch(e){}if(t===h){i=y;break}t||(i[h]=y)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},18:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";var r=n(0);n(20);var o=function(){var e=document.body,t=e.offsetWidth,n=e.offsetHeight,r=document.createElement("canvas");e.style.fontFeatureSettings='"liga" 0',r.width=3*t,r.height=3*n,r.getContext("2d").scale(3,3);var o={scale:3,canvas:r,useCORS:!0,logging:!0,letterRendering:!0,width:t,height:n};html2canvas(e,o).then(function(e){$(".share-section").remove();var t=e.getContext("2d");t.mozImageSmoothingEnabled=!1,t.webkitImageSmoothingEnabled=!1,t.msImageSmoothingEnabled=!1,t.imageSmoothingEnabled=!1;var n=Canvas2Image.convertToJPEG(e,e.width,e.height);$(".j-capture-image").html(n),$(n).css({width:e.width/3*.6+"px",height:e.height/3*.6+"px"})})},a=function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},i=function(e){if($(".j-username").text((0,r.getCookies)().USERNAME),"contributor"===e){$(".j-contributor").fadeIn(),$(".j-contributions").text((0,r.getCookies)().CONTRIBUTIONS);var t=(0,r.getCookies)().DATE;$(".j-date").text($.format.date(t,"dd / MMM / yyyy")),$(".j-avatar").attr("src",(0,r.getCookies)().AVATAR);var n=(0,r.getCookies)().CONTRIBUTIONS_RANK;$(".j-rcard-id").text("R"+$.format.date(t,"ddMMyyyy")+function(e,t,n){return n=n||"0",e+="",e.length>=t?e:new Array(t-e.length+1).join(n)+e}(n,4)),$(".j-greetings").html('Congratulations!<br />You rank <strong style="font-size:1.1em;">'+n+a(n)+"</strong> on TiDB Planet!")}else $(".j-visitor").fadeIn(),$(".j-date").text($.format.date(_.now(),"dd / MMM / yyyy")),$(".j-vcard-id").text("R"+$.format.date(_.now(),"ddMMyyyyhhmm")),$(".j-greetings").text("Welcome to the TiDB Planet. Join us now! www.pingcap.com")},s=function(){$("body")[0].offsetWidth<768&&$(".html2image-container").addClass("show")};$(function(){(0,r.getCookies)().USERNAME?(0,r.getCookies)().CONTRIBUTIONS_RANK?(i("contributor"),s()):(i("visitor"),s()):($(".element-astronaut").addClass("j-login j-click"),$(".j-login-overlay").fadeIn(),$(".j-login-overlay, .modal").addClass("active"),$(".j-greetings").text("Hope you enjoy our journey together and may the open source be with you!")),$(".j-login").on("click",function(e){$(".j-login-overlay").fadeIn(),$(".j-login-overlay, .modal").addClass("active"),e.preventDefault(),e.stopPropagation()}),$(".j-camera").on("click",function(){$(".html2image-container").hasClass("show")?$(".html2image-container").removeClass("show"):$(".html2image-container").addClass("show")}),$(".j-capture").on("click ",function(){$(".html2image-section").append('<div class="share-section"><div class="text">Scan the QR Code to explore more about TiDB!</div><img src="/images/tidb-planet/share-qrcode.png" alt="" /></div>'),$(".j-capture-overlay").fadeIn(),$(".j-capture-overlay, .modal").addClass("active"),o()})})},20:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o={};!function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],i={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},s=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;e.format=function(){function e(e){return t[parseInt(e,10)]||e}function c(e){return n[parseInt(e,10)]||e}function u(e){var t=parseInt(e,10)-1;return o[t]||e}function l(e){var t=parseInt(e,10)-1;return a[t]||e}function d(e){return i[e]||e}function f(e){var t,n,r,o,a,i=e,s="";return-1!==i.indexOf(".")&&(o=i.split("."),i=o[0],s=o[o.length-1]),a=i.split(":"),3===a.length?(t=a[0],n=a[1],r=a[2].replace(/\s.+/,"").replace(/[a-z]/gi,""),i=i.replace(/\s.+/,"").replace(/[a-z]/gi,""),{time:i,hour:t,minute:n,second:r,millis:s}):{time:"",hour:"",minute:"",second:"",millis:""}}function m(e,t){for(var n=t-String(e).length,r=0;r<n;r++)e="0"+e;return e}return{parseDate:function(e){var t,n,r={date:null,year:null,month:null,dayOfMonth:null,dayOfWeek:null,time:null};if("number"==typeof e)return this.parseDate(new Date(e));if("function"==typeof e.getFullYear)r.year=String(e.getFullYear()),r.month=String(e.getMonth()+1),r.dayOfMonth=String(e.getDate()),r.time=f(e.toTimeString()+"."+e.getMilliseconds());else if(-1!=e.search(s))t=e.split(/[T\+-]/),r.year=t[0],r.month=t[1],r.dayOfMonth=t[2],r.time=f(t[3].split(".")[0]);else switch(t=e.split(" "),6===t.length&&isNaN(t[5])&&(t[t.length]="()"),t.length){case 6:r.year=t[5],r.month=d(t[1]),r.dayOfMonth=t[2],r.time=f(t[3]);break;case 2:n=t[0].split("-"),r.year=n[0],r.month=n[1],r.dayOfMonth=n[2],r.time=f(t[1]);break;case 7:case 9:case 10:r.year=t[3];var o=parseInt(t[1]),a=parseInt(t[2]);o&&!a?(r.month=d(t[2]),r.dayOfMonth=t[1]):(r.month=d(t[1]),r.dayOfMonth=t[2]),r.time=f(t[4]);break;case 1:n=t[0].split(""),r.year=n[0]+n[1]+n[2]+n[3],r.month=n[5]+n[6],r.dayOfMonth=n[8]+n[9],r.time=f(n[13]+n[14]+n[15]+n[16]+n[17]+n[18]+n[19]+n[20]);break;default:return null}return r.time?r.date=new Date(r.year,r.month-1,r.dayOfMonth,r.time.hour,r.time.minute,r.time.second,r.time.millis):r.date=new Date(r.year,r.month-1,r.dayOfMonth),r.dayOfWeek=String(r.date.getDay()),r},date:function(t,n){try{var r=this.parseDate(t);if(null===r)return t;for(var o,a=r.year,i=r.month,s=r.dayOfMonth,d=r.dayOfWeek,f=r.time,y="",h="",p="",g=!1,b=0;b<n.length;b++){var v=n.charAt(b),k=n.charAt(b+1);if(g)"'"==v?(h+=""===y?"'":y,y="",g=!1):y+=v;else switch(y+=v,p="",y){case"ddd":h+=e(d),y="";break;case"dd":if("d"===k)break;h+=m(s,2),y="";break;case"d":if("d"===k)break;h+=parseInt(s,10),y="";break;case"D":s=1==s||21==s||31==s?parseInt(s,10)+"st":2==s||22==s?parseInt(s,10)+"nd":3==s||23==s?parseInt(s,10)+"rd":parseInt(s,10)+"th",h+=s,y="";break;case"MMMM":h+=l(i),y="";break;case"MMM":if("M"===k)break;h+=u(i),y="";break;case"MM":if("M"===k)break;h+=m(i,2),y="";break;case"M":if("M"===k)break;h+=parseInt(i,10),y="";break;case"y":case"yyy":if("y"===k)break;h+=y,y="";break;case"yy":if("y"===k)break;h+=String(a).slice(-2),y="";break;case"yyyy":h+=a,y="";break;case"HH":h+=m(f.hour,2),y="";break;case"H":if("H"===k)break;h+=parseInt(f.hour,10),y="";break;case"hh":o=0===parseInt(f.hour,10)?12:f.hour<13?f.hour:f.hour-12,h+=m(o,2),y="";break;case"h":if("h"===k)break;o=0===parseInt(f.hour,10)?12:f.hour<13?f.hour:f.hour-12,h+=parseInt(o,10),y="";break;case"mm":h+=m(f.minute,2),y="";break;case"m":if("m"===k)break;h+=parseInt(f.minute,10),y="";break;case"ss":h+=m(f.second.substring(0,2),2),y="";break;case"s":if("s"===k)break;h+=parseInt(f.second,10),y="";break;case"S":case"SS":if("S"===k)break;h+=y,y="";break;case"SSS":h+=m(f.millis.substring(0,3),3),y="";break;case"a":h+=f.hour>=12?"PM":"AM",y="";break;case"p":h+=f.hour>=12?"p.m.":"a.m.",y="";break;case"E":h+=c(d),y="";break;case"'":y="",g=!0;break;default:h+=v,y=""}}return h+=p}catch(e){return console&&console.log&&console.log(e),t}},prettyDate:function(e){var t,n,o,a,i;if("string"!=typeof e&&"number"!=typeof e||(t=new Date(e)),"object"===(void 0===e?"undefined":r(e))&&(t=new Date(e.toString())),n=((new Date).getTime()-t.getTime())/1e3,o=Math.abs(n),a=Math.floor(o/86400),!isNaN(a))return i=n<0?"from now":"ago",o<60?n>=0?"just now":"in a moment":o<120?"1 minute "+i:o<3600?Math.floor(o/60)+" minutes "+i:o<7200?"1 hour "+i:o<86400?Math.floor(o/3600)+" hours "+i:1===a?n>=0?"Yesterday":"Tomorrow":a<7?a+" days "+i:7===a?"1 week "+i:a<31?Math.ceil(a/7)+" weeks "+i:"more than 5 weeks "+i},toBrowserTimeZone:function(e,t){return this.date(new Date(e),t||"MM/dd/yyyy HH:mm:ss")}}}()}(o),function(e){e.format=o.format}(jQuery)}});