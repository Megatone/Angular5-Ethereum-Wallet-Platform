var express = require('express');
var c = require('./app/utils/console/console');
var public_app = express();
var server = require('http').Server(public_app);
var public_port = 4200;

public_app.use(express.static('../www'));
server.listen(public_port, function () {
    c.success('The public server listen on port ' + public_port);
});
module.exports = public_app;