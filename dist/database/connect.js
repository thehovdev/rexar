var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/rex';

mongoose.connect(mongoDB, { useNewUrlParser: true });
// make mongoose use global library of promises
mongoose.Promise = global.Promise;

// get information about connection
var db = mongoose.connection;
// if connection error, show message or show success
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function() {
    console.log('connected to MongoDB');
});

module.exports = db