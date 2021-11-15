const express= require('express');
const router = express.Router();
const productController = require('../controllers/product');
router.get('/', productController.index);
router.get('/edit/:id',productController.edit);
//add
router.post('/create', productController.create);
router.put('/update/:id', productController.update);
//edit
module.exports = router;