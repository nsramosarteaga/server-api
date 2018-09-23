const express = require('express');
const router = express.Router();

const ApplicationsController = require('../controllers/ApplicationsController');
const findUser = require('../middlewares/findUser');
const authenticateAdmin = require('../middlewares/authenticateAdmin');

const jwtMiddleware = require('express-jwt');
const secrets = require('../config/secrets');

router.all('*',jwtMiddleware({secret: secrets.jwtSecret}),findUser,authenticateAdmin)

router.route('/')
  .get(ApplicationsController.index)
  .post(ApplicationsController.create);

router.route('/:id')
  .delete(ApplicationsController.find,ApplicationsController.destroy);

module.exports = router;
