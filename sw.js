const CACHE_NAME = 'regatta-planer-v28.0.0';
const APP_SHELL = ['./','./index.html','./manifest.webmanifest','./css/main.css','./js/app.js','./js/util.js','./js/storage.js','./js/data.js','./js/planner.js','./js/map.js','./js/gps.js','./js/importer.js','./data/sample-rakken.json','./data/sample-bojen.json','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-icon.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    if (new URL(event.request.url).origin === location.origin) caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
