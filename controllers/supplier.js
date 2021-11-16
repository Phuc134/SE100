const supplier = require('../models/supplier');
const {multipleMongooseToObject} = require('../util/mongoose');
const {mongooseToObject} = require('../util/mongoose');

class SupplierController {
    // [GET] /suppliers
    index(req, res,next) {
        supplier.find({})
            .then(suppliers => {
                res.render('supplier/supplier',{
                    suppliers : multipleMongooseToObject(suppliers)
                });
                
            })
            .catch(next);
    }
    // [GET] /suppliers/create
    create(req, res,next) {
        res.render('supplier/create');
    }

    // [POST] /suppliers/store
    store(req, res,next) {
        //res.json(req.body);
        const storeSupplier = new supplier(req.body);
        storeSupplier.save()
            .then(() => res.redirect('/suppliers'))
            .catch(erro => {

            });
    }
     // [GET] /customers/:id/edit
     edit(req, res,next) {
        supplier.findById(req.params.id)
           .then(editSupplier => res.render('supplier/edit',{
                editSupplier : mongooseToObject(editSupplier)
           }))
           .catch(next);
   }
    // [PUT] /customers/:id
    update(req, res, next) {
        supplier.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/suppliers"))
            .catch(next);
    }
     // [DELETE] /customers/:id
     delete(req, res, next){
        supplier.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new SupplierController;