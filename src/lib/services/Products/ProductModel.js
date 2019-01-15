const mongoose = require('mongoose')
const Schema = mongoose.Schema


// TODO: Define the correct PRICES schema.
  
const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true
  },

  image: {
    type: String,
  },

  url: {
    type: String,
    required: true
  },

  prices: [{
    date: new Date,
    price: Number
  }]

})

module.exports = mongoose.model("products", ProductSchema)