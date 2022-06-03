

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Lab-2/service-worker.js', {scope: '/Lab-2/'})
    .then((registration) => {
    console.log('Registration is Successful. Scope is : ', registration.scope);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
}