// Function to extract full visible text from the webpage
function getPageContent() {
    return document.body.innerText;
}

// Send extracted text to background.js for Gemini processing
function sendContentToBackground() {
    const pageText = getPageContent();
    if (pageText.length > 500) {  // Ensure meaningful content
        chrome.runtime.sendMessage({ action: "analyzeTnC", text: pageText });
    }
}

sendContentToBackground();