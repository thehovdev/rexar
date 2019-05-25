var path = require('path');
var template = require('ejs');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var app = express();

// set template engine ejs
app.set('view engine', 'ejs');

// set template folders for ejs engine
app.use(express.static('includes'));
app.use(express.static('public'));

// for bodyParser to get requests
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true}));  // to support URL-encoded bodies



/*
* place here all routes according to page like
*   '/home', require('./home.js)
*   '/team', require('./team.js)
* and etc 
* routes methods will specify like this
*   app.get / app.post for single page route 
*   app.use for multi page route as /team/add, /team/update 
* and etc
*/

// start : routes
app.get('/', require('./routes/home.js'));
app.use('/team', require('./routes/team.js'));
// end : routes


// start listening app
app.listen(3000, function () {
    console.log('REX app listening on port 3000!');
});
