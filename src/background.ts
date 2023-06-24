function createContextMenu(details: chrome.runtime.InstalledDetails) {
  chrome.contextMenus.create({
    id: "copyLinkText",
    title: "Copy Link (Plain Text)",
    contexts: ["link"],
  })
}

function copyToClipboard(text: string) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        args: [{ text }],
        func: (params: { text: string }) => {
          navigator.clipboard.writeText(params.text)
        },
      })
    }
  })
}

function copyContextMenu(
  info: chrome.contextMenus.OnClickData,
  tab: chrome.tabs.Tab | undefined
) {
  const title = info.selectionText
  const url = info.linkUrl
  copyToClipboard(title + " " + url)
}

function copyBrowserAction(tab: chrome.tabs.Tab) {
  const title = tab.title
  const url = tab.url
  copyToClipboard(title + " " + url)

  chrome.action.setBadgeBackgroundColor({ color: [120, 120, 120, 100] })
  chrome.action.setBadgeText({ text: "copy" })

  setTimeout(() => {
    chrome.action.setBadgeText({ text: "" })
  }, 1000)
}

chrome.runtime.onInstalled.addListener(createContextMenu)
chrome.contextMenus.onClicked.addListener(copyContextMenu)
chrome.action.onClicked.addListener(copyBrowserAction)
