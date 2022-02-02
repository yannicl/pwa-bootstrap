this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
         '',
          'index.html',
          'index.js',
          // '/favicon.ico',
          'mobile2.jpg',
          'ordinateur.png',
          'tablettes.jpg',
          'icon1.png',
          'icon-192x192.png',
          'icon-256x256.png',
          'icon-384x384.png',
          'icon-512x512.png',
          'bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
          'bootstrap-5.1.3-dist/css/bootstrap.min.css',
          'icons-1.7.2/font/bootstrap-icons.css'
          
            
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
  