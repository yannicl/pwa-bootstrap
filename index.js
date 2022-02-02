if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};

function enregistrerTagBgSync() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then(function (reg) {
            return reg.sync.register('mon-tag');
        });
    };
}