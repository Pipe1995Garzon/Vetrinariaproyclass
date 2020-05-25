const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

route.get('/ver_proveedores', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from proveedores');
    res.render('proveedores/ver_proveedores', { mostrarTodo })
});

route.get('/agregar', isLoggedIn, (req, res) => {
    res.render('proveedores/ver_proveedores')
});

route.post('/agregar', async(req, res) => {
    const {proveedor, nit} = req.body;
    const Agregar = {proveedor, nit}
    await pool.query('insert into proveedores set ?', [Agregar]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/proveedores/ver_proveedores');
});

route.get('/modificar/:id_proveedor', isLoggedIn, async(req, res) => {
    const { id_proveedor } = req.params;
    const mostrar = await pool.query('select * from proveedores where id_proveedor=?', [id_proveedor])
    res.render('proveedores/ver_proveedores', {mostrar});
});

route.post('/modificar/:id_proveedor', isLoggedIn, async(req, res) => {
    const { id_proveedor} = req.params;
    const {proveedor, nit} = req.body;
    const Modificar = {proveedor, nit}
    await pool.query("UPDATE proveedores SET proveedor='" + [proveedor] +"', nit ='" + [nit] +"' WHERE id_proveedor = '" + [id_proveedor] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/proveedores/ver_proveedores');
});

route.get('/eliminar/:id_proveedor', isLoggedIn, async(req, res) => {
    const { id_proveedor} = req.params;
    const eliminar = await pool.query('delete from proveedores where id_proveedor=?', [id_proveedor]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/proveedores/ver_proveedores');
});


module.exports = route;