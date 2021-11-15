var Product= require('../models/product');
var upload= require('../middleware/upload');
const multer = require('multer');
class productController{
    //[GET]
    async edit(req, res, next){
        let id= req.params.id;
        Product.findOne({_id: id},(err,item)=>{
            if (err) {
                console.log(err);
            }
            else
            {
                res.render('product/edit', {item: item});
            }
        })
    }
    //[GET]
    index(req, res, next){
        Product.find({}, (err,items)=>{
            if (err) {
                console.log(err);
                res.status(500).send('An erro occurred', err);
            }
            else
            {
                res.render('product/product',{items: items});
            }
        })
    }
    //[PUT]
    async update(req,res,next){
        const id=req.params.id;
        Product.findOne({"_id": id}, async (err, data)=>{
            data.NameProduct= req.body.NameProduct;
            data.Price= req.body.PriceProduct;
            data.Image= req.file.filename;
            await data.save();
            res.redirect('/product');
        })
    }
    //[POST]
    async create(req, res, next){
         upload(req, res, async function(err){
            if (err instanceof multer.MulterError){
                console.log("erro");
            }
            else if (err){
                console.log(err);
            }
            else
            {
                var product = new Product({
                    Name: req.body.NameProduct,
                    idType: 0,
                    Quantity: 0,
                    Price: req.body.PriceProduct,
                    Image: req.file.filename
                })
                await product.save();
            }
        })
        res.redirect('/product');
    }
}
module.exports = new productController;