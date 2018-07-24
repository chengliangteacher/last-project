var mongoose = require('mongoose');
require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")

var dbURI = 'mongodb://localhost/second';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});