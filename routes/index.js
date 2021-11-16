const customerRouter = require('./customer');
const supplierRouter = require('./supplier')
const siteRouter = require('./site');
const userRouter = require('./user');
const roleRouter = require('./role');
const orderRouter = require('./order');
const apiRouter = require('./api');
function route (app) {
    
    app.use('/customers', customerRouter);
    app.use('/users', userRouter);
    app.use('/role', roleRouter);
    app.use('/orders', orderRouter);
    app.use('/api', apiRouter);
    app.use('/suppliers', supplierRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;