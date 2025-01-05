document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Initialize button state
    chrome.storage.local.get(['isEnabled'], function(result) {
        const isEnabled = result.isEnabled ?? false;
        updateButtonState(isEnabled);
    });
    
    toggleBtn.addEventListener('click', function() {
        chrome.storage.local.get(['isEnabled'], function(result) {
            const newState = !(result.isEnabled ?? false);
            chrome.storage.local.set({ isEnabled: newState });
            updateButtonState(newState);
        });
    });
    
    function updateButtonState(isEnabled) {
        toggleBtn.textContent = isEnabled ? 'ON' : 'OFF';
        toggleBtn.className = `toggle-btn ${isEnabled ? 'on' : ''}`;
    }
});