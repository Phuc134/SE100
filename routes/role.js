const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');

router.get('/', roleController.index);

router.post('/updateregulation', roleController.updateRegulation);
router.post('/1/edit', roleController.editAdmin);
router.post('/2/edit', roleController.editStaff);
module.exports = router;