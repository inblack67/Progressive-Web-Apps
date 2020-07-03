// self.addEventListener('install', e => {
//     console.log('Install Event');
//     let installPromise = Promise.resolve(res => {
//         setTimeout(res, 3000);
//     })

//     // cant let it pass onto activate phase when its not even installed
//     e.waitUntil(installPromise);
// })

// self.addEventListener('activate', e => {
//     console.log('Active Event');
//     let activatePromise = Promise.resolve(res => {
//         setTimeout(res, 3000);
//     })

//     // by default, new sw cant override the already existing sw, must wait unitl the current session is ended. Although waiting can be skipped by dev tools
//     e.waitUntil(activatePromise);
// })

self.addEventListener('fetch', e => {

    const url = e.request.url;

    console.log(url);

    if(url.endsWith('style.css')){
        // console.log('css url', url);
        // responsWith takes in the promise
        e.respondWith(fetch('./style2.css'));
        // browser is unaware that its being served with style2.css
        // the contents of style.css has style.css code in the dev tools
    }

    if(url.endsWith('greet')){
        const res = new Response('Hello Hells');
        e.respondWith(res);
        // respondWith eventually looks for a response that resolves with a promise so Response object can be passed.
    }
    if(url.endsWith('big-greet')){
        const headers = new Headers({
            'Content-Type': 'text/html'
        });
        const res = new Response('<h1>Hello Hells</h1>', {
            headers
        });
        e.respondWith(res);
    }

    if(url.endsWith('/imageFeed.html')){
        e.respondWith(fetch(e.request).then(res => res.ok ? res : new Response('Image feed currently not available')))
    }

})


