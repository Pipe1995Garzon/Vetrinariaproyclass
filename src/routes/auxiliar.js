const express = require('express');
const route = express.Router();
const pool = require('../database');

route.get('/auxiliar', (req, res) => {
    res.send('el auxliar esta serviendo');
})

route.get('/crearcita', (req, res) => {
    res.render('auxiliar/crear_cita')
})

route.get('/vercita', async(req, res) => {
    const usua = await pool.query('SELECT cli.Nombre, cli.Apellido,cli.CC,cli.Telefono,ci.mascota,ci.descripcion,ci.fecha,ci.tipo,ci.id_citas,ci.estado,ci.hora FROM clientes cli, citas ci WHERE cli.id_cliente=ci.id_cliente')
    res.render('auxiliar/vercita', { usua })
})

route.post('/crearcita', async(req, res) => {
        const { Nombre, Apellido, Telefono, CC, mascota, descripcion, precio, tipo, fecha, estado, hora } = req.body;
        const cliente = {
            Nombre,
            Apellido,
            Telefono,
            CC
        };
        const citas = {
            mascota,
            descripcion,
            precio,
            tipo,
            fecha,
            estado,
            hora
        }
        await pool.query('insert into clientes set ?', [cliente]);
        await pool.query('insert into citas set ?', [citas])
        req.flash('correcto', 'la cita esta lista, the date is already')
        res.redirect('/auxiliar/vercitas');
    })
    // cancelar cita es un update
route.get('/cancelarcita/:id', async(req, res) => {
    const { id } = req.params;
    const datacitas = await pool.query('select * from citas where id_citas=?', [id])
    console.log(datacitas)
    res.render('auxiliar/cancelarcita', { datacitas });
})

route.post('/cancelarcita/:id', async(req, res) => {
    const { id } = req.params;
    const { id_citas, mascota, descripcion, fecha, hora, estado } = req.body;

    //console.log('esto es una prueba de que me esta llegando');
    //console.log('', [id], ',', [mascota], ',', [descripcion], ',', [fecha], ',', [hora], ',', [estado]);
    await pool.query("UPDATE citas SET mascota='" + [mascota] + "',descripcion='" + [descripcion] + "',fecha='" + [fecha] + "',hora='" + [hora] + "',estado='" + [estado] + "'WHERE id_citas='" + [id] + "'");
    req.flash('correcto', ' la cita se modifico con exito socio')
    res.redirect('/auxiliar/vercita');
})

route.get('/delete_cita/:id_citas', async(req, res) => {
    const { id_citas } = req.params;
    const eliminarcita = await pool.query('delete from citas where id_citas=?', [id_citas]);
    req.flash('correcto', 'se ha eliminado la cita');
    res.redirect('/auxiliar/vercita');
});
module.exports = route;