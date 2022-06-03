
self.addEventListener('install', function (event) {
    console.log('SW Installed!!', event);
    self.skipWaiting();

    console.log('cache', caches);

    event.waitUntil(
        caches.open('cacheAssets')
            .then(function (cache) {

                cache.add('/Lab-2/');
                cache.add('/Lab-2/index.html');
                cache.add('/Lab-2/index.html');
                cache.add('/Lab-2/icons/icon.png');
                cache.add('/Lab-2/css/style.css');
                cache.add('/Lab-2/js/script.js');
                cache.add('/Lab-2/manifest.json');
                cache.add('/Lab-2/icons/favicon-32x32.png');
                cache.add('/Lab-2/icons/favicon-16x16.png');
                cache.add('/Lab-2/icons/android-chrome-192x192.png');
            })
    );
});

self.addEventListener('activate', function (event) {
    console.log('SW Activated!!', event);
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function (event) {

    event.respondWith(
        fetch(event.request)
            .catch(function (response) {
                return caches.match(event.request);
            })
    );
    
});

