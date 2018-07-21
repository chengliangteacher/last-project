var mongoose = require('mongoose');
// require("./model/movie.js")
require('./model/shops')
var dbURI = 'mongodb://localhost/second';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});