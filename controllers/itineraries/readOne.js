import Itinerary from "../../models/Itineray.js";

export default async (req, res, next) => {
    try {
        let oneItinerary = await Itinerary.findById(req.paramas._id).select('name price duration')
        return res.status(200).json({
            success: true,
            message: 'itinerary found',
            response: oneItinerary
        })
        
    } catch (error) {
        next(error)
    }
}