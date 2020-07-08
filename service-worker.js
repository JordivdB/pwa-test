var cacheName = 'pwa-test-v1';
var appShellFiles = [
  '/pwa-test/',
  '/pwa-test/index.html',
  '/pwa-test/files/js/javascript.js',
  '/pwa-test/files/css/hoaframe.css',
  '/pwa-test/files/css/fa.min.css',
  '/pwa-test/files/images/icoach-login.jpg'
];


self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(appShellFiles);
    })
  );
});


self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});