var mongoose = require('mongoose');
<<<<<<< HEAD
=======
<<<<<<< HEAD
mongoose.Promise=require("bluebird")
=======
require("./model/users.js")
<<<<<<< HEAD
var dbURI = 'mongodb://localhost/dingdan';


// require("./model/goods.js")
// require("./model/imgs.js")
// require("./model/users.js")
// require("./model/services.js")
=======
var dbURI = 'mongodb://localhost/second';

>>>>>>> 4f2d45f10a24937bad2dda3cdfc13863ea432ea4
>>>>>>> 963b2da440194f32cff45852b10761477ed967d2
require("./model/goods.js")
require("./model/imgs.js")
require("./model/services.js")
require("./model/orders.js")
require('./model/imgs')
require('./model/shops')
require("./model/members")
require('./model/users')
var dbURI = 'mongodb://localhost/second';
<<<<<<< HEAD
// mongoose.Promise=require("bluebird")
=======
=======
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c

mongoose.Promise=require("bluebird")
require("./model/orders.js")


// require("./model/movie.js")

// require("./model/members")
// var dbURI = 'mongodb://localhost/pets';

require('./model/imgs')
require('./model/shops')
require('./model/users')
require('./model/goods')
require('./model/members')
require('./model/services')
// var dbURI = 'mongodb://localhost/second';



// require('./model/imgs')
// require('./model/shops')

// mongoose.Promise=require("bluebird")
<<<<<<< HEAD
=======
>>>>>>> aa7ed89bfacd374973410b15577031d1284095db
>>>>>>> 001b5ef0571e11d3ea2f5392232fdf1e05104df7
>>>>>>> 76595bf66f8f3a626cf200cdbb8db9be1c2c677f
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
>>>>>>> 963b2da440194f32cff45852b10761477ed967d2


mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});