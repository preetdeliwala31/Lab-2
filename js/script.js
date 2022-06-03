

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
    .then((registration) => {
    console.log('Registration is Successful. Scope is : ', registration.scope);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
}