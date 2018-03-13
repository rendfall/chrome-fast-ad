function injectTheScript() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "inject.js" });
    });
}
document.getElementById('start').addEventListener('click', injectTheScript);
