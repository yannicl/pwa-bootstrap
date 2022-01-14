const myWorker = new Worker("worker.js");

myWorker.onmessage = function(e) {
    console.log("valeur recue du worker" + e.data);
    document.getElementById("resultat").value = e.data;
}

// appelee sur le click du bouton pour compter les mots
function soumettreMessage(event) {
    event.preventDefault();

    const msg = document.getElementById("exampleFormControlTextarea1").value

    console.log("texte soumis : " + msg);
    myWorker.postMessage(msg);

    return false;
}