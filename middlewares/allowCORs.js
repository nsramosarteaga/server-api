module.exports = function(options){
  let CORsMiddleware = function (req,res,next){

    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization, Application");

    next();

  }

  CORsMiddleware.unless = require('express-unless');

  return CORsMiddleware;
}
