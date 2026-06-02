const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// GET all trips, POST new trip
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

// GET single trip by code, PUT update trip
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;