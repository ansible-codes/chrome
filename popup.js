document.addEventListener('DOMContentLoaded', function () {
    getCurrentTabUrl(function (url) {
        // Inject content script into the current tab
        chrome.tabs.executeScript(null, { file: "content_script.js" });

        // Listen for messages from the content script
        chrome.runtime.onMessage.addListener(function (message) {
            // Assume message is the LocalStorage data
            displayLocalStorageData(message);
        });
    });
});

function getCurrentTabUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        callback(url);
    });
}

function displayLocalStorageData(data) {
    // Assuming 'data' is an object with LocalStorage key-value pairs
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var p = document.createElement('p');
            p.textContent = `${key}: ${data[key]}`;
            outputDiv.appendChild(p);
        }
    }
}
