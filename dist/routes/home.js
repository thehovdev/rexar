// require controller for handle
var homeController = require('../controllers/homeController');


/*  
* place here routes according to current page as
*   index : homeController.index,
*   sendMail : homeController.sendMail,
* and etc
*/

// start : home routes
module.exports = {
    // routes.home.index in /dist/index.js  
    // will handle by homeController.index method 
    index : homeController.index
}
// end : home routes
