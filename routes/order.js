const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.get('/', orderController.index);


module.exports = router;