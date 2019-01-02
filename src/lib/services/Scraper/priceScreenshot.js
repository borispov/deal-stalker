const puppeteer = require('puppeteer')

module.exports = (async (URL) => {

  console.log(URL)
  if (!URL) {
    throw new Error ('Argument is not a valid URL')
  }

  const browser = await puppeteer.launch()
  const PRICE_ID = 'priceblock_ourprice';
  const page = await browser.newPage()
  await page.goto(URL)

  const getPrice = await page.evaluate((sel) => document.getElementById(sel).innerHTML, PRICE_ID)

  if ( isNaN(getPrice[0]) ) {
    const strippedPrice = stripCurrency(getPrice)
    console.log(strippedPrice)
    return strippedPrice
  }

  await browser.close()
})()