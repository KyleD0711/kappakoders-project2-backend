var createError = require('http-errors');
var express = require('express');
//var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var routes = require('./app/routes');


var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const db = require("./app/models");

db.sequelize.sync();


// ------ Include Routes Index ------- //
app.use('/course-t1/', routes);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


module.exports = app;
