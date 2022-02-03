this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([

         '/',
          'pwa-bootstarp/index.html',
          'pwa-bootstarp/index.js',
          // '/favicon.ico',
          'pwa-bootstarp/mobile2.jpg',
          'pwa-bootstarp/ordinateur.png',
          'pwa-bootstarp/tablettes.jpg',
          'pwa-bootstarp/icon1.png',
          'pwa-bootstarp/icon-192x192.png',
          'pwa-bootstarp/icon-256x256.png',
          'pwa-bootstarp/icon-384x384.png',
          'pwa-bootstarp/icon-512x512.png',
          'pwa-bootstarp/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
          'pwa-bootstarp/bootstrap-5.1.3-dist/css/bootstrap.min.css',
          'pwa-bootstarp/icons-1.7.2/font/bootstrap-icons.css'
          
            
        ]);
      })
    );
  });

  this.addEventListener('fetch', function(event) {

    console.log("Fetching ..." + event.request.url);

    event.respondWith(caches.match(event.request).then(function(response) {
      
      if (response !== undefined) {
        return response;
      } else {

        console.log("Fetching from fetch ..." + event.request.url);

        return fetch(event.request);
      }
    }));
  });
  