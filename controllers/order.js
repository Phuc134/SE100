const {multipleMongooseToObject} = require('../util/mongoose');
const {mongooseToObject} = require('../util/mongoose');
//const User = require('../models/user');
//const moment = require('moment');
class OrderController {
    // [GET] /
    index(req, res,next) {
        res.render('order/orderlist');
        
    }
}

module.exports = new OrderController;