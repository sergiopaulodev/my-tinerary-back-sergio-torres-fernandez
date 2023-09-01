import Itinerary from "../../models/Itineray.js";

export default async (req, res, next) => {
    try {

        let oneItinerary = await Itinerary
        .findById(req.params._id)
        // .select('name price duration')

        if (oneItinerary){
            return res.status(200).json({
                success: true,
                message: 'itinerary found',
                response: oneItinerary
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
        
    } catch (error) {
        next(error)
    }
}