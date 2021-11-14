const express= require('express');
const router = express.Router();
const productController = require('../controllers/product');
router.get('/', productController.index);
router.post('/create', productController.create);
router.get('/view/:id',productController.view);
router.put('/edit/:id', productController.edit);
module.exports = router;