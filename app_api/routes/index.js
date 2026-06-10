const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Controller responsible for user registration and authentication
const authController = require('../controllers/authentication');

// Controller responsible for trip management operations
const tripsController = require('../controllers/trips');

// Method to authenticate JWT before allowing protected API changes
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (authHeader == null) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.auth = verified;
    next();
  });
}

// User registration endpoint
// Creates a new user account and returns a JWT token
router
  .route('/register')
  .post(authController.register);

// User login endpoint
// Authenticates an existing user and returns a JWT token
router
  .route('/login')
  .post(authController.login);

// GET all trips, POST new trip
// POST is protected because it changes database content
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddTrip);

// GET single trip by code, PUT update trip
// PUT is protected because it changes database content
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;