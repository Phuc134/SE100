const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const supplierController = require('../controllers/supplier');

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
}, supplierController.index);
router.get('/create',(req,res,next) => {
    try{
        var token = req.cookies.token
        var ketqua = jwt.verify(token, 'mk')
        if(ketqua){
            next()
        }
    }catch(error){
        return res.redirect('/login');
    }
}, supplierController.create);
router.post('/store', supplierController.store);
router.get('/:id/edit', supplierController.edit);
router.put('/:id', supplierController.update);
router.delete('/:id', supplierController.delete);

module.exports = router;