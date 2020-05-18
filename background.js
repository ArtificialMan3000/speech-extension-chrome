const showError = function () {
  if (chrome.extension.lastError) {
    console.log("Error: " + chrome.extension.lastError.message);
  }
};

chrome.contextMenus.onClicked.addListener(function (info) {
  chrome.tts.speak(info.selectionText, {}, showError);
});

chrome.contextMenus.create({
  "id": "voiceSelectedText",
  "title": "Voice \"%s\"",
  "contexts": ["selection"]
},
showError
);



