import { Router } from "express";
import register from "../controllers/auth/register.js";

const authRouter = Router()

// // authRouter.post('/signup', register)
//register requiere middlewares para VALIDAR/VERIFICAR/AUTENTICAR
//VALIDAR datos con joi
//validar que la cuenta NO existe para que no haya doble registe
//hashear la contrase;a
authRouter.post('/register', register)  

export default authRouter