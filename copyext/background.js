chrome.action.onClicked.addListener((tab) => {

  chrome.action.setIcon({
    tabId: tab.id,
    path: {
      "16": "/images/Wget_started16.png",
      "32": "/images/Wget_started32.png",
      "48": "/images/Wget_started48.png",
      "128": "/images/Wget_started128.png"
    }
  });

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});
