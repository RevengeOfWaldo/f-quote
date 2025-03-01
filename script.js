const quotes = {
    "03-01": "The best way to predict the future is to invent it.",
    "03-02": "Life is 10% what happens to us and 90% how we react to it.",
    "03-03": "Your time is limited, don't waste it living someone else's life.",
    // Add more quotes here...
};

function displayQuote() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const key = `${month}-${day}`;
    const quote = quotes[key] || "Stay positive, work hard, make it happen.";
    document.getElementById("quote").textContent = quote;
}

displayQuote();

/* Place your JavaScript in this file */
