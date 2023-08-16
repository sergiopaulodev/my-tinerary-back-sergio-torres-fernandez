export default function(err, res) {
    console.log(err);
    return res.status(500).json({
        success: false,
        message: err.message,
        response: null
    })

// //     // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};
                       
// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
}