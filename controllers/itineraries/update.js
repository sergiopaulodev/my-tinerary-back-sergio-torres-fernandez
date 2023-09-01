import Itinerary from "../../models/Itineray.js";

export default async (req, res, next) => {
    try {
        let updatedItinerary = await Itinerary
            // .findByIdAndUpdate(
            // req.params.u_id,
            // req.body,
            // { new: true }
            // )
            .findOneAndUpdate(
                {_id: req.params.u_id },
                req.body,
                { new: true }
            )
            .select('name price duration')
            if (updatedItinerary) {
                return res.status(200).json({
                    success: true,
                    message: 'itinerary updated',
                    response: updatedItinerary
                })

            } else {
                return res.status(404).json({
                    success: false,
                    message: 'itinerary not found',
                    response:null
                })
            }
    } catch (error) {
        next(error)
    }
}