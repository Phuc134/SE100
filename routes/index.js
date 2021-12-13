const customerRouter = require('./customer');
const supplierRouter = require('./supplier')
const siteRouter = require('./site');
const userRouter = require('./user');
const roleRouter = require('./role');
const orderRouter = require('./order');
const apiRouter = require('./api');
const productRouter = require('./product');
const importproductRouter = require('./importproduct'); //*xoa
const typeproductRouter = require('./typeproduct');
const importRouter = require('./import');
function route (app) {
    app.use('/typeproduct',typeproductRouter);
    app.use('/importproduct', importproductRouter); // *xoa
    app.use('/import', importRouter);
    app.use('/product', productRouter);
    app.use('/customers', customerRouter);
    app.use('/users', userRouter);
    app.use('/role', roleRouter);
    app.use('/orders', orderRouter);
    app.use('/api', apiRouter);
    app.use('/suppliers', supplierRouter);
    app.use('/product',productRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;