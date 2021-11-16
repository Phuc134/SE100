const express = require('express');
const router = express.Router();

const validate = require('../validator/validator');
const customerController = require('../controllers/customer');

router.get('/create', customerController.create);
router.post('/store', validate.validate.validateCreateCustomer(),customerController.store);
router.get('/:id/edit', customerController.edit);
router.put('/:id', validate.validate.validateEditCustomer(), customerController.update);
router.delete('/:id', customerController.delete);
router.get('/:slug', customerController.index);
router.get('/', customerController.index);

module.exports = router;