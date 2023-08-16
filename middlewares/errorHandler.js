export default function(err, res) {
    console.log(err);
    return res.status(500).json({
        success: false,
        message: err.message,
        response: null
    })

}