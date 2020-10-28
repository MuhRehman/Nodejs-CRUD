require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const port = process.env.PORT || 8000;

const employeeController = require('./controllers/employeeController');

const mongoose = require('mongoose');
const User = mongoose.model('user');


var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(port, () => {
    console.log(`Express server started at port : ${port}`);
});

app.use('/employee', employeeController);

app.post("/test", (req, res, next) => {


    
    User.create({
        name: req.body.name,
email: req.body.email,
mobile: req.body.mobile,
city: req.body.city
    }).then(data=>{

        res.status(200).send(data);
    })

   });


   app.get("/test", (req, res, next) => {


    
    User.find().then(data=>{

        res.status(200).send(data);
    })

   });