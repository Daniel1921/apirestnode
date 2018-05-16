var express = require('express');
var app = express();
const Usuario = require('../models/usuario');
var bcrypt = require('bcrypt');


app.get('/usuario', function(req, res) {
    res.json('Get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role,
        img: body.img
    });

    usuario.save((e, usuarioDB) => {
        if (e) {
            return res.status(400).json({
                ok: false,
                e
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });



});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    let body = req.body;

    Usuario.findByIdAndUpdate(id, body, (err, usuarioDB) => {

        if (e) {
            return res.status(400).json({
                ok: false,
                e
            })
        }


    })




});

app.delete('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id

    });
});


module.exports = app;