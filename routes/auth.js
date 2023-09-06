import { Router } from "express";
import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";

import isPassOk from "../middlewares/isPassOk .js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import signInSchema from "../schemas/signin.js";

import read from "../controllers/users/read.js";
// import readOne from "../controllers/users/readOne.js";
// import update from "../controllers/users/update.js";
import destroy from "../controllers/users/destroy.js";
import isValidToken from "../middlewares/isValidToken.js";

const authRouter = Router()

// // authRouter.post('/signup', register)
//register requiere middlewares para VALIDAR/VERIFICAR/AUTENTICAR
//VALIDAR datos con joi
//validar que la cuenta NO existe para que no haya doble registe
//hashear la contrase;a


authRouter.post(
    '/register', 
    validator(registerSchema), 
    existsUser, 
    isValidPass, 
    register
);
// validator(registerSchema),existsUser, isValidPass,
authRouter.post(
    '/login', 
    validator(signInSchema), 
    notExistsUser,
    isPassOk,
    isValidToken, 
    signin
)
// validator(signInSchema),notExistsUser, isValidToken, // isPassOk//



authRouter.get('/', read)
// authRouter.get('/:id', readOne)
// authRouter.put('/:u_id', update)
authRouter.delete('/:id', destroy)

export default authRouter