const axios = require('axios')
const createDeck = require('./productCards')

const formNode = document.getElementById('urlForm')

function sendToPuppet(e) {
  e.preventDefault()
  let prodUrl = e.target.productUrl.value

  const data = {
    url: prodUrl
  }

  prodUrl && 
    axios.post('http://localhost:3000/product/getPrice', data)
      .then(rez => {
        console.log(rez)
        if (rez.statusText) {
          const { title, price, img } = rez.data
          createDeck(title, price, img)
          return rez.data
        }
      })
      .catch(err => console.log(err))
}

module.exports = function () {
  formNode.addEventListener('submit', sendToPuppet)
}