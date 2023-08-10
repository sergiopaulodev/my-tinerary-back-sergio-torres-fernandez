//IMPORTS
import 'dotenv/config.js' //importo UNICAMENTE la configuracion de las variables de entorno
import __dirname from './utils.js'; //importo la configuracion de la ubicacion del servidor (antes venia preconfigurada)
// var createError = require('http-errors');
import createError from 'http-errors'; //crear errores

// var express = require('express');
import express from 'express'; //provee metodos y propiedades para levantar servidores

// var path = require('path');
import path from 'path';

// var cookieParser = require('cookie-parser');

// var logger = require('morgan');
import logger from 'morgan' // para registrar cada una de las peticiones

// var indexRouter = require('./routes/index'); solo vamos a configurar las rutas del enrutador de back principal 
import indexRouter from './routes/index.js' //este enrutador va a llamar a TODOS los otros recursos (cities, itineraries, users)

// var usersRouter = require('./routes/users');

let app = express();        //ejecutando el modulo de express: creo una app de backend (servidor)

// VIEW ENGINE SETUP
// SET es el metodo necesario para settear (configurar) algo (en este caso motodr de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// MIDDLEWARES
// USE es el metodo necesario para obligar mi app a que use la funcion CADA VEZ que se realiza una SOLICITUD/PETICION
app.use(logger('dev'));     //obligo al servidor a registrar una peticion con el modulo de logger/morgan
app.use(express.json());    //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false })); //obliga al servidor a leer params/queries
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));    //obligo al servidor a usar los archivos estaticos de la carpeta public

//ROUTER
app.use('/api', indexRouter);      //obligo al servidor a que use las rutas del enrutador principal con "/api"


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}); // este MIDDLEWARE cuando una ruta no existe me genera un error

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
