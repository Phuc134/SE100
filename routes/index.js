const customerRouter = require('./customer');
const siteRouter = require('./site');

function route (app) {
    
    app.use('/customers', customerRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;