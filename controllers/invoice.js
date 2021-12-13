const order = require('../models/pos/order');
const invoice = require('../models/pos/invoice');
const orderdetail = require('../models/pos/order_detail');
const product = require('../models/product');
const customer = require('../models/customer');
const { multipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject } = require('../util/mongoose');
class invoiceController {
    async index(req, res) {
        var id = req.params.id;
        var a = await invoice.findOne({ "idInvoice": id });
        var items = await orderdetail.find({ "idOrder": a.idOrder }).lean();
        var data;
        var listdata=[];
        await items.forEach(async item => {
            var cc=await product.findOne({"_id": item.idProduct});
            data = {
                idProduct: cc.Name,
                unitPrice: item.unitPrice,
                quantity: item.quantity,
                unitDiscount: item.unitDiscount,
                total_payment: item.total_payment
            }
            listdata.push(data);
        })
        invoice.findOne({"idInvoice": id}, (err,item)=>{
            res.render('invoice/invoice',{orderdetail: listdata,invoice: mongooseToObject(item) });
        })
    }
}
module.exports = new invoiceController;