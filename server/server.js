var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('Get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario ojo!'
        });
    } else {
        res.json({
            datos: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id

    });
});
app.listen(process.env.PORT, () => console.log(`puerto abierto en http://localhost:${process.env.PORT}`));