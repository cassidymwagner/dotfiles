document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('extension_link').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://extensions' });
    });
});