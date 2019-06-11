// require app settings 
var app = require('./includes/app');

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
app.get('/', require('./routes/home.js'));
app.use('/team', require('./routes/team.js'));

// listeting port 3000 for serve app
app.listen(3000, function () {
    console.log('REX app listening on port 3000!');
});