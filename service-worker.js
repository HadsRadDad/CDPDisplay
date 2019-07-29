const cacheName = 'ipad.v0.9';

const cacheAssets = [
  'index.html',
  './Disciplines.otf',
  './indexstyle.css',
  './CDP.mp4',
  './ipadbg.png',
  '.jquery-3.2.0.js',
  './disciplines/coursestyle.css',
  './disciplines/fema.png',
  './disciplines/homebutton.png',
  './disciplines/loadcourses.js',
  './disciplines/Agriculture.html',
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
  './courseinfo/ARIO.txt',
  './courseinfo/ASTTP.txt',
  './courseinfo/BMAP.txt',
  './courseinfo/BPAC.txt',
  './courseinfo/BTM.txt',
  './courseinfo/CSM.txt',
  './courseinfo/EHTER.txt',
  './courseinfo/EMO.txt',
  './courseinfo/EMRA.txt',
  './courseinfo/ERDB.txt',
  './courseinfo/ERHM.txt',
  './courseinfo/FFC.txt',
  './courseinfo/FFCE.txt',
  './courseinfo/FFE.txt',
  './courseinfo/FFO.txt',
  './courseinfo/FRAME.txt',
  './courseinfo/HARM.txt',
  './courseinfo/HAZMATOPS.txt',
  './courseinfo/HCL.txt',
  './courseinfo/HCRL.txt',
  './courseinfo/HEC.txt',
  './courseinfo/HERO.txt',
  './courseinfo/HERT.txt',
  './courseinfo/HERTBTTT.txt',
  './courseinfo/HID.txt',
  './courseinfo/HMA.txt',
  './courseinfo/HMBR.txt',
  './courseinfo/HMO.txt',
  './courseinfo/HMT.txt',
  './courseinfo/HOT.txt',
  './courseinfo/HOTI.txt',
  './courseinfo/HOTLE.txt',
  './courseinfo/HT.txt',
  './courseinfo/IC.txt',
  './courseinfo/ICR.txt',
  './courseinfo/IED.txt',
  './courseinfo/ILERSBA.txt',
  './courseinfo/ITC.txt',
  './courseinfo/LEPM.txt',
  './courseinfo/LEPMTTT.txt',
  './courseinfo/LERA.txt',
  './courseinfo/MADT.txt',
  './courseinfo/MPI.txt',
  './courseinfo/PMC.txt',
  './courseinfo/PODET.txt',
  './courseinfo/PPMB.txt',
  './courseinfo/PPMBTTT.txt',
  './courseinfo/RAAC.txt',
  './courseinfo/RADTTT.txt',
  './courseinfo/RCCC.txt',
  './courseinfo/RCTIC.txt',
  './courseinfo/RDIR.txt',
  './courseinfo/RECC.txt',
  './courseinfo/REEC.txt',
  './courseinfo/RERO.txt',
  './courseinfo/RP.txt',
  './courseinfo/RPCC.txt',
  './courseinfo/RPPR.txt',
  './courseinfo/SAAC.txt',
  './courseinfo/SAAT.txt',
  './courseinfo/SAT.txt',
  './courseinfo/SNS.txt',
  './courseinfo/TERT.txt',
  './courseinfo/VBIED.txt'
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