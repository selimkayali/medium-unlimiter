let sites = ['https://medium.com/',
    'https://itnext.io/',
    'https://betterprogramming.pub/',
    'https://netbasal.com/'];


function makeUnlimited(site) {
    chrome.cookies.get({ url: `${site}`, name: 'uid' }, function (obj) {
        if (obj !== undefined) {
            chrome.cookies.remove({ url: `${site}`, name: 'uid' }, function () { console.log(`Medium ${site} Unlimiter Works!`) });
            if (site != 'https://medium.com/') {
                chrome.cookies.remove({ url: `https://medium.com/*`, name: 'uid' }, function () { console.log('Medium Unlimiter Works!') });
            }
        }
    });
}

sites.forEach(site => {
    console.log(site)
    chrome.webNavigation.onCompleted.addListener(function () {
        makeUnlimited(site);
    }, { url: [{ urlMatches: `${site}*` }] });
})