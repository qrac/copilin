//----------------------------------------------------
// Background
//----------------------------------------------------

chrome.runtime.onInstalled.addListener(createContextMenu)
chrome.contextMenus.onClicked.addListener(copyContextMenu)
chrome.browserAction.onClicked.addListener(copyBrowserAction)

function createContextMenu() {
  chrome.contextMenus.create({
    id: "copyLinkText",
    title: "Copy Link (Plain Text)",
    contexts: ["link"]
  })
}

function copyContextMenu(info, tab) {
  let link = info.linkUrl
  let text = info.selectionText
  let obj = document.createElement("textarea")

  obj.value = text + " " + link

  document.body.appendChild(obj)
  obj.select()
  document.execCommand("copy")
  document.body.removeChild(obj)
}

function copyBrowserAction(tab) {
  let title = tab.title
  let url = tab.url
  let obj = document.createElement("textarea")

  obj.value = title + " " + url

  document.body.appendChild(obj)
  obj.select()
  document.execCommand("copy")
  document.body.removeChild(obj)

  chrome.browserAction.setBadgeBackgroundColor({ color: [120, 120, 120, 100] })
  chrome.browserAction.setBadgeText({ text: "copy" })
  setTimeout(function() {
    chrome.browserAction.setBadgeText({ text: "" })
  }, 1000)
}
