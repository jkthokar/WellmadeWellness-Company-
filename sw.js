// WellmadeWellness — service worker
// Strategy: network-first for pages (so staff always see live data when online),
// falling back to a cached copy when offline. Firebase calls are left alone —
// they're a different origin, so this worker never intercepts them.

const CACHE_VERSION = 'wmw-v1';
const PRECACHE_URLS = [
  'index.html',
  'login.html',
  'inventory.html',
  'admin-inventory.html',
  'brands.html',
  'admin-brands.html',
  'production.html',
  'admin-production.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle same-origin GET requests — leave Firebase/Google Fonts/etc. untouched.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match('index.html')))
  );
});
