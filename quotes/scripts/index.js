const quoteContainer = document.querySelector('.quote__container')
const twitterBtn = document.querySelector('.button__twitter')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const nextBtn = document.querySelector('.button__next')
const loader = document.querySelector('.loader')

let apiQuotes = [];

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function onComplete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function newQuote() {
  loading();
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  if (!quotes.author) {
    author.textContent = 'Unknown';
  } else {
    author.textContent = quotes.author;
  }
  if (quotes.text.length > 100) {
    quote.classList.add('long-quote')
  } else {
    quote.classList.remove('long-quote')
  }
  quote.textContent = quotes.text;
  onComplete();
}

async function getQuotes() {
  loading();
  const apiUrl = 'https://api.mocki.io/v1/d9931df0';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.error(error);
  }
}

function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quote.textContent}%0d~${author.textContent}`
  window.open(twitterURL, '_blank')
}

nextBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

getQuotes();