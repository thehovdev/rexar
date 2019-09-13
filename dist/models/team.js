var Sequelize = require('sequelize');

class Project extends Model {}
Project.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT
}, { sequelize, modelName: 'project' });




// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var teamSchema = new Schema({
//     __id: String,
//     user: String, 
//     action: String
// });

// // compile model from schema
// module.exports = mongoose.model('team', teamSchema);
