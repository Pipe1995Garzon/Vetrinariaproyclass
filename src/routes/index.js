const express = require('express');
const route = express.Router();
const pool = require('../database');

route.get('/', async(req, res) => {
    const info1 = await pool.query('select * from info1');
    console.log(info1)
    res.render('index', { info1 });
});

module.exports = route;