var express = require('express');
var router = express.Router();

// controller that is specific to this router
var teamController = require('../controllers/teamController');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page of team
router.get('/', function(req, res) {
    res.send('Team Home');
});

// define the add team
router.get('/add', function(req, res) {
    res.send('Team Add');
});
  
// define the update team
router.get('/update', function(req, res) {
    res.send('Team Update');
});

// define the delete team
router.get('/delete', function(req, res) {
    res.send('Team Delete');
});

module.exports = router;