self.addEventListener('push', function (event) {
    console.log("push recu: " + event);
    if (event.data) {
        data = event.data.json();
    }
    console.log("donnee du push: " + JSON.stringify(data)); 

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
