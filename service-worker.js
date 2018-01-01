"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a43eeea541b8af77fb1f2673a31b391b"],["/static/css/main.abb25af5.css","7b49bab0b9737cd6ea1c4ceb9f9d9025"],["/static/js/main.6d9b34c4.js","5db1d72c6ec4b7b9a30d405000bd6035"],["/static/media/Demonic.3b8a6eb0.jpg","3b8a6eb0365ca64d41b783675c253be9"],["/static/media/Goroth.078f2fb9.jpg","078f2fb9da7959b8f529ab9d29e200da"],["/static/media/Harjatan.be8f44d0.jpg","be8f44d0bd258171062c4c834d6e4d7f"],["/static/media/Host.e144dd9f.jpg","e144dd9f6fb07d6484f048cdd3aca72e"],["/static/media/Kiljaeden.7b58b972.jpg","7b58b972ef891445103eef225476e859"],["/static/media/Maiden.8810a5a4.jpg","8810a5a4fb97fdc6d28ff8b04b2dca3f"],["/static/media/Mistress.0cb6742d.jpg","0cb6742d88e844914e59b46a31591c1c"],["/static/media/Sisters.f660b6a1.jpg","f660b6a1ca055da5b3dd9186ebc14faa"],["/static/media/aggramar.2219483e.jpg","2219483e2de0d14e9fd13bdd1b616a94"],["/static/media/argus.01d16eee.jpg","01d16eee7742fa56723298abcfe7afda"],["/static/media/coven.044dea07.jpg","044dea07b4e67a8b7b85b42c1ec1fcf7"],["/static/media/cover_photo.d7530f0f.jpg","d7530f0fba672bae333ae296eeea56c1"],["/static/media/eonar.2eaf5648.jpg","2eaf5648bb3d54d5550adeda7a9f0aae"],["/static/media/felhounds.8b884eac.jpg","8b884eacc9a5f6a128dd955a2625c1ea"],["/static/media/garothi.f90127bc.jpg","f90127bc92c2126bfe93ec32555dde55"],["/static/media/guild_logo_white.0809a56e.svg","0809a56e80a51bc51b8408f9d64668a0"],["/static/media/hasabel.3aa5c01d.jpg","3aa5c01d4ecd1e9aa7c66760f36cb00c"],["/static/media/highcommand.1d829c05.jpg","1d829c053c311a59142f836aecccbb06"],["/static/media/imonar.3287551d.jpg","3287551dc46cf92429d4c0d7b5e6080c"],["/static/media/kingaroth.4b1616c6.jpg","4b1616c6319472f4d480dded9a46b34a"],["/static/media/ste.34f0aa99.jpg","34f0aa9980a66eb5e94ff7ccc3939cc9"],["/static/media/varimathras.c2040cfc.jpg","c2040cfc62fe6b31fb90c918d409c55f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});