const express = require('express');
const route = express.Router();
const pool = require('../database');


route.get('/suma', (req, res) => {
    //res.send('admin crea secretaria sirve sirve')
    res.render('suma/suma')
})

route.post('/suma', (req, res) => {
    const { numero1, numero2 } = req.body;
    valores = {
        numero1,
        numero2
    }
    var n1 = parseInt([numero1])
    var n2 = parseInt([numero2])


    let valor = n1 + n2
    const v = valor;
    console.log('este es el primer valor', [numero1])
    console.log('este es el valor 2', [numero2])
    console.log('la operacion es' + valor);

    res.redirect('/suma/suma');
})

route.get('/motos', async(req, res) => {
    //res.send('todo va bien');
    const motos = await pool.query('select * from motos');
    res.render('suma/motos', { motos })

})

route.get('/motoadd', (req, res) => {
    // res.send('todo va bien');
    res.render('suma/add');
})

route.post('/motoadd', async(req, res) => {
    const { marca, linea, cilindraje, matricula, fechamatricula, placa } = req.body;
    const moticos = {
        marca,
        linea,
        cilindraje,
        matricula,
        fechamatricula,
        placa
    }
    await pool.query('insert into motos set ?', [moticos]);
    req.flash('correcto', 'moto agregada con exito');
    //console.log(moticos);
    res.render('suma/add');
})

route.get('/modifica/:id', async(req, res) => {
    const { id } = req.params;
    const moticos = await pool.query('select * from motos where id=?', [id])
    res.render('suma/modificarmoto', { moticos });
})

route.post('/modifica/:id', async(req, res) => {
    const { id } = req.params;
    const { marca, linea, cilindraje, matricula, fechamatricula, placa } = req.body;
    const moticos = {
        marca,
        linea,
        cilindraje,
        matricula,
        fechamatricula,
        placa
    }
    await pool.query("UPDATE motos SET marca='" + [marca] + "',linea='" + [linea] + "',cilindraje='" + [cilindraje] + "',matricula='" + [matricula] + "',fechamatricula='" + [fechamatricula] + "',placa='" + [placa] + "'WHERE id='" + [id] + "'");
    console.log(moticos)
    req.flash('correcto', 'moto modificada con exito')
    res.redirect('/suma/motos');
})
route.get('/eliminar/:id', async(req, res) => {
    const { id } = req.params;
    const motos = await pool.query('delete from motos where id=?', [id]);
    req.flash('correcto', 'moto eliminada con exito');
    res.redirect('/suma/motos');
})

module.exports = route;