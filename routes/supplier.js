const express = require('express');
const router = express.Router();
const validate = require('../validator/validator');
const supplierController = require('../controllers/supplier');

router.get('/', supplierController.index);
router.get('/create', supplierController.create);
router.post('/store',validate.validate.validateAddSupplier(),supplierController.store);
router.get('/:id/edit',supplierController.edit);
router.put('/:id',validate.validate.validateUpdateSupplier(), supplierController.update);
router.delete('/:id', supplierController.delete);

module.exports = router;