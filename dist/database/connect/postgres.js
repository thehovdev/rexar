const config = require('config');
const Sequelize = require('sequelize');


// Option 1: Passing parameters separately
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
   /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  dialect: config.get('database.driver')
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Sql Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the Sql database:', err);
  });

module.exports = sequelize;