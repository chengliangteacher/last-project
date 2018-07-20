var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// require("./model/movie.js")
var dbURI = 'mongodb://localhost/second';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});