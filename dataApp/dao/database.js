var mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.Promise=require("bluebird")
=======
require("./model/users.js")
var dbURI = 'mongodb://localhost/last';


>>>>>>> 4f2d45f10a24937bad2dda3cdfc13863ea432ea4
require("./model/goods.js")
require("./model/imgs.js")
require("./model/services.js")
<<<<<<< HEAD
require("./model/orders.js")
require("./model/members")
require('./model/shops')
require('./model/users')
var dbURI = 'mongodb://localhost/second';
=======

mongoose.Promise=require("bluebird")
require("./model/orders.js")
<<<<<<< HEAD


// require("./model/movie.js")

require("./model/members")
var dbURI = 'mongodb://localhost/pets';

require('./model/imgs')
require('./model/shops')
require('./model/users')
<<<<<<< HEAD
require('./model/goods')
require('./model/members')
require('./model/services')
// var dbURI = 'mongodb://localhost/second';
=======


=======

require('./model/imgs')
require('./model/shops')

// mongoose.Promise=require("bluebird")
>>>>>>> aa7ed89bfacd374973410b15577031d1284095db
>>>>>>> 001b5ef0571e11d3ea2f5392232fdf1e05104df7

>>>>>>> 4f2d45f10a24937bad2dda3cdfc13863ea432ea4
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});