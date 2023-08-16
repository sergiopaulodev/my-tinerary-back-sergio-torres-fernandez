export default function(req, res) {
    // // console.log(req);
    // // console.log(req.url);
    // // console.log(req.method);
    // // next(createError(404)); con el return reemplazo createError

    return res.status(404).json({
        success: false,
        message: 'not found' + req.method + req.url,
        response: null
    })
}