const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const {validator} = require('../controllers/validator/user');
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
}, userController.create);
router.get('/:id/edit', userController.edit);
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
}, userController.index);


router.post('/create', userController.store);
router.post('/:id/delete', userController.delete);
router.post('/update', userController.update);
module.exports = router;