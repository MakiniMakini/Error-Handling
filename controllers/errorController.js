const httpStatus = require("http-status-codes");


     exports.pageNotFoundError = (req, res) =>{
         let errorCode = httpStatus.NOT_FOUND;
         res.status(errorCode)
         res.render("errors")
     };
     exports.internalServerError = (error, req, res, next) =>{
         let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
         console.log(`Error ocuured: ${error.stack}`)
         res.status(errorCode);
         res.send(`${errorCode} | Sorry, our application is taking a nap!`);
     };