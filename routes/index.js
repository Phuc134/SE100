const customerRouter = require('./customer');
const supplierRouter = require('./supplier');
const apiRouter = require('./api');
const siteRouter = require('./site');

function route (app) {
    
    app.use('/customers', customerRouter);
    app.use('/suppliers', supplierRouter);
    app.use('/api', apiRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;