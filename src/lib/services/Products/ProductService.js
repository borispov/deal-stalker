const sendMail = require('../../config/index')
const productModel = require('./ProductModel')


class prodService {

  constructor() {
    this.comparePrices = this.comparePrices.bind(this)
    this.notifyUser = this.notifyUser.bind(this)
  }

  // return the percentage difference between prices
  comparePrices(lastPrice, currentPrice) {
    return ((currentPrice - lastPrice) / denominator) * 100
  }

  isPriceLower(n1, n2) {
    // Check if the price difference is a DECREASE
    let theDifference = comparePrices(n1, n2)
    return theDifference < 0 ? true : false
  }


  notifyUser() {
    sendMail(author, recipient, title, body)
    // use some functions from libraries to send SMS/EMAIL to user.
  }

}

module.exports = prodService