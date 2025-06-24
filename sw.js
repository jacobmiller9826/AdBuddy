self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('localreach-cache').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/wizard.html',
        '/style.css',
        '/common.js',
        '/wizard.js',
        '/manifest.json',
        '/icon.png'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
