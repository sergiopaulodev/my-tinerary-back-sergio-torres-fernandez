import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use( //obligo a passport a usar una estrategia de extracion de token
'jwt',                      
    new Strategy(
    //depende de objeto de configuracion de la estrategia
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY
    },
    //callback que depende del resultado de la extraccion
    async (jwt_payload, done) =>{
        try {
            let user = await User.findOne({ mail:jwt_payload.mail }, '-password')
            if (user){
                return done(null, user) //si existe user inyecta, al obj de requerimientos, el usuario con al propiedad user
            }else{
                return done(null);
            }
            
        } catch (error) {
            return done(error)    
        }
        }
    )
);