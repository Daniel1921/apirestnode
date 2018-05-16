var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
require('./config/config');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/usuario'));


mongoose.connect('mongodb://localhost:27017/cafe', (e, res) => {
    if (e) throw e;

    console.log(`base de datos online`);
});




app.listen(process.env.PORT, () => console.log(`puerto abierto en http://localhost:${process.env.PORT}`));