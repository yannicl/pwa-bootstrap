if('serviceWorker' in navigator) {
        
    navigator.serviceWorker.register('sw.js');
  
  }

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  let deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);

const installAppButton = document.getElementById('installAppButton');

installAppButton.addEventListener('click',function(){
    deferredPrompt.prompt();
})

});

function showInstallPromotion(){
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new bootsrap.toast(toastLiveExample,{delay: 30000});
    toast.show();
}