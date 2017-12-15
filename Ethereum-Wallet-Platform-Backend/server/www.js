

var http = require('http');
var settings =require('./config/settings');
var express = require('express');
var path = require('path');
const c = require('./app/utils/console/console');
var application = express();

application.use('/',express.static(path.join(__dirname, '/dist')));

application.use('/*',express.static(path.join(__dirname, '/dist')));




function initService() {
    application.listen(settings.www.port);
    c.success("Public www service init succesffully");  
    c.info('Public www service listen on port "' + settings.www.port + '"')
}

module.exports = {
    initService
}