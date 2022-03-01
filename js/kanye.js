function loadQuotes() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayquote(data))
}

function displayquote(quote) {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quote.quote;
}
