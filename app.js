if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js').then(res => console.log('SW Registered')).catch(console.log);
}

fetch('imageFeed.html').then(res => res.text()).then(html => document.getElementById('image').innerHTML = html);