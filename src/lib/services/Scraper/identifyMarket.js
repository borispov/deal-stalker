const markets = [
  'amazon',
  'aliexpress',
  'ebay'
]

module.exports = function identifyMarket(URL) {
  let whichMarket = markets.find(domain => {
    if (URL.includes(domain)) return domain
  })
  let market = markets.filter(domain => URL.includes(domain))
  return market !== undefined ? market : false
}