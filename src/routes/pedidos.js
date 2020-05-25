const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

route.get('/ver_pedidos', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from pedidos');
    res.render('pedidos/ver_pedidos', { mostrarTodo })
});




module.exports = route;