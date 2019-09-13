// dont edit this file if its not needed
var express = require('express');
var config = require('config');
var router = express.Router();
var app = express();


// mongoose for database
const mongoose = require('mongoose');
const sequalize = require('sequelize');

var db_driver = config.get('database.driver');
var db = require('../database/connect/' + db_driver);

// set template engine ejs
app.set('view engine', 'ejs');

// set template folders for ejs engine
app.use(express.static('includes'));
app.use(express.static('public'));

// for bodyParser to get requests
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true}));  // to support URL-encoded bodies

module.exports = app;