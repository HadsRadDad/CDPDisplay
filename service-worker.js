const cacheName = 'ipad.v0.8';

const cacheAssets = [
  'index.html',
  '/disciplines/Fire.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Education.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/EmergencyMan.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/EMS.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/GovAdmin.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Hazmat.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Healthcare.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Indirect.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/IT.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Law.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Other.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/PublicCom.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/PublicHealth.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/PublicWorks.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Safety.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Search.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Trans.html',
  'https://hadsraddad.github.io/CDPDisplay/disciplines/Vol.html',
  'ipadbg.png',
  'coursestyle.css',
  'Disciplines.otf',
  'indexstyle.css',
  'CDP.mp4'
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