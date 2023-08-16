import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        let oneCity = await City.findById(req.params._id).select('country city photo')
        return res.status(200).json({
            success: true,
            message: 'city found',
            response: oneCity
        })
    } catch (error) {
        next(error)
        
    }
}