const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const siteController = require('../controllers/site');

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
}, siteController.index)

module.exports = router;