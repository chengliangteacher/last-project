var mongoose = require('mongoose');
<<<<<<< HEAD

=======
<<<<<<< HEAD
require("./model/users.js")
var dbURI = 'mongodb://localhost/last';
=======
<<<<<<< HEAD
>>>>>>> bd702114bfc9bccb87deb6ecd63360a422857b74
require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")

// mongoose.Promise=require("bluebird")
require("./model/orders.js")
require("./model/members")
require('./model/shops')
var dbURI = 'mongodb://localhost/second';
<<<<<<< HEAD

=======
>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860
>>>>>>> 6c332e6f3358d92eb2aad8b55471d8ea55555eda
>>>>>>> bd702114bfc9bccb87deb6ecd63360a422857b74

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});