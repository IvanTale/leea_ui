const express = require('express');
const itemsController = require('../../controllers/items.controllers');
const router = express.Router();


module.exports = router;

router.route('/:id').put(itemsController.updateItem);

router.route('/').get(itemsController.getItems);

router.route('/').post(itemsController.addItem);

