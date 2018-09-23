const express = require('express');
const router = express.Router();

const authenticateOwner = require('../middlewares/authenticateOwner');
const VisitsController = require('../controllers/VisitsController');
const PlacesController = require('../controllers/PlacesController');


router.route('/:id/visits')
  .get(PlacesController.find,VisitsController.index)
  .post(PlacesController.find,VisitsController.create);

router.route('/:id/visits/:visit_id')
  .delete(VisitsController.find,authenticateOwner,VisitsController.destroy);

module.exports = router;
