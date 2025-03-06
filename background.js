chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyzeTnC") {
        processTermsWithGemini(request.text, sender.tab.id);
    }
});

async function processTermsWithGemini(text, tabId) {
    const apiKey = "YAIzaSyACY3cPt6NqIcfEV-l8vfeSRUPgfB9-g2E";  // Replace with actual API key
    const apiUrl = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=" + apiKey;

    const requestBody = {
        contents: [
            { role: "user", parts: [{ text: `Summarize the Terms & Conditions from the following webpage content and highlight any risks: ${text}` }] }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        const summary = data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available.";

        chrome.tabs.sendMessage(tabId, { action: "showSummary", summary });

    } catch (error) {
        console.error("Error processing Gemini API:", error);
    }
}