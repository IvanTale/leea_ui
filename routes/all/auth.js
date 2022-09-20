const express = require('express');
const authController = require('../../controllers/auth');
const router = express.Router();


module.exports = router;

router.route('/login').get(authController.login);
