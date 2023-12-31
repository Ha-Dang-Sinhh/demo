let cacheName = 'hello-pwa';
let filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('install')
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting().then(r => console.log('skipWaiting'));
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
        console.log('fetch')
      return response || fetch(e.request);
    })
  );
});