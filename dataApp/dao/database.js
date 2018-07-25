var mongoose = require('mongoose');
require("./model/users.js")
var dbURI = 'mongodb://localhost/second';

require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")
require("./model/orders.js")
require('./model/imgs')
require('./model/shops')


mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});