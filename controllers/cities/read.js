import City from '../../models/City.js';

export default async (req, res, next) => {
    try {

        let allCities = await City.find()
        return res.status(200).json({
            succes: true,
            message: 'cities found',
            response: allCities
        })
        
    } catch (error) {
        next(error);
    }
}

