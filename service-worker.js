const cacheName = 'ipad.v0.9.0';

const cacheAssets = [
  'index.html',
  './Disciplines.otf',
  './indexstyle.css',
  './ipadbg.png',
  './jquery-3.2.0.js',
  './disciplines/Agriculture.html',
  './disciplines/coursestyle.css',
  './disciplines/Education.html',
  './disciplines/EmergencyMan.html',
  './disciplines/EMS.html',
  './disciplines/fema.png',
  './disciplines/Fire.html',
  './disciplines/GovAdmin.html',
  './disciplines/Hazmat.html',
  './disciplines/Healthcare.html',
  './disciplines/homebutton.png',
  './disciplines/Indirect.html',
  './disciplines/IT.html',
  './disciplines/Law.html',
  './disciplines/loadcourses.js',
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
  './courseinfo/VBIED.txt',
  './media/bgcon.jpg',
  './media/corps1.jpg',
  './media/corps2.jpg',
  './media/erhm03.jpg',
  './media/fema.png',
  './media/ffe03.jpg',
  './media/ffo03.jpg',
  './media/gdg.jpg',
  './media/hazmatops03.jpg',
  './media/hec03.jpg',
  './media/homebutton.png',
  './media/ic03.jpg',
  './media/itc03.jpg',
  './media/rp03.jpg',
  './media/emo.jpg',
  './media/hcl.jpg',
  './media/hert.jpg',
  './media/hmbr.jpg',
  './media/ht.jpg',
  './form/form.html',
  './form/formstyle.css',
  './form/export.html',
  './bootstrap/css/bootstrap.min.css'
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

self.addEventListener('activate', e =>{
  console.log('Service Worker: Activated');
  let sayHello = () => {
    console.log('hello')
  }
  setInterval(sayHello,5000)
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
