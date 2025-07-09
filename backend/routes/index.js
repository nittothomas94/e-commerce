const express = require('express');

const productRoute = require('./products-route');
const uploadImageRoute = require('./image-route');
const cartProductRoute = require('./cartProduct-route');
const paymentRoute = require('./paymentRoute');
const orderRoute = require('./order-route');
const wishlistProductRoute = require('./wishlistProduct-route');

const router = express.Router();

router.use('/products', productRoute);

router.use('/upload-img', uploadImageRoute);

router.use('/cartProducts', cartProductRoute);

router.use('/payment', paymentRoute);

router.use('/orders', orderRoute);

router.use('/wishlistProducts', wishlistProductRoute);

module.exports = router;
