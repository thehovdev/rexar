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
router.get('/', teamController.index);

// define the add team
router.get('/add', teamController.add);
  
// define the update team
router.get('/update', teamController.update);

// define the delete team
router.get('/delete', teamController.delete);

module.exports = router;