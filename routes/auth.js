import { Router } from "express";
import passport from "../middlewares/passport.js";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import token from "../controllers/auth/token.js";
import logout from "../controllers/auth/logout.js";

import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk .js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";

import registerSchema from "../schemas/register.js";
import signInSchema from "../schemas/signin.js";

// import readOne from "../controllers/users/readOne.js";
// import update from "../controllers/users/update.js";
import read from "../controllers/users/read.js";
// import destroy from "../controllers/users/destroy.js";


const authRouter = Router()

// // authRouter.post('/signup', register)
// //register requiere middlewares para VALIDAR/VERIFICAR/AUTENTICAR
// //VALIDAR datos con joi
// //validar que la cuenta NO existe para que no haya doble registe
// //hashear la contrase;a


authRouter.post(
    '/register',
    validator(registerSchema),
    existsUser,
    isValidPass,
    register
);
authRouter.post(
    '/login',
    validator(signInSchema),
    notExistsUser,
    isPassOk,
    isValidToken,
    signin
)

authRouter.post(
    '/token',
    passport.authenticate('jwt', {session: false}),
    isValidToken,
    token

)

authRouter.post(
    '/logout',
    passport.authenticate('jwt', { session:false }),
    logout

)




authRouter.get('/', read)
// authRouter.get('/:id', readOne)
// authRouter.put('/:u_id', update)
// authRouter.delete('/:id', destroy)

export default authRouter;