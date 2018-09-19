const express = require('express');

//const Place = require('../models/Place');

const placesController = require('../controllers/PlacesControllers');

let router = express.Router();

router.route('/')
  .get(placesController.index)
  .post(
    placesController.multerMiddleware(),
    placesController.create,
    placesController.saveImage
  )

router.route('/:id')
  .get(placesController.find,placesController.show)
  .put(placesController.find,placesController.update)
  .delete(placesController.find,placesController.destroy)

module.exports = router;
