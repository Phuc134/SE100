const express = require('express');
const db= require('./config/db');
var app = express();
var bodyParser = require('body-parser');
const route = require('./routes');
const path = require('path');
const expressLayout= require('express-ejs-layouts');

//connect to db
db.connect();
// Step 4 - set up EJS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set EJS as templating engine 
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('employee/employee');
})
route(app);
app.listen(3000);
