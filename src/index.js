const scraper = require('./lib/services/Scraper/scrape')

function onUrlSubmit(e) {
  let inputURL = e.target.value
  scraper.currentPrice(inputURL)
}



const submitBtn = document.querySelector('[data-js=submitBtn]')

submitBtn.addEventListener('onsubmit', onUrlSubmit)

console.log(onUrlSubmit)

