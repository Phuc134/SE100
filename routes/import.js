const express = require('express');
const router = express.Router();
const ImportController = require('../controllers/import');

router.get('/create', ImportController.create);
router.get('/', ImportController.index);

router.post('/store', ImportController.Store);
module.exports = router;