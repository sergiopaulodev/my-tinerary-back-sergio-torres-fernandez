import Itinerary from "../../models/Itineray.js";

export default async (req, res, next) => {
    try {
        
        let search = {}

        if (req.query.city_id) {
            search.city_id = req.query.city_id
        }
        
        
        let allItinerary = await Itinerary
            .find(search)
            .populate(
                {path:'city_id',
                populate:{
                    path: 'admin_id'
                }
                }
            )

        if (allItinerary.length > 0){
            return res.status(200).json({
                success: true,
                message: 'itineraries found',
                response: allItinerary
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error);
    }
}