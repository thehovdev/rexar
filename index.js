var path = require('path');
var template = require('ejs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// устанавливаем шаблонизатор ejs
app.set('view engine', 'ejs');


// устанавливаем папки для отслеживания файлов через express 
app.use(express.static('includes'));
app.use(express.static('public'));

// для body parser чтобы принимать post запросы
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true}));  // to support URL-encoded bodies



// логика
app.get('/', function (req, res) {
    res.render('index');
});


// логика
app.get('/task', function (req, res) {
    res.render('task');
});


app.get('/team/join', function (req, res) {
    res.send('Join Team');
});

app.post('/team/create', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var teamname = req.body.teamname;
    // console.log(email);
    // console.log(password);
    // console.log(teamname);
    res.send('Request is successfully');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!!');
});

