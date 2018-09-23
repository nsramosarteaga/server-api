const express = require('express');
const router = express.Router();

const VisitsController = require('../controllers/VisitsController');
const authenticateOwner = require('../middlewares/authenticateOwner');

const jwtMiddleware = require('express-jwt');
const secrets = require('../config/secrets');

router.route('/')
  .get(jwtMiddleware({secret: secrets.jwtSecret}),VisitsController.index)
  .post(VisitsController.create);

router.route('/:visit_id')
  .delete(VisitsController.find,authenticateOwner,VisitsController.destroy);

module.exports = router;
