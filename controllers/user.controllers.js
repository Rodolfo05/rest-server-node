
const {response} = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre = 'No name'} = req.query;

    res.json({
        ok:true,
        message: "get correcto - controllador",
        q,
        nombre
    })
}

const usuariosPost = (req, res = response) => {

const {nombre, edad} = req.body;

    res.json({
        ok:true,
        message: "post correcto - controllador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        ok:true,
        message: "put correcto - controllador",
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        message: "delete correcto - controllador"
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}