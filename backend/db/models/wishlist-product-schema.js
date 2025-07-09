const mongoose = require('mongoose');

const wishlistProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actualPrice: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  productId: { type: String }, // to relate to original product if needed
});

module.exports = mongoose.model('WishlistProduct', wishlistProductSchema);
