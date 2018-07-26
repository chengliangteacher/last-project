var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./dao/database.js')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
<<<<<<< HEAD


=======
var orderWrapRouter = require("./routes/orderWrap")
var imgsRouter = require('./routes/imgs')
=======
>>>>>>> 475d6294d0e71b484bb5e24b86a5726645f3ef8b
var goodsRouter = require('./routes/goods');
var filesRouter = require('./routes/files');
var goodsImgsRouter=require('./routes/goodsImgs')
var serviceImgsRouter=require('./routes/service')
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
var membersRouter=require("./routes/members")
var orderWrapRouter =require("./routes/orderWrap")
var shopsRouter=require('./routes/shops')
var imgsRouter=require('./routes/imgs')
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c

var goodsRouter = require('./routes/goods');
var filesRouter = require('./routes/files');
var goodsImgsRouter=require('./routes/goodsImgs');
var serviceImgsRouter=require('./routes/service');
var membersRouter=require("./routes/members");
var orderWrapRouter =require("./routes/orderWrap");
var shopsRouter=require('./routes/shops');
var imgsRouter=require('./routes/imgs');

<<<<<<< HEAD
// var orderWrapRouter =require("./routes/orderWrap")
// var shopsRouter=require('./routes/shops')
// var imgsRouter=require('./routes/imgs')
=======
var orderWrapRouter =require("./routes/orderWrap")
var shopsRouter=require('./routes/shops')
var imgsRouter=require('./routes/imgs')
<<<<<<< HEAD

=======
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
>>>>>>> 963b2da440194f32cff45852b10761477ed967d2
>>>>>>> 40ca022d52ed89fb9342a13b3e552b0fbdf43d03
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
=======

>>>>>>> 475d6294d0e71b484bb5e24b86a5726645f3ef8b
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD





=======
app.use('/orderWrap', orderWrapRouter);
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
app.use('/goods', goodsRouter);
app.use('/files', filesRouter);
app.use('/goodsImgs', goodsImgsRouter);
app.use('/service', serviceImgsRouter);
app.use('/members', membersRouter);
<<<<<<< HEAD

app.use('/users', orderWrapRouter);
app.use('/shops', shopsRouter);
app.use('/imgs', imgsRouter);


=======
app.use('/shops', shopsRouter);
app.use('/imgs', imgsRouter);
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;