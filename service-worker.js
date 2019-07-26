const cacheName = 'ipad.v1';

const cacheAssets = [
  '/index.html',
  './disciplines/Fire.html',
  './disciplines/Education.html',
  './disciplines/EmergencyMan.html',
  './disciplines/EMS.html',
  './disciplines/GovAdmin.html',
  './disciplines/Hazmat.html',
  './disciplines/Healthcare.html',
  './disciplines/Indirect.html',
  './disciplines/IT.html',
  './disciplines/Law.html',
  './disciplines/Other.html',
  './disciplines/PublicCom.html',
  './disciplines/PublicHealth.html',
  './disciplines/PublicWorks.html',
  './disciplines/Safety.html',
  './disciplines/Search.html',
  './disciplines/Trans.html',
  './disciplines/Vol.html',
  '/ipadbg.png',
  '/coursestyle.css',
  '/Disciplines.otf',
  '/indexstyle.css',
  '/CDP.mp4'
];

// Call install event
self.addEventListener('install', e =>{
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call activate Event
self.addEventListener('install', e =>{
  console.log('Service Worker: Activated');
  // Remove old caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName) {
            console.log('Service Working: Clearing cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});