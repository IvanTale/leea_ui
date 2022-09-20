const express = require('express');
const productsController = require('../../controllers/products.controller');
const router = express.Router();


module.exports = router;

router.route('/').get(productsController.getProducts);

router.route('/').post(productsController.addProduct);

router.route('/addItems').post(productsController.addItemToProduct);

router.route('/:id').put(productsController.updateProduct);
