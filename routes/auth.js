import { Router } from "express";
import register from "../controllers/auth/register.js";

import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";

import read from "../controllers/users/read.js";
// import readOne from "../controllers/users/readOne.js";
// import update from "../controllers/users/update.js";
import destroy from "../controllers/users/destroy.js";

const authRouter = Router()

// // authRouter.post('/signup', register)
//register requiere middlewares para VALIDAR/VERIFICAR/AUTENTICAR
//VALIDAR datos con joi
//validar que la cuenta NO existe para que no haya doble registe
//hashear la contrase;a


authRouter.post('/register', validator(registerSchema), existsUser, isValidPass, register)
// validator(registerSchema),existsUser, isValidPass,


authRouter.get('/', read)
// authRouter.get('/:id', readOne)
// authRouter.put('/:u_id', update)
authRouter.delete('/:id', destroy)

export default authRouter