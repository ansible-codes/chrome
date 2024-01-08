chrome.browserAction.onClicked.addListener(function(tab) {
    // Inject the content script into the current tab
    chrome.tabs.executeScript(tab.id, {file: "content_script.js"});
});
