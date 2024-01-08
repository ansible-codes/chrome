var localStorageData = {};

for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
}

chrome.runtime.sendMessage(localStorageData);
