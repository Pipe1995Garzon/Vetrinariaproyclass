const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

route.get('/ver_productos', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from productos');
    res.render('productos/ver_productos', { mostrarTodo })
}); 

route.get('/agregar', isLoggedIn, (req, res) => {
    res.render('productos/ver_productos')
});

route.post('/agregar', async(req, res) => {
    const { nombreProducto, codigo, precio, categoria, fecha_vencimiento} = req.body;
    const AgregarProducto = {nombreProducto, codigo, precio, categoria, fecha_vencimiento}
    await pool.query('insert into productos set ?', [AgregarProducto]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/productos/ver_productos');
});

route.get('/modificar/:id_productos', isLoggedIn, async(req, res) => {
    const { id_productos } = req.params;
    const mostrar = await pool.query('select * from productos where id_productos=?', [id_productos])
    res.render('productos/ver_productos', {mostrar});
});

route.post('/modificar/:id_productos', isLoggedIn, async(req, res) => {
    const { id_productos} = req.params;
    const {nombreProducto, codigo, precio, categoria} = req.body;
    const Modificar = {nombreProducto, codigo, precio, categoria}
    await pool.query("UPDATE productos SET nombreProducto ='" + [nombreProducto ] +"', codigo ='" + [ codigo] +"', precio ='" + [precio] +"',  categoria ='" + [ categoria] +"'WHERE id_productos = '" + [id_productos] + "'");
    req.flash('correcto', 'producto modificado con exito');
    res.redirect('/productos/ver_productos');
});

route.get('/eliminar/:id_productos', isLoggedIn, async(req, res) => {
    const { id_productos} = req.params;
    const eliminarProductos = await pool.query('delete from productos where id_productos=?', [id_productos]);
    req.flash('correcto', 'se ha eliminado el producto');
    res.redirect('/productos/ver_productos');
});
module.exports = route;