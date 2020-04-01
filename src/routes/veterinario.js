const express = require('express');
const route = express.Router();
const pool = require('../database');

route.get('/veterinario', (req, res) => {
    res.send('el veterinario esta funcionando');
})

/*
    SELECT cu.first_name, cy.city, co.country FROM customer cu, city cy, country co, address ad 
WHERE ad.city_id=cy.city_id AND cy.country_id=co.country_id; 
*/
route.get('/vercitas', async(req, res) => {
    const usua = await pool.query('SELECT cli.Nombre, cli.Apellido,cli.CC,cli.Telefono,ci.mascota,ci.descripcion,ci.fecha,ci.tipo,ci.id_citas FROM clientes cli, citas ci WHERE cli.id_cliente=ci.id_cliente')
    res.render('veterinario/ver_citas', { usua })
})

module.exports = route;