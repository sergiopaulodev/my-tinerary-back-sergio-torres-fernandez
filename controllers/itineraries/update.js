import Itinerary from "../../models/Itineray.js";

export default async (req, res, next) => {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('name price duration')
        return res.status(200).json({
            success: true,
            message: 'itinerary updated',
            response: updatedItinerary
        })
    } catch (error) {
        next(error)
    }
}