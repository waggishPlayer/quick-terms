function showPopup(summaryText) {
    let existingPopup = document.getElementById("quick-terms-popup");
    if (existingPopup) {
        existingPopup.remove();
    }

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.id = "quick-terms-popup";

    let closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✖";
    closeBtn.id = "close-btn";
    closeBtn.onclick = function () {
        document.body.removeChild(overlay);
    };

    let heading = document.createElement("h2");
    heading.innerText = "Quick Terms Summary";

    let summary = document.createElement("p");
    summary.innerText = summaryText || "No summary available.";

    popup.appendChild(closeBtn);
    popup.appendChild(heading);
    popup.appendChild(summary);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}

// Listen for a message from background.js (Gemini API response)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "showSummary") {
        showPopup(message.summary);
    }
});