if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('sw.js');

}
Toasty();
// if (window.location.protocol === 'http:') {
//   const requireHTTPS = document.getElementById('requireHTTPS');
//   const link = requireHTTPS.querySelector('a');
//   link.href = window.location.href.replace('http://', 'https://');
//   requireHTTPS.classList.remove('hidden');
// }


// Initialize deferredPrompt for use later to show browser install prompt.


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);

  const installAppButton = document.getElementById('installAppButton');

  if (installAppButton) {
    installAppButton.addEventListener('click', function () {

      deferredPrompt.prompt();

    })
  }
});


// installAppButton .addEventListener('click', async () => {
//   // Hide the app provided install promotion
//   hideInstallPromotion();
//   // Show the install prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   const { outcome } = await deferredPrompt.userChoice;
//   // Optionally, send analytics event with outcome of user choice
//   console.log(`User response to the install prompt: ${outcome}`);
//   // We've used the prompt, and can't use it again, throw it away
//   deferredPrompt = null;
// });



var option = {
  animation: true,
  delay: 3000
};
function Toasty() {
  var toastHTMLElement = document.getElementById("EpicToast");
  var toastElement = new bootstrap.Toast(toastHTMLElement, option);
  toastElement.show();
}

// function showInstallPromotion() {
//   const toastLiveExample = document.getElementById('liveToast');
//   const toast = new bootsrap.toast(toastLiveExample, { delay: 30000 });
//   toast.show();
// }


