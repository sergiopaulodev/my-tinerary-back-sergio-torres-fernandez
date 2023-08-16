import Activity from '../../models/Activity.js';

export default async(req, res, next) => {
    try {
        let allActivities = await Activity.find()
        return res.status(200).json({
            succes: true,
            message: 'activities found',
            response: allActivities
        })
    } catch (error) {
        next(error);
    }
}