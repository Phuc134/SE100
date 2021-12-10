const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer');
const jwt = require('jsonwebtoken');


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
}, customerController.create);
router.post('/store', customerController.store);
router.get('/:id/edit', customerController.edit);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);
router.get('/:slug', customerController.index);
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
}, customerController.index);

module.exports = router;