if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-3a6c7c6a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"807f17bd1ea115ba28347a9177d4b187"},{url:"/static/css/933.b9adec2a.css",revision:null},{url:"/static/js/933.0637922f.js",revision:null},{url:"/static/js/933.0637922f.js.LICENSE.txt",revision:"bc7d0338ec1ed2e24cc178a7be0700bd"},{url:"/static/js/main.18dc29e8.js",revision:null},{url:"/static/js/runtime-main.206b2522.js",revision:null}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("public/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
