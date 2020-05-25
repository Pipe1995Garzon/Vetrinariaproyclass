const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

// informacion perros
route.get('/informacion_perros', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from info_perros');
    res.render('informacion_mascotas/informacion_perros', { mostrarTodo })
});

route.get('/add', isLoggedIn, (req, res) => {
    res.render('informacion_mascotas/informacion_perros')
});

route.post('/add', async(req, res) => {
    const {tema, fecha_perros} = req.body;
    const Agregar = {tema, fecha_perros}
    await pool.query('insert into info_perros set ?', [Agregar]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/informacion/informacion_perros');
});


route.get('/modificar_tema/:id_perros', isLoggedIn, async(req, res) => {
    const { id_perros } = req.params;
    const mostrarInformacion = await pool.query('select * from info_perros where id_perros=?', [id_perros])
    res.render('informacion_mascotas/informacion_perros', {mostrarArInformacion});
});

route.post('/modificar_tema/:id_perros', isLoggedIn, async(req, res) => {
    const { id_perros} = req.params;
    const {tema, fecha_perros} = req.body;
    const Modificar = {tema, fecha_perros}
    await pool.query("UPDATE info_perros SET tema ='" + [tema] +"', fecha_perros ='" + [fecha_perros] +"' WHERE id_perros = '" + [id_perros] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/informacion/informacion_perros');
});

route.get('/eliminar_tema/:id_perros', isLoggedIn, async(req, res) => {
    const { id_perros} = req.params;
    const eliminarTema = await pool.query('delete from info_perros where id_perros=?', [id_perros]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/informacion/informacion_perros');
});

// articulos gatos
route.get('/informacion_gatos', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from info_gatos');
    res.render('informacion_mascotas/informacion_gatos', { mostrarTodo })
});

route.get('/agregar', isLoggedIn, (req, res) => {
    res.render('informacion_maascotas/informacion_gatos')
});

route.post('/agregar', async(req, res) => {
    const {tema_gatos, fecha_gatos} = req.body;
    const Agregar = {tema_gatos, fecha_gatos}
    await pool.query('insert into info_gatos set ?', [Agregar]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/informacion/informacion_gatos');
});


route.get('/modificar/:id_gatos', isLoggedIn, async(req, res) => {
    const { id_gatos } = req.params;
    const mostrarArticulos = await pool.query('select * from articulos_gatos where id_gatos=?', [id_gatos])
    res.render('informacion_mascota/informacion_gatos', {mostrarArticulos});
});

route.post('/modificar/:id_gatos', isLoggedIn, async(req, res) => {
    const { id_gatos} = req.params;
    const {tema_gatos, fecha_gatos} = req.body;
    const Modificar = {tema_gatos, fecha_gatos}
    await pool.query("UPDATE info_gatos SET tema_gatos ='" + [tema_gatos] +"', fecha_gatos ='" + [fecha_gatos] +"' WHERE id_gatos = '" + [id_gatos] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/informacion/informacion_gatos');
});

route.get('/eliminar/:id_gatos', isLoggedIn, async(req, res) => {
    const { id_gatos} = req.params;
    const eliminarArticulos = await pool.query('delete from info_gatos where id_gatos=?', [id_gatos]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/informacion/informacion_gatos');
});

// mascotas no tradicionales
route.get('/informacion_mascota_no_tradicional', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from info_mascota_no_tradicional');
    res.render('informacion_mascotas/informacion_mascota_no_tradicional', { mostrarTodo })
});

route.get('/registrar', isLoggedIn, (req, res) => {
    res.render('informacion_mascota/informacion_mascota_no_tradicional')
});

route.post('/registrar', async(req, res) => {
    const {tema_mascota, fecha_mnt} = req.body;
    const Agregar = {tema_mascota, fecha_mnt}
    await pool.query('insert into info_mascota_no_tradicional set ?', [Agregar]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/informacion/informacion_mascota_no_tradicional');
});


route.get('/update/:id_info_mascota', isLoggedIn, async(req, res) => {
    const { id_info_mascota } = req.params;
    const mostrarArticulos = await pool.query('select * from info_mascota_no_tradicional where id_info_mascota=?', [id_info_mascota])
    res.render('/informacion_mascotas/informacion_mascota_no_tradicional', {mostrarArticulos});
});

route.post('/update/:id_info_mascota', isLoggedIn, async(req, res) => {
    const {id_info_mascota} = req.params;
    const {tema_mascota, fecha_mnt} = req.body;
    const Modificar = {tema_mascota, fecha_mnt}
    await pool.query("UPDATE info_mascota_no_tradicional SET tema_mascota ='" + [tema_mascota] +"', fecha_mnt ='" + [fecha_mnt] +"' WHERE id_info_mascota = '" + [id_info_mascota] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/informacion/informacion_mascota_no_tradicional');
});

route.get('/delete/:id_info_mascota', isLoggedIn, async(req, res) => {
    const { id_info_mascota} = req.params;
    const eliminarArticulos = await pool.query('delete from info_mascota_no_tradicional where id_info_mascota=?', [id_info_mascota]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/informacion/informacion_mascota_no_tradicional');
});

module.exports = route;