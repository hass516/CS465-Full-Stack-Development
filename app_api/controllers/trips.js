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

module.exports = {
    tripsList,
    tripsFindByCode
};