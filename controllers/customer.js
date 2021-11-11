
const customer = require('../models/customer');
const {multipleMongooseToObject} = require('../util/mongoose');
const {mongooseToObject} = require('../util/mongoose');

class CustomerController {
    // [GET] /customers
    index(req, res,next) {
        customer.find({})
            .then(customers => {
                res.render('home',{
                    customers : multipleMongooseToObject(customers)
                });
                
            })
            .catch(next);
    }
    // [GET] /customers/create
    create(req, res,next) {
        res.render('customer/create');
    }

    // [POST] /customers/store
    store(req, res,next) {
        //res.json(req.body);
        const storeCustomer = new customer(req.body);
        storeCustomer.save()
            .then(() => res.redirect('/customers'))
            .catch(erro => {

            });
    }

     // [GET] /customers/:id/edit
     edit(req, res,next) {
         customer.findById(req.params.id)
            .then(editCustomer => res.render('customer/edit',{
                editCustomer : mongooseToObject(editCustomer)
            }))
            .catch(next);
    }

    // [PUT] /customers/:id
    update(req, res, next){
        customer.updateOne({_id : req.params.id}, req.body)
            .then(() => res.redirect("/customers"))
            .catch(next);
    }

    // [DELETE] /customers/:id
    delete(req, res, next){
        customer.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CustomerController;