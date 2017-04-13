let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let helmet = require('helmet');
let config = require('./config.js');
let app = express()

let port = config.PORT || '5000';
let API_BASE = config.API_BASE;
let helloWorld = require('./routes/helloWorld.js');

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(API_BASE, helloWorld);

app.listen(port, function() {
    console.log('express-simple is running on port ', port);
});
