const quotes = [
  {
    quote:"Life isn’t about getting and having, it’s about giving and being.",
    author:"Kevin Kruse"
  },
  {
    quote:"Whatever the mind of man can conceive and believe, it can achieve.",
    author:"Napoleon Hill"
  },
  {
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein"
  },
  {
    quote:"I attribute my success to this: I never gave or took any excuse.",
    author:"Florence Nightingale"
  },
  {
    quote:"We must balance conspicuous consumption with conscious capitalism.",
    author:"Kevin Kruse"
  }
]

// elements
let quoteButton = document.querySelector('[data-quote="quote-button"]')
let quoteText = document.querySelector('[data-quote="quote-text"]')
let quoteAuthor = document.querySelector('[data-quote="quote-author"]')

// actions 
quoteButton.addEventListener( 'click', function() {

  let random = Math.floor(Math.random() * quotes.length)
  quoteText.innerText = quotes[random].quote
  quoteAuthor.innerText = quotes[random].author

})