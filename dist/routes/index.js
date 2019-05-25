/*
* place here all routes according to page as
*   home : require('./home.js)
*   team : require('./team.js)
*   about: require('./about.js) 
* and etc 
*/

// start : global routes
var routes = {
    // require all home routes
    home : require('./home.js')

    // or you can specify routes without require
    // like this, as you want

    // home : {
    //    index : homeController.index,
    //    sendMail : homeController.sendMail    
    // }
}
// end : global routes


module.exports = routes