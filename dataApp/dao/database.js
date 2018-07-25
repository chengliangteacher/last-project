var mongoose = require('mongoose');

require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")

// mongoose.Promise=require("bluebird")
require("./model/orders.js")
require("./model/members")
require('./model/shops')
var dbURI = 'mongodb://localhost/second';


mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});