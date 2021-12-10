const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');
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
}, roleController.index);

router.post('/updateregulation', roleController.updateRegulation);
router.post('/1/edit', roleController.editAdmin);
router.post('/2/edit', roleController.editStaff);
module.exports = router;