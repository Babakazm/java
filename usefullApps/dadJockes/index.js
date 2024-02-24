const quote = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author"); // Corrected to use id

// Correctly adding the event listener to the button
document.querySelector("button").addEventListener("click", fetchRandomQuote);

function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('quote-text').textContent = data.content;
        document.getElementById('quote-author').textContent = "- " + data.author;
      })
      .catch(error => console.error('Error fetching quote:', error));
}
