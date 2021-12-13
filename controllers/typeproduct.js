const typeproduct = require('../models/typeproduct');
class typeproductController{
    async create(req,res){
        let type= new typeproduct({
            displayname: req.body.displayname,
        })
        await type.save();
        req.session.isTypeCreated = 'true';
        res.redirect('/product');
    }
    async delete(req,res){
        let id = req.params.id;
        typeproduct.findOneAndDelete({"idType":id},(err, doc)=>{
            if (err){
                console.log(err);
            }
            req.session.isTypeDeleted = 'true';
            res.redirect('/product');
        })
    }
}
module.exports = new typeproductController;