var mongoose = require('mongoose');

require("./model/users.js")
require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")
require("./model/orders.js")
require("./model/members")
require('./model/shops')
var dbURI = 'mongodb://localhost/second';


mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});