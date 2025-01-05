let isEnabled = false;

// Listen for status updates from popup
chrome.storage.local.get(['isEnabled'], function(result) {
    isEnabled = result.isEnabled ?? false;
    if (isEnabled) {
        injectInterceptor();
    }
});

chrome.storage.onChanged.addListener(function(changes) {
    if (changes.isEnabled) {
        isEnabled = changes.isEnabled.newValue;
        if (isEnabled) {
            injectInterceptor();
        }
    }
});

function injectInterceptor() {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('interceptor.js');
    (document.head || document.documentElement).appendChild(script);
    script.onload = function() {
        script.remove();
    };
}