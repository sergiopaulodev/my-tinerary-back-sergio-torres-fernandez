import User from "../../models/User.js";

export default async (req, res, next) => {
    //req es el objeto donde el clinete manda MUCHOS DATOS importantes acercad de la peticion
    //las propiedades de req MAS IMPORTANTES SON:
    //BBODY:objeto que generalmente se envia a traves de formuilarios
    //PARAMS: suelen ser estaticos como el id de una ciudad a buscar por ejemplo
    //QUERIES: son opcionalesy nos indican alguna consulta/filtros/modos de ver la info de pagina, etc 
    
    try{
        let newUser = await User.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'user created',
            response: newUser._id
        })
    }
    catch(error){
        next(error);
    }
}