var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTravel = require('../controllers/travel');
var ctrlRooms = require('../controllers/rooms');
var ctrlMeals = require('../controllers/meals');
var ctrlNews = require('../controllers/news');
var ctrlAbout = require('../controllers/about');
var ctrlContact = require('../controllers/contact');

router.get('/', ctrlMain.index);
router.get('/travel', ctrlTravel.travel);
router.get('/rooms', ctrlRooms.rooms);
router.get('/meals', ctrlMeals.meals);
router.get('/news', ctrlNews.news);
router.get('/about', ctrlAbout.about);
router.get('/contact', ctrlContact.contact);

module.exports = router;