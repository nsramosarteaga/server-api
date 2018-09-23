const Application = require('../models/Application');

module.exports = function(req,res,next){
  if(req.application) return next();

  const applicationsId = req.header.application;

  if(!applicationsId) return next();

  Application.findOne({applicationsId})
    .then(app=>{
      if(!app) return next(new Error('Invalid application'));
      req.application = app;
      next();
    })
    .catch(next);
}
