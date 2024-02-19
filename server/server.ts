var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var apiRouter = require('./src/routes/api');

// initialize the app
var app = express();

// default settings
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// routers
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (_req: any, _res: any, next: any) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, _next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
