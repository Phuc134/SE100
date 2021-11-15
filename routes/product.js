const express= require('express');
const router = express.Router();
const productController = require('../controllers/product');
const upload= require('../middleware/upload');
router.get('/', productController.index);
router.get('/edit/:id',productController.edit);
//add
router.post('/create', productController.create);
router.post('/update',productController.update);
router.post('/delete/:id',productController.delete);
//edit
module.exports = router;