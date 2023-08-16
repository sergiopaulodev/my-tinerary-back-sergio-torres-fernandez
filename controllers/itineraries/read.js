import Itinerary from "../../models/Itineray.js";

export default async (req, res, next) => {
    try {
        let allItinerary = await Itinerary.find()
        return res.status(200).json({
            success: true,
            message: 'itineraries found',
            response: allItinerary
        })
    } catch (error) {
        next(error);
    }
}