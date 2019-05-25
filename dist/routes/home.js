var express = require('express');
var router = express.Router();

// controller that is specific to this router
var homeController = require('../controllers/homeController');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', homeController.index)


module.exports = router