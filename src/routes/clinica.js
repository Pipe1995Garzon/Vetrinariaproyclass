const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

//nosotros
route.get('/nosotros', isLoggedIn, async(req, res) => {
    const mostrarTodo = await pool.query('select * from nosotros');
    res.render('clinica/nosotros', { mostrarTodo })
});

route.get('/agregar_informacion/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const mostrarInformacion = await pool.query('select * from nosotros where id_nosotros=?', [id_nosotros])
    res.render('clinica/agregar_informacion', {mostrarInformacion });
});

route.post('/agregar_informacion/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const {informacion} = req.body;
    const agregar = {informacion}
    await pool.query("UPDATE nosotros SET informacion ='" + [informacion] +"' WHERE id_nosotros = '" + [id_nosotros] + "'");
    req.flash('correcto', 'La informacion fue guardada con exito');
    res.redirect('/clinica/nosotros');
});


route.get('/update/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const mostrarInformacion = await pool.query('select * from nosotros where id_nosotros=?', [id_nosotros])
    res.render('clinica/nosotros', {mostrarInformacion});
});

route.post('/update/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const {informacion} = req.body;
    const ModificaInformacion = {informacion}
    await pool.query("UPDATE nosotros SET informacion ='" + [informacion] +"' WHERE id_nosotros = '" + [id_nosotros] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/clinica/nosotros');
});

route.get('/delete/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const eliminarInformacion = await pool.query('delete from nosotros where id_nosotros=?', [id_nosotros]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/clinica/nosotros');
});

//mision
route.get('/modificar_mision/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const mostrarMision = await pool.query('select * from nosotros where id_nosotros=?', [id_nosotros])
    res.render('clinica/nosotros', {mostrarMision});
});

route.post('/modificar_mision/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const {mision} = req.body;
    const modificar = {mision}
    await pool.query("UPDATE nosotros SET mision ='" + [mision] +"' WHERE id_nosotros = '" + [id_nosotros] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/clinica/nosotros');
});

//vision
route.get('/modificar_vision/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const mostrarVision = await pool.query('select * from nosotros where id_nosotros=?', [id_nosotros])
    res.render('clinica/nosotros', {mostrarVision});
});

route.post('/modificar_vision/:id_nosotros', isLoggedIn, async(req, res) => {
    const { id_nosotros } = req.params;
    const {vision} = req.body;
    const ModificarVision = {vision}
    await pool.query("UPDATE nosotros SET vision ='" + [vision] +"' WHERE id_nosotros = '" + [id_nosotros] + "'");
    req.flash('correcto', 'informacion modificada con exito');
    res.redirect('/clinica/nosotros');
});

//servicios
route.get('/servicios', isLoggedIn, async(req, res) => {
    const mostrarServicios = await pool.query('select * from servicios');
    res.render('clinica/servicios', { mostrarServicios })
});

route.get('/agregar_servicio', isLoggedIn, (req, res) => {
    res.render('clinica/agregar_servicio')
});

route.post('/agregar_servicio', async(req, res) => {
    const {servicio, descripcion} = req.body;
    const AgregarServicio = {servicio, descripcion}
    await pool.query('insert into servicios set ?', [AgregarServicio]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/clinica/servicios');
}); 

route.get('/eliminar/:id_servicios', isLoggedIn, async(req, res) => {
    const { id_servicios } = req.params;
    const eliminarServicios = await pool.query('delete from servicios where id_servicios=?', [id_servicios]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/clinica/servicios');
});

route.get('/servicios/:id_servicios', isLoggedIn, async(req, res) => {
    const { id_servicios } = req.params;
    const mostrarServicio = await pool.query('select * from servicios where id_servicios=?', [id_servicios])
    res.render('clinica/servicios', {mostrarServicio});
});

route.post('/modificar_servicios/:id_servicios', isLoggedIn, async(req, res) => {
    const { id_servicios } = req.params;
    const {servicio, descripcion} = req.body;
    const modificar = {servicio, descripcion}
    await pool.query("UPDATE servicios SET servicio ='" + [servicio] +"', descripcion='" + [descripcion] + "' WHERE id_servicios = '" + [id_servicios] + "'");
    req.flash('correcto', 'La informacion fue guardada con exito');
    res.redirect('/clinica/servicios');
});

//instalaciones
route.get('/instalaciones', isLoggedIn, async(req, res) => {
    const mostrarInstalaciones = await pool.query('select * from instalaciones');
    res.render('clinica/instalaciones', {mostrarInstalaciones})
});

route.get('/agregar_instalacion', isLoggedIn, (req, res) => {
    res.render('clinica/agregar_instalacion')
});

route.post('/agregar_instalacion', async(req, res) => {
    const {instalacion} = req.body;
    const imagen = req.files;
    const AgregarTodo = {imagen, instalacion};
    await pool.query('insert into instalaciones set ?', [AgregarTodo]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('/clinica/instalaciones');
}); 

route.get('/eliminar_instalaciones/:id_instalaciones', isLoggedIn, async(req, res) => {
    const { id_instalaciones } = req.params;
    const eliminar = await pool.query('delete from instalaciones where id_instalaciones=?', [id_instalaciones]);
    req.flash('correcto', 'se ha eliminado la informacion');
    res.redirect('/clinica/instalaciones');
});

route.get('/modificar_instalacion/:id_instalaciones', isLoggedIn, async(req, res) => {
    const { id_instalaciones } = req.params;
    const mostrarinstalaciones = await pool.query('select * from instalaciones where id_instalaciones=?', [id_instalaciones])
    res.render('clinica/instalaciones', {mostrarinstalaciones});
});

route.post('/modificar_instalaciones/:id_instalaciones', isLoggedIn, async(req, res) => {
    const { id_instalaciones } = req.params;
    const {instalacion, imagen} = req.body;
    const modificarinstalaciones = {instalacion, imagen}
    await pool.query("UPDATE instalaciones SET instalacione ='" + [instalacion] +"', imagen='" + [imagen] + "' WHERE id_instalaciones = '" + [id_instalaciones] + "'");
    req.flash('correcto', 'La informacion fue guardada con exito');
    res.redirect('/clinica/instalaciones');
});



module.exports = route;