this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '.',
                'index.html',
                'index.js'
            ]);
        })
    );
});

this.addEventListener('sync', function (event) {
    console.log("evenement recu : " + event);
    if (event.tag == 'mon-tag') {
        console.log("bravo!!");
    }
});

