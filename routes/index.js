const customerRouter = require('./customer');
const siteRouter = require('./site');
const userRouter = require('./user');
const roleRouter = require('./role');
const productRouter = require('./product');
function route (app) {
    app.use('/product', productRouter);
    app.use('/customers', customerRouter);
    app.use('/users', userRouter);
    app.use('/role', roleRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;