const puppeteer = require('puppeteer');
const isURL = require('./isURL')
const identifyMarket = require('./identifyMarket')
const priceScreenshot = require('./priceScreenshot')

function stripCurrency(price) {
  return price.slice(1)
} 

class scrapeService {

  constructor() {
    this.currentPrice = this.currentPrice.bind(this)
    this.isDomainSupported = this.isDomainSupported.bind(this)
  }

  isDomainSupported(URL){
    return identifyMarket(URL)
  }

  async currentPrice(URL) {
    let isValidUrl = await isURL(URL)
    if ( !isValidUrl || !this.isDomainSupported(URL) ) throw new Error('invalid url request')

    priceScreenshot(URL)
  }
}



// function retrieveUrlFromArgs() {
//   const firstArgument = process.argv[2]
//   console.log(firstArgument)
//   console.log(isURL(firstArgument))

//   if ( isURL(firstArgument) ) return firstArgument
//   return undefined
// }

