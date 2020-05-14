const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const mysqlsessionstore = require('express-mysql-session');
const { database } = require('./keys');
const passport = require('passport')


//
//const misrutas = require('./routes/index');
//const bodyParser = require('body-parser');
//inicializacion
const app = express();
require('./lib/passport');
//configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partial'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))

app.set('view engine', '.hbs');
app.set('json spaces', 2);

//MIDLEWARES, para morgan peeticiones
app.use(session({
    secret: 'pipesesion',
    resave: false,
    saveUninitialized: false,
    store: new mysqlsessionstore(database)
}));
//usando esa cosa de mensajes flash
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//variables globales
app.use((req, res, next) => {
    app.locals.correcto = req.flash('correcto');
    app.locals.message = req.flash('message');
    next();
    app.locals.usuario = req.user;

});

//rutas
app.use(require('./routes'));
//segunda part
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));
app.use('/clinica', require('./routes/clinica'));
app.use('/admin', require('./routes/admin'));
app.use('/veterinario', require('./routes/veterinario'));
app.use('/auxiliar', require('./routes/auxiliar'));
app.use('/suma', require('./routes/suma'));
app.use('/authentication', require('./routes/authentication'));
//app.use(require('./routes/links'));
//segunda parte
//public
app.use(express.static(path.join(__dirname, 'public')));

//arranca el servidor
app.listen(app.get('port'), () => {
    console.log('el servidor esta en el puerto numero', app.get('port'));
})