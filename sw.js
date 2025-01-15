const CACHE_NAME = 'minimal-pwa-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/1.png',
  './assets/2.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});