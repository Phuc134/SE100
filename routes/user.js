const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/create', userController.create);
router.get('/:id/edit', userController.edit);
router.get('/', userController.index);


router.post('/create', userController.store);
router.post('/:id/delete', userController.delete);
router.post('/update', userController.update);
module.exports = router;