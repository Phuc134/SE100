const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const jwt = require('jsonwebtoken');


router.get('/',(req,res,next) => {
    try{
        var token = req.cookies.token
        var ketqua = jwt.verify(token, 'mk')
        if(ketqua){
            next()
        }
    }catch(error){
        return res.redirect('/login');
    }
}, orderController.index);


module.exports = router;