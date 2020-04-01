const express = require('express');
const route = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

route.get('/creausuario', isLoggedIn, (req, res) => {
    //res.send('admin crea secretaria sirve sirve')
    res.render('admin/creausuario')
})

route.get('/ver_usuarios', isLoggedIn, async(req, res) => {
    const usua = await pool.query('select * from usuarios');
    res.render('admin/ver_usuarios', { usua })
})

route.post('/creausuario', isLoggedIn, async(req, res) => {
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
})

route.get('/update/:id', isLoggedIn, async(req, res) => {
    // let id = req.params.id;
    const { id } = req.params;
    //let id = req.params;
    const usuas = await pool.query('select * from usuarios where id=?', [id])
    res.render('admin/modifica_usuarios', { usuas });
})

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


    //await pool.query('UPDATE usuarios SET nombre=?', [nombre], 'pass=?', [pass], 'nombres=?', [nombres], 'identificacion=?', [identificacion], 'edad=?', [edad], 'telefono=?[telefono] WHERE id=?', [id])
    //"UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    //await pool.query("UPDATE usuarios SET nombre ='"+[nombres]+"' WHERE id= '" + [id] + "'");
    console.log('esto es una prueba', [nombres])
    console.log('esto es otre prueba ', [id], 'podriaserotraprueba0', [pass])
    await pool.query("UPDATE usuarios SET nombre ='" + [nombre] + "',pass='" + [pass] + "',nombres='" + [nombres] + "',identificacion='" + [identificacion] + "',edad='" + [edad] + "',telefono='" + [telefono] + "'WHERE id = '" + [id] + "'");
    req.flash('correcto', 'dato modificado con exito mano');
    res.redirect('/admin/ver_usuarios');
})


route.get('/delete/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from usuarios where id=?', [id]);
    req.flash('correcto', 'el dato ya lo elimino parce');
    res.redirect('/admin/ver_usuarios');
})


route.get('/adminprincipal', isLoggedIn, (req, res) => {
    res.render('admin/adminprincipal');
})

/*
    route.get('/update/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('select * from usuarios where id=?', [id])
    res.redirect('modifica_usuarios');
})
*/

module.exports = route;