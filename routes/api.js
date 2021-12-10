const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const {validator} = require('../controllers/validator/user');
const {validatorLogin} = require('../controllers/validator/login');

router.post('/uservalidator',  
    validator.valid_user(),
    apiController.valid_user);

router.post('/userupdatevalid',
    validator.valid_updateuser(),
    apiController.valid_user);

router.post('/loginvalidator',
    validatorLogin.validate_Login(),
    apiController.valid_login);
module.exports = router;