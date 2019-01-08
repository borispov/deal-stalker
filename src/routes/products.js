const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const ScrapeService = require('../lib/services/Scraper/scrape')

const ProductService = require('../lib/services/Products/ProductService') 

router.post('/product/getPrice', async (req, res) => {
  const url = req.body.url

  let scraper = await new ScrapeService()
  
  let price = await scraper.currentPrice(url)
  if (price instanceof Error) {
    res.status(400).json({'Error': price.message})
  } else {
    res.status(200).json(price)
  }

})

router.get('/product/notif', async (req, res) => {
  
  let ProductService = await new ProductService()
})



module.exports = router