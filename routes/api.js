const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const {validator} = require('../controllers/validator/validator');

router.post('/supplierValidator',  
    validator.validateAddSupplier(),
    apiController.valid_supplier);

router.post('/supplierUpdatevalid',
    validator.validateUpdateSupplier(),
    apiController.valid_supplier);
module.exports = router;