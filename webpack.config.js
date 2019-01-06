var path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, 'public/js/index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js/')
  },
};