const express = require('express');
const path = require('path');
const handlebars  = require('express-handlebars');
const methodOverride = require('method-override')
//const mongoose = require('mongoose');

const db = require('./config/db');
const route = require('./routes');

// connect to db
db.connect();




var app = express();
// Template engine
app.engine('hbs', handlebars({
    extname : '.hbs',
    helpers: {
        sum: (a,b) => a+b
    }
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));
//Route init
route(app);


app.listen(3000);
