const {multipleMongooseToObject} = require('../util/mongoose');
const {mongooseToObject} = require('../util/mongoose');
const moment = require('moment');
const {validationResult} = require('express-validator');
class apiController {
    // [POST ] valid-supplier
    valid_supplier(req,res){
        const result = validationResult(req);      
        res.json(result);
    }
}

module.exports = new apiController;