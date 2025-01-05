var originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url) {
    if (method.toUpperCase() === 'POST' &&
        (url.startsWith('https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetMetadata') ||
        url.startsWith('https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/SingleImageSearch'))) {
        
        this.addEventListener('load', function() {
            fetch("http://localhost:58001/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ response: this.responseText })
            }).catch(error => console.error('Error forwarding response:', error));
        });
    }
    return originalOpen.apply(this, arguments);
};
