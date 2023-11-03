const express = require('express');
const router = express.Router();
const logoutController = require('../controller/controller-auth');

// CARS Routes
const getCars = require('../controller/controller-cars');

router.post('/logout', logoutController.logout);

// CARS Routes

router.get('/addcar', getCars.getCar);

module.exports = router;