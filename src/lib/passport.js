const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');


passport.use('local.login', new LocalStrategy({
    usernameField: 'nombre',
    passwordField: 'pass',
    passReqToCallback: true
}, async(req, nombre, pass, done) => {
    //console.log(req.body)
    //console.log(nombre)
    //console.log(pass)
    const filas = await pool.query('SELECT * FROM usuarios WHERE nombre=?', [nombre]);
    console.log(req.body)
    if (filas.length > 0) {
        const user = filas[0]
        const passvalida = await helpers.compararclave(pass, user.pass);
        if (passvalida) {
            done(null, user, req.flash('correcto', 'bienvenido jejej ' + user.nombre))
        } else {
            done(null, false, req.flash('message', 'uy algo anda mal clave incorrecta '))
        }
    } else {
        return done(null, false, req.flash('message', 'no existes aqui '))
    }
}))


//local.ingresar es el nombre de la funcion para registrar un usuario que pueda autenticarse
passport.use('local.registrar', new LocalStrategy({
    usernameField: 'nombre',
    passwordField: 'pass',
    passReqToCallback: true
}, async(req, nombre, pass, done) => {
    const { nombres, edad, identificacion, telefono, rol_id } = req.body
    const NuevoUsuario = {
        nombre,
        pass,
        nombres,
        edad,
        identificacion,
        telefono,
        rol_id
    }
    NuevoUsuario.pass = await helpers.encriptar(pass);
    const result = await pool.query('insert into usuarios set ?', [NuevoUsuario])
    NuevoUsuario.id = result.insertId;
    console.log(req.body)
    console.log(result)
    return (null, NuevoUsuario)
}));

passport.serializeUser((usuario, done) => {
    done(null, usuario.id)
});

passport.deserializeUser(async(id, done) => {
    const filas = await pool.query('SELECT * FROM usuarios WHERE id=?', [id])
    done(null, filas[0]);

})