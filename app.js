//IMPORTS
import 'dotenv/config.js'                     //importo UNICAMENTE la configuracion de las variables de entorno
import './config/database.js'
import __dirname from './utils.js';          //importo la configuracion de la ubicacion del servidor (antes venia preconfigurada)

// import createError from 'http-errors';      //crear errores

import express, { response } from 'express';              //provee metodos y propiedades para levantar servidores

import path from 'path';

import logger from 'morgan'                 // para registrar cada una de las peticiones
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors'

// var indexRouter = require('./routes/index');  
import indexRouter from './routes/index.js'     //este enrutador va a llamar a TODOS los otros recursos 
                                                //(cities, itineraries, users)
                                                //solo vamos a configurar las rutas del enrutador de back principal


let app = express();                            //ejecutando el modulo de express: creo una app de backend (servidor)

// VIEW ENGINE SETUP
// SET es el metodo necesario para settear (configurar) algo (en este caso motodr de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// MIDDLEWARES
// USE es el metodo necesario para obligar mi app a que use la funcion CADA VEZ que se realiza una SOLICITUD/PETICION

app.use(logger('dev'));                             //obligo al servidor a registrar una peticion con el modulo de logger/morgan
app.use(express.json());                                    //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));           //obliga al servidor a leer params/queries
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));    //obligo al servidor a usar los archivos static de la carpeta public

//ROUTER
app.use('/api', indexRouter);      //obligo al servidor a que use las rutas del enrutador principal con "/api"


app.use(notFoundHandler);                                 // este MIDDLEWARE cuando una ruta no existe me genera un error

// error handler
app.use(errorHandler);

export default app
