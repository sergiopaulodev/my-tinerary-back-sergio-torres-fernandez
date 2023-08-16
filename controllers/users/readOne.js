import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        let oneUser = await User.findOne({_id: req.params.id }).select('mail photo -_id') // busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
        // let oneUserId = await User.findById( req.params.id)
        return res.status(200).json({
            success: true,
            message: 'user found',
            response: oneUser

        })
    } 
    catch (error) {
        next(error);
    }
}