var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    __id: String,
    user: String, 
    action: String
});

// compile model from schema
// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
// module.exports = mongoose.model('teams', teamSchema, 'team');
module.exports = mongoose.model('team', teamSchema);
