const express = require('express');
const userRoutes = require('./all/user.route');
const itemsRoutes = require('./all/items.route');
const productsRoutes = require('./all/products.route');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/items', itemsRoutes);
router.use('/products', productsRoutes);

module.exports = router;
