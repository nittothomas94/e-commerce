const { Schema, model } = require('mongoose');

const productCartSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  actualPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  stock: {
    type: Boolean,
    default: true,
  },
  quantityAvailable: {
    type: Number,
    default: 0,
  },
});
const CartProduct = model('cart', productCartSchema);

module.exports = CartProduct;
