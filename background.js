function makeUnlimited() {
    chrome.cookies.get({ url: 'https://medium.com', name: 'uid' }, function (obj) {
        if (obj !== undefined) {
            chrome.cookies.remove({ url: 'https://medium.com', name: 'uid' }, function (obj) { console.log('Medium Unlimiter Works!') });
        }
    });
}

chrome.webNavigation.onCompleted.addListener(function () {
    makeUnlimited();
}, { url: [{ urlMatches: 'https://medium.com/*' }] });


chrome.webNavigation.onHistoryStateUpdated.addListener(function () {
    chrome.tabs.getSelected(null, (tab) => {
        if (tab.url.includes('https://medium.com/')) {
            makeUnlimited();
        }
    })
});
