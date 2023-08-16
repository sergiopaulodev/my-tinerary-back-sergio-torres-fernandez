import User from '../../models/User.js'

export default async (req, res, next) =>{
    try {
    
        let allUsers = await User.find()
        return res.status(200).json({
            succes: true,
            message: 'users found',
            response: allUsers
        })
        
    } 
    catch (error) {
        next(error);
    }
}