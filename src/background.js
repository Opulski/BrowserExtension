(() => {
  "use strict";

  chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: "/onboard.html" });
  });
})();
