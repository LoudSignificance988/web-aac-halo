// Halo AAC service worker – keeps the app usable with no internet connection.
// Bump VERSION whenever you want to force every device to drop its old cache.
const VERSION = 'halo-v3';
const CORE = [
  './',
  './index.html',
  './i18n.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './favicon-32.png',
  './apple-touch-icon.png'
];
// Third-party files that are safe to keep a copy of (versioned URLs, so they never change).
const CDN_HOSTS = ['www.gstatic.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('halo-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // The page itself: try the network first so updates show up, fall back to the saved copy offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  const sameOrigin = url.origin === self.location.origin;
  const cdn = CDN_HOSTS.includes(url.hostname);
  if (!sameOrigin && !cdn) return; // leave Firebase auth/Firestore, dictionary API, etc. alone

  // Static files: serve instantly from cache, refresh in the background.
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
