const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const {validator} = require('../controllers/validator/user');
const {validatorLogin} = require('../controllers/validator/login');
const {validatorCustomer} = require('../controllers/validator/customer');
const {validatorSupplier} = require('../controllers/validator/supplier');


router.post('/uservalidator',  
    validator.valid_user(),
    apiController.valid_user);

router.post('/userupdatevalid',
    validator.valid_updateuser(),
    apiController.valid_user);

router.post('/loginvalidator',
    validatorLogin.validate_Login(),
    apiController.valid_login);

router.post('/customerValidator',
    validatorCustomer.validateCreateCustomer(),
    apiController.valid_customer)

router.post('/customerUpdateValid/:id',
    validatorCustomer.validateEditCustomer(),
    apiController.valid_customer)

router.post('/supplierValidator',
    validatorSupplier.validateAddSupplier(),
    apiController.valid_customer)

router.post('/supplierUpdatevalid/:id',
    validatorSupplier.validateUpdateSupplier(),
    apiController.valid_customer)

module.exports = router;