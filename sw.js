self.addEventListener('push', function (e) {
    console.log("push recu: " + e);
    envoyerNotification();
});


function envoyerNotification() {
    if (Notification.permission === 'granted') {
        var options = {
            body: 'Ma première notification',
            requireInteraction: true
        };

        self.registration.showNotification('Hello', options);
    } else {
        console.log("aucune notification car non permis");
    }
}
