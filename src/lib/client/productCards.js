
// card-deck is for various products layout
// const cardDeck = document.createElement('div')
// cardDeck.classList.add('card-deck')



module.exports = function createDeck(title, price, src) {

  const card = document.createElement('div')
  card.classList.add('card')
  card.style.width = '18rem'

  const img = document.createElement('img')
  img.classList.add('card-img-top')
  img.setAttribute('src', src)
  img.style.height = '400px'
  img.style.width = '150px'

  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')

  const cardTitle = document.createElement('h5')
  cardTitle.classList.add('card-title')
  cardTitle.style.maxWidth = '500px'
  cardTitle.innerText = title.trim()

  const cardFooter = document.createElement('div')
  cardFooter.classList.add('card-footer')

  const smallFooter = document.createElement('small')
  smallFooter.innerText = `${price}$`

  card.appendChild(img)
  card.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  card.appendChild(smallFooter)

  const nodeToAppendValue = document.getElementById('productList')
  nodeToAppendValue.appendChild(card)
  nodeToAppendValue.style.maxWidth = '600px'
}