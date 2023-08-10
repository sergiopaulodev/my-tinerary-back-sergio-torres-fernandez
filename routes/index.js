import express from 'express';
//el enrutador principal llamara a todos los recursos y los va a enrutar
import userRouter from './users.js'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-index' });
});

router.get('/cities', function(req, res, next) {
  res.render('index', { title: 'Express Cities' });
});

//obligo al enrutador principal a usar las rutas del enrutador del recurso
router.use('/users', userRouter)
export default router;
