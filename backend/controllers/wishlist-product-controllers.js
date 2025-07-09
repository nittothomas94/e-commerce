const WishlistProduct = require('../db/models/wishlist-product-schema');

module.exports.getWishlist = async (req, res) => {
  try {
    const items = await WishlistProduct.find();
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.addToWishlist = async (req, res) => {
  try {
    const item = req.body;
    await WishlistProduct.create(item);
    res.status(200).json({ message: 'Added to wishlist' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports.removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    await WishlistProduct.findByIdAndDelete(id);
    res.status(200).json({ message: 'Removed from wishlist' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
