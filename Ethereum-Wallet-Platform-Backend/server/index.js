'use strict'

var mongoose = require('mongoose');
var c = require('./app/utils/console/console');

var app = require('./app/app');
//var www = require('./www');

var port = process.env.PORT || 8000;
var mgConfig = {
    server: 'localhost',
    port: 27017,
    database: 'ethereum_platform'
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + mgConfig.server + ':' + mgConfig.port + '/' + mgConfig.database, { useMongoClient: true }).then(() => {
    c.success('Application database connection with Mongo are be success');
    app.listen(port, () => {
        c.success('The express server of node js started successfully');
        c.info('MongoDb Server "' + mgConfig.server + '"');
        c.info('MongoDb Port "' + mgConfig.port + '"');
        c.info('MongoDb Database "' + mgConfig.database + '"');
        c.info('Express Listen Port "' + port + '"');
    });
}).catch(err => {
    c.danger(err)
});




