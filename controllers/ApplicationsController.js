const buildParams = require('./helpers').buildParams;

const validParams = ['origins','name'];

const Application = require('../models/Application');
const User = require('../models/User');

function find(req,res,next) {
  Application.findById(req.params.id).then(application=>{
    req.mainObj = application;
    req.application = application;
    next();
  }).catch(next);
}

function index(req,res) {
  // Application.paginate({},{page: req.query.page || 1, limit:5, sort:{'_id':-1}}).then(docs=>{
  //   res.json(docs);
  // }).catch(err=>{
  //   console.log(err);
  //   res.json(err);
  // })
}

function create(req,res) {
  let params = buildParams(validParams,req.body);
  // params['_user'] = req.user.id;

  Application.create(params)
    .then(application=>{
      res.json(application);
    }).catch(error=>{
      console.log(error)
      res.status(422).json(error);
    })
}

function destroy(req,res) {
  req.application.remove().then(doc=>{
    res.json({});
  }).catch(error=>{
    console.log(error);
    res.status(500).json({error});
  })
}

module.exports = { create,find,destroy,index};
