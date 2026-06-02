const mongoose = require('mongoose');
require('../models/travlr');

const Trip = mongoose.model('trips');

// GET: /trips, lists all trips
const tripsList = async (req, res) => {

    const q = await Trip
        .find({})
        .exec();

    if (!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode, lists a single trip
const tripsFindByCode = async (req, res) => {

    const q = await Trip
        .find({ 'code': req.params.tripCode })
        .exec();

    if (!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

// POST: /trips, adds a new trip
const tripsAddTrip = async (req, res) => {

    console.log(req.body);

    try {
        const trip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        return res
            .status(201)
            .json(trip);

    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

// PUT: /trips/:tripCode, updates a trip
const tripsUpdateTrip = async (req, res) => {

    try {
        const trip = await Trip
            .findOne({ 'code': req.params.tripCode })
            .exec();

        if (!trip) {
            return res
                .status(404)
                .json({ "message": "trip not found" });
        }

        trip.code = req.body.code;
        trip.name = req.body.name;
        trip.length = req.body.length;
        trip.start = req.body.start;
        trip.resort = req.body.resort;
        trip.perPerson = req.body.perPerson;
        trip.image = req.body.image;
        trip.description = req.body.description;

        const updatedTrip = await trip.save();

        return res
            .status(200)
            .json(updatedTrip);

    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};