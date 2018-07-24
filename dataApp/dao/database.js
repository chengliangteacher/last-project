var mongoose = require('mongoose');
// require("./model/movie.js")
require("./model/members")
var dbURI = 'mongodb://localhost/pets';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});