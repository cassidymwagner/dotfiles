// MagicActions for Google Chrome - CHROMEACTIONS.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
(function(){function l(){g.runtime.sendMessage(0);setTimeout(l,12E3)}function n(d){if(d.type==a){var c;try{c=JSON.parse(d.detail)}catch(q){return}var b=c.id;6===b?(k||(k=new p),k.capture()):7===b||8==b||11===b?g.runtime.sendMessage(d.detail):4===b?(b=c.name,-1<c.value&&("ui"===b&&2>c.value?g.runtime.sendMessage(d.detail):"cinc"===b&&40>c.value?g.runtime.sendMessage(d.detail):"cint"===b&&4>c.value&&g.runtime.sendMessage(d.detail))):2===b?"string"==typeof c.url&&(c=c.url,(0==c.indexOf("https://www.mycinema.pro/")||
5<c.indexOf("BhD.html")||32==c.indexOf("UCCwIAJrwWGB"))&&g.runtime.sendMessage(d.detail)):31===b&&g.runtime.sendMessage(d.detail,function(c){m(a+"b",c)})}}function m(d,c){var b=document.createEvent("CustomEvent");b.initCustomEvent(d,!1,!1,c);window.dispatchEvent(b)}function p(){function d(c,b,d){a.w!=b&&(a.w=f.width=b,a.h=f.height=d);h.drawImage(c,0,0);k=h.getImageData(0,0,b,d).data;a.rgba&&window.URL.revokeObjectURL(a.rgba);a.rgba=window.URL.createObjectURL(new Blob([k],{type:"application/octet-stream"}));
g.runtime.sendMessage(a)}function c(){var a=document.querySelector('meta[property="og:image"');a&&a.content&&window.fetch(a.content,{method:"GET"}).then(function(a){return a.blob()}).then(function(a){b(a)})}function b(a){if(a){var c=window.URL.createObjectURL(new Blob([a],{type:"application/octet-stream"})),b=new Image;b.onload=function(){window.URL.revokeObjectURL(c);d(b,b.width,b.height)};b.src=c}}var a={id:6},e,f,h,k;a.t=encodeURIComponent(document.title.slice(0,document.title.length-10));e=document.body.querySelector('meta[itemprop="videoId"]');
a.vid=e?e.getAttribute("content"):"";e=document.getElementById("eow-reuse");a.lic=e?e.textContent:"";if(e=document.querySelector("video"))f=document.createElement("canvas"),h=f.getContext("2d");this.capture=function(){!e||4!=e.readyState&&3!=e.readyState?c():d(e,e.videoWidth,e.videoHeight)}}var k,a,g={};chrome.runtime.sendMessage(32);Object.defineProperty(window,"msg__",{get:function(){return null},set:function(d){if(a)m(a+"b",d);else{a=Math.random().toString(16).slice(2);var c=document.documentElement,
b=document.createElement("script");b.text='(function(){function Y(){window.ytplayer&&window.ytplayer.config&&window.ytplayer.config.args?(H=window.ytplayer,Z(window.ytplayer.config.args,!0)):setTimeout(Y,10)}function U(){I=0<window.location.search.indexOf("list=");L=d.pause?I?d.plist?1:0:0:1;aa||(aa=!0,document.addEventListener("yt-navigate-finish",V,!1),document.addEventListener("spfdone",V,!1))}function V(){var a="/watch"==window.location.pathname;I=0<window.location.search.indexOf("list=");L=d.pause?I?d.plist?1:0:0:1;M.pageLoaded(a);J||\n(J=new ba);J.optionsChanged();B.pageLoaded(a);N&&N.pageLoaded();ca();da(a);ea();fa();ga();d.a0&&d.a1&&sa()}function ta(a){a.addEventListener("mousedown",function(){G("'+
a+'",JSON.stringify({id:31,url:"https://www.mycinema.pro/menu.html"}))},!1)}function ua(a){a.addEventListener("mousedown",function(){G("'+a+'",JSON.stringify({id:31,url:"https://www.mycinema.pro/options.html"}))},!1)}function ha(a){G("'+a+'",JSON.stringify({id:6}));ia&&a.preventDefault()}function ja(a){a.addEventListener("mousedown",\nfunction(){G("'+a+'",JSON.stringify({id:31,url:"https://www.mycinema.pro/take-snapshots-of-your-favorite-videos.html"}))},!1)}function ka(){document.cookie&&(d.wide&&(document.cookie="wide=1; max-age=22592000; path=/; domain=youtube.com"),d.ww?document.cookie="s_gl=1d69aac621b2f9c0a25dade722d6e24bcwIAAABVUw==; max-age=22592000; path=/; domain=youtube.com":-1<document.cookie.indexOf("s_gl=1d69aac621b2f9c0")&&(document.cookie="s_gl=1d69aac621b2f9c0a25dade722d6e24bcwIAAABVUw==; max-age=0; path=/; domain=youtube.com"))}\nfunction Z(a,b){a.store_user_volume=!0;d.ww&&(a.cr="US",a.hl="en_US",a.host_language="en");O=d.hq;K=d.hqi;O&&(a.suggestedQuality=a.vq=K,window.localStorage&&(window.localStorage["yt-player-quality"]=\'{"data":"\'+K+\'","expiration":9904916135997,"creation":1502324135997}\'));d.anns&&(a.iv_load_policy=3)}function W(a){a=a?"auto":K;window.localStorage&&(window.localStorage["yt-player-quality"]=\'{"data":"\'+a+\'","expiration":9904916135997,"creation":1502324135997}\');var d=F(1);d&&d.setPlaybackQuality(a)}\nfunction va(){function a(){if(0>d.cini||2<d.cini)d.cini=1;if(0>d.cinc||39<d.cinc)d.cinc=0;if(0>d.cint||3<d.cint)d.cint=1;v=d.cini;c=d.cinc;P=d.cint}function b(){D||(document.addEventListener("click",n,!0),document.addEventListener("contextmenu",n,!0));D=!0}function x(a){D&&(document.removeEventListener("contextmenu",n,!0),document.removeEventListener("click",n,!0));D=!1}function n(a){var c,d=a.target;if(p)if(t)-1<d.className.indexOf("ytp-size-button")||-1<d.className.indexOf("html5-endscreen")?(m(),\nc=!0):"contextmenu"==a.type&&"ma-cin-cvs"==d.id&&(l(),c=!0);else if("contextmenu"==a.type){if(d=d.localName,"video"==d||"canvas"==d)l(),c=!0}else{if(-1<d.className.indexOf("ytp-size-button")||-1<d.className.indexOf("html5-endscreen"))l(),c=!0}else if("page"==d.id||"ytd-watch"==d.localName){var b=F(!0);b&&(d=a.pageY-window.scrollY,b=b.getBoundingClientRect(),60<d&&d<b.bottom&&("contextmenu"==a.type?l():m(),c=!0))}c&&(a.stopPropagation(),a.preventDefault())}function h(){window.hasOwnProperty("Polymer")?\n(w="ma-exp-mat",z="ma-cin-mat"+v):(w="ma-exp-old",z="ma-cin-old"+v)}function k(){A();var a=document.documentElement.classList;t&&(a.remove(z),a.remove("ma-cin"));p&&(a.remove(w),a.remove("ma-exp"));t=p=!1}function l(){var a=document.documentElement.classList;h();t?(A(),a.remove(z),a.remove("ma-cin"),t=!1):p?(a.remove(w),a.remove("ma-exp"),p=!1):(a.add("ma-exp"),a.add(w),p=!0,f());window.dispatchEvent(new Event("resize"));window.scrollTo(0,0)}function m(){var a=document.documentElement.classList;h();\nt?(A(),a.remove(z),a.remove("ma-cin"),a.remove(w),a.remove("ma-exp"),t=p=!1):(p||(a.add("ma-exp"),a.add(w)),a.add("ma-cin"),a.add(z),t=p=!0,f(),r(),e());window.dispatchEvent(new Event("resize"));window.scrollTo(0,0);d.cinf&&(t&&document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen())}function f(){var a=F(1);a&&(e_cinema=a.querySelector("#ma-cin"),e_cinema||(e_cinema=document.createElement("div"),\nE=document.createElement("canvas"),e_cinema.id="ma-cin",E.id="ma-cin-cvs",e_cinema.classList.add("ma-bg"+d.cinc),e_cinema.appendChild(E),e_cinema.addEventListener("click",function(a){a.stopPropagation();m()},!0)),a.insertBefore(e_cinema,a.lastElementChild));C=document.body.querySelector("#ma-cin-panel");if(!C){C=document.createElement("div");C.id="ma-cin-panel";var c,b,a=document.createElement("div");a.id="ma-cin-btns";C.appendChild(a);for(var e=0,u=4;e<u;e++)b="a",0==e?c="https://www.mycinema.pro/cinema.html":\n1==e?c="https://www.mycinema.pro/take-snapshots-of-your-favorite-videos.html":b="div",b=document.createElement(b),b.className="ma-cin-btn",b.id="ma-cin-btn"+e,c&&(b.href=c,b.target="_blank"),a.appendChild(b),1==e&&ja(b);a=document.createElement("div");a.id="ma-cin-clrs";C.appendChild(a);c=\'Dark Gray;Velvet Sky;Deep Blue Sea;Blue Sky;Sea Wave;Deep Green;Ultraviolet;Dark Pink;Black and White;Black and Blue;Black and Green;Black and Yellow;Black and Red;Black and Violet;Black and Pink;Chromed;Ultrared;Blue Planet;Green;Coffee and Milk;"Light Gray;Light Blue Sky;Light Blue;Light Green;Light Yellow;Light Violet;Light Pink;White and Black;Light Sea Green;Navy Blue;Lime Green;Orange;Magenta;Red;Yellow;Indigo;Purple;Pink;White;Black\'.split(";");\nfor(var e=0,u=c.length,q=1;e<u;e++,q++)b=document.createElement("div"),b.title=c[e],b.className="ma-cin-clr",b.id="ma-cin-clr"+e,a.appendChild(b),4<q&&(q=0,a.appendChild(document.createElement("br")));c=["Static","Color","Invert","Tint"];e=0;for(u=c.length;e<u;e++)b=document.createElement("div"),b.textContent=c[e],b.className="ma-cin-type",b.id="ma-cin-type"+e,a.appendChild(b);C.addEventListener("click",g,!0)}document.body.appendChild(C)}function g(a){a.stopPropagation();var c=a.target.id||"";if(c)if(0==\nc.indexOf("ma-cin-clr")){c=c.slice(10);c=parseInt(c)||0;if(0>c||39<c)c=0;G("'+
a+'",JSON.stringify({id:4,name:"cinc",value:c}))}else if(0==c.indexOf("ma-cin-type")){c=c.slice(11);c=parseInt(c)||0;if(0>c||3<c)c=0;G("'+a+'",JSON.stringify({id:4,name:"cint",value:c}))}else if(0==c.indexOf("ma-cin-btn")){c=c.slice(10);c=parseInt(c)||0;if(0>c||3<c)c=0;if(1==c)ha(a);else if(2==c||3==c)C.hasAttribute("on")?C.removeAttribute("on"):C.setAttribute("on","")}}function e(){var a;e_cinema.parentElement.querySelector("video")&&\n(E.classList.remove("ma-type"+u),(a=C.querySelector(".ma-cin-type-sel"))&&a.classList.remove("ma-cin-type-sel"),E.classList.add("ma-type"+P),(a=C.querySelector("#ma-cin-type"+P))&&a.classList.add("ma-cin-type-sel"),A(),0<P&&q(),u=P)}function r(){var a=e_cinema.parentElement.querySelector("video"),b;a&&(a.classList.remove("ma-sh"+X),e_cinema.classList.remove("ma-bg"+X),(b=C.querySelector(".ma-cin-clr-sel"))&&b.classList.remove("ma-cin-clr-sel"),e_cinema.classList.add("ma-bg"+c),a.classList.add("ma-sh"+\nc),(b=C.querySelector("#ma-cin-clr"+c))&&b.classList.add("ma-cin-clr-sel"),X=c)}function A(){S&&(clearInterval(S),S=0,E.getContext("2d").clearRect(0,0,E.width,E.height))}function q(){function a(){c.paused||(b!=c.videoWidth&&(b=c.videoWidth,d=c.videoHeight,E.width=e=window.innerWidth,E.height=u=E.offsetHeight),g.drawImage(c,0,0,b,d,0,0,e,u));S=setTimeout(a,80)}var c=e_cinema.parentElement.querySelector("video"),b,d,e,u,g=E.getContext("2d");c&&a()}var D,p,t,w,z,v,y,P,u,c,X,E,C,S;this.expandVideo=l;\nthis.cinemaVideo=m;this.getState=function(){return p?t?1:2:0};this.pageLoaded=function(c){a();d.cin&&c?b():x();d.cin&&c?d.cina&&(t||m()):k()};this.optionsChanged=function(c){a();d.cin&&c?b():x();d.cin&&c?t&&(c=document.documentElement.classList,void 0!=y&&c.remove(z),h(),c.add(z),y=v,r(),e()):k()};a()}function ba(){function a(a,d,c){a?p||(document.addEventListener("wheel",k,!0),p=!0):p&&(document.removeEventListener("wheel",k,!0),p=!1);d?t||(document.addEventListener("touchstart",n,!0),document.addEventListener("touchmove",\nh,!0),t=!0):t&&(document.removeEventListener("touchmove",h,!0),document.removeEventListener("touchstart",n,!0),t=!1);c?w||(document.addEventListener("mousemove",b,!0),document.addEventListener("contextmenu",x,!0),w=!0):w&&(document.removeEventListener("contextmenu",x,!0),document.removeEventListener("mousemove",b,!0),w=!1)}function b(a){if((3==a.which||2==a.buttons)&&0!=a.movementX){var b=a.target,c;if("video"==b.localName)c=b;else if("ma-volume"==b.id||"canvas"==b.localName&&-1<b.parentElement.className.indexOf("webgl"))c=\ndocument.querySelector(".html5-main-video");c&&(z=!0,l(c,a.movementX),a.preventDefault(),a.stopPropagation())}}function x(a){z&&(z=!1,a.preventDefault(),a.stopPropagation())}function n(a){v=a.targetTouches[0].pageX-window.scrollX}function h(a){var b=a.targetTouches[0].pageX-window.scrollX,c=a.targetTouches[0].pageY-window.scrollY,d=document.body.querySelectorAll("video"),e,g,q=b-v;if(-43>q||43<q)for(var k=0,p=d.length;k<p;k++)if(e=d[k],g=e.getBoundingClientRect(),c>g.top&&c<g.bottom&&b>g.left&&b<\ng.right){l(e,q);v=b;a.preventDefault();a.stopPropagation();break}}function k(a){var b=a.target,c;if("video"==b.localName)c=b;else if("ma-volume"==b.id||"canvas"==b.localName&&-1<b.parentElement.className.indexOf("webgl"))c=document.querySelector(".html5-main-video");c&&(l(c,a.wheelDelta=a.wheelDelta||-1*a.deltaY),a.preventDefault(),a.stopPropagation())}function l(a,b){var c=a.parentElement&&a.parentElement.parentElement||0,d;if(c&&c.setVolume){d=c.getVolume();d=0>b?d-A:d+A;100<d?d=100:0>d&&(d=0);\nc.setVolume(d);if(0<q){var u=d;f.parentElement||document.body.appendChild(f);var k=a.getBoundingClientRect(),p=k.left-window.scrollX,l=k.top+window.scrollY;1==q||3==q?(f.style.setProperty("left",p+20+"px","important"),f.style.setProperty("top",l+D+"px","important")):(f.style.setProperty("left",p+k.width/2-118+"px","important"),f.style.setProperty("top",l+k.height-120+"px","important"));y&&(f&&f.style.setProperty("display","block","important"),y=!1);1==q?(g.clearRect(0,0,90,48),g.fillText(u,0,21)):\n2==q?(g.fillStyle="rgb(0,0,0)",g.fillRect(0,0,236,20),g.rect(0,0,236,20),g.stroke(),g.fillStyle=r,g.fillRect(0,0,2*u,20),g.fillText(u,218,10)):3==q&&(g.clearRect(0,0,90,90),g.beginPath(),g.arc(45,45,40,2.0944,2.0944+.0523599*u,!1),g.stroke(),g.fillText(u,45,43));e&&clearTimeout(e);e=setTimeout(m,700)}c=c.isMuted();"localStorage"in window&&(u=+new Date,window.localStorage["yt-player-volume"]=\'{"data":"{\\\\"volume\\\\":\'+d+\',\\\\"muted\\\\":\'+c+\'}","expiration":\'+(u+1E10)+\',"creation":\'+u+"}")}}function m(){f&&\nf.style.setProperty("display","none","important");y=!0}var f,g,e,r,A,q,D,p,t,w,z,v,y;this.optionsChanged=function(){d.mwvc?(q=d.mwvci,A=d.gap,r=d.color,f||(f=document.createElement("canvas"),f.id="ma-volume",g=f.getContext("2d")),1==q?(f.width=90,f.height=48,g.font="48px Segoe UI, Helvetica, Arial, sans-serif",g.textAlign="left",D=17):2==q?(f.width=236,f.height=20,g.font="700 14px Segoe UI, Helvetica, Arial, sans-serif",g.textAlign="center",g.lineWidth=1,g.setLineDash([])):(f.width=90,f.height=90,\ng.font="600 30px Segoe UI, Helvetica, Arial, sans-serif",g.textAlign="center",D=17,g.lineWidth=7,g.setLineDash([5,1])),g.textBaseline="middle",g.strokeStyle=g.fillStyle=r,g.shadowColor="#000",g.shadowBlur=5,m(),a(d.mwvcm,d.mwvct,d.mwvcr)):a()}}function G(a,b){var d=new CustomEvent(a,{detail:b,cancelable:!1,canBubble:!1});wa.call(window,d)}function la(){var a=document.documentElement.classList;d.a0&&d.a4&&d.ui?(a.remove("m0"),a.add("m1")):(a.remove("m1"),a.add("m0"))}function ca(){var a=document.getElementById("ma-theme-switch");\nd.a0&&d.a4?a||(a=document.createElement("div"),a.id="ma-theme-switch",document.body.appendChild(a),a.addEventListener("click",xa,!0)):a&&document.body.removeChild(a)}function xa(a){G("'+
a+'",JSON.stringify({id:4,name:"ui",value:d.ui?0:1}));a.stopPropagation();a.preventDefault()}function ya(){document.getElementById("magicSVG")||ma("GET",T+"i/apV.svg",null,null,"document",function(a){a&&(a.documentElement.id="magicSVG",document.body.appendChild(a.documentElement))})}function za(){function a(e){if(e){var c=\ndocument.body.querySelector("#watch7-content,ytd-video-primary-info-renderer");if(c)if(w=d.loop,z=!1,r)c.insertBefore(r,c.firstElementChild),n(!w),g("b6",w),(t=F(1))&&l();else{var u=Math.floor(7*Math.random()),f=document.createElement("meta");c.insertBefore(f,c.firstElementChild);for(e=0;e<u;e++)c.insertBefore(document.createElement("meta"),c.firstElementChild);r=document.createElement("div");c.insertBefore(r,f.nextElementSibling);e=r;if(c=na){a:{if(navigator.appVersion&&(c=navigator.appVersion.indexOf("Chrome/"),\n-1<c)){c=parseInt(navigator.appVersion.slice(c+7));break a}c=0}c=53<c}A=c?na.call(e,{mode:"closed"}):e;q=document.createElement("div");q.id="ma-panel";k();var c="Magic;Subscribe;Magic Options;Cinema;Expand;Repeat;Color Filters;Transform Filters;Capture;Speed Booster;Show/Hide video info".split(";"),u=[1,2,3,4,5,6,9,10,8,11,12],h,m;e=0;for(var v=u.length;e<v;e++)f=u[e],h="a",1==f?m="https://www.mycinema.pro/menu.html":2==f?m="https://www.youtube.com/channel/UCCwIAJrwWGB2GCyZSp41wNg?sub_confirmation=1":\n3==f?m="https://www.mycinema.pro/options.html":8==f?m="https://www.mycinema.pro/take-snapshots-of-your-favorite-videos.html":(m=null,h="div"),h=document.createElement(h),m&&(h.href=m,h.target="_blank"),h.id="b"+f,h.className="bt",h.title=c[e],q.appendChild(h),1==f?ta(h):3==f?ua(h):8==f&&ja(h);A.appendChild(Aa(T+"css/IVqC.css"));A.appendChild(q);q.addEventListener("click",x,!0);p=q.lastElementChild;(t=F(1))&&l();n(!w);g("b6",w);b()}else D=setTimeout(a,2E3,1)}else n(!0)}function b(){e("b4",\nd.cin);e("b5",d.cin);e("b9",d.f0);e("b10",d.f0);e("b11",d.buf)}function x(a){var c=parseInt(a.target.id.slice(1)||0);c&&(1==c?oa&&(G("'+
a+'",JSON.stringify({id:8,url:"https://www.mycinema.pro/menu.html"})),a.preventDefault()):3==c?pa&&(G("'+a+'",JSON.stringify({id:8,url:"https://www.mycinema.pro/options.html"})),a.preventDefault()):4==c?M.cinemaVideo():5==c?M.expandVideo():6==c?(w=!w,n(!w),g("b6",w)):8==c?ha(a):9==c?m():10==c?f():11==c?(N||(N=new Ba),N.toggle()):12==c&&(c=F(1))&&(z&&c.hasOwnProperty("hideVideoInfo")?\n(c.hideVideoInfo(),z=!1):c.hasOwnProperty("showVideoInfo")&&(c.showVideoInfo(),z=!0)));a.stopPropagation()}function n(a){var c=F();if(c){var b=a?B?"removeEventListener":0:B?0:"addEventListener";b&&(c[b]("timeupdate",h,!0),B=a?!1:!0)}else B=!1}function h(a){this.currentTime>this.duration-1&&t&&t.hasOwnProperty("seekTo")&&t.seekTo(0)}function k(){q&&(q.className=(d.a0&&d.a4?d.ui?"m1":"m0":"m0")+(window.hasOwnProperty("Polymer")?" mat":""))}function l(){if(t&&t.getVideoLoadedFraction){var a=t.getVideoLoadedFraction(),\na=.99<a?100:parseInt(100*a);p.textContent=isNaN(a)?"":a+"%";100>a?D=setTimeout(l,3E3):d.buf&&d.buf1&&(new Audio(T+"i/notify.ogg")).play()}}function m(a){var c=document.querySelector(".webgl canvas")||F();c&&(rgFilterNames="Apply Color Filter;Detalization;High Contrast;S-High Contrast;Grayscale;Sepia;Red Magic;Invert".split(";"),c.classList.remove("ma-c-filter"+v),a?v=0:(v++,7<v&&(v=0)),c.classList.add("ma-c-filter"+v),g("b9",0<v,rgFilterNames[v]),1==v&&(ya(),1==y&&c.classList.remove("ma-c-filter1")))}\nfunction f(a){var c=document.querySelector(".webgl canvas"),b=c||F();b.classList.remove("ma-t-filter"+y);a?y=0:(y++,4<y&&(y=0));b.classList.add("ma-t-filter"+y);g("b10",0<y,["Apply Magic Transform","Magic Vinyl","Magic Zoom","Horizontal-Flip","Vertical-Flip"][y]);1==y?c?c.style.display="none":1==v&&b.classList.remove("ma-c-filter1"):2==y&&(c?c.style.display="":1==v&&b.classList.add("ma-c-filter1"))}function g(a,c,b){q&&(a=q.querySelector("#"+a))&&(a.classList[c?"add":"remove"]("on"),b&&(a.title=b))}\nfunction e(a,c){if(q){var b=q.querySelector("#"+a);if(b)b.classList[c?"remove":"add"]("hide")}}var r,A,q,D,p,t,w,z,v=0,y=0,B=!1;this.setTheme=k;this.selectBtn=g;this.isHost=function(a){return a==r};this.optionsChanged=function(a){a&&(b(),d.f0||(m(!0),f(!0)))};this.pageLoaded=function(b){D&&(clearTimeout(D),D=0);a(b)}}function Ba(){function a(a){b();a&&r.seekTo(m);B&&B.selectBtn("b11",0,"Speed booster/buffering");e=0}function b(){g&&(clearTimeout(g),g=null);l=k=0}function d(){f=r.getPlayerState();\n1!=f?(h=r.getVideoLoadedFraction(),1>h?(n=r.getDuration(),l=parseInt(h*n),l>k&&(k=l,l<n?(r.seekTo(l),e=1,g=setTimeout(d,1E3)):a(1))):a(1)):a(1)}var n,h,k,l,m,f,g,e,r;this.pageLoaded=function(){e&&a();document.documentElement.classList.remove("ma-boost")};this.toggle=function(){e?a():(r||(r=F(1)),r?(b(),f=r.getPlayerState(),1==f&&r.pauseVideo(),m=r.getCurrentTime(),B&&B.selectBtn("b11",1,"Stop booster/buffering"),document.documentElement.classList.add("ma-boost"),d()):e=0)}}function ea(){Q&&(Q.uninit(),\nQ=null);d.mrl&&"/watch"==window.location.pathname&&(Q||(Q=new Ca))}function Ca(){function a(a){a.preventDefault();a.stopPropagation();clearInterval(A);var f=parseInt(h.getCurrentTime());a=a.pageX-k.getBoundingClientRect().left;var p=k.offsetWidth;r=e.length;a=parseInt(a*g/p);p=d(a);if(-1<p)e.splice(p,2);else{f>a&&(p=f,f=a,a=p);for(p=0;p<r;p+=2){var q=e[p],l=e[p+1],m=!1;q>=f&&l<=a?m=!0:q>=f&&q<=a?(a=l,m=!0):l>=f&&l<=a&&(f=q,m=!0);m&&(e[p]=-1,e[p+1]=-1)}e=e.filter(function(a){return-1<a});r=e.length;\ne.push(f,a)}r=e.length;e.sort(function(a,b){return a==b?0:a>b?1:-1});n();0<r&&(A=setInterval(b,1E3))}function b(){for(var a=h.getCurrentTime(),b,d=1,g=r;d<g;d+=2)if(b=e[d],a>b&&a<b+2){h.seekTo(e[d+1<r?d+1:0]);break}}function d(a){for(var b=0;b<r;b+=2)if(a>=e[b]&&a<=e[b+1])return b}function n(){var a,b,d=m.width=m.offsetWidth;a=m.height=m.offsetHeight;f.clearRect(0,0,d,a);if(r){f.lineWidth=8;f.strokeStyle="rgba(0, 250, 0,.5)";for(var k=0,l=1;k<r;k+=2,l+=2)a=e[k]*d/g,b=e[l]*d/g,1>b-a&&(a-=2,b+=2),f.moveTo(a,\n4),f.lineTo(b,4),f.stroke()}}var h,k,l,m,f,g,e=[],r,A;if(h=F(1))(k=document.querySelector(".ytp-progress-bar-container"))&&(l=k.querySelector(".html5-scrubber-button,.ytp-scrubber-button")),null!=l&&(m=document.createElement("canvas"),m.id="ma-looper",f=m.getContext("2d"),g=h.getDuration(),e=[],m.style.setProperty("z-index",window.getComputedStyle(l,null).getPropertyValue("z-index"),"important"),k.insertBefore(m,k.firstElementChild),k.addEventListener("contextmenu",a,!1));this.uninit=function(){clearInterval(A);\nk.removeEventListener("contextmenu",a,!1);m.parentElement.removeChild(m)}}function da(a){var b=document.documentElement.className;b&&(b=b.replace(RegExp("( )*ma-hide[0-9]+","g"),""));if(a&&d.h0)for(a=1;9>a;a++)d["h"+a]&&(b+=" ma-hide"+a);document.documentElement.className=b}function fa(){d.a0&&d.a2?document.documentElement.classList.add("ma-zoom"):document.documentElement.classList.remove("ma-zoom")}function ga(){d.c0&&d.c1?R||(R=new Da):R&&(R.uninitialize(),R=null)}function Da(){function a(a){"img"==\na.target.localName&&23<a.target.width&&(a.target.addEventListener("mouseout",x,!1),b(a));a.preventDefault()}function b(a){n&&(clearTimeout(n),n=0);var b=a.target;a=document.body.querySelectorAll(".g-hovercard");for(var k=0,f=a.length;k<f;++k)a[k].classList.remove("g-hovercard");n=setTimeout(function(){var a="center",e;if((e=b)&&void 0!=e){var f=0,k=0;if(e.offsetParent){do f+=e.offsetLeft,k+=e.offsetTop,e=e.offsetParent;while(e)}e=[f,k]}else e=[0,0];var l=e[0],m=e[1],p=b.offsetWidth,n=b.offsetHeight,\nk=0,x,f=window.scrollY;if(e=b.src)d.c0&&d.c1&&(/s\\d+-c-k/.test(e)?(b.hasAttribute("data-magic")||(b.src=e=e.replace(/s\\d+-c-k/,"s384-c-k")),k=x=384,a="center"):/sz=[0-9]+/.test(e)?(b.hasAttribute("data-magic")||(b.src=e=e.replace(/sz=[0-9]+/,"sz=384")),k=x=384,a="center"):/=s[0-9]+/.test(e)&&(b.hasAttribute("data-magic")||(b.src=e=e.replace(/=s[0-9]+/,"=s384")),k=x=384,a="center"),b.setAttribute("data-magic",!0)),0!=k&&(l<window.innerWidth/2?(p=l+p+32,l="magic-tip-left"):(p=l-k-32,l="magic-tip-right"),\nm=m-parseInt((x-n)/2)-5,n=parseInt(x/2),m<f&&(n-=f-m,m=f),0>n&&(n=5),f=p,n+="px",p="url("+e+") center "+a+"/100% auto no-repeat",h?(a=h.firstElementChild,e=h.lastElementChild,n&&a.style.setProperty("top",n,"important")):(h=document.createElement("div"),a=document.createElement("div"),e=document.createElement("iframe"),h.className="magic-tip",e.setAttribute("scrolling","no"),e.setAttribute("frameborder","0"),h.appendChild(a),h.appendChild(e),document.body.appendChild(h)),qa(h,["top",m+"px","left",\nf+"px","height",x+"px"],1),qa(e,["width",k+"px","height",x+"px","background",p,"display","block"],1),l?(a.style.setProperty("display",""),a.className=l):a.style.setProperty("display","none","important"),h.style.setProperty("display","block","important"))},500)}function x(a){a.target.removeEventListener("mouseout",x,!1);n&&(clearTimeout(n),n=0);h&&h.style.setProperty("display","none","important")}var n,h;document.body.addEventListener("mouseover",a,!1);this.uninitialize=function(){document.body.removeEventListener("mouseover",\na,!1)}}function sa(){function a(a){do if((a=a.parentElement)&&("li"==a.localName||-1<a.className.search(/yt-lockup-video|video-list-item/)))break;while(a);if(a&&(a=a.querySelector(".yt-thumb-default,.yt-uix-simple-thumb-related,.video-thumb"))){var b,d,h=a.querySelector("img");h&&(a.img_w=h.width,b=a.dataset.vid,b||(b=h.getAttribute("src"))&&(b=b.split("/")[4]));11==b.length&&ma("GET","https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+b+"&key=AIzaSyC6wA79STIEv1tewqxtewjwbTMP6uOKLF8",\nnull,null,"text",function(b){if(b){try{b=JSON.parse(b)}catch(A){return}if(b&&b.items&&0<b.items.length&&(items=b.items,d=items[0].statistics)){b=a.parentElement;var l=document.createElement("div"),h=document.createElement("div");l.className="ma-rts-line";h.className="ma-rts-prg";l.style.width=a.img_w+"px";var f=parseInt(d.likeCount)||0,g=parseInt(d.dislikeCount)||0,g=parseInt(f+g),e=d.commentCount||0,k=g?f/g:0;h.style.setProperty("transform","scaleX(0)","");b.title=(k?(100*k).toFixed(1)+"% of likes from "+\ng+" votes":"")+(e?"\\n"+e+" comments":"");l.appendChild(h);b.appendChild(l);setTimeout(function(){h.style.setProperty("transform","scaleX("+k+")","")},100)}}})}}document.documentElement.classList.add("ma-rts");document.body.addEventListener("click",function(b){var d=b.target;-1<d.className.search(/view-count|yt-lockup-meta/)&&(b.stopPropagation(),b.preventDefault(),d.rating||(d.rating=!0,a(d)))},!1)}function F(a){var b=document.querySelector("#player video")||document.querySelector("#movie-player video")||\ndocument.querySelector(\'video [src^="blob"]\');return a?b.parentElement.parentElement:b}function ma(a,b,d,n,h,k){var l=new XMLHttpRequest;l.onload=function(a){200==this.status?k(this.response):k()};l.onerror=k;l.onabort=k;l.open(a,b,!0);if(n)for(a=0,b=n.length;a<b;a+=2)l.setRequestHeader(n[a],n[a+1]);h&&(l.responseType=h);try{l.send(d)}catch(m){}}function qa(a,b,d){if(a){var n=0,h=b.length;for(d=d?"important":null;n<h;n+=2)a.style.setProperty(b[n],b[n+1],d)}}function Aa(a){var b=document.createElement("link");\nb.rel="stylesheet";b.type="text/css";b.href=a;return b}var na=Element.prototype.attachShadow||0,wa=Window.prototype.dispatchEvent,d,pa,ia,oa,T,ra,I,O,K,J,M,B,N,H,R,Q,L=0,aa;d=JSON.parse(\''+
d+'\');T=d.extURL;I=0<window.location.search.indexOf("list=");L=d.pause?I?d.plist?1:0:0:1;la();ka();window.addEventListener("'+a+'b",function(a){var b;try{b=JSON.parse(a.detail)}catch(x){return}31==b.id?(a=b.tab,b=b.url,"https://www.mycinema.pro/menu.html"==b?oa=a:"https://www.mycinema.pro/options.html"==b?pa=a:"https://www.mycinema.pro/take-snapshots-of-your-favorite-videos.html"==\nb&&(ia=a)):(d=b,b="/watch"==window.location.pathname,la(),B.setTheme(),da(b),M.optionsChanged(b),B.optionsChanged(b),J||(J=new ba),J.optionsChanged(),ka(),ca(),ea(),fa(),ga(),O!=d.hq?(O=d.hq)?W():W(!0):O&&K!=d.hqi&&(K=d.hqi,W()))},!1);try{Object.defineProperty(window,"ytplayer",{get:function(){d&&H&&H.config&&H.config.args&&!ra&&(ra=!0,Z(H.config.args));return H},set:function(a){H=a},configurable:!0,enumerable:!0})}catch(a){Y()}var Ea=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=\nfunction(){Ea.apply(this,arguments);if(0==L){var a=this.parentElement.parentElement;a&&"pauseVideo"in a&&a.pauseVideo()}return!0};window.addEventListener("DOMContentLoaded",function(){window.addEventListener("popstate",U,!1);document.addEventListener("yt-navigate",U,!1);document.addEventListener("spfrequest",U,!1);M=new va;B=new za;V()},!1);document.addEventListener("click",function(a){B&&B.isHost(a.target)||(L=1)},!0)})();';
c.appendChild(b);c.removeChild(b);window.addEventListener(a,n,!1)}},configurable:!1});document.documentElement.classList.add("m1");var h,f;for(f in chrome)if("object"==typeof chrome[f]&&(h=Object.getOwnPropertyDescriptor(chrome,f))){g[f]=h.value;h.value={};h.configurable=!1;h.writable=!1;try{Object.defineProperty(chrome,f,h)}catch(d){g[f]=chrome[f]}}setTimeout(l,12E3)})();
