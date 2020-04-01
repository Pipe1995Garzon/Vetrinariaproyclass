const express = require('express');
const router = express.Router();
//llamao a la variable para verificar conexion
const pool = require('../database');

router.get('/add', (req, res) => {
    //res.send('bien');
    res.render('links/add');
});


router.get('/registrar', async(req, res) => {
    const usua = await pool.query('select * from usuarios');
    res.render('links/registrar', { usua });
});

router.post('/add', async(req, res) => {
    //res.send('bien');
    //console.log(req.body);
    // res.render('links/add');
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
    res.redirect('add');
    // res.redirect('links/add');
});

router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const usua = await pool.query('delete from usuarios where id=?', [id]);
    res.redirect('links/add');
});



module.exports = router;