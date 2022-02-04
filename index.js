
if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('sw.js').then(
        (registration) => {
            console.log('Service worker registration succeeded:', registration)
        },
      /*catch*/(error) => {
            console.log('Service worker registration failed:', error)
        }
    )
} else {
    console.log('Service workers are not supported.')
}


function meNotifier() {
    Notification.requestPermission().then(function (result) {
        console.log("permission donnée");
    });
}

function envoyerNotificationThreadUtilisateur() {
    if (Notification.permission === 'granted') {
        var options = {
            body: 'Ma première notification depuis index.js',
            requireInteraction: true
        };

        const notification = new Notification('Hello depuis index.js', options);
    } else {
        console.log("aucune notification car non permis");
    }
}
