"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a4637f083e95b426d758182abab6807c"],["/static/css/main.ea2b6d13.css","cbef00f98d945a5fc2fd79be446034c4"],["/static/media/Glyphter.6c51b81e.svg","6c51b81ea8f48db513aeae66d745d706"],["/static/media/Glyphter.a5a6fc5c.ttf","a5a6fc5c79774c8794e997d9f31c8f18"],["/static/media/Glyphter.b01de41e.woff","b01de41ee1a7ad89df59a03a560f0b14"],["/static/media/Glyphter.c6a65cc8.eot","c6a65cc8ff14fa129423370502f2639f"],["/static/media/SukhumvitSet-Bold.50e56ab2.ttf","50e56ab2dd1313d2ad7bc157d8696377"],["/static/media/SukhumvitSet-Bold.62dd814d.woff","62dd814d4221d19daa123ab5ad955979"],["/static/media/SukhumvitSet-Bold.cf6c3625.eot","cf6c362574fa6300194e62497d093d2a"],["/static/media/SukhumvitSet-Light.1dfecdd2.eot","1dfecdd2e6d9f50e68e1185565b8e9d0"],["/static/media/SukhumvitSet-Light.9e6378c3.woff","9e6378c32b6c0e13a895ea04d0386b36"],["/static/media/SukhumvitSet-Light.e87b2105.ttf","e87b210523b9063589d0d35faccec1c9"],["/static/media/SukhumvitSet-Medium.26e7e1f3.ttf","26e7e1f3826419bbc3c1fe46709214d8"],["/static/media/SukhumvitSet-Medium.69ff9687.woff","69ff96871f5e0fb3b28fe29ce3a91cd2"],["/static/media/SukhumvitSet-Medium.b1cf7694.eot","b1cf769499422e426615c59ebf4c00d9"],["/static/media/SukhumvitSet-SemiBold.31c558d2.ttf","31c558d23df4b0292ec2111e295d9bde"],["/static/media/SukhumvitSet-SemiBold.9ec5a2cb.eot","9ec5a2cbc83e1d45d2a812a042b7bc02"],["/static/media/SukhumvitSet-SemiBold.d7ed0b1f.woff","d7ed0b1f579dfd2a0a40d8a4a7184208"],["/static/media/SukhumvitSet-Text.62265b6b.eot","62265b6b77599435d0ccc1dc461dca0e"],["/static/media/SukhumvitSet-Text.d0715a82.woff","d0715a82f193212970c3a1425f26cdaf"],["/static/media/SukhumvitSet-Text.feb23132.ttf","feb23132f1f6513d977ff977ba22a84f"],["/static/media/SukhumvitSet-Thin.2ed99ebe.eot","2ed99ebe3955cc86bade3ceb57418250"],["/static/media/SukhumvitSet-Thin.93c6caa4.woff","93c6caa4c42c16eb564d74548c5079bf"],["/static/media/SukhumvitSet-Thin.b6af75ad.ttf","b6af75adb5e8ed7e2d3fce138939a8aa"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.acf3dcb7.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),i=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});