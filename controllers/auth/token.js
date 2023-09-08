export default async( req, res,next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'user logged in with token',
            response: { 
                token: req.token, //nuevo token
                user: req.user //datos del usuario que no vienen por formulario y necesito una estrategia para obtener sus datos
            }
        })
        
    } catch (error) {
        next(error)
    }
}