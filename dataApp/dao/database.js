<<<<<<< HEAD
var mongoose=require("mongoose")
var dbURI = 'mongodb://localhost/pets';
mongoose.Promise=require("bluebird")
require("./model/goods.js")
require("./model/services.js")
require("./model/orders.js")
require("./model/members")
require('./model/imgs')
require('./model/shops')
require('./model/users')
mongoose.connect(dbURI);
=======
var mongoose = require('mongoose');
mongoose.Promise=require("bluebird")
require("./model/members")
require("./model/users.js")
require("./model/goods.js")
require("./model/imgs.js")
require("./model/services.js")
require("./model/orders.js")
require('./model/shops')
var dbURI = 'mongodb://localhost/second';

<<<<<<< HEAD
>>>>>>> 40ca022d52ed89fb9342a13b3e552b0fbdf43d03
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
=======
>>>>>>> 475d6294d0e71b484bb5e24b86a5726645f3ef8b
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});