const express= require('express');
const router = express.Router();
const productController = require('../controllers/product');
const typeproductController = require('../controllers/typeproduct');
const upload= require('../middleware/upload');
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
}, productController.index);
router.get('/edit/:id',productController.edit);
router.get('/deletetype/:id',typeproductController.delete);

//CRUD product
router.post('/create', productController.create);
router.post('/update',productController.update);
router.post('/delete/:id',productController.delete);
//CD type product
router.post('/createtype',typeproductController.create);
module.exports = router;