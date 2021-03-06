const VERSION = 'V1';

self.addEventListener('install', event => {
    event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
   const request = event.request;
   if(request.method !== 'GET') {
    return;
   }

   event.respondWith(cacheResponse(request));
   /* event.waitUntil(updateCache(request)); */
})

async function precache () {
    const cache = await caches.open(VERSION);
    cache.addAll([
       /*  '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/opening-one-piece.mp4', */
    ])
}

 async function cacheResponse(request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
 }

 async function updateCache(request){
    /* const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response); */
}