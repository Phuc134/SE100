const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const {validator} = require('../controllers/validator/validator');

router.post('/supplierValidator',  
    validator.validateAddSupplier(),
    apiController.valid_supplier);

router.post('/supplierUpdatevalid/:id',
    validator.validateUpdateSupplier(),
    apiController.valid_supplier);

router.post('/customerValidator',
    validator.validateCreateCustomer(),
    apiController.valid_customer)

router.post('/customerUpdateValid/:id',
    validator.validateEditCustomer(),
    apiController.valid_customer)
    
module.exports = router;