var path = require('path');
var template = require('ejs');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

// устанавливаем шаблонизатор ejs
app.set('view engine', 'ejs');

// устанавливаем папки для отслеживания файлов через express 
app.use(express.static('includes'));
app.use(express.static('public'));

// для body parser чтобы принимать post запросы
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true}));  // to support URL-encoded bodies


// start : routes 
var routes = require('./routes')
// end : routers

// write all routes handlers by url path
// watch in routes/index.js
app.get('/', routes.home.index);

app.listen(3000, function () {
    console.log('REX app listening on port 3000!');
});