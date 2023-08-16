import Itinerary from "../../models/Itineray.js";

export default async (req, res, next) => {
    try {
        let deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'itinerary deleted',
            response: deletedItinerary.name
        })
    } catch (error) {
        next(error)
    }
}