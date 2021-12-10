var upload = require('../middleware/upload');
const { multipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject } = require('../util/mongoose');
const multer = require('multer');
var Product = require('../models/product');

const typeproduct = require('../models/typeproduct');
class productController {
    //[GET]

    async edit(req, res, next) {
        let id = req.params.id;
        Product.findOne({ _id: id }, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
              
                res.render('product/edit', { item: mongooseToObject(item) });
            }
        })
    }
    //[POST]
    delete(req,res){
        let id = req.params.id;
        Product.findOneAndDelete({"_id":id},(err, doc)=>{
            if (err){
                console.log(err);
            }
            res.redirect('/product');
        })
    }
    //[GET]
    index(req, res, next) {
        Product.find({}, (err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('An erro occurred', err);
                
            }
            else {
                Product.aggregate([{
                    $lookup: {
                        from: "typeproducts", // collection name in db
                        localField: "idType",
                        foreignField: "idType",
                        as: "a"
                    }
                }]).exec(function(err, itemm) {
                    typeproduct.find({},(err, items1)=>{
                        res.render('product/product', {items1: multipleMongooseToObject(items1), items: itemm});
                    })
                }); 
                
            }
        })
    }
    //[POST]
    async update(req, res, next) {
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log("erro");
            }
            else if (err) {
                console.log(err);
            }
            else {
                if (req.file) {
                    Product.findOne({ "_id": req.body.id }, async (err, data) => {
                        data.Name = req.body.Name;
                        data.Price = req.body.Price;
                        data.Image = req.file.filename;
                        data.idType = req.body.idType;
                        await data.save();
                        res.redirect('/product');
                    })
                }
                else {
                    Product.findOne({ "_id": req.body.id }, async (err, data) => {
                        data.Name = req.body.Name;
                        data.idType = req.body.idType;
                        data.Price = req.body.Price;
                        await data.save();
                        res.redirect('/product');
                    })
                }
            }
        })
      }

    //[POST]
    async create(req, res, next) {
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log("erro");
            }
            else if (err) {
                console.log(err);
            }
            else {
                var product = new Product({
                    Name: req.body.Name,
                    idType: req.body.idType,
                    Quantity: 0,
                    Price: req.body.Price,
                    Image: req.file.filename
                })
                await product.save();
            }
        })
        res.redirect('/product');
    }
}
module.exports = new productController;