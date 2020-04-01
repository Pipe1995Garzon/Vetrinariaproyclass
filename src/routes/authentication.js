const express = require('express');
const route = express.Router();
const passport = require('passport');
const { isLoggedIn, isnotLoggedIn } = require('../lib/auth');
route.get('/registrarusuario', isLoggedIn, (req, res) => {
    //res.send('logo esta funcional')
    res.render('authentication/registrarusuario')
})


route.post('/registrarusuario', passport.authenticate('local.registrar', {
    successRedirect: '/perfil',
    failureRedirect: '/resgistrarusuario',
    failureFlash: true
}))

route.get('/hueco', (req, res) => {
    //res.send('no puedes visitar esa seccion porque estas logueado')
    res.render('authentication/hueco')
})

route.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/authentication/login')
})

route.get('/loginincorrecto', (req, res) => {
    res.send('usuario o clave incorrecta')
})

route.get('/login', isnotLoggedIn, (req, res) => {
    res.render('authentication/login');
})

route.post('/login', async(req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/admin/adminprincipal',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
})

module.exports = route;