
const CACHE_NAME = 'TasabehCache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.html',
  '/artist.html',
  '/login.html',
  'app.css',
  'artist.css',
  'playlist.html',
  'see-all-artistpage.html',
  'see-all-playlistpage.css',
  'D:\Mayer\مهرجان الكرازة 2026\Hymns Web App 2\images\logo.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});