const express = require('express');
const productsController = require('../../controllers/products.controller');
const router = express.Router();


module.exports = router;

router.route('/')
		.get(productsController.getProducts)
		.post(productsController.addProduct);

router.route('/:id')
		.get(productsController.getProduct)
		.put(productsController.updateProduct);

router.route('/addItems')
		.post(productsController.addItemToProduct);
