import express from 'express';
//el enrutador principal llamara a todos los recursos y los va a enrutar
import usersRouter from './users.js'
import citiesRouter from './cities.js'
import itineriesRouter from './itineraries.js'
import activitiesRouter from './activities.js'

let router = express.Router();

//obligo al enrutador principal a usar las rutas del enrutador del recurso
router.use('/users', usersRouter)
router.use('/cities', citiesRouter)
router.use('/itineraries', itineriesRouter)
router.use('/activities',activitiesRouter )

export default router;
