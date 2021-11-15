const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const {validator} = require('../controllers/validator/user');

router.post('/uservalidator',  
    validator.valid_user(),
    apiController.valid_user);

router.post('/userupdatevalid',
    validator.valid_updateuser(),
    apiController.valid_user);
module.exports = router;