
self.addEventListener('install', function(event) {
    console.log('SW Installed!!', event);
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    console.log('SW Activated!!', event);
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function( event ) {
    return;
});

