const {multipleMongooseToObject} = require('../util/mongoose');
const {mongooseToObject} = require('../util/mongoose');
const moment = require('moment');
const {validationResult} = require('express-validator');
class apiController {

    // [POST ] validuser
    valid_user(req,res){
        const result = validationResult(req);      
        res.json(result);
    }

    //[POST] validLogin
    valid_login(req,res){
        const result = validationResult(req);      
        res.json(result);
    }


    // [POST ] valid-supplier
    valid_supplier(req,res){
        const result = validationResult(req);      
        res.json(result);
    }

    // [POST ] valid-customer
    valid_customer(req,res){
        const result = validationResult(req);      
        res.json(result);
    }

    // [POST ] valid-supplier
    valid_supplier(req,res){
        const result = validationResult(req);      
        res.json(result);
    }

}

module.exports = new apiController;