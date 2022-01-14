onmessage = function(e) {
    console.log("message recu dans worker : " + e.data);
    const nbrMots = e.data.split(/ /).length;
    console.log(nbrMots);
    this.setTimeout(function() {postMessage(nbrMots);}, 5000);
}