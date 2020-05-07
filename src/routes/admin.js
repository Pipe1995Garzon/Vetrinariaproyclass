const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');
//isLoggedIn,

route.get('/ver_usuarios', isLoggedIn, async(req, res) => {
    const usua = await pool.query('select * from usuarios');
    res.render('admin/ver_usuarios', { usua })
});

route.get('/creausuario', isLoggedIn, (req, res) => {
    //res.send('admin crea secretaria sirve sirve')
    res.render('admin/creausuario')
});

route.post('/creausuario', async(req, res) => {
    const { rol_id, nombre, pass, nombres, identificacion, edad, telefono } = req.body;
    const arreglito = {
        rol_id,
        nombre,
        pass,
        nombres,
        identificacion,
        edad,
        telefono
    }
    await pool.query('insert into usuarios set ?', [arreglito]);
    req.flash('correcto', 'usuario guardado con exito');
    res.redirect('ver_usuarios');
});

route.get('/update/:id', isLoggedIn, async(req, res) => {
    // let id = req.params.id;
    const { id } = req.params;
    //let id = req.params;
    const usuas = await pool.query('select * from usuarios where id=?', [id])
    res.render('admin/modifica_usuarios', { usuas });
});

route.post('/update/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    const { rol_id, nombre, pass, nombres, identificacion, edad, telefono } = req.body;
    const arreglito = {
        rol_id,
        nombre,
        pass,
        nombres,
        identificacion,
        edad,
        telefono
    }
    console.log('esto es una prueba', [nombres])
    console.log('esto es otre prueba ', [id], 'podriaserotraprueba0', [pass])
    await pool.query("UPDATE usuarios SET nombre ='" + [nombre] + "',pass='" + [pass] + "',nombres='" + [nombres] + "',identificacion='" + [identificacion] + "',edad='" + [edad] + "',telefono='" + [telefono] + "'WHERE id = '" + [id] + "'");
    req.flash('correcto', 'dato modificado con exito');
    res.redirect('/admin/ver_usuarios');
});


route.get('/delete/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from usuarios where id=?', [id]);
    req.flash('correcto', 'se ha eliminado el usuario');
    res.redirect('/admin/ver_usuarios');
});

//empleados
route.get('/ver_empleados', isLoggedIn, async(req, res) => {
    const ConsultaEmpleados = await pool.query('select * from empleados');
    res.render('admin/ver_empleados', { ConsultaEmpleados })
});

route.get('/agregar_empleado', isLoggedIn, (req, res) => {
    res.render('admin/agregar_empleado')
});

route.post('/agregar_empleado', async(req, res) => {
    const { nombre, apellido, cedula, cargo} = req.body;
    const AgregarEmpleado = {nombre, apellido, cedula, cargo}
    await pool.query('insert into empleados set ?', [AgregarEmpleado]);
    req.flash('correcto', 'Guardado con exito');
    res.redirect('ver_empleados');
});

route.get('/eliminar_empleado/:id_empleados', isLoggedIn, async(req, res) => {
    const { id_empleados } = req.params;
    const EliminarEmpleados = await pool.query('delete from empleados where id_empleados=?', [id_empleados]);
    req.flash('correcto', 'se ha eliminado correctamente');
    res.redirect('/admin/ver_empleados');
});

route.get('/modifica_empleado/:id_empleados', isLoggedIn, async(req, res) => {
    const { id_empleados } = req.params;
    const mostrarEmpleado = await pool.query('select * from empleados where id_empleados=?', [id_empleados])
    res.render('admin/modifica_empleado', {mostrarEmpleado });
});

route.post('/modifica_empleado/:id_empleados', isLoggedIn, async(req, res) => {
    const { id_empleados } = req.params;
    const { nombre, apellido, cedula, cargo} = req.body;
    const ModificaEmpleado = {nombre, apellido, cedula, cargo}
    await pool.query("UPDATE empleados SET nombre ='" + [nombre] +"',apellido='" + [apellido] + "',cedula='" + [cedula] + "',cargo='" + [cargo] + "'WHERE id_empleados = '" + [id_empleados] + "'");
    req.flash('correcto', 'dato modificado con exito');
    res.redirect('/admin/ver_empleados');
});

route.get('/adminprincipal', isLoggedIn, (req, res) => {
    res.render('admin/adminprincipal');
});

module.exports = route;