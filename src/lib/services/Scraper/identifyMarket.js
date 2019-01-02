const arrayOfSupportedMarkets = [
  'amazon',
  'aliexpress',
  'ebay'
]

module.exports = function identifyMarket(URL) {
  return arrayOfSupportedMarkets.includes(URL) ? true : false
}

