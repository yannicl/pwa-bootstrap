
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


// Web-Push
// Public base64 to Uint
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


function subscribeUser() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (reg) {

            reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                    'BEbfcTLdFNJvysvhu9go33qFwE-K45_rfVigcFvQ2fYpAlRzWFM3iziv0b_XeSgMP6haBneLHMfO7rTaPCHzUbo'
                )
            }).then(function (pushSubscription) {
                console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
            }).catch(function (e) {
                if (Notification.permission === 'denied') {
                    console.warn('Permission for notifications was denied');
                } else {
                    console.error('Unable to subscribe to push', e);
                }
            });
        })
    }
}
