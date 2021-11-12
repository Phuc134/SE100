const customerRouter = require('./customer');
const siteRouter = require('./site');
const userRouter = require('./user');
const roleRouter = require('./role');
function route (app) {
    
    app.use('/customers', customerRouter);
    app.use('/users', userRouter);
    app.use('/role', roleRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;