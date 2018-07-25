var mongoose = require('mongoose');
require("./model/users.js")
var dbURI = 'mongodb://localhost/last';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});