let lastSubtitleText = "";


function findSubtitleText() {
  const subtitleElement = document.querySelector(".ytp-caption-segment");
  if (subtitleElement && subtitleElement.innerText.trim() !== "") {
    const subtitleText = subtitleElement.innerText.trim();
    if (subtitleText !== lastSubtitleText) {
      lastSubtitleText = subtitleText;
      console.log("Полученные субтитры:", subtitleText);
      chrome.runtime.sendMessage({ subtitle: subtitleText });
    }
  }
}


const observer = new MutationObserver(findSubtitleText);


observer.observe(document.body, { childList: true, subtree: true });
