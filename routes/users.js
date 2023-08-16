import express from 'express';
let router = express.Router();

import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/:id', readOne )
//el nombre del parametro puede ser cualquiera
//tanto en el router como en el controlador se deben llamar igual

//UPDATE
router.put('/:u_id', update)

//DELETE

router.delete('/:id', destroy)

export default router;
