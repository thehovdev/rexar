var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/rex';

mongoose.connect(mongoDB, { useNewUrlParser: true });
// Позволим Mongoose использовать глобальную библиотеку промисов
mongoose.Promise = global.Promise;

// Получение подключения по умолчанию 
var db = mongoose.connection;
// Привязать подключение к событию ошибки  (получать сообщения об ошибках подключения)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function() {
    console.log('connected to MongoDB');
});

module.exports = db