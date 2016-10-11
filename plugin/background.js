chrome.webRequest.onBeforeRequest.addListener(function (details) {
    return {
        redirectUrl: "https://www.textise.net/showText.aspx?strURL=" + details.url
    };
}, {
    urls: [
        "*://rappler.com/*",
        "*://www.rappler.com/*",
        "*://*.rappler.com/*",
        "*://gmanetwork.com/*",
        "*://www.gmanetwork.com/*",
        "*://*.gmanetwork.com/*",
        "*://abs-cbn.com/*",
        "*://www.abs-cbn.com/*",
        "*://*.abs-cbn.com/*",
        "*://inquirer.net/*",
        "*://www.inquirer.net/*",
        "*://*.inquirer.net/*"
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
}, ["blocking"]);