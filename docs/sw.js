const CACHE_NAME = 'ike-elite-cache-v1';
const urlsToCache = [
  '/Ike-Elite-Couture/',
    '/Ike-Elite-Couture/index.html'
    ];

    self.addEventListener('install', event => {
      event.waitUntil(
          caches.open(CACHE_NAME).then(cache => {
                return cache.addAll(urlsToCache);
                    })
                      );
                      });

                      self.addEventListener('fetch', event => {
                        event.respondWith(
                            caches.match(event.request).then(response => {
                                  return response || fetch(event.request);
                                      })
                                        );
                                        });
                                        