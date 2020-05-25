const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

// articulos perros
route.get('/articulos_perros', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from articulos');
    res.render('articulos/articulos_perros', { mostrarTodo })
});

route.get('/agregar', isLoggedIn, (req, res) => {
    res.render('articulos/articulos_perros')
});

route.post('/agregar', async(req, res) => {
    const {nombre_a, articulo} = req.body;
    const Agregar = {nombre_a, articulo}
    await pool.query('insert into articulos set ?', [Agregar]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/articulos/articulos_perros');
});


route.get('/modificar/:id_articulos', isLoggedIn, async(req, res) => {
    const { id_articulos } = req.params;
    const mostrarArticulos = await pool.query('select * from articulos where id_articulos=?', [id_articulos])
    res.render('articulos/articulos_perros', {mostrarArticulos});
});

route.post('/modificar/:id_articulos', isLoggedIn, async(req, res) => {
    const { id_articulos} = req.params;
    const {nombre_a, articulo} = req.body;
    const Modificar = {nombre_a, articulo}
    await pool.query("UPDATE articulos SET nombre_a ='" + [nombre_a] +"', articulo ='" + [articulo] +"' WHERE id_articulos = '" + [id_articulos] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/articulos/articulos_perros');
});

route.get('/eliminar/:id_articulos', isLoggedIn, async(req, res) => {
    const { id_articulos} = req.params;
    const eliminarArticulos = await pool.query('delete from articulos where id_articulos=?', [id_articulos]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/articulos/articulos_perros');
});

// articulos gatos
route.get('/articulos_gatos', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from articulos_gatos');
    res.render('articulos/articulos_gatos', { mostrarTodo })
});

route.get('/agregar_articulos', isLoggedIn, (req, res) => {
    res.render('articulos/articulos_gatos')
});

route.post('/agregar_articulos', async(req, res) => {
    const {nombre_ag, articulo_g} = req.body;
    const Agregar = {nombre_ag, articulo_g}
    await pool.query('insert into articulos_gatos set ?', [Agregar]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/articulos/articulos_gatos');
});


route.get('/modificar_articulos/:id_ag', isLoggedIn, async(req, res) => {
    const { id_ag } = req.params;
    const mostrarArticulos = await pool.query('select * from articulos_gatos where id_ag=?', [id_ag])
    res.render('articulos/articulos_perros', {mostrarArticulos});
});

route.post('/modificar_articulos/:id_ag', isLoggedIn, async(req, res) => {
    const { id_ag} = req.params;
    const {nombre_ag, articulo_g} = req.body;
    const Modificar = {nombre_ag, articulo_g}
    await pool.query("UPDATE articulos_gatos SET nombre_ag ='" + [nombre_ag] +"', articulo_g ='" + [articulo_g] +"' WHERE id_ag = '" + [id_ag] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/articulos/articulos_gatos');
});

route.get('/delete/:id_ag', isLoggedIn, async(req, res) => {
    const { id_ag} = req.params;
    const eliminarArticulos = await pool.query('delete from articulos_gatos where id_ag=?', [id_ag]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/articulos/articulos_gatos');
});

// mascotas no tradicionales
route.get('/articulos_mascota_no_tradicional', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from mascotas_no_tradicionales');
    res.render('articulos/articulos_mascota_no_tradicional', { mostrarTodo })
});

route.get('/agregar_articulo', isLoggedIn, (req, res) => {
    res.render('articulos/articulos_mascota_no_tradicional')
});

route.post('/agregar_articulo', async(req, res) => {
    const {nombre_m, articulo_m} = req.body;
    const Agregar = {nombre_m, articulo_m}
    await pool.query('insert into mascotas_no_tradicionales set ?', [Agregar]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/articulos/articulos_mascota_no_tradicional');
});


route.get('/update/:id_mnt', isLoggedIn, async(req, res) => {
    const { id_mnt } = req.params;
    const mostrarArticulos = await pool.query('select * from mascotas_no_tradicionales where id_mnt=?', [id_mnt])
    res.render('articulos/articulos_mascota_no_tradicional', {mostrarArticulos});
});

route.post('/update/:id_mnt', isLoggedIn, async(req, res) => {
    const { id_mnt} = req.params;
    const {nombre_m, articulo_m} = req.body;
    const Modificar = {nombre_m, articulo_m}
    await pool.query("UPDATE mascotas_no_tradicionales SET nombre_m ='" + [nombre_m] +"', articulo_m ='" + [articulo_m] +"' WHERE id_mnt = '" + [id_mnt] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/articulos/articulos_mascota_no_tradicional');
});

route.get('/eliminar_articulo/:id_mnt', isLoggedIn, async(req, res) => {
    const { id_mnt} = req.params;
    const eliminarArticulos = await pool.query('delete from mascotas_no_tradicionales where id_mnt=?', [id_mnt]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/articulos/articulos_mascota_no_tradicional');
});

module.exports = route;