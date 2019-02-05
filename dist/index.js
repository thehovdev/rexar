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

app.listen(3000, function () {
    console.log('REX app listening on port 3000!!');
});