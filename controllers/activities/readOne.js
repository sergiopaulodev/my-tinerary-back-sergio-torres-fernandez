import Activity from '../../models/Activity.js';

export default async(req, res, next) => {
    try {
        let oneActivity = await Activity.findById(req.params._id).select('name')
        return res.status(200).json({
            succes: true,
            message: 'activity found',
            response: oneActivity
        })
    } catch (error) {
        next(error)
    }
}